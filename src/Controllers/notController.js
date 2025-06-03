import nodemailer from "nodemailer";
import axios from "axios";
import email from "../Fixtures/Email/email.js";
import { Vakinha } from "../Model/userModel.js";

export const emailNot = async (req, res) => {
  try {
    const paymentId = req.query.id;

    const idV = req.query.vid;

    

    if (!paymentId) {
      return res.status(400).send("Missing payment ID");
    }

    const { data } = await axios.get(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        },
      }
    );

    
    
    const {
      payer,
      id,
      status,
      date_approved,
      transaction_amount,
      payment_method_id,
    } = data;
    
    if(status === 'approved'){
      await Vakinha.findByIdAndUpdate(idV, { 
        $inc : { received: data.transaction_details.net_received_amount }
      
      })
    }
    

    const formattedDate = date_approved
      ? new Date(date_approved).toLocaleDateString("pt-BR")
      : "Pendente";

    const name = payer.first_name || "Cliente";
    const method = payment_method_id.toUpperCase();
    const value = transaction_amount.toFixed(2);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "butrico0@gmail.com",
        pass: process.env.PASS,
      },
    });

    const html = email({
      name,
      id,
      date: formattedDate,
      method,
      value,
      status,
    });

    await transporter.sendMail({
      from: '"FinancSUS" <butrico0@gmail.com>',
      to: req.query.email,
      subject: `Pagamento ${status === 'approved' ? 'Aprovado' : status === 'pending' ? 'Pendente' : 'Rejeitado'}`,
      html:html,
    });

    return res.status(200).send("E-mail enviado com sucesso.");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error.response?.data || error.message);
    res.status(500).send("Erro interno");
  }
};

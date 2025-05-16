import nodemailer from "nodemailer";
import axios from "axios";

export const email = async (req, res) => {
  try {
    const paymentId = req.body.data.id;

    console.log({query: req.query,body: req.body,headers: req.headers})

    if (!paymentId) {
      return res.status(400).send("Missing payment ID");
    }

    // Consulte detalhes do pagamento
    const { data } = await axios.get(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        },
      }
    );

    console.log(data);



    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "butrico0@gmail.com",
        pass: process.env.pass,
      },
    });

    const status = {
      accepted:oi,
      pending:oi,
      rejected:oi, 
    }

    await transporter.sendMail({
      from: '"FinancSUS"',
      to: to,
      subject: `Pagamento ${status}`,
      html: "oi",
    });

    return res.status(200).send();
  } catch (error) {
    console.error("Erro no webhook:", error.message);
    res.status(500).send("Erro interno");
  }
};

const email = ({ name, id, date, method, value, status }) => {
  const colors = {
    approved: {
      background: "linear-gradient(0deg, rgba(87, 199, 133, 1) 0%, rgba(165, 237, 83, 1) 100%)",
      statusText: "Pagamento Aprovado",
    },
    pending: {
      background: "linear-gradient(0deg, rgba(255, 193, 7, 1) 0%, rgba(255, 235, 59, 1) 100%)",
      statusText: "Pagamento Pendente",
    },
    rejected: {
      background: "linear-gradient(0deg, rgba(244, 67, 54, 1) 0%, rgba(255, 87, 34, 1) 100%)",
      statusText: "Pagamento Rejeitado",
    },
  };

  const { background, statusText } = colors[status] || colors.pending;

  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Recibo de Pagamento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @media only screen and (max-width: 620px) {
        .container {
          width: 100% !important;
          padding: 20px !important;
        }
        .content {
          padding: 20px !important;
        }
        .header, .footer {
          padding: 15px !important;
          font-size: 18px !important;
        }
        .details td {
          display: block;
          width: 100%;
        }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
      <tr>
        <td align="center">
          <table class="container" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
              <td class="header" style="background:${background}; padding: 20px; color: white; text-align: center; font-size: 24px;">
                ${statusText}
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td class="content" style="padding: 30px; color: #333;">
                <p style="margin-top:0;">Olá <strong>${name}</strong>,</p>
                <p>Aqui estão os detalhes do seu pagamento:</p>

                <table class="details" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px; font-size: 15px;">
                  <tr>
                    <td style="padding: 5px 0;"><strong>ID do Pedido:</strong></td>
                    <td style="padding: 5px 0;">${id}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0;"><strong>Data do Pagamento:</strong></td>
                    <td style="padding: 5px 0;">${date}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0;"><strong>Valor:</strong></td>
                    <td style="padding: 5px 0;">R$ ${value}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0;"><strong>Método de Pagamento:</strong></td>
                    <td style="padding: 5px 0;">${method}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0;"><strong>Status:</strong></td>
                    <td style="padding: 5px 0;">${statusText}</td>
                  </tr>
                </table>

                <p style="margin-top: 30px;">Se tiver qualquer dúvida, entre em contato com nosso suporte.</p>
                <p>Obrigado por escolher nossa empresa!</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td class="footer" style="background-color: #eeeeee; padding: 20px; text-align: center; font-size: 13px; color: #666;">
                © 2025 FinancSUS | contato@financsus.com.br<br/>
                Rua Fictícia, 123 - Centro, São Paulo - SP
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export default email;

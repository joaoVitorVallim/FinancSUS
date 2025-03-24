import express from 'express';
import cors from 'cors';
import { new_vakinha, get_vaks, delete_vakinha, update_vakinha } from './connection.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const html = `
        <html>
            <head>
                <title>Endpoints</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    table, th, td {
                        border: 1px solid black;
                    }
                    th, td {
                        padding: 8px;
                        text-align: left;
                    }
                </style>
            </head>
            <body>
                <h1>Lista de Endpoints</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Método</th>
                            <th>Rota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GET</td>
                            <td>/vakinha</td>
                        </tr>
                        <tr>
                            <td>POST</td>
                            <td>/vakinha</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>/vakinha/ID</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td>/vakinha/ID</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
    `;
    res.send(html);
});


app.post('/vakinha', async (request, response) => {
    const vak = request.body;

    try {
        const res = await new_vakinha(vak);

        if (res.success) {
            response.status(201).send(res.message);
        } else {
            response.status(400).send(res.message);
        }
    } catch (erro) {
        response.status(500).send('Erro ao cadastrar vakinha');
    }
});


app.get('/vakinha', async (request, response) => {
    try {
        const res = await get_vaks();

        if (res.success) {
            response.status(200).json(res.message);
        } else {
            response.status(404).send(res.message);
        }
    } catch (erro) {
        console.error("Erro ao buscar vakinhas:", erro);
        response.status(500).send("Erro ao buscar vakinhas.");
    }
});


app.delete('/vakinha/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const res = await delete_vakinha(id);

        if (res.success) {
            response.status(200).send(res.message);
        } else {
            response.status(404).send(res.message);
        }
    } catch (erro) {
        console.error("Erro ao deletar vakinha:", erro);
        response.status(500).send("Erro ao deletar vakinha.");
    }
});


app.put('/vakinha/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const data = request.body;
        const res = await update_vakinha(id, data);

        if (res.success) {
            response.status(200).send(res.message);
        } else {
            response.status(404).send(res.message);
        }
    } catch (erro) {
        console.error("Erro ao atualizar vakinha:", erro);
        response.status(500).send("Erro ao atualizar vakinha.");
    }
});


app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});

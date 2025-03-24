import { MongoClient, ObjectId } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db, collection;

async function connect_db() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB!");
        db = client.db("FinancSUS");
        collection = db.collection("vakinha");
    } catch (erro) {
        console.error("Erro ao conectar:", erro);
    }
}

async function new_vakinha(data_json) {
    const expectedKeys = ['title', 'description', 'pictures', 'value', 'pix_key'];

    const isValid = expectedKeys.every(key => key in data_json);
  
    if (!isValid) {
      console.error("JSON inválido.");
      return { success: false, message: "JSON inválido" };
    }

    try {
        await collection.insertOne(data_json);
        console.log("Vakinha inserida:", data_json);
        return { success: true, message: "Vakinha inserida no MongoDB" };
    } catch (erro) {
        console.error("Erro ao inserir vakinha:", erro);
        return { success: false, message: "Erro ao inserir vakinha" };
    }
    }


async function get_vaks() {
    const all_vaks = await collection.find().toArray();

    if (all_vaks.length > 0) {
        return { success: true, message: all_vaks };
    } else {
        return { success: false, message: "Nenhuma vakinha cadastrada" };
    }
}

async function delete_vakinha(id) {
    try {
        const objectId = new ObjectId(id); //TO-DO -> Verificar a descontinuação do new ObjectId()

        const result = await collection.deleteOne({ _id: objectId });
        
        if (result.deletedCount === 0) {
            return { success: false, message: "Vakinha não encontrada" };
        }
        
        return { success: true, message: "Vakinha deletada com sucesso" };
    } catch (erro) {
        console.error("Erro ao deletar vakinha:", erro);
        return { success: false, message: "Erro ao deletar vakinha" };
    }
}

async function update_vakinha(id, data_json) {
    try {
        const objectId = new ObjectId(id); //TO-DO -> Verificar a descontinuação do new ObjectId()
        const result = await collection.updateOne(
            { _id: objectId },
            { $set: data_json }
        );
        
        if (result.matchedCount === 0) {
            return { success: false, message: "Vakinha não encontrada" };
        }
        
        return { success: true, message: "Vakinha atualizada com sucesso" };
    } catch (erro) {
        console.error("Erro ao atualizar vakinha:", erro);
        return { success: false, message: "Erro ao atualizar vakinha" };
    }
}

connect_db();

export { new_vakinha, get_vaks, delete_vakinha, update_vakinha };

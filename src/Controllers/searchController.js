import { SearchService } from "../Services/searchService.js";

const searchService = new SearchService();

export const search = async (req, res) => {
    try {
        const query = req.query.q;
        const results = await searchService.searchVakinhas(query);
        
        res.status(200).json({
            results,
        });
    } catch (error) {
        if (error.message === "É necessário um termo de busca") {
            return res.status(400).json({
                error: error.message
            });
        }
        if (error.message === "Nenhum resultado encontrado") {
            return res.status(404).json({
                error: error.message
            });
        }
        res.status(500).json({
            error: "Erro na busca",
            details: error.message
        });
    }
};

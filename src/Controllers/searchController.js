import { Vakinha } from "../Model/userModel.js";

export const search = async (req, res) => {
  try {
    const query = req.query.q;
      
    if (!query) {
      return res.status(400).json({
        error: "é necessario um termo de busca"
      });
    }
    
    const normalizedQuery = query
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') 
      .toLowerCase();

    
    const fuzzyRegex = new RegExp(
      normalizedQuery.split('').join('.*?'), 
      'i'
    );

    
    const [semanticResults, fuzzyResults] = await Promise.all([
      
      Vakinha.find(
        { $text: { $search: query } },
        { score: { $meta: 'textScore' } }
      ).sort({ score: { $meta: 'textScore' } }),

      
      Vakinha.find({
        $or: [
          { title: { $regex: fuzzyRegex } },
        ]
      })
    ]);

    
    const resultsMap = new Map();
    
    [...semanticResults, ...fuzzyResults].forEach(vakinha => {
      const vakinhaId = vakinha._id.toString();
    
      if (!resultsMap.has(vakinhaId)) {
        const matchType = semanticResults.includes(vakinha) ? 'semantic' : 'fuzzy';
    
        resultsMap.set(vakinhaId, {
          ...vakinha.toObject(),
          matchType
        });
      }
    });

    const results = Array.from(resultsMap.values());

    
    results.sort((a, b) => {
      if (a.matchType === 'semantic' && b.matchType !== 'semantic') return -1;
      if (b.matchType === 'semantic' && a.matchType !== 'semantic') return 1;
      return (b.score || 0) - (a.score || 0);
    });
    
    if(results.length === 0) {
      return res.status(404).json({
        error: "nenhum resultado encontrado"
      });
    }
    res.status(200).json({
      results,
    });

  } catch (error) {
    res.status(500).json({
      error: "Erro na busca"
    });
  }
}

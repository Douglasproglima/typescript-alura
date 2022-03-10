/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { montante: 200.5, vezes: 2 },
        { montante: 100.2, vezes: 5 },
        { montante: 50.5, vezes: 1 },
        { montante: 112.52, vezes: 6 },
        { montante: 5.23, vezes: 3 },
        { montante: 10.41, vezes: 1 },
        { montante: 69.35, vezes: 3 },
        { montante: 32.38, vezes: 4 }
    ]);
    
};


module.exports = api;
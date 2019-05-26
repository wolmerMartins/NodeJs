const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
    return res.send({message: 'Essa informação é muito importante, um usuário sem autorização não poderia vê-la.'});
});

router.post('/', (req, res) => {
    return res.send({message: 'Tudo ok com o método POST da raiz!'});
})

module.exports = router;

/*

200 - OK
201 - Created
202 - Accepted

400 - Bad Request
401 - Unauthorized - AUTENTICAÇÃO, tem caráter temporário
403 - Forbidden - AUTORIZAÇÃO, tem caráter permanente
404 - Not Found

500 - Internal Server Error
501 - Not Implemented - A API não suporta essa funcionalidade
503 - Service Unavailable - A API executa essa operação, mas no momento está indisponível

*/
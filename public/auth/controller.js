const service = require('./service');
const security = require('../../config/security');
const {sign, verify} = require('jsonwebtoken');
const { createHmac } = require('crypto');

async function getToken(req, res) {
    
    let password = createHmac("sha256", security.code)
                    .update(req.body.password)
                    .digest("hex");

    service.getSession(req.body.email, password)
        .then(result => {
            if (result) {
                let token = 'Bearer.'.concat(sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: result.email
                }, security.tokenCode));
                res.status(200).send({
                    status: 200,
                    body: 'Sesión iniciada',
                    token: token
                });
                return true;
            }
            res.status(404).send({
                status: 404,
                error: 'Credenciales incorrectas'
            });
            return false;
        })
        .catch(err => {
            console.log('[Auth controller] Error al iniciar sesión ', err);
            res.status(500).send({
                status: 500,
                error: 'Internal error'
            });
        });
}

async function verifyToken(req, res, next) {
    let headersValues = JSON.stringify(req.headers);
    let token = req.headers.token;

    if (!token) {
        res.status(403).send({
            status: 403,
            error: 'Unauthorized'
        });
        return false;
    }

    token = token.split('.');
    token.shift();
    try {
        let isValid = verify(token.join('.'), security.tokenCode);
        if (isValid) {
            console.log(isValid);
            next();
            // res.status(200).send({
            //     status: 200,
            //     text: 'Token aceptado'
            // });
            return true;
        }
    } catch (error) {
        console.log('[Auth controller] Token invalido ', error);
        res.status(403).send({
            status: 403,
            error: 'La sesión ha expirado'
        });
        return false;
    }
}

module.exports = {
    getToken,
    verifyToken,
}
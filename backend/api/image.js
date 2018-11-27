const fs = require('fs')
const crypto = require('crypto')
var mkdirp = require('mkdirp');

const alg = 'aes-256-ctr'
const passwd = 'abcdabcdabcdabcdabcdabcdabcdabcd'
module.exports = app => {

    const save = (req, res) => {
        //console.log(req.body)


        mkdirp.mkdirp('img/uploads/' + req.body.idDono+'/')
        const iv = crypto.randomBytes(16)
        const read = fs.createReadStream(req.body.path)
        const write = fs.createWriteStream('img/'+req.body.path)
        const cipher = crypto.createCipheriv(alg, passwd, iv)
        read.pipe(cipher).pipe(write)


        const arquivo = { ...req.body }

        app.db('arquivo')
                .insert(arquivo)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
    }


    return { save }
}
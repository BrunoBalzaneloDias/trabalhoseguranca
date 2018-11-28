const fs = require('fs')
const crypto = require('crypto')
var mkdirp = require('mkdirp');

module.exports = app => {

    const save = (req, res) => {
        //console.log(req.body)



        const arquivo = { ...req.body }

        app.db('arquivo')
                .insert(arquivo)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('arquivo')
            .select('id', 'idDono', 'path')
            .where({ idDono: req.params.id })
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}

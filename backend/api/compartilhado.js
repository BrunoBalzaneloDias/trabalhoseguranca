module.exports = app => {

    const save = (req, res) => {
        //console.log(req.body)


        const dados = { ...req.body }
        app.db('compartilhado')
            .insert(dados)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        console.log(req.params)

        app.db('compartilhado')
            .select('id', 'idDono', 'idCompartilhado')
            .where({ idCompartilhado: req.params.idDono, 
                     idDono: req.params.idPage})
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))

    }

    return { save, get }
}
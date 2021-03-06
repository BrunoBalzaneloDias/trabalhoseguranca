
module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/image')
        .post(app.api.image.save)
        
    app.route('/image/:id')
        .get(app.api.image.get) 

    app.route('/compartilha')
        .post(app.api.compartilhado.save)
        
    app.route('/compartilha/:idDono/:idPage')
        .get(app.api.compartilhado.get)
   
}
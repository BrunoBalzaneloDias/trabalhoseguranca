const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
var mkdirp = require('mkdirp');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        mkdirp.mkdirp('uploads/' + req.body.idDono)
        cb(null, 'uploads/'+ req.body.idDono)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage });

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
    app.use(upload.single('file'))
}
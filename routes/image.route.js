module.exports = (app) => {
    const image = require("../controllers/image.controller");

    // to post image into server
    // post: localhost:3000/images
    app.post('/images', image.create);
    // to get idImage last
    // get: localhost:3000/images/number
    app.get('/images/number', image.number);
    // to get Image base64
    // get: localhost:3000/images/2
    app.get('/images/:idUser', image.findOne)
}
var bodyParser = require("body-parser")

module.exports = app => {
  app.set("port", 3000);
  app.set("json spaces", 4);
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    console.log("middleware");
    console.log(req.body);
    delete req.body.id;
    next();
  })
}

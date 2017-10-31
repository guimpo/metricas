module.exports = app => {
  var Cidades = app.db.models.Cidades
    
  app.route("/Cidades")
      .get((req, res) => {
        // "/Cidades": List Cidades
        Cidades.findAll({})
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .post((req, res) => {
        // "/Cidades": Save new task
        console.log(req.body);
        Cidades.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
    
    app.route("/Cidades/:id")
      .get((req, res) => {
        // "/Cidades/1": Find a task
        Cidades.findOne({where: req.params})
          .then(result => {
            if (result) {
              res.json(result)
            } else {
              res.sendStatus(404)
            }
          })
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .put((req, res) => {
        // "/Cidades/1": Update a task
        Cidades.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .delete((req, res) => {
        // "/Cidades/1": Delete a task
        Cidades.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
}
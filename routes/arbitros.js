module.exports = app => {
  var Arbitros = app.db.models.Arbitros
    
  app.route("/Arbitros")
      .get((req, res) => {
        // "/Arbitros": List Arbitros
        Arbitros.findAll({ include: [{ all: true }] })
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .post((req, res) => {
        // "/Arbitros": Save new task
        console.log(req.body)
        Arbitros.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
    
    app.route("/Arbitros/:id")
      .get((req, res) => {
        // "/Arbitros/1": Find a task
        Arbitros.findOne({where: req.params})
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
        // "/Arbitros/1": Update a task
        Arbitros.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .delete((req, res) => {
        // "/Arbitros/1": Delete a task
        Arbitros.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
}
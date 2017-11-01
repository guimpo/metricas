module.exports = app => {
  var Jogadores = app.db.models.Jogadores
    
  app.route("/Jogadores")
      .get((req, res) => {
        // "/Jogadores": List Jogadores
        Jogadores.findAll({ include: [{all: true}]})
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .post((req, res) => {
        // "/Jogadores": Save new task
        console.log(req.body)
        Jogadores.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
    
    app.route("/Jogadores/:id")
      .get((req, res) => {
        // "/Jogadores/1": Find a task
        Jogadores.findOne({where: req.params})
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
        // "/Jogadores/1": Update a task
        Jogadores.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .delete((req, res) => {
        // "/Jogadores/1": Delete a task
        Jogadores.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
}
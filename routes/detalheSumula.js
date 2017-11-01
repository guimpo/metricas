module.exports = app => {
  var DetalheSumula = app.db.models.DetalheSumula
    
  app.route("/DetalheSumula")
      .get((req, res) => {
        // "/DetalheSumula": List DetalheSumula
        DetalheSumula.findAll({ include: [{all: true}]})
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .post((req, res) => {
        // "/DetalheSumula": Save new task
        console.log(req.body)
        DetalheSumula.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
    
    app.route("/DetalheSumula/:id")
      .get((req, res) => {
        // "/DetalheSumula/1": Find a task
        DetalheSumula.findOne({where: req.params})
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
        // "/DetalheSumula/1": Update a task
        DetalheSumula.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .delete((req, res) => {
        // "/DetalheSumula/1": Delete a task
        DetalheSumula.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
}
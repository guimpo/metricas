module.exports = app => {
  var Sumulas = app.db.models.Sumulas
    
  app.route("/Sumulas")
      .get((req, res) => {
        // "/Sumulas": List Sumulas
        Sumulas.findAll({ include: [{all: true}]})
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .post((req, res) => {
        // "/Sumulas": Save new task
        console.log(req.body)
        Sumulas.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
    
    app.route("/Sumulas/:id")
      .get((req, res) => {
        // "/Sumulas/1": Find a task
        Sumulas.findOne({where: req.params})
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
        // "/Sumulas/1": Update a task
        Sumulas.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
      .delete((req, res) => {
        // "/Sumulas/1": Delete a task
        Sumulas.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message})
          })
      })
}
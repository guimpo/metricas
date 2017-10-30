module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get("port"), () => {
      console.log(`sumula_app - Port `+ app.get("port"))
    })
  })
}
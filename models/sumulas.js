module.exports = (sequelize, DataTypes) => {
  var Sumulas = sequelize.define("Sumulas", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    golTime1: {
      type: DataTypes.INTEGER
    },
    golTime2: {
      type: DataTypes.INTEGER
    }
  }, {
      tableName: "Sumulas"
    })

  Sumulas.associate = function (models) {
    Sumulas.belongsTo(models.Arbitros, { foreignKey: "codigoArbitro" })
    Sumulas.belongsTo(models.Times, { foreignKey: "codTime1" })
    Sumulas.belongsTo(models.Times, { foreignKey: "codTime2" })
  }
  return Sumulas;
}
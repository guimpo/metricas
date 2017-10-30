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
    },
    }, {
      tableName: "Sumulas"
    })

    Sumulas.associate = function(models) {
      Sumulas.belongsTo(models.Times, {
        as: "visitante",
        foreignKey:"visitante"
      })
      Sumulas.belongsTo(models.Times, {
        as: "mandante",
        foreignKey:"mandante"
      })
      Sumulas.belongsTo(models.Arbitros)
    }
    return Times;
}
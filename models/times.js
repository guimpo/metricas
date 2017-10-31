module.exports = (sequelize, DataTypes) => {
  var Times = sequelize.define("Times", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
    pontos: {
      type: DataTypes.INTEGER
    },
    golsPro: {
      type: DataTypes.INTEGER
    },
    golsContra: {
      type: DataTypes.INTEGER
    }
  }, {
      tableName: "Times"
    })

  Times.associate = function (models) {
    Times.hasMany(models.Jogadores, {foreignKey: "codigoTime"})
  }
  return Times
}
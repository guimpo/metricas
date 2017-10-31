module.exports = (sequelize, DataTypes) => {
  var DetalheSumula = sequelize.define("DetalheSumula", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    qtdeGol: {
      type: DataTypes.INTEGER
    },
    cartaoAmarelo: {
      type: DataTypes.INTEGER
    },
    cartaoVermelho: {
      type: DataTypes.INTEGER
    }
  }, {
      tableName: "DetalheSumula"
    })

  DetalheSumula.associate = function (models) {
    DetalheSumula.belongsTo(models.Sumulas, { foreignKey: "codigoSumula" })
    DetalheSumula.belongsTo(models.Jogadores, { foreignKey: "codigoJogador" })
  }
  return DetalheSumula
}
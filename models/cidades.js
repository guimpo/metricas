module.exports = (sequelize, DataTypes) => {
  var Cidades = sequelize.define("Cidades", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.STRING
    }
  }, {
      tableName: "Cidades"
    })

  Cidades.associate = function (models) {
    Cidades.hasMany(models.Jogadores, { foreignKey: "codigoCid" })
    Cidades.hasMany(models.Arbitros, { foreignKey: "codigoCid" })
  }
  return Cidades
}
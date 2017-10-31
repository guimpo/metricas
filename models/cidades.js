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
      type: DataTypes.INTEGER
    }
  }, {
      tableName: "Cidades"
    })

  Cidades.associate = function (models) {
    Cidades.hasMany(models.Jogadores, { foreignKey: "codigoCid" })
  }
  return Cidades
}
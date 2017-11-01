module.exports = (sequelize, DataTypes) => {
  var Jogadores = sequelize.define("Jogadores", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
    rua: {
      type: DataTypes.STRING
    },
    numero: {
      type: DataTypes.INTEGER
    },
    bairro: {
      type: DataTypes.STRING
    },
    cep: {
      type: DataTypes.STRING
    }
    }, {
      tableName: "Jogadores"
    })

    Jogadores.associate = function(models) {
      Jogadores.belongsTo(models.Cidades, {foreignKey: "codigoCid"})
      Jogadores.belongsTo(models.Times, {foreignKey: "codigoTime"})
    }
    return Jogadores;
}
module.exports = (sequelize, DataTypes) => {
  var Arbitros = sequelize.define("Arbitros", {
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
      type: DataTypes.INTEGER
    }
    }, {
      tableName: "Arbitros"
    })

    Arbitros.associate = function(models) {
      Arbitros.belongsTo(models.Cidades, {foreignKey: "codigoCid"})
    }
    return Arbitros;
}
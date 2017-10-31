module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define("Tasks", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    }, {
      tableName: "Tasks"
    })

    Tasks.associate = function(models) {
      Tasks.belongsTo(models.Users)
    }
    return Tasks;
}
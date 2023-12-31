const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize();

module.exports = (sequelize, Datatypes) => {
  const Student = sequelize.define("student", {
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    program: { type: DataTypes.STRING, unique: false, allowNull: false },
    year: { type: DataTypes.ENUM("1", "2", "3", "4"), allowNull: false },
    points: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "user_id",
      },
      defaultValue: null,
    },
  });

  return Student;
};

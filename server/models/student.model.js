const { Sequelize } = require("sequelize");
const sequelize = new Sequelize();

const Student = sequelize.define("student", {
  student_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  program: { type: Sequelize.STRING, unique: false, allowNull: false },
  year: { type: DataTypes.ENUM("1", "2", "3", "4"), allowNull: false },
  points: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    defaultValue: 0,
  },
  user_id: {
    type: Sequelize.ENUM("Patron", "Staff", "Admin"),
    allowNull: false,
  },
});

module.exports = Student;

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const Event = sequelize.define("event", {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.ENUM("ongoing", "upcoming", "not-approved", "completed"),
      unique: false,
      defaultValue: "upcoming",
    },
    event_details_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "event_details",
        key: "event_detail_id",
      },
    },
  });

  return Event;
};

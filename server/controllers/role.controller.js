const db = require("../models");
//const Op = db.Sequelize.Op;
const Role = db.role;

exports.create = async (req, res) => {
  const data = req.body;
  const role = {
    type: data.type,
  };

  Role.create(role)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findRole = (req, res) => {
  //conditional
  let type = req.body.type;

  Role.findRole({ where: { type: type } })
    .then((data) => {
      res.status(200).send({
        status: data ? "found" : "not found",
        data: data ? data : null,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  let data = req.body;
  Role.update({ type: data.type }, { where: { role_id: data.role_id } })
    .then(() => {
      res.status(200).send({
        message: "role updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  let data = req.body;
  Role.destroy({ where: { role_id: data.role_id } })
    .then(() => {
      res.status(200).send({
        message: "role deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

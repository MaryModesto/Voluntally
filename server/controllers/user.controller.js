const db = require("../models");
//const Op = db.Sequelize.Op;
const User = db.user;

exports.create = async (req, res) => {
  const data = req.body;
  const user = {
    email: data.email,
    password: data.password,
    first_name: data.first_name,
    last_name: data.last_name,
    role: data.role,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

/*NOTE TO SELF: THIS IS SUPPOSED TO SHOW ALL, FIND DOCUMENTATION FOR THIS*/
exports.findUser = (req, res) => {
  //conditional
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findUserID = (req, res) => {
  //options
  let user_id = req.body.user_id;

  //the .findByPk method refers to finding somehting by it's primary key
  User.findByPk(user_id)
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

// exports.update = (req, res) => {
//   let data = req.body;
//   Role.update({ type: data.type }, { where: { role_id: data.role_id } })
//     .then(() => {
//       res.status(200).send({
//         message: "role updated successfully",
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

// exports.delete = (req, res) => {
//   let data = req.body;
//   Role.destroy({ where: { role_id: data.role_id } })
//     .then(() => {
//       res.status(200).send({
//         message: "role deleted successfully",
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

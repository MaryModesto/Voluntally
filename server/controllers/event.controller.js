const db = require("../models");
//const Op = db.Sequelize.Op;
const Event = db.event;

exports.create = async (req, res) => {
  const data = req.body.data;
  const student = {
    program: data.program,
    year: data.year,
    //ASK SAM IF USER_ID SHOULD BE INCLUDED HERE
  };

  Student.create(student)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = (req, res) => {
  //search options
  Student.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  //conditional
  let name = req.body.name;

  Student.findOne({ where: { name: name } })
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

exports.findOneID = (req, res) => {
  //options
  let id = req.body.id;

  //the .findByPk method refers to finding somehting by it's primary key
  Student.findByPk(student_id)
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
  Student.update(data.publisher, { where: { student_id: data.student_id } })
    .then(() => {
      res.status(200).send({
        message: "student record updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  let data = req.body;
  //destroy is a sequelize method to delete basically
  Student.destroy({ where: { student_id: data.student_id } })
    .then(() => {
      res.status(200).send({
        message: "Publisher deleted!",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const db = require("../models");
//const Op = db.Sequelize.Op;
const Student = db.student;

exports.create = async (req, res) => {
  const data = req.body.data;
  const student = {
    program: data.program,
    year: data.year,
    user_id: data.user_id,
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

exports.findByProgram = (req, res) => {
  //conditional
  let program = req.body.program;

  if (!program) {
    return res.status(400).send({ message: "No program was filled out" });
  }

  Student.findAll({
    where: {
      program: program,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findByYear = (req, res) => {
  //conditional
  let year = req.body.year;

  if (!year) {
    return res.status(400).send({ message: "No year was filled out" });
  }

  Student.findAll({
    where: {
      year: year,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOneID = (req, res) => {
  //options
  let student_id = req.body.student_id;

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
  Student.update(data.student, { where: { student_id: data.student_id } })
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
        message: "student record deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

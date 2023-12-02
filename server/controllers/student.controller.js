"user strict";
const Student = require("./../models/student.model");

exports.create = function (req, res) {
  const new_student = new Student(req.body);

  //checks to see if the object passes is empty or not and if the required fields
  //are filled up
  if ((req.body.constructor === Object.keys(req.body).length) === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Student.create(new_student, function (err, student) {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "student record added successfully",
        data: student,
      });
    });
  }
};

exports.findById = function (req, res) {
  Student.findById(req.params.student_id, function (err, student) {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: student });
  });
};

exports.findAll = function (req, res) {
  Student.findAll(function (err, student) {
    console.log("controller");
    if (err) {
      res.send(err);
    }
    console.log("res", student);
    //the 200 is an "OK" signal from express to the client, and the data is what's returned
    res.send({ status: 200, data: student });
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Student.update(
      req.params.student_id,
      new Student(req.body),
      function (err, employee) {
        if (err) {
          res.send(err);
        }
        res.json({
          error: false,
          message: "student updated successfully",
          status: 200,
        });
      }
    );
  }
};

exports.delete = function (req, res) {
  Student.delete(req.params.student_id, function (err, employee) {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      message: "student deleted successfully",
      status: 200,
    });
  });
};

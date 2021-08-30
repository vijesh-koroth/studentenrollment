// Import Model base Student
const Studentrecord = require('../models/Studentrecord');

// List all available Students
exports.listAllStudentrecord = (req, res) => {
  Studentrecord.find({}, (err, student) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(student);
  });
};

// Create a new student record with required validation
exports.createNewStudent = (req, res) => {
  let newStudent = new Studentrecord(req.body);
  newStudent.save((err, student) => {
    if (err) {
      res.status(500).send({ message: 'Please fill all the fields' });
    }
    res.status(201).json(student);
  });
};

// Get or read a perticular Student => By id
exports.readStudent = (req, res) => {
  Studentrecord.findOne({ studentid: req.params.studentid }, (err, student) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(student);
  });
};

// Update a new Student => By id
exports.updateStudent = (req, res) => {
  Studentrecord.findOneAndUpdate(
    { studentid: req.params.studentid },
    req.body,
    { new: true },
    (err, student) => {
      if (err) {
        res.status(500).send(err);
      }
      //   res.status(200).json(Student);
      res.status(200).json({ message: 'Student successfully Updated' });
    }
  );
};

// Delete a perticular Student => By id
exports.deleteStudent = (req, res) => {
  Studentrecord.remove({ studentid: req.params.studentid }, (err, student) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: 'Student successfully deleted' });
  });
};

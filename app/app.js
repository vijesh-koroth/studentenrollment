// app.js

// Importing needed Packeges
const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('./controllers/StudentController');

// db instance connection
require('./config/db');

const app = express();

// Defining the port for Environment
const port = process.env.PORT || 3301;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS
app
  .route('/student')
  .get(studentController.listAllStudentrecord)
  .post(studentController.createNewStudent);

app
  .route('/student/:studentid')
  .get(studentController.readStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

// Console the app is listening success message with port present
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

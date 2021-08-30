# Student enrolment application and BDD test #
## Contents ##
This repository contains the following
1. REST API based application
2. Mocha based unit test
3. Cypress based BDD bsased test

## Tools used ##
### Applicatop ###
1. Nodejs
2. Expressjs
3. MongoDB

### Unit Test ###
1. Mocha
2. Chai

### BDD Test ###
1. Cypress
2. Cucumber
3. Cucumber reporting

## How to configure the application ##
_Application and related files available under **app** directory
Cypress based BDD test is available under **test** directory_

1. Clone the repo
2. Goto *app* directory and install the app using *npm install* command
3. Goto *test* directory and install the test using *npm install* command

## How to run the application ##
1. Goto *app* directory and run the app using *node app.js* command
2. The app will start run using the port number *3301*
*Please note some warning message may appear in the console due the deprecated packages*

## API End point details ##
The application contains the following end points
1. POST - To insert student record into the DB
    API End point - http://localhost:3301/student/
2. GET - To get all students record
    API End point - http://localhost:3301/student/
3. GET - To get students record based on student id
    API End point - http://localhost:3301/student/:studentid
4. PUT - To updated student record based on student id
    API End point - http://localhost:3301/student/:studentid
5. DELETE - To delete student record based on student id
    API End point - http://localhost:3301/student/:studentid

## How to test the app using API client ##
1. Once the app is running, open postman or any other tool used for API testing
2. Test different end points using the *http://localhost:3301* url

## How to run the test ##
### Mocha test ###
1. Go to *app* directory and run the test using *npm test* command

### Cypress test ###
1. Go to *test* directory and run the test 
    -   using *cypress:open* command for headed mode using cypress execution UI
    -   using *cypress:run* command for headeless mode
2. Cucumber report will be generated at the end of the execution if the test is executed from terminal
3. Cypress report will be shown in the UI if executed using cypress UI

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import {definepostbody,defineputbody,sendRequest} from './helper/api';
import { defineenv } from './config/environment';

Given('I have access to the student API {string} end point', (requesttype)  => {
    defineenv(requesttype);
});


When('I send an API request to create a new student enrollment with the following details {string},{string},{string},{string},{string}',function(firstname,classname,lastname,nationality,studentid) {
    definepostbody(firstname,classname,lastname,nationality,studentid)
    sendRequest(Cypress.env('url'));
});

When(
    'I send an API request to fetch all student records',
        () => {
            sendRequest(Cypress.env('url'));
    }
);

When(
    'I send an API request to get a student record based on student id {string}',(studentid) => {
            sendRequest(Cypress.env('url')+studentid);
    }
);


When(
    'I send an API request to update a student details {string} for the student id {string}',
    (classname,studentid) => {
        defineputbody(classname);
        sendRequest(Cypress.env('url')+studentid);
    }
);

When('I send an API request to delete a student record with the student ID {string}',(studentid)=>
{
    sendRequest(Cypress.env('url')+studentid);
}
);

Then('I get a succesful response with status code {string}',(responsecode)=>{
    let expresponsecode=responsecode;
    let actualrescode=String(Cypress.env('response').status);
    expect(actualrescode).to.equal(expresponsecode);
});
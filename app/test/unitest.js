'use strict';
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);


const assert = require('assert');

var apiurl="http://localhost:3301";
var firstname="Mike";
var lastname="Wong";
var classname="3 A";
var nationality="Singapore";
var studentid="1010";


describe('Validate CRUD end points', function() {

  describe('POST end point', function() {
  it('Validate POST end point', async function () { 
    const data = await  postrequest();
    expect(data).to.equal(201);
    });

  });

    describe('GET end point', function() {
      it('Validate GET end point',async function() {
        const data = await getrequest();
        expect(data).to.equal(200);
      });
    });
  
  
    describe('PUT end point', function() {
      it('Validate PUT end point', async function() {
          const data = await putrequest(studentid,'7 B');
          expect(data).to.equal(200);
      });
    });
  
    describe('DELETE end point', function() {
      it('Validate DELETE end point', async function() {
          const data = await deleterequest(studentid);
          expect(data).to.equal(200);
      });
    });

});


function postrequest()
{

  return new Promise((resolve, reject) => {

  chai
  .request(apiurl)
  .post('/student')
  .set('content-type', 'application/json')
  .send({"firstname":firstname,"class":classname,"lastname":lastname,"nationality":nationality,"studentid":studentid})
  .end(function(err, res) {
    if(!err)
    {
      resolve(res.status);
      
    }
    reject({ 'message': 'unable to get response' })
  });

  })
}

function getrequest()
{

  return new Promise((resolve, reject) => {

  chai
  .request(apiurl)
  .get('/student')
  .set('content-type', 'application/json')
  .end(function(err, res) {
    if(!err)
    {
      resolve(res.status);
    }
    reject({ 'message': 'unable to get response' })
  });

  })
}

function putrequest(student_id,class_name)
{

  return new Promise((resolve, reject) => {

  chai
  .request(apiurl)
  .put('/student/'+student_id)
  .set('content-type', 'application/json')
  .send({"class":class_name})
  .end(function(err, res) {
    if(!err)
    {
      resolve(res.status);
      
    }
    reject({ 'message': 'unable to get response' })
  });

  })
}

function deleterequest(student_id)
{

  return new Promise((resolve, reject) => {

  chai
  .request('http://localhost:3301')
  .delete('/student/'+student_id)
  .set('content-type', 'application/json')
  .end(function(err, res) {
    if(!err)
    {
      resolve(res.status);
      
    }
    reject({ 'message': 'unable to get response' })
  });

  })
}


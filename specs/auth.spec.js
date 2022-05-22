import supertest from 'supertest';
import { expect } from "chai";
import 'dotenv/config'


describe('Auth', function () {
  const request = supertest(process.env.BASE_URL) // storing supertest client with the base url
  describe('Successful login', function () {
    let result;
    before(async function () {
      await request //now we can refer to the client through the constant variable request
          .post('/auth') //using method POST and specifying the route of the url '/url,
          .send({login: 'invalid', password: 'invalid'}) //through the supertest method .send we're specifying what we're sending/requesting in the body. in this case it's a json object
          .then(res => {
            result = res
          });
    })
    it('response status code is 200', function () {
      expect(result.statusCode).to.eq(200);   //using a chai assertion to check statusCode. Parameter .statusCode of the argument res to equal 200
    })

    it('response body contains authorization token', function () {
      expect(result.body.token).not.to.be.undefined // checking response token
    })
  })

  describe('Login with invalid credentials', function () {
    let result;
    before(async function () {
      await request //now we can refer to the client through the constant variable request
          .post('/auth') //using method POST and specifying the route of the url '/url,
          .send({login: 'invalid', password: 'invalid'}) //through the supertest method .send we're specifying what we're sending/requesting in the body. in this case it's a json object
          .then(res => {
              result = res
          });
    });
      //same test as above but with negative result - negative test
      it('response status code is 404', function () {
        expect(result.statusCode).to.eq(404);   //using a chai assertion to check statusCode. Parameter .statusCode of the argument res to equal 200
      })
      it('response body contains error message', function () {
        expect(result.body.message).to.eq('Wrong login or password.') // checking response token
      })
  })
});
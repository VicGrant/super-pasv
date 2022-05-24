import { expect } from "chai";
import 'dotenv/config'
import AuthHelper from '../helpers/auth.helper'

describe('Auth', function () {
  let authHelper = new AuthHelper()
  describe('Successful login', function () {

    before(async function () {
      await authHelper.login(process.env.LOGIN, process.env.PASSWORD)
    })

    it('response status code is 200', function () {
      expect(authHelper.response.statusCode).to.eq(200);   //using a chai assertion to check statusCode. Parameter .statusCode of the argument res to equal 200
    })

    it('response body contains authorization token', function () {
      expect(authHelper.response.body.token).not.to.be.undefined // checking response token
    })
  })

  describe('Login with invalid credentials', function () {

    before(async function () {
      await authHelper.login('invalid','invalid')
    });
      //same test as above but with negative result - negative test
      it('response status code is 404', function () {
        expect(authHelper.response.statusCode).to.eq(404);   //using a chai assertion to check statusCode. Parameter .statusCode of the argument res to equal 200
      })
      it('response body contains error message', function () {
        expect(authHelper.response.body.message).to.eq('Wrong login or password.') // checking response token
      })
  })
});
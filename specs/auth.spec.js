import supertest from 'supertest';
import {expect} from "chai";

const request = supertest('BASE_UR.env') // storing supertest client with the base url

describe('Auth', function (){
    it('Successful login', function (){
        request //now we can refer to the client through the constant variable request
            .post('/auth') //using method POST and specifying the route of the url '/url,
            .send ({login:'adminius', password: 'supers3cret'}) //through the supertest method .send we're specifying what we're sending/requesting in the body. in this case it's a json object
            //.expect(200) // using a supertest assertion that checks the connection status -- does not work properly, not recommended to be used
            .end(function(err, res){ // function .end accepts another function in itself which has parameters that are used in execution of the request:  err = error and res = response. This is a better way to test than above .send method
                expect (res.statusCode).to.eq(200);   //using a chai assertion to check statusCode. Parameter .statusCode of the argument res to equal 200
                expect (res.body.token).not.to.be.undefined // checking response token
            })
    })
    //same test as above but with negative result - negative test
    it('Login with invalid credentials', function (){
        request //now we can refer to the client through the constant variable request
            .post('/auth') //using method POST and specifying the route of the url '/url,
            .send ({login:'invalid', password: 'invalid'}) //through the supertest method .send we're specifying what we're sending/requesting in the body. in this case it's a json object
            //.expect(200) // using a supertest assertion that checks the connection status -- does not work properly, not recommended to be used
            .end(function(err, res){ // function .end accepts another function in itself which has parameters that are used in execution of the request:  err = error and res = response. This is a better way to test than above .send method
                expect (res.statusCode).to.eq(200);   //using a chai assertion to check statusCode. Parameter .statusCode of the argument res to equal 200
                expect (res.body.message).to.eq('Wrong login or password.') // checking response token
            })
    })
})
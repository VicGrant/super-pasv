import 'dotenv/config'
//import supertest from 'supertest';
import AuthHelper from "../helpers/auth.helper";

//global setup for all tests
before( async function(){
  const authHelper = new AuthHelper()
  await authHelper.login(process.env.LOGIN, process.env.PASSWORD)

  process.env['TOKEN'] = authHelper.response.body.token
  // const request = await supertest(process.env.BASE_URL) // storing supertest client with the base url
  // request //now we can refer to the client through the constant variable request
  //     .post('/auth') //using method POST and specifying the route of the url '/url,
  //     .send({ login: process.env.LOGIN, password: process.env.PASSWORD }) //through the supertest method .send we're specifying what we're sending/requesting in the body. in this case it's a json object
  //           //.expect(200) // using a supertest assertion that checks the connection status -- does not work properly, not recommended to use
  //           //.end(function(err, res){ }) // function .end accepts another function in itself which has parameters that are used in execution of the request:  err = error and res = response. This is a better way to test than above .send method
  //     .then(res => {
  //        process.env['TOKEN'] = res.body.token // getting the authorization token from response body and storing it in the environment variable 'TOKEN'
  //     })
});

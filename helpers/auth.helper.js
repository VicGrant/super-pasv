import supertest from 'supertest';

class AuthHelper {
  // constructor() {
	// this.response = null;
  // }
  response

  async login(username, password){
	//const request = supertest(process.env.BASE_URL) // storing supertest client with the base url
	//await request //now we can refer to the client through the constant variable request
	await supertest(process.env.BASE_URL) //working directly with returned http client, instead of storing it in a variable
		.post('/auth') //using method POST and specifying the route of the url '/url,
		.send({login: username, password: password}) //through the supertest method .send we're specifying what we're sending/requesting in the body. in this case it's a json object
		.then(res => {
		  this.response = res
		});
  }
}

export default AuthHelper
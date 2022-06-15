### API DOCUMENTATION

This is the server Application used to handle the requests and sending the responses used in express library 

### `WHAT IS API`
API API is short for `Application Programming Interface` . An API is a set of rules that lets programs talk to each other, exposing data and functionality across the Internet in a consistent format.

REST stands for ‘Representational State Transfer’. This is an architectural pattern that describes how distributed systems can expose a consistent interface. When people use the term `REST API`, they are generally referring to an API accessed using the HTTP protocol at a predefined set of URLs.

So Server is the handling for the customer add with mobile verification handling 
to `GET` customers you send an api to the `URL` `http://localhost:5000/api/customer`
to `POST` customer you should send the following parameters with these keys 
{
    Name: the customer Name,
    Address: customer's address,
    MobileNumber: mobile number after verification
}
with caring about letter case sensitive 
in order to update you could send a `PUT` method to the `URL` `http://localhost:5000/api/customer/:id` with having the aware of the parameters that are sent with the *API* also it used to delete customer to same url with delete api


to verify the mobile number you just send the mobile Parameter with `POST` method with {MobileNumber:that wanted to be verified} to following `URL` 
`http://localhost:5000/api/customer/verification`
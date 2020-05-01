/* register kit
    form posts kit_id to be registered with the lab
*/

const fetch = require('node-fetch').default;

const mtl_api_base_url = "https://lisbeta4.moleculartestinglabs.com/";
const mtlHeaders = {
  "Content-Type": "application/json",
  "user": process.env.MTL_API_USER,
  "token": process.env.MTL_API_TOKEN
};



exports.handler = function(event, context, callback) {
  // const payload = JSON.parse(event.body); 
  
  const register = [
    {
      "lob": "SC",
      "kit_id": event.body,
      "patient_info":{
        "first_name": "John",
        "last_name": "Doe",
        "address_1": "14401 SE 1st ST",
        "address_2": "",
        "city": "Vancouver",
        "state": "WA",
        "postcode": "98684",
        "gender": "male",
        "date_of_birth": "1962-06-03",
        "email": "zano@test.com",
        "phone": "123-842-9999"
      },
      //"pwn_req_number": "5142800"
    }
  ];

  callback(null, {
     statusCode: 200,
     body: 'success',
  });

  const requestOptions = {
    method: 'POST',
    headers: mtlHeaders,
    body: register,
    redirect: 'follow'
  };

}
const mtl_api_base_url = "https://lisbeta4.moleculartestinglabs.com/";
const mtlHeaders = {
  "Content-Type": "application/json",
  "user": process.env.MTL_API_USER,
  "token": process.env.MTL_API_TOKEN
};

// these should be pulled from an .env file
const practice_id = "P04754";
const physician_id = 61745;

// shipping needs to be pulled from shopify
const shipping = 7;

// need to decide with MTL
const panel_id = [ 26 ];

// line of business
const lob = "SC";

// maybe make gender updatable at the registration step?
const gender = "male";



exports.handler = function(event, context, callback) {
  const payload = JSON.parse(event.body);

  const order = [
    {
      "shipping_info": {
        "first_name": payload.shipping_address.first_name,
        "last_name": payload.shipping_address.last_name,
        "address_1": payload.shipping_address.address1,
        "address_2": payload.shipping_address.address2,
        "city": payload.shipping_address.city,
        "state": payload.shipping_address.province,
        "postcode": payload.shipping_address.zip,
        "country": payload.shipping_address.country
      },
      "order_number": payload.order_number,
      "phone": payload.shipping_address.phone,
      "practice_id": practice_id,
      "physician_id": physician_id,
      "panel_id": panel_id,
      "lob": lob,
      "fulfillment": true,
      "shipping_method": shipping,
      "gender": gender,
      "date_of_birth": null
    }
  ];

  const requestOptions = {
    method: 'POST',
    headers: mtlHeaders,
    body: order,
    redirect: 'follow'
  };

  callback(null, {
      statusCode: 200,
      body: 'success',
  });

  fetch(JSON.stringify(mtl_api_base_url) + "/PlaceOrder", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
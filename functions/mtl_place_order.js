const mtl_api_token = process.env.MTL_API_TOKEN;
const mtl_api_user = process.env.MTL_API_USER;

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
    callback(null, {
        statusCode: 200,
        body: 'success',
    });
    // console.log(payload);
    console.log(payload.shipping_address.first_name); 
    console.log(payload.shipping_address.last_name);
    console.log(payload.shipping_address.address1);
    console.log(payload.shipping_address.address2);
    console.log(payload.shipping_address.city);
    console.log(payload.shipping_address.zip);
    console.log(payload.shipping_address.country);
    console.log(practice_id);
    console.log(physician_id);
}

/*
body: "[
    {
      "shipping_info": {
        "first_name": payload.shipping_address.first_name,
        "last_name": payload.shipping_address.last_name,
        "address_1": payload.shipping_address.address1,
        "address_2": payload.shipping_address.address2
        "city": shipping_address.city,
        "state": shipping_address.province,
        "postcode": shipping_address.zip,
        "country": shipping_address.country
      },
      "order_number": payload.order_number,
      "phone": payload.shipping_address.phone
      "practice_id": practice_id,
      "physician_id": physcian_id,
      "panel_id": panel_id,
      "lob": lob,
      "fulfillment": true,
      "shipping_method": shipping,
      "gender": gender,
      "date_of_birth": null
    }
  ]"
*/

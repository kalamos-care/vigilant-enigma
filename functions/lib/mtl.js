if (process.env.NETLIFY_DEV) {
  require('dotenv').config({ path: '.env.development' })
}

module.exports.url = 'https://lisbeta4.moleculartestinglabs.com';

module.exports.headers = {
  "Content-Type": "application/json",
  "user": process.env.MTL_API_USER,
  "token": process.env.MTL_API_TOKEN
};

module.exports.placeOrderRequest = payload => ([
  {
    "shipping_info": {
      "first_name": payload.shipping_address.first_name,
      "last_name": payload.shipping_address.last_name,
      "address_1": payload.shipping_address.address1,
      "address_2": payload.shipping_address.address2,
      "city": payload.shipping_address.city,
      "state": payload.shipping_address.province_code,
      "postcode": payload.shipping_address.zip,
      "country": payload.shipping_address.country
    },
    "order_number": payload.order_number,
    "phone": payload.shipping_address.phone,
    "practice_id": process.env.MTL_PRACTICE_ID,
    "physician_id": process.env.MTL_PHYSICIAN_ID,
    "panel_id": [ 26 ], // need to decide with MTL
    "lob": "SC", // line of business
    "fulfillment": true,
    "shipping_method": 7, // shipping needs to be pulled from shopify
    "gender": "male", // maybe make gender updatable at the registration step?
    "date_of_birth": "02/02/1970"
  }
])

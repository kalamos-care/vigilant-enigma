// https://lisbeta4.moleculartestinglabs.com/#tag/PlaceOrder

/*
TO DO
  0. pass MTL response back to the Shopify order as a comment
      https://shopify.dev/docs/admin-api/rest/reference/orders/order#update-2020-04
  1. move practice_id and physician_id to env variables
    a. figure out how to make these fungible
  2. determine shipping based on Shopify object
  3. figure out how to make panel_id dynamic
  4. determine whether lob and gender need to be dynamic
*/

const fetch = require('node-fetch').default;
const { headers, url, placeOrderRequest } = require('./lib/mtl');

exports.handler = async event => {
  const payload = JSON.parse(event.body);
  const order = placeOrderRequest(payload)
  try {
    const response = await fetch(`${url}/PlaceOrder`, {
      method: 'POST',
      headers,
      body: JSON.stringify(order),
    })
    const json = await response.json()
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred'
      })
    }
  }
};

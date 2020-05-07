const fetch = require('node-fetch').default;
const { url, headers} = require('./lib/shopify');

const customerCreateQuery = customer => ({
  query: `mutation {
    customerCreate(input: {
      email: "${customer.email}",
      firstName: "${customer.firstName}",
      lastName: "${customer.lastName}",
      password: "${customer.password}"
    }) {
      customer {
        id
      }
    }
  }`
});

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(customerCreateQuery(body)),
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
      body: {}
    }
  }
};

const fetch = require('node-fetch').default;
const { url, headers, mutationQuery } = require('./lib/shopify');

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const mutation = event.headers['x-shopify-mutation'];
    if (typeof mutation !== 'string') {
      throw('');
    }
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(mutationQuery(mutation)(body)),
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

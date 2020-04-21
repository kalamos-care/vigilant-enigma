const fetch = require('node-fetch').default;

module.exports = async function handler(event) {
  try {
    const qs = event.queryStringParameters;
    const query = Object.keys(qs).map(key => (`${key}=${qs[key]}`));
    const response = await fetch(`https://npin.cdc.gov/api/organization/proximity?${query.join('&')}`)
    const json = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(json),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {}
    }
  }
};

const mutationQueries = {
  customerCreate: customer => ({
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
  }),
  customerAccessTokenCreate: customer => ({
    query: `mutation {
      customerAccessTokenCreate(input: {
        email: "${customer.email}",
        password: "${customer.password}",
      }) {
        customerUserErrors {
          code
          field
          message
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
      }
    }`
  }),
  customerUpdate: customer => ({
    query: `mutation {
      customerUpdate(input: {

      }) {

      }
    }`
  })
};

if (process.env.NETLIFY_DEV) {
  require('dotenv').config({ path: '.env.development' })
}

module.exports.url = `https://${process.env.SHOP_NAME}.myshopify.com/api/2020-04/graphql`;

module.exports.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
};

module.exports.mutationQuery = mutation => mutationQueries[mutation];
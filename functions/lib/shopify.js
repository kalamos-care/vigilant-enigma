
if (process.env.NETLIFY_DEV) {
  require('dotenv').config({ path: '.env.development' })
}

module.exports.url = `https://${process.env.SHOP_NAME}.myshopify.com/api/2020-04/graphql`;

module.exports.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
};

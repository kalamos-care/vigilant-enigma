/* should this be segmented to be just logging in or include account creation as well?
*/

const fetch = require('node-fetch').default;

exports.handler = function(event, context, callback) {
    const payload = JSON.parse(event.body); 
    callback(null, {
      statusCode: 200,
      body: 'success',
    });
  }
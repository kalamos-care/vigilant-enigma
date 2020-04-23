// register kit

exports.handler = function(event, context, callback) {
  const payload = JSON.parse(event.body); 
  callback(null, {
     statusCode: 200,
     body: 'success',
});

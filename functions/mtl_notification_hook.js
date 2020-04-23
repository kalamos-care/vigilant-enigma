// receive notifications from MTL and update the order accordingly.

// kit_shipped

// kit_received

// kit_rejected

// report_ready


exports.handler = function(event, context, callback) {
  const payload = JSON.parse(event.body); 
  callback(null, {
    statusCode: 200,
    body: 'success',
  });
}

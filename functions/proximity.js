// https://docs.netlify.com/functions/build-with-javascript/#format
exports.handler = function(event, context, callback) {
  const  response = {
    statusCode: 200,
    body: "Hello, Kalamos Proximity Function."
  };
  callback(null, response);
}

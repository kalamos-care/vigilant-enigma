const practice_id = "P04754";
const physcian_id = 61745;

exports.handler = function(event, context, callback) {
    const payload = JSON.parse(event.body); 
    callback(null, {
        statusCode: 200,
        body: 'success',
    });
    // console.log(payload);
    console.log(payload.shipping_address.first_name); 
    console.log(payload.shipping_address.last_name);
    console.log(payload.shipping_address.address1);
    console.log(payload.shipping_address.address2);
    console.log(payload.shipping_address.city);
    console.log(payload.shipping_address.zip);
    console.log(payload.shipping_address.country);
    console.log(practice_id);
    console.log(physician_id);
}

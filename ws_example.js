const WebSocket = require('ws');

const magic = "42bcc32669467873";

const client = new WebSocket('ws://localhost:1338',{
  origin:'http://localhost'
});

client.on('open', function open() {
  hi_msg = new Buffer(magic + "00000014" + "0a120a101a090a07736f6d656b65793a0308e807", "hex");
  client.send(hi_msg);
})

client.on('message', function incoming(message){
  console.log("MESSAGE:")
  console.log(message);
  client.terminate()
})

client.on('error', function(error){
    console.log('errrorrrrs here')
    console.log(error);
})

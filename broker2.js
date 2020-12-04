//MQTT Broker
var mosca = require('mosca')
var settings = {port: 1234}
var broker = new mosca.Server(settings)

broker.on('ready',()=>{
    console.log('Broker funcionando')
})

broker.on('published',(token)=>{
    console.log(token.payload.toString())
})
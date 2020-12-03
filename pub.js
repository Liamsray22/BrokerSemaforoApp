// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')
var topic ='Liam'

var message = 'Tan llegando'
var num = 0

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Se envio el mensaje ', message, " ", num+1)
        num = num + 1
    },1000)
})
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

// 订阅主题
client.subscribe('test/topic');
// 接收到消息时的处理函数
client.on('message', function (topic, message) {
    console.log('收到消息：', topic, message.toString());
});

// 发布消息
client.publish('test/topic', 'Hello, MQTT!');

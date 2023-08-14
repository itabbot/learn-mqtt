const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883;
server.listen(port, function () {
    console.log('Aedes MQTT 代理启动成功，监听端口', port);
});
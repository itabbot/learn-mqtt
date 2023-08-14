# 最简单的 MQTT 代理以及包含发布者和订阅者的客户端

本工程使用 Node.js 体验 MQTT：

1. 使用 `aedes` 模块构建 MQTT 代理服务（[server.js](./server.js)）。

```shell
$ node server.js
Aedes MQTT 代理启动成功，监听端口 1883
```

2. 使用 `mqtt` 模块构建 MQTT 客户端（[client.js](./client.js)），包含发布者和订阅者。

```shell
$ node client.js
收到消息： test/topic Hello, MQTT!
```

3. 也可以使用 curl 向 MQTT 代理发布消息。

```shell
$ curl mqtt://127.0.0.1:1883/test/topic -d 1234
```

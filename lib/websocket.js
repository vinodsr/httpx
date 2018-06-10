const server = require('http').createServer()
const io = require('socket.io')(server)
const clientRegistry = {};
io.on('connection', function (client) {
    console.log("Client joined", client.id)
    clientRegistry[client.id] = client;
    //   client.on('register', handleRegister)

    //   client.on('join', handleJoin)

    //   client.on('leave', handleLeave)

    //   client.on('message', handleMessage)

    //   client.on('chatrooms', handleGetChatrooms)

    //   client.on('availableUsers', handleGetAvailableUsers)

    client.on('disconnect', function () {
        console.log('client disconnect...', client.id)
        //  handleDisconnect()
    })

    client.on('error', function (err) {
        console.log('received error from client:', client.id)
        console.log(err)
    })
})

server.listen(3001, function (err) {
    if (err) throw err
    console.log('socket io listening on port 3000')
})

let clientWS = null;
class WebSocket {
    constructor(eventId) {
        this.eventId = eventId;
    }

    sendMessage(clientid, msg) {
        console.log("Sending message ", msg, "to client ", clientid)
        msg["_event"] = {
            eventid: this.eventId,
            clientid: clientid
        }
        if (typeof clientRegistry[clientid] == "undefined") {
            console.log("Client not found")
            return;
        }
        clientRegistry[clientid].emit("message", msg)
    }
}

module.exports = WebSocket;
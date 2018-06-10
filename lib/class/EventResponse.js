class EventResponse {

    constructor(socket, clientid) {
        this.socket = socket;
        this.clientid = clientid;
    }

    send(msg) {
        console.log("Sending message for Clientid ", this.clientid)
        this.socket.sendMessage(this.clientid, msg);
    }
}

module.exports = EventResponse;
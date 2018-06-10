const WebSocket = require('./websocket');
const EventResponse = require("./class/EventResponse")
const uuid = require("uuid/v1")
/**
 * Creates a new server event and binds it to the server.
 */
class ServerEvent {

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    static setup() {
    }
    do(fn) {
        let parent = this;
        let eventid = uuid();
        console.log("Creating event with id ", eventid);
        let event = new WebSocket(eventid);
        const eventResponse = new EventResponse(event, this.req.headers.clientid);
        //Create a chatroom
        //attach our event to the chat room
        fn(this.req, eventResponse);
        this.res.send({
            "_event": {
                "id": eventid
            }
        });
        return;
    }
}
module.exports = ServerEvent;
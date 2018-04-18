const websocket = require('./websocket');
const uuid = require("uuid/v1")
class ServerEvent {
    static setup() {
    }
    static createEvent(req, res, fn) {
        let eventid = uuid();
        console.log("Creating event with id ", eventid);
        let event = new websocket(eventid);
        //Create a chatroom
        //attach our event to the chat room
        fn(req, res, function done(msg) {
            // send the messsage to the queue
            event.sendMessage(req.headers.clientid, msg);
        });
        return {
            "_event": {
                "id": eventid
            }
        }
    }
}
module.exports = ServerEvent;
import io from 'socket.io-client';

// Wrappers
const eventHooks = {};
export default class http {
    static send(request, sucess, error) {
        request.headers = {
            "clientID": socket.id
        }
        $.ajax(request).done((data) => {
            // Check if this is a event to hook ?
            if (typeof data._event === "object") // TODO : Replace the check 
            {
                // Handle the lookup
                eventHooks[data._event.id] = sucess;
            } else {
                sucess(data)
            }
        }).fail(error);
    }
}

var socket = io("http://localhost:3001");
console.log(socket)
socket.on("message", function (data) {
    console.log(data);
    eventHooks[data._event.eventid](data)
})


console.log("Loading client js")
window.http = http;
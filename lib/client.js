import io from 'socket.io-client';

// Wrappers
const eventHooks = {};
export default class httpx {


    constructor(request) {
        this.request = request;
        this.onSuccessCB = null;
        this.onFailCB = null;
    }

    onSuccess(fn) {
        this.onSuccessCB = fn;
        console.log("then called")
        return this;
    }
    onFail(fn) {
        this.onFailCB = fn;
        console.log("catch called")
        return this;
    }
    send() {
        console.log("Send called.")
        this.request.headers = {
            "clientID": socket.id
        }
        return axios(this.request).then((response) => {
            // Check if this is a event to hook ?
            if (typeof response.data._event === "object") // TODO : Replace the check 
            {
                // Handle the lookup
                eventHooks[response.data._event.id] = this.onSuccessCB;
                console.log("running in socket way")
                this.onSuccessCB(response.data);
                return;
            } else {
                console.log("running in normal way")
                this.onSuccessCB(response.data);
                return;
            }
        }).catch((err) => {
            console.log("axios failed");
            this.onFailCB(err);
            throw err;
        });
    }
}

var socket = io("http://localhost:3001");
console.log(socket)
socket.on("message", function (data) {
    console.log(data);
    eventHooks[data._event.eventid](data)
})


console.log("Loading client js [::]")
window.httpx = httpx;
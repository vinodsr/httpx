
const express = require("express");
const serverevent = require("./lib/serverevent");
const app = express();

serverevent.setup();
app.use(express.static("public"));

app.get("/time", (req, res) => {
    res.send({
        time: new Date()
    })
})

app.get("/time/real", (req, res) => {
    console.log("headers", req.headers)
    res.send(serverevent.createEvent(req, res, (req, res, cb) => {
        setInterval(() => {
            console.log("Running time ");
            cb({
                time: new Date()
            })

        }, 3000)
    }));
});

app.listen(3000);

console.log("App started");

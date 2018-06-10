
const express = require("express");
const ServerEvent = require("./lib/serverevent");

const app = express();

ServerEvent.setup();
app.use(express.static("public"));

app.get("/time", (req, res) => {
    res.send({
        time: new Date()
    })
})

app.get("/time/real", (req, res) => {
    console.log("headers", req.headers)
    res.send(new ServerEvent(req, res).do((req, res) => {
        setInterval(() => {
            console.log("Running time ");
            res.send({
                time: new Date()
            })

        }, 3000)
    }));
});

app.listen(3000);

console.log("App started");

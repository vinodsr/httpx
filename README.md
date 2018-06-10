# A POC to prove server events

Contents

- [A POC to prove server events](#a-poc-to-prove-server-events)
    - [Installation](#installation)
    - [Setup](#setup)
    - [Usage](#usage)
## Installation

 ``` 
 npm i serverevents 
 ```

## Setup
```
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
```
## Usage
```
TODO 
```







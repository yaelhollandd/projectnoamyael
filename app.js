let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let cors = require('cors');

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(cors());


//Post request -> get data from client by req.body."element"
app.post("/getHello", async function (req, res) {
    console.log(req.body)
    let data = {
        key : "val"
    }
    res.send(data)

});



app.listen(process.env.PORT || 3000, () => {
    console.log("Server has been started !!");
    console.log("port 3000");
    console.log("Yael project");
    console.log("----------------------------------");
});
let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let cors = require('cors');

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('client'));
app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(`/client/${name}`, {root: __dirname});
    };
    next();
});


//Post request -> get data from client by req.body."element"
app.get('/', (req, res) => {
    res.show("welcome.html");
});




app.listen(process.env.PORT || 3000, () => {
    console.log("Server has been started !!");
    console.log("port 3000");
    console.log("Yael project");
    console.log("----------------------------------");
});
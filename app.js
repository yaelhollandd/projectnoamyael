let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let cors = require('cors');
DButilsAzure = require('./dBUtils');

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


app.post('/insertPage2DB', async (req, res) => {
    let ans ;
    let data = req.body 
    await dbUtils.sql(`insert into Songs_Money (id , song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18,song19, song20, song21, song22, song23, song24, song25) 
    VALUES( 1, '5' ,0,0,0,0,0,0,0,00,0,0,0,0,0,0,0,0,0,0,00,0,0,0,0,0);` )
        .execute() 
        .then(function (results) {
            ans = 200;
        }).fail(function (err) {
            ans = 400;
            console.log(err);
        });
    res.status(ans).send("finish");

});

app.get('/HTMLPage3.html',function (req,res) {
    res.show("HTMLPage3.html");

})

app.get('/submit-student-data', function (req, res) {
    res.show("welcome.html");
});





/*
let ans = new Object();
await dbUtils.sql(`Select * from user_Coach`)
    .execute()
    .then(function (results) {
        ans = 200;
    }).fail(function (err) {
        ans = 400;
        console.log(err);
    });
return ans;

 */


app.listen(process.env.PORT || 3000, () => {
    console.log("Server has been started !!");
    console.log("port 3000");
    console.log("Yael project");
    console.log("----------------------------------");
});
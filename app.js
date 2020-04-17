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
    await dbUtils.sql(`insert into Songs_Money (id , song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18,song19, song20) 
    VALUES( 1, ${data.inp_song1} ,0,0,0,0,0,0,0,00,0,0,0,0,0,0,0,0,0,0,00,0,0,0,0,0);` )
        .execute() 
        .then(function (results) {
            ans = 200;
        }).fail(function (err) {
            ans = 400;
            console.log(err);
        });
    res.status(ans).send("finish");

});



app.post('/insertPage3DB', async (req, res) => {
    let ans ;
    let data = req.body 
    await dbUtils.sql(`insert into Songs_Money_nr (id , song1_nr, song2_nr, song3_nr, song4_nr, song5_nr) 
    VALUES( 666, ${data.inp_song_nr21},0,0,0,0);` )
        .execute() 
        .then(function (results) {
            ans = 200;
        }).fail(function (err) {
            ans = 400;
            console.log(err);
        });
    res.status(ans).send("finish");

});



app.post('/insertPage5DB', async (req, res) => {
    let ans ;
    let data = req.body 
    await dbUtils.sql(`insert into Users_Questions
    (id,
        age_group,
         gender,
         education,
         country_music,
         rock_music,
         pop_music,
         rec_accurate_rate,
         if_experience,
         rec_helpful_rate,
         space_size_rate,
         private_space_rate,
         open_space_rate,
         device, 
         group_hours_computer_using,
         group_hours_mobile_using,
         noise_rate,
         light_rate,
         density_rate ) 
    VALUES(96, '1','${data.inp_inf2}','0',0,0,0,0,'0',0,0,0,0,'1','1','1',0,0,0);` )
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


app.get('/HTMLPage5.html',function (req,res) {
    res.show("HTMLPage5.html");

})

app.get('/Thanks.html',function (req,res) {
    res.show("HTMLPage5.html");

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
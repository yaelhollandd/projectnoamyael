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


app.post('/insertPage1DB', async (req, res) => {
    let ans;
    let data = req.body
    await dbUtils.sql(`insert into ratings_songs (id , rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8, rating9, rating10, rating11, rating12, rating13, rating14, rating15, rating16, rating17, rating18,rating19, rating20) 
    VALUES(${data.User_ID} , ${data.rating1} ,${data.rating2},${data.rating3},${data.rating4},${data.rating5},${data.rating6},${data.rating7},${data.rating8},${data.rating9},${data.rating10},${data.rating11},${data.rating12},${data.rating13},${data.rating14},${data.rating15},${data.rating16},${data.rating17},${data.rating18},${data.rating19},${data.rating20});`)
        .execute()
        .then(function (results) {
            ans = 200;
        }).fail(function (err) {
            ans = 400;
            console.log(err);
        });
    res.status(ans).send("finish");

});


app.post('/insertPage2DB', async (req, res) => {
    let ans;
    let data = req.body
    await dbUtils.sql(`insert into Songs_Money (id , song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18,song19, song20) 
    VALUES(${data.User_ID} , ${data.inp_song1}, ${data.inp_song2}, ${data.inp_song3}, ${data.inp_song4}, ${data.inp_song5}, ${data.inp_song6}, ${data.inp_song7},  ${data.inp_song8},  ${data.inp_song9}, ${data.inp_song10}, ${data.inp_song11}, ${data.inp_song12}, ${data.inp_song13}, ${data.inp_song14}, ${data.inp_song15}, ${data.inp_song16}, ${data.inp_song17}, ${data.inp_song18}, ${data.inp_song19}, ${data.inp_song20});`)


        .execute()
        .then(function (results) {
            ans = 200;
        }).fail(function (err) {
            ans = 400;
            console.log(err);
        });
    res.status(ans).send("finish");

});


app.post('/insertPage22DB', async (req, res) => {
    let ans;
    let data = req.body
    await dbUtils.sql(`insert into Random_Reate (id , random1 , random2 , random3,  random4 ,  random5 , random6 ,  random7 ,  random8 ,  random9 ,  random10 , random11, random12 , random13 , random14 , random15, random16, random17, random18, random19 , random20) 
    VALUES(${data.User_ID} , ${data.x1} , ${data.x2} , ${data.x3} , ${data.x4} , ${data.x5} , ${data.x6} , 
        ${data.x7}, ${data.x8} , ${data.x9} , ${data.x10} , ${data.x11} , ${data.x12}, ${data.x13} , ${data.x14}, ${data.x15},${data.x16}, ${data.x17}, ${data.x18} , ${data.x19}, ${data.x20} );`)


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
    let ans;
    let data = req.body
    await dbUtils.sql(`insert into Songs_Money_nr (id , song1_nr, song2_nr, song3_nr, song4_nr, song5_nr) 
    VALUES(${data.User_ID}, ${data.inp_song_nr21}, ${data.inp_song_nr22}, ${data.inp_song_nr23}, ${data.inp_song_nr24}, ${data.inp_song_nr25});`)
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
    let ans;
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
         density_rate ,
        workerId  ) 
    VALUES(${data.User_ID} , '${data.inp_inf1}','${data.inp_inf2}','${data.inp_inf3}',${data.inp_inf4},${data.inp_inf5},${data.inp_inf6},${data.inp_inf7},'${data.inp_inf8}',${data.inp_inf9},${data.inp_inf10},${data.inp_inf11},${data.inp_inf12},'${data.inp_inf13}','${data.inp_inf14}','${data.inp_inf15}',${data.inp_inf16},${data.inp_inf17},${data.inp_inf18},'${data.workerid}');`)
        .execute()
        .then(function (results) {
            ans = 200;
        }).fail(function (err) {
            ans = 400;
            console.log(err);
        });
    res.status(ans).send("finish");

});
app.post('/insertPage0DB', async (req, res) => {
    let ans;
    let data2 = req.body 
     await dbUtils.sql(`update IDs set is_use=1 where id=${data2.first_id};`)
        .execute()
        .then(function (results) {
            ans = 200;
        }).fail(function (err) {
            ans = 400;
            console.log(err);
        });
    res.status(ans).send("finish");

});

app.get('/HTMLPage3.html', function (req, res) {
    res.show("HTMLPage3.html");

})


app.get('/HTMLPage33.html', function (req, res) {
    res.show("HTMLpage33.html");

})




app.get('/HTMLPage5.html', function (req, res) {
    res.show("HTMLPage5.html");

})

app.get('/Thanks.html', function (req, res) {
    res.show("Thanks.html");

})


app.get('/HTMLPage1.html', function (req, res) {
    res.show("HTMLPage1.html");

})


app.get('/HTMLPage11.html', function (req, res) {
    res.show("HTMLpage11.html");

})

app.get('/HTMLPage22.html', function (req, res) {
    res.show("HTMLpage22.html");

})

app.get('/HTMLPage2.html', function (req, res) {
    res.show("HTMLPage2.html");

})


app.get('/submit-student-data', function (req, res) {
    res.show("welcome.html");
});


app.get('/HTMLpage0', async (req, res) => {

    //let data3 = req.body
    //await dbUtils.sql(`select * from IDs where id=${data3.first_id};`)
  //  ${data.inp_song_nr22}
  //await dbUtils.sql("select * where id=( select min(id) where is_use=0) from IDs ")  
  await dbUtils.sql("select * from IDs where id=( select min(id) from IDs where is_use=0) ")  
 //await dbUtils.sql('select * from IDs where id=${data3.first_id};')
        .execute()
        .then(function (results) {
            console.log(results)
            res.send(results)
        }).catch(function (err) {
        console.log("err")
    });



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





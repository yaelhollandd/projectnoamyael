$( document ).ready(function() {
    console.log("ready")

    $( "form" ).submit(function( event ) {
        event.preventDefault();
        submit()
    });

});

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
var randoms = [ ];




function submit() {
    let inp_song1 = document.getElementById("inp_song1");
    let inp_song2 = document.getElementById("inp_song2");
    let inp_song3 = document.getElementById("inp_song3");
    let inp_song4 = document.getElementById("inp_song4");
    let inp_song5 = document.getElementById("inp_song5");
    let inp_song6 = document.getElementById("inp_song6");
    let inp_song7 = document.getElementById("inp_song7");
    let inp_song8 = document.getElementById("inp_song8");
    let inp_song9 = document.getElementById("inp_song9");
    let inp_song10 = document.getElementById("inp_song10");
    let inp_song11 = document.getElementById("inp_song11");
    let inp_song12 = document.getElementById("inp_song12");
    let inp_song13 = document.getElementById("inp_song13");
    let inp_song14 = document.getElementById("inp_song14");
    let inp_song15 = document.getElementById("inp_song15");
    let inp_song16 = document.getElementById("inp_song16");
    let inp_song17 = document.getElementById("inp_song17");
    let inp_song18 = document.getElementById("inp_song18");
    let inp_song19 = document.getElementById("inp_song19");
    let inp_song20 = document.getElementById("inp_song20");
    

    let data = {
        inp_song1: parseInt(inp_song1.value),
        inp_song2: parseInt(inp_song2.value),
        inp_song3: parseInt(inp_song3.value),
        inp_song4: parseInt(inp_song4.value),
        inp_song5: parseInt(inp_song5.value),
        inp_song6: parseInt(inp_song6.value),
        inp_song7: parseInt(inp_song7.value),
        inp_song8: parseInt(inp_song8.value),
        inp_song9: parseInt(inp_song9.value),
        inp_song10: parseInt(inp_song10.value),
        inp_song11: parseInt(inp_song11.value),
        inp_song12: parseInt(inp_song12.value),
        inp_song13: parseInt(inp_song13.value),
        inp_song14: parseInt(inp_song14.value),
        inp_song15: parseInt(inp_song15.value),
        inp_song16: parseInt(inp_song16.value),
        inp_song17: parseInt(inp_song17.value),
        inp_song18: parseInt(inp_song18.value),
        inp_song19: parseInt(inp_song19.value),
        inp_song20: parseInt(inp_song20.value),
        User_ID: sessionStorage.getItem("User_ID")
     
                    }
    postData('/insertPage2DB', data)
        .then((data) => {})
        .catch((err) => {console.log(err)})
   
        let data2 = {
            x1: randoms[1]  ,
            x2: randoms[2]  ,
            x3: randoms[3]  ,
            x4: randoms[4]  ,
            x5: randoms[5]  ,
            x6: randoms[6]  ,
            x7: randoms[7]  ,
            x8: randoms[8]  ,
            x9: randoms[9]  ,
            x10: randoms[10]  , 
            x11: randoms[11]  ,
            x12: randoms[12]  ,
            x13: randoms[13]  ,
            x14: randoms[14]  ,
            x15: randoms[15]  ,
            x16: randoms[16]  ,
            x17: randoms[17]  ,
            x18: randoms[18]  ,
            x19: randoms[19]  ,
            x20: randoms[20]  ,
            User_ID: sessionStorage.getItem("User_ID")
        }
    
    
        postData('/insertPage22DB', data2)
        .then((data) => {})
        .catch((err) => {console.log(err)})
          


    fetch('/HTMLPage3.html')
        .then((res) => {
            window.location = res.url
        })
}


function random1(){
    var i;
    var x= Math.floor(Math.random() * 5) + 1; 
    for (i = 0; i < x; i++) {
     
    
    document.write('&#11088' + " ");
    }
    let data = {
        x: x
    }


    postData('/insertPage22DB', data)
    .then((data) => {})
    .catch((err) => {console.log(err)})
    
    
    }
  
   
    function random( n){
        var i;
        var x= Math.floor(Math.random() * 5) + 1; 
        for (i = 0; i < x; i++) {
         
        
        document.write('&#11088' + " ");
       
        }

       randoms[n]=x; 
      
  
    
        
        }
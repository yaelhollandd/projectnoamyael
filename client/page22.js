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
var y=[] ;






function submit() {

    var timeend = new Date();
    timeend= Date.now() ;
    var difftime= timeend-sessionStorage.getItem("timestart");
  if((difftime/1000)<150){
    alert("You must listen each and every song in the list before you browse to the next page");
    return;

  }
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
        inp_song11: 0 , 
        inp_song12: 0, 
        inp_song13: 0,
        inp_song14: 0,
        inp_song15: 0,
        inp_song16: 0,
        inp_song17: 0,
        inp_song18: 0,
        inp_song19: 0,
        inp_song20: 0,
        User_ID: sessionStorage.getItem("User_ID")
      
        
     
                    }
    postData('/insertPage2DB', data)
        .then((data) => {})
        .catch((err) => {console.log(err)})
        y[1]=0;
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
            x11: y[1] , 
            x12: y[1] , 
            x13: y[1] , 
            x14: y[1] ,
            x15: y[1] ,
            x16: y[1]  ,
            x17: y[1]  ,
            x18: y[1]  ,
            x19: y[1]  ,
            x20: y[1]  ,

         User_ID: sessionStorage.getItem("User_ID")
        }
    
    
        postData('/insertPage22DB', data2)
        .then((data) => {})
        .catch((err) => {console.log(err)})
          


    fetch('/HTMLPage33.html')
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
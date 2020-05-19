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

    var timeend = new Date();
    timeend= Date.now() ;
    var difftime= timeend-sessionStorage.getItem("timestart");
  if((difftime/1000)<200){
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
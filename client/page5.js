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

function submit() {
 
  


    let inp_inf1 = document.getElementById("inp_inf1");
    let inp_inf2 = document.getElementById("inp_inf2");
    let inp_inf3 = document.getElementById("inp_inf3");
    let inp_inf4 = document.getElementById("inp_inf4");
   let inp_inf5 = document.getElementById("inp_inf5");
    let inp_inf6 = document.getElementById("inp_inf6");
    let inp_inf7 = document.getElementById("inp_inf7");
    let inp_inf8 = document.getElementById("inp_inf8");
     let inp_inf9 = document.getElementById("inp_inf9");
    let inp_inf10 = document.getElementById("inp_inf10");
    let inp_inf11 = document.getElementById("inp_inf11");
     let inp_inf12 = document.getElementById("inp_inf12"); 
     let inp_inf13 = document.getElementById("inp_inf13");
     let inp_inf14 = document.getElementById("inp_inf14");  
     let inp_inf15 = document.getElementById("inp_inf15"); 
     let inp_inf16 = document.getElementById("inp_inf16"); 
     let inp_inf17 = document.getElementById("inp_inf17"); 
     let inp_inf18 = document.getElementById("inp_inf18"); 
     let workerid=  document.getElementById("workerid"); 
    
    let data = {
        inp_inf1: inp_inf1.value , 
        inp_inf2: inp_inf2.value , 
        inp_inf3: inp_inf3.value ,
       inp_inf4: parseInt(inp_inf4.value) ,
       inp_inf5: parseInt(inp_inf5.value) , 
        inp_inf6: parseInt(inp_inf6.value ), 
        inp_inf7: parseInt(inp_inf7.value) ,
         inp_inf8: inp_inf8.value,
        inp_inf9: parseInt(inp_inf9.value) , 
        inp_inf10: parseInt(inp_inf10.value) , 
        inp_inf11: parseInt(inp_inf11.value) , 
       inp_inf12: parseInt(inp_inf12.value) ,
       inp_inf13: inp_inf13.value , 
       inp_inf14: inp_inf14.value, 
       inp_inf15: inp_inf15.value,
       inp_inf16: parseInt(inp_inf16.value),
       inp_inf17: parseInt(inp_inf17.value),
       inp_inf18: parseInt(inp_inf18.value),
       workerid: workerid.value , 
       User_ID: sessionStorage.getItem("User_ID") 
       
    
    }
    postData('/insertPage5DB', data)
        .then((data) => {})
        .catch((err) => {console.log(err)})
    fetch('/Thanks.html')
        .then((res) => {
            window.location = res.url
        })
}

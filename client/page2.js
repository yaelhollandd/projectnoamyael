
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

//if you want to send data
/*
postData('https://project1noamandyael.herokuapp.com/', { answer: 42 ,
user : "me"})
    .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
    });


 */


function tmp(event) {
   
    /*event.preventDefault();*/
    
 let inp_song1 = document.getElementById("inp_song1");

  alert( inp_song1.value);
 let data = {
    
    inp_song1 :  parseInt(inp_song1.value)
    
     
 }
 postData('/insertPage2DB', data)
        .then((data) => {
            console.log(data); // JSON data parsed by `response.json()` call
        });

       
}

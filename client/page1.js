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
    let rating1 = document.getElementById("rating1");
    let rating2 = document.getElementById("rating2");
    let rating3 = document.getElementById("rating3");
    let rating4 = document.getElementById("rating4");
    let rating5 = document.getElementById("rating5");
    let rating6 = document.getElementById("rating6");
    let rating7 = document.getElementById("rating7");
    let rating8 = document.getElementById("rating8");
    let rating9 = document.getElementById("rating9");
    let rating10 = document.getElementById("rating10");
    let rating11 = document.getElementById("rating11");
    let rating12 = document.getElementById("rating12");
    let rating13 = document.getElementById("rating13");
    let rating14 = document.getElementById("rating14");
    let rating15 = document.getElementById("rating15");
    let rating16 = document.getElementById("rating16");
    let rating17 = document.getElementById("rating17");
    let rating18 = document.getElementById("rating18");
    let rating19 = document.getElementById("rating19");
    let rating20 = document.getElementById("rating20");
    

    let data = {
        rating1: parseInt(rating1.value) ,
        rating2: parseInt(rating2.value) ,
        rating3: parseInt(rating3.value) ,
        rating4: parseInt(rating4.value) ,
        rating5: parseInt(rating5.value) ,
        rating6: parseInt(rating6.value) , 
        rating7: parseInt(rating7.value) ,
        rating8: parseInt(rating8.value) ,
        rating9: parseInt(rating9.value) ,
        rating10: parseInt(rating10.value) ,
        rating11: parseInt(rating11.value) ,
        rating12: parseInt(rating12.value) , 
        rating13: parseInt(rating13.value) ,
        rating14: parseInt(rating14.value) ,
        rating15: parseInt(rating15.value) ,
        rating16: parseInt(rating16.value) ,
        rating17: parseInt(rating17.value) ,
        rating18: parseInt(rating18.value) ,
        rating19: parseInt(rating19.value) ,
        rating20: parseInt(rating20.value) 

    }
    postData('/insertPage1DB', data)
        .then((data) => {})
        .catch((err) => {console.log(err)})
    fetch('/HTMLPage2.html')
        .then((res) => {
            window.location = res.url
        })
}

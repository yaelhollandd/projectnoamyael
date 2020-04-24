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
    let inp_song_nr21 = document.getElementById("inp_song_nr21");
    let inp_song_nr22 = document.getElementById("inp_song_nr22");
    let inp_song_nr23 = document.getElementById("inp_song_nr23");
    let inp_song_nr24 = document.getElementById("inp_song_nr24");
    let inp_song_nr25 = document.getElementById("inp_song_nr25");
    let data = {
        inp_song_nr21: parseInt(inp_song_nr21.value),
        inp_song_nr22: parseInt(inp_song_nr22.value),
        inp_song_nr23: parseInt(inp_song_nr23.value),
        inp_song_nr24: parseInt(inp_song_nr24.value),
        inp_song_nr25: parseInt(inp_song_nr25.value),
        User_ID: sessionStorage.getItem("User_ID")
    }
    postData('/insertPage3DB', data)
        .then((data) => {})
        .catch((err) => {console.log(err)})
    fetch('/HTMLPage5.html')
        .then((res) => {
            window.location = res.url
        })
}

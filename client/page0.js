
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
    
    
    function test0() {
       
let first_id=11;



     sessionStorage.setItem("first_id",8);
      let data3 = {
        first_id:first_id
     }
        fetch('/HTMLPage0',data3)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
               idLbl = document.getElementById("labelId")
                idLbl.innerText = data[0].id
                //idLblD = document.getElementById("labelDevice")
                //idLblD.innerText = data[0].device
                v=data[0].device
                e=v.localeCompare("p")
                console.log(v)
                console.log(e)
                if(e==0){
                document.getElementById("Device2").textContent= "  PC(Desktop)   "
                document.getElementById("Device3").textContent= "  PC(Desktop)   "
                }
                else{
                document.getElementById("Device2").textContent= " Smartphone   "
                document.getElementById("Device3").textContent= " Smartphone   "
                }
                sessionStorage.setItem("no",data[0].id)
                sessionStorage.setItem("use",data[0].is_use)
                sessionStorage.setItem("device",data[0].device)
                sessionStorage.setItem("Listen",data[0].Listen)
                //v=data[0].id

                             
                                          
            })
            .catch((err) => {
                console.log(err)
            })
            
    

    }


    function test(){
    

        var k= 0; 
        var p= 0;

        
         p=test0();

  

    }

    
    test()

    
    function adress2(){

        let data2 = {
               
            first_id:sessionStorage.getItem("no")
          
      }
      postData('/insertPage0DB', data2)
             .then((data2) => {})
         .catch((err) => {console.log(err)})
         


}







    
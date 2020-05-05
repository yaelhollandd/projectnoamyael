
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


//let number=num;
     sessionStorage.setItem("first_id",8);
      let data3 = {
             
        //first_id:sessionStorage.getItem("first_id")
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
                sessionStorage.setItem("no",data[0].id)
                sessionStorage.setItem("use",data[0].is_use)
                sessionStorage.setItem("device",data[0].device)
                sessionStorage.setItem("Listen",data[0].Listen)
                //v=data[0].id

                             
                                          
            })
            .catch((err) => {
                console.log(err)
            })
            
            /*let v=document.getElementById("labelId");
            
            let data2 = {
               
                //first_id : parseInt(v.value)
                //first_id:sessionStorage.getItem("first_id")
              first_id : first_id
          }
          postData('/insertPage0DB', data2)
                 .then((data2) => {})
             .catch((err) => {console.log(err)})
            return 50;
           // document.write("lllllllllllll"+sessionStorage.getItem("ll"))
*/
    }


    function test(){
    
        //sessionStorage.setItem("first_id",1);
        //sessionStorage.setItem("isUse",2);
        var k= 0; 
        var p= 0;
       // var Use=0;
        //while (sessionStorage.getItem("isUse")==0) {
        // while(x<6){
        
         p=test0();
         //k=test2();
        // if(sessionStorage.getItem("use")==0)
         //x=4
         //else
          //x++;
          //use=1
        //}
  

    }

    
    test()


    function adress(){

        let data2 = {
               
            first_id:sessionStorage.getItem("no")
          
      }
      postData('/insertPage0DB', data2)
             .then((data2) => {})
         .catch((err) => {console.log(err)})
         
         
         document.getElementById("expiID2").innerText=sessionStorage.getItem("no")
         document.getElementById("URL").textContent="Your URL is :  ";
         document.getElementById("expiID").textContent=" Remember your Experiment ID :";
         document.getElementById("expiID3").textContent="  (you will need to enter it later)";
         let p="p";
         let e=sessionStorage.getItem("device").localeCompare(p);
         let N="N";
         let e2=sessionStorage.getItem("Listen").localeCompare(N);
         console.log(e);
         if(e==0 && e2==0){
         document.getElementById("Device").textContent=
         "recommendationsystemsongs.herokuapp.com   ";
       
         document.getElementById("Device2").textContent=
         " please open the link in a new window on your PC(Desktop)   ";
      
         
        }
        if(e==0 && e2!=0){
            document.getElementById("Device").textContent=
            " recommendationsystemsongs.herokuapp.com  ";
          
            document.getElementById("Device2").textContent=
        "    please open the link in a new window on your PC(Desktop)   ";
     
            
           }
   

        if(e!=0 && e2==0){

        document.getElementById("Device").textContent=
        " recommendationsystemsongs.herokuapp.com    ";
     
        document.getElementById("Device2").textContent=
        "  please open the link in a new window on your Mobile  ";
     
    }

    if(e!=0 && e2!=0){
        document.getElementById("Device").textContent=
        " recommendationsystemsongs.herokuapp.com    ";
        document.getElementById("Device2").textContent=
        "    please open the link in a new window on your Mobile  ";
     

    }

}




    
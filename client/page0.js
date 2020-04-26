



function test() {
   
    Alert("You need to check the box before you can continue");
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => ...)

}

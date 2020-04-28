
    function test() {
       
        fetch('/HTMLPage0')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                idLbl = document.getElementById("labelId")
                idLbl.innerText = data[0].id
                let v = data[0]

            })
            .catch((err) => {
                console.log(err)
            })

    }
    test()

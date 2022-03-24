function send() {
        var name = document.getElementById("name")
        var text = document.getElementById("text")

        console.log(name.value + "  " + text.innerHTML)

        text.innerHTML = "Velkommen, vi ønsker deg alt som er godt, " + name.value + "!";
    }   

        document.getElementById("random").innerHTML = Math.floor(Math.random() * 10)
    setInterval(function() {
        document.getElementById("random").innerHTML = Math.floor(Math.random() * 10)
    }, 60 * 1000);

    function random() {
        var num = document.getElementById("num")
        var random = document.getElementById("random")

        if (num.value === random.innerHTML) {
            document.body.style.backgroundColor = "green";
        }


    }

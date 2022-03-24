// send 
function send() {
    localStorage.setItem("name", document.getElementById('name').value)

    console.log(localStorage.getItem("name"))

    document.getElementById("text").innerHTML = "Velkommen, vi ønsker deg alt som er godt, " + localStorage.getItem("name") + "!";
} 

// set random number


function random() {
    var num = document.getElementById("num")
    var random = document.getElementById("random")

    if (num.value === random.innerHTML) {
        document.body.style.backgroundColor = "green";
    } else {

    }


}

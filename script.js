// send 
function send() {
    localStorage.setItem("navn", document.getElementById("name"))
    localStorage.setItem("text", document.getElementById("text"))

    console.log(localStorage.getItem("name") + "  " + localStorage.getItem("text"))

    text.innerHTML = "Velkommen, vi ønsker deg alt som er godt, " + localStorage.getItem("name") + "!";
}   
// set random number
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

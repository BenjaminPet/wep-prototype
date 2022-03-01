function send() {
    var name = document.getElementById("name")
    var text = document.getElementById("text")

    console.log(name.value + "  " + text.innerHTML)

    text.innerHTML = "Velkommen, vi ønsker deg alt som er godt, " + name.value + "!";
}



// send 
function send() {
    localStorage.setItem("name", document.getElementById('name').value)

    console.log(localStorage.getItem("name"))

    document.getElementById("text").innerHTML = "Velkommen, vi ønsker deg alt som er godt, " + localStorage.getItem("name") + "!";
} 


function random() {
    var num = document.getElementById("num")
    var random = document.getElementById("random")

    if (num.value === random.innerHTML) {
        document.body.style.backgroundColor = randomcolor();
        document.getElementById("random").innerHTML = Math.floor(Math.random() * 10)
    } else {
        document.body.style.backgroundColor = "white";
    }


}

function randomcolor() {
    var n = Math.floor(Math.random() * 10)

    if (n === 0) {
        return "red";
    } else if(n === 1) {
        return "blue";
    } else if(n === 2) {
        return "yellow";
    } else if(n === 3) {
        return "green";
    } else if(n === 4) {
        return "purple";
    } else if(n === 5) {
        return "pink";
    } else if(n === 6) {
        return "orange";
    } else if(n === 7) {
        return "darkgray";
    } else if(n === 8) {
        return "lightcoral";
    } else if(n === 9) {
        return "gray";
    }
 
}

// next page

function namegame() {
    window.location.href = "index.html";
}

function randomgame() {
    console.log("hfhfhf")
    window.location.href = "random.html";
}



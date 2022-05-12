var myVideo = document.getElementById("scare");


function showMelina(){
    document.getElementById('melina').classList.remove("hidden");
    const audio = new Audio("./image/woof.mp3");
    audio.play();
    document.getElementById("quiz").style.display = "none"
}

function fuckYou(){
    document.getElementById("quiz").style.display = "none"
    document.getElementById('scare').classList.remove("myVideo");
    myVideo.play()
    alert("Busted")
}
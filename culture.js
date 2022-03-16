window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("haut").style.display = "block";
        document.getElementById("cmidelet").style.display = "none";
    } else {
        document.getElementById("haut").style.display = "none";
        document.getElementById("cmidelet").style.display = "block"
    }
}

function retourHaut() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
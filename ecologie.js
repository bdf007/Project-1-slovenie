scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 6) {
        document.getElementById("banniere").style.display = "none";
    } else {
        document.getElementById("banniere").style.display = "block"
    }
};
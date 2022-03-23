window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20) {
        document.getElementById(".header").style.display = "none";
        // document.getElementById(".header").style.position = "initial";
    } else {
        document.getElementById(".header").style.display = "block";
        // document.getElementById(".header").style.position = "fixed";
    }
};
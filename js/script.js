// slideshow function
let intIndex = 0;

function showImage(i) {
    intIndex += i;

    let theImages = document.getElementsByClassName("image");
    let theDots = document.getElementsByClassName("dot");

    for (let n = 0; n < theImages.length; n++) {
        theImages[n].style.display = "none";
        theDots[n].className = theDots[n].className.replace(" active", "")
    }

    if (intIndex > theImages.length - 1) {
        intIndex = 0;
    }

    if (intIndex < 0) {
        intIndex = theImages.length - 1;
    }

    theImages[intIndex].style.display = "block";
    theDots[intIndex].className += " active";
}

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("cornerbtn").style.display = "block";
    } else {
        document.getElementById("cornerbtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = function () {
    document.getElementById("copyrightyear").innerHTML = new Date().getFullYear();
}
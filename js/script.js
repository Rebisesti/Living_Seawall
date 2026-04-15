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
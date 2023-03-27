var imagen =1;
displaydiv2(imagen);

function nextimg2(a){
    displaydiv2(imagen += a)
}

function currentSlide2(a){
    displaydiv2(imagen = a)
}

function displaydiv2(a){
    var b;
    var imagel = document.getElementsByClassName("slidess2");
    var dots2 = document.getElementsByClassName("dot2");

    if(a > imagel.length){
        imagen = 1;
    }

    if(a < 1){
        imagen = imagel.length;
    }

    for(b=0; b < imagel.length; b++){
        imagel[b].style.display = "none";
    }

    for(b=0; b < imagel.length; b++){
        dots2[b].className = dots2[b].className.replace(" active2", "");
    }

    imagel[imagen - 1].style.display = "block";
    dots2[imagen - 1].className += " active2";

}
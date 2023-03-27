var imageno =1;
displaydiv(imageno);

function nextimg(n){
    displaydiv(imageno += n)
}

function currentSlide(n){
    displaydiv(imageno = n)
}

function displaydiv(n){
    var i;
    var image = document.getElementsByClassName("slidess");
    var dots = document.getElementsByClassName("dot");

    if(n > image.length){
        imageno = 1;
    }

    if(n < 1){
        imageno = image.length;
    }

    for(i=0; i < image.length; i++){
        image[i].style.display = "none";
    }

    for(i=0; i < image.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display = "block";
    dots[imageno - 1].className += " active";

}


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

var imag =1;
displaydiv3(imag);

function nextimg3(c){
    displaydiv3(imag += c)
}

function currentSlide3(c){
    displaydiv3(imag = c)
}

function displaydiv3(c){
    var d;
    var images = document.getElementsByClassName("slidess3");
    var dots3 = document.getElementsByClassName("dot3");

    if(c > images.length){
        imag = 1;
    }

    if(c < 1){
        imag = images.length;
    }

    for(d=0; d < images.length; d++){
        images[d].style.display = "none";
    }

    for(d=0; d < images.length; d++){
        dots3[d].className = dots3[d].className.replace(" active3", "");
    }

    images[imag - 1].style.display = "block";
    dots3[imag - 1].className += " active3";

}
//Get the button
function FuncScroll() {
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0;
}
//----------------------------------------------------------------------
//Meniu-----------------------------------------------------------------------
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//SlideShow-----------------------------------------------------------------
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous 
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


//Jocul cu Personaje----------------------------------------------------------------------------
function removeElement() {
    document.getElementById("imgbox1").style.display = "none";
}

function resetElement() {
    document.getElementById("imgbox1").style.display = "block";
    document.getElementById("imgbox2").style.visibility = "visible";
}


//Site Oficial------------------------------------------------------------------------------------
function Site_oficial() {
    var iframe = document.createElement('iframe');
    var button = document.createElement('div');
    button.setAttribute("id", "Div1");
    iframe.setAttribute("id", "IFRAME");
    iframe.src =
        'https://en.wikipedia.org/wiki/The_Good_Doctor_(TV_series)';
    document.getElementById('body').appendChild(iframe);

    button.innerHTML = "<p id='Para'> Inchide fereastra. <button id='Buton_Inchide' onclick='Buton_Inchidere()'>Inchide. </button></p>";
    document.getElementById('body').appendChild(button);
}

function Buton_Inchidere() {
    var div = document.getElementById("Div1");
    var IFRAME = document.getElementById("IFRAME");
    var body = document.getElementById("body");
    body.removeChild(IFRAME);
    body.removeChild(div);
}
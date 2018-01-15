window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// Scrolling --> nav bar background color change

var  nav = document.getElementById('nav');

 window.onscroll = function(){

   if (window.pageYOffset >3) {

     nav.style.background = "linear-gradient(to bottom,#1a6695,#3377a2)";
     nav.style.boxShadow = "0px 0px 0px blue";
   }
   else{
     nav.style.background = "transparent";
     nav.style.boxShadow = "none";
   }
 }


//@ window.onscroll ֆունկցիան կկանչի scrollFunction(), իսկ թե էդ ինչ կանի, նայի իրա մեջ
var  nav = document.getElementById('nav');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
        document.getElementById("myBtn").style.display = "block";
        nav.classList.add("Anime");
        nav.classList.remove("Black");
        console.log(window.pageYOffset);

    } else {
        document.getElementById("myBtn").style.display = "none";
        nav.classList.remove("Anime");
        nav.classList.add("Black");
      }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var currentLocation = location.href;
var navLinks = document.querySelectorAll("nav a");
var menuLength = navLinks.length;

for (var i = 0; i < menuLength; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].className = "active";
  }
}

const myElement = document.querySelector('nav');
const elementPosition = myElement.offsetTop;

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= elementPosition) {
    myElement.classList.add('fixed');
  } else {
    myElement.classList.remove('fixed');
  }
});





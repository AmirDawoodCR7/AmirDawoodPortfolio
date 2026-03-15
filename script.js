        // LOADING JAVA SCRIPT 

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},2000);

});











                //  THIS IS FOR TYPING 

const typedText = ["Frontend Web Developer", "AI Video Creator", "Video Editor"];
const typingSpan = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 150;

function type() {
    const currentText = typedText[textIndex];
    if(isDeleting){
        typingSpan.textContent = currentText.substring(0, charIndex--);
    } else {
        typingSpan.textContent = currentText.substring(0, charIndex++);
    }

    if(!isDeleting && charIndex === currentText.length){
        isDeleting = true;
        speed = 100;
    } else if(isDeleting && charIndex === 0){
        isDeleting = false;
        textIndex = (textIndex + 1) % typedText.length;
        speed = 150;
    }

    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);






              // FOR SCROLLING 



window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("scroll-progress").style.width = scrollPercent + "%";
});








    const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.getElementById("menu-overlay");

// Toggle menu & overlay
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
  overlay.classList.toggle("active");
});

// Close menu when clicking a nav link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
    overlay.classList.remove("active");
  });
});

// Close menu when clicking outside nav-links (on document)
document.addEventListener("click", (e) => {
  if(navLinks.classList.contains("active") && 
     !navLinks.contains(e.target) && 
     !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
    overlay.classList.remove("active");
  }
});

// Close menu when clicking overlay
overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  hamburger.classList.remove("toggle");
  overlay.classList.remove("active");
});









// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
/* ==========================================
   TYPING ANIMATION
========================================== */


const words = [

    "Software Developer",
    "Web Developer",
    "Data Analyst",
    "Cybersecurity Enthusiast"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


const typing = document.getElementById("typing");


function typeEffect(){


    let currentWord = words[wordIndex];


    if(!deleting){


        typing.textContent = currentWord.substring(0,charIndex++);


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }


    }else{


        typing.textContent = currentWord.substring(0,charIndex--);


        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }


    }


    setTimeout(typeEffect,100);

}


typeEffect();





/* ==========================================
   MOBILE MENU
========================================== */


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector("nav ul");


menuToggle.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});





/* ==========================================
   DARK MODE TOGGLE
========================================== */


const themeButton = document.getElementById("theme-toggle");


themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

        themeButton.textContent="☀️";

    }else{

        themeButton.textContent="🌙";

    }


});





/* ==========================================
   FADE SCROLL ANIMATION
========================================== */


const fadeElements = document.querySelectorAll(".fade");


function reveal(){

    fadeElements.forEach(element=>{

        const position = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;


        if(position < windowHeight - 100){

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", reveal);

reveal();





/* ==========================================
   SKILL BAR ANIMATION
========================================== */


const skillsSection = document.querySelector(".skills");


const progressBars = document.querySelectorAll(".progress");


window.addEventListener("scroll",()=>{


    let sectionPosition = skillsSection.getBoundingClientRect().top;


    let screenPosition = window.innerHeight;


    if(sectionPosition < screenPosition){


        progressBars.forEach(bar=>{


            bar.classList.add("show");


        });


    }


});





/* ==========================================
   BACK TO TOP BUTTON
========================================== */


const topButton = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.style.display="block";


    }else{


        topButton.style.display="none";


    }


});


topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});

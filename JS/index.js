//const { faWon } = require("@fortawesome/free-solid-svg-icons");


const primaryNav = document.querySelector(".mobile-navigation");
const navToggle = document.querySelector(".openMenu");
const navClose = document.querySelector(".closeMenu");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")
    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navClose.setAttribute("aria-expanded", false);
    }else if(visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        navClose.setAttribute("aria-expanded", true);
    }
});

navClose.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navClose.setAttribute("aria-expanded", false);
    }else if(visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        navClose.setAttribute("aria-expanded", true);
    }
});



// function addStateMain(){
//     let stateObj = { id: "main1"};
//     window.history.pushState(stateObj, "Main", "./main.html");
// }

// function addStateDestination(){
//     let stateObj = { id: "destination1"};
//     window.history.pushState(stateObj, "Destination", "./destination.html");
// }

// function addStateCrew(){
//     let stateObj = { id: "crew1"};
//     window.history.pushState(stateObj, "Crew", "./crew.html");
// }

// function addStateTechnology(){
//     let stateObj = { id: "technology1"};
//     window.history.pushState(stateObj, "Technology", "./technology.html");
// }

 //NAVIGATION PLANETS
 let slideIndex = 1;
 let slideText = 1;
 showSlides(slideIndex);
 showSlidesText(slideText);

 // Thumbnail image controls
 function currentSlide(n) {
   showSlides(slideIndex = n);
   showSlidesText(slideText = n);
 }

 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("slide");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     slides[slideIndex-1].style.display = "block";
 }

 function showSlidesText(n){
     let i;
     let sliderWithText = document.getElementsByClassName("information");
     if (n > sliderWithText.length) {slideText = 1}
     if (n < 1) {slideText = sliderWithText.length}
     for (i=0; i < sliderWithText.length; i++){
         sliderWithText[i].style.display = "none";
     }
     sliderWithText[slideText-1].style.display = "block";
 }


//MOBILE
// const checkMediaQueryMobile = window.matchMedia('(min-width:375px)')
// if (checkMediaQueryMobile.matches){
//     //NAVIGATION PLANETS
//     let slideIndex = 1;
//     let slideText = 1;
//     showSlides(slideIndex);
//     showSlidesText(slideText);

//     // Thumbnail image controls
//     function currentSlide(n) {
//       showSlides(slideIndex = n);
//       showSlidesText(slideText = n);
//     }

//     function showSlides(n) {
//       let i;
//       let slides = document.getElementsByClassName("slide");
//       if (n > slides.length) {slideIndex = 1}
//       if (n < 1) {slideIndex = slides.length}
//       for (i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";
//         }
//         slides[slideIndex-1].style.display = "block";
//     }

//     function showSlidesText(n){
//         let i;
//         let sliderWithText = document.getElementsByClassName("information");
//         if (n > sliderWithText.length) {slideText = 1}
//         if (n < 1) {slideText = sliderWithText.length}
//         for (i=0; i < sliderWithText.length; i++){
//             sliderWithText[i].style.display = "none";
//         }
//         sliderWithText[slideText-1].style.display = "block";
//     }
// }

// // DESKTOP
// const checkMediaQueryDesktop = window.matchMedia('(min-width:980px)')
// if(checkMediaQueryDesktop.matches){
//         let slideDesktopIndex = 1;
//         let slideDesktopText = 1;
//         showSlides(slideDesktopIndex);
//         showSlidesText(slideDesktopText);
        
//         // Thumbnail image controls
//         function currentSlide(n) {
//           showSlides(slideDesktopIndex = n);
//           showSlidesText(slideDesktopText = n);
//         }

//         function showSlides(n) {
//           let i;
//           let slides = document.getElementsByClassName("slide-d");
//           if (n > slides.length) {slideDesktopIndex = 1}
//           if (n < 1) {slideDesktopIndex = slides.length}
//           for (i = 0; i < slides.length; i++) {
//               slides[i].style.display = "none";
//             }
//             slides[slideDesktopIndex-1].style.display = "block";
//         }

//         function showSlidesText(n){
//             let i;
//             let sliderWithText = document.getElementsByClassName("information-d");
//             if (n > sliderWithText.length) {slideDesktopText = 1}
//             if (n < 1) {slideDesktopText = sliderWithText.length}
//             for (i=0; i < sliderWithText.length; i++){
//                 sliderWithText[i].style.display = "none";
//             }
//             sliderWithText[slideDesktopText-1].style.display = "block";
//         }
// }


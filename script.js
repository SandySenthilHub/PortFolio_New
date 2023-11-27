

// //tab6
var tabskills = document.getElementsByClassName('tabSkill');
var skillCon = document.getElementsByClassName('sk');

opentabsk = (name) => {
for (tabskill of tabskills) {
tabskill.classList.remove('acti')
}
for (skillContact of skillCon) {
skillContact.classList.remove('act')
}

event.currentTarget.classList.add('acti')
document.getElementById(name).classList.add('act')
}


// //tab7

var tablinks = document.getElementsByClassName('tabLinks');
var id = document.getElementsByClassName('ID')

opentab = (tabname) => {
for (tablink of tablinks) {
tablink.classList.remove("active")
}
for (ids of id) {
ids.classList.remove('activeTab')
}
event.currentTarget.classList.add("active")
document.getElementById(tabname).classList.add('activeTab')

}

// nav
var mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {

"use strict";

mainListDiv.classList.toggle("show");
mediaButton.classList.toggle("active");
};

//Project Images

    // let slideIndex = 1;
    // showSlides(slideIndex);

    // // Next/previous controls
    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // // Thumbnail image controls
    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     let dots = document.getElementsByClassName("dot");
    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" imgActive", "");
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " imgActive";
    // } 


    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    } 



    
        let slideIndexA = [1,1];
        let slideId = ["mySlides1", "mySlides2"]
        showSlidesA(1, 0);
        showSlidesA(1, 1);
        
        function plusSlides(n, no) {
          showSlidesA(slideIndexA[no] += n, no);
        }
        
        function showSlidesA(n, no) {
          let i;
          let x = document.getElementsByClassName(slideId[no]);
          if (n > x.length) {slideIndexA[no] = 1}    
          if (n < 1) {slideIndexA[no] = x.length}
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";  
          }
          x[slideIndexA[no]-1].style.display = "block";  
        }
        
        
        let slideIndexx = 0;
        showSlidess();
        
        function showSlidess() {
          let j;
          let slidess = document.getElementsByClassName("mySlide");
          for (j = 0; j < slidess.length; j++) {
            slidess[j].style.display = "none";
          }
          slideIndexx++;
          if (slideIndexx > slidess.length) {slideIndexx = 1}
          slidess[slideIndexx-1].style.display = "block";
          setTimeout(showSlidess, 2000); // Change image every 2 seconds
        } 
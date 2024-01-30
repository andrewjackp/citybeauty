document.addEventListener('DOMContentLoaded', function () {

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = document.querySelector(".slide").clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

document.querySelector(".first-card").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
})

document.querySelector(".second-card").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
})

document.querySelector(".third-card").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
})

document.querySelector(".continue").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
})

document.querySelector(".skip-box").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
})

$(document).ready(function(){
  $('.first-card').click(function(){
  if($('.first-card .active').length){
 $('.first-card .active').not($(this)).removeClass('.first-card .active').addClass('.first-card');
 } 
 $(this).removeClass('.first-card').addClass('active');     
 
 }); 

 $('.second-card').click(function(){
  if($('.second-card .active').length){
 $('.second-card .active').not($(this)).removeClass('.second-card .active').addClass('.second-card');
 } 
 $(this).removeClass('.second-card').addClass('active');     
 }); 
 
 $('.third-card').click(function(){
  if($('.third-card .active').length){
 $('.third-card .active').not($(this)).removeClass('.third-card .active').addClass('.third-card');
 } 
 $(this).removeClass('.third-card').addClass('active');     
 });   
 });

//  $(function() {
//   $("button").click(function() {
//     var target = $(this).data("rel");
//     $(target).toggleClass("highlight");
//   });
// });



})

function validate() {
  if (document.getElementById('skin').checked) {
      document.querySelector('.continue').classList.add("highlight");
      document.querySelector('.pg1-first-card').classList.add('active')
      document.querySelector('.skip-box').classList.add("unhighlight");
  } else {
      document.querySelector('.continue').classList.remove("highlight")
      document.querySelector('.pg1-first-card').classList.remove('active')
      document.querySelector('.skip-box').classList.remove('unhighlight')
  }
}

function validate2(){
  if (document.getElementById('arms').checked) {
    document.querySelector('.continue').classList.add("highlight");
    document.querySelector('.pg1-second-card').classList.add('active')
    document.querySelector('.skip-box').classList.add("unhighlight");
} else {
    document.querySelector('.continue').classList.remove("highlight")
    document.querySelector('.pg1-second-card').classList.remove('active')
    document.querySelector('.skip-box').classList.remove('unhighlight')
}}

function validate3(){
  if (document.getElementById('neck').checked) {
    document.querySelector('.continue').classList.add("highlight");
    document.querySelector('.pg1-third-card').classList.add('active')
    document.querySelector('.skip-box').classList.add("unhighlight");
} else {
    document.querySelector('.continue').classList.remove("highlight")
    document.querySelector('.pg1-third-card').classList.remove('active')
    document.querySelector('.skip-box').classList.remove('unhighlight')
}}
function validate4(){
  if (document.getElementById('saggy').checked) {
    document.querySelector('.continue').classList.add("highlight");
    document.querySelector('.pg1-fourth-card').classList.add('active')
    document.querySelector('.skip-box').classList.add("unhighlight");
} else {
    document.querySelector('.continue').classList.remove("highlight")
    document.querySelector('.pg1-fourth-card').classList.remove('active')
    document.querySelector('.skip-box').classList.remove('unhighlight')
}}
'use strict';

$(function() {

  const pagination = $('.pagination');
  const photosList = $('.photos-list');
  let currentSlide = 0; //zmienna wykorzystywana przy przesuwaniu slajdów, mnożona przez szerokość zdjęcia
  let runIntervalId; //zmienna przechowująca ID setInterval, potrzebna do clearInterval

  function nextSlide() {
    if(currentSlide > 3) { //dlaczego 3 a nie 4?
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    changeSlide(currentSlide);
  }

  function previousSlide() {
    if(currentSlide < 1) {
      currentSlide = 4;
    } else {
      currentSlide--;
    }
    changeSlide(currentSlide); //wartość currentSlide podstawiana pod (slide)
  }

  pagination.on('click', 'li', function() {
    currentSlide = $(this).index();
    changeSlide(currentSlide);
    restartInterval();
  });

  function restartInterval() {
    clearInterval(runIntervalId);
    runInterval();
  }

// CHANGE SLIDES 

  function runInterval() { 
    runIntervalId = setInterval(nextSlide, 3000); //set interval podanie funkcji a nie jej wywołanie czyli bez ();
    } //changeSlide bez nawiasu w console.log podaje kod funkcji bez jej wywołania

  function changeSlide(slide) {
    pagination.find('.active').removeClass('active'); //bez kropki bo removeClass z definicji dotyczy klasy
    pagination.find('li').eq(slide).addClass('active');
    photosList.animate({marginLeft: -400 * slide}, 500);
  }

  // function() {
  //   $(this).find('li:last').after($(this).find('li:first'));
  //   $(this).css('marginLeft', '0');
  // };

  // function stopInterval() {
  //   clearInterval(runIntervalId);
  // }

  // $('#carousel').on('mouseenter', stopInterval).on('mouseleave', runInterval);

// PREV NEXT BUTTONS
  $('#btn-prev').click(function() {
    previousSlide();
    restartInterval();
  }); //button-prev click

  $('#btn-next').click(function(){
    nextSlide();
    restartInterval();
  }); //button-next click

  runInterval();

}); // $( document ).ready()
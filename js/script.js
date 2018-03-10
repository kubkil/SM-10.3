'use strict';

$(function() {
  setInterval(function(){
    $('#carousel ul').animate({marginLeft: '-400px'}, 500, function(){
        $(this).find('li:last').after($(this).find('li:first'));
        $(this).css('marginLeft', '0');
    })
  }, 3000);
});

// $(function() {
  
//   const carouselList = $('#carousel ul');
//   function moveFirstSlide() {
//     const firstItem = carouselList.find('li:first');
//     const lastItem = carouselList.find('li:last');
//     lastItem.after(firstItem);
//     carouselList.css({marginLeft: '0'});
//   }
//   function changeSlides() {
//     carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
//   }
//   setInterval(changeSlides, 3000);

// });
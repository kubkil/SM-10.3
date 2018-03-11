'use strict';

  
$(function() {

  let runIntervalId;

// CHANGE SLIDES 
  function runInterval() { 
    runIntervalId = setInterval(function() {
        $('#carousel ul').animate({marginLeft: '-400px'}, 500, function() {
            $(this).find('li:last').after($(this).find('li:first'));
            $(this).css('marginLeft', '0');
        });
      }, 5000);
    }

  function stopInterval() {
    clearInterval(runIntervalId);
  }

  runInterval();

  $('#carousel').on('mouseenter', stopInterval).on('mouseleave', runInterval);

// PAGINATION
  function changeBtns() {
    const currentBtn = $('.pagination-btn.active');
    const nextBtn = currentBtn.next();
    currentBtn.removeClass('active');
    nextBtn.addClass('active');
  }

  setInterval(changeBtns, 5000, function() {
    find('pagination-btn:last').after('pagination-btn:last').find('pagination-btn:first');    
  });

// PREV NEXT BUTTONS
  $('#btn-prev').click(function() {
    $('#carousel ul').animate({marginLeft: '0'}, 500, function(){
      $(this).find('li:first').before($(this).find('li:last'));
      $(this).css({marginLeft: '-400px'});
    });
  }); //button-prev click

  $('#btn-next').click(function() {
    $('#carousel ul').animate({marginLeft: '-400px'}, 500, function(){
      $(this).find('li:last').after($(this).find('li:first'));
      $(this).css({marginLeft: 0});
    });
  }); //button-next click

}); // $( document ).ready()
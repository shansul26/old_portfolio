//code to set when left nav should become sticky

$(document).ready(function () {
    $('#main-nav').affix({
      offset: {
        top: $('#cover-page').outerHeight()
      }
    });
 });

 $(window).resize(function () {
    $('#main-nav').data('bs.affix').options.offset.top = $('#cover-page').outerHeight();
 });
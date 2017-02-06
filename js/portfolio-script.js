//code to set when left nav should become sticky

$(document).ready(function () {
    $('#main-nav').affix({
      offset: {
        top: $('#cover-page').outerHeight()
      }
    });
    
    $('body').scrollspy({target: "#main-nav"});
    
    // Add smooth scrolling on all links inside the navbar
    $(".nav a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });

        } // End if
    });
    
    $("#resume-download").on('click', downloadResume);
 });

 $(window).resize(function () {
    $('#main-nav').data('bs.affix').options.offset.top = $('#cover-page').outerHeight();
 });

function downloadResume () {
    console.log("downloading resume");
    window.open("https://drive.google.com/open?id=0B9Mvk0EG_5EvSnlENXdWSkxabDQ");
}
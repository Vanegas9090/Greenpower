$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash != "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body, div').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $('.Hideme').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 1500);
      }
    });

    /* Check the location of each desired element */
    $('.HidemeBefore').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > (bottom_of_object - 350)) {
        $(this).animate({
          'opacity': '1'
        }, 1500);
      }
    });
  });
});

function loading(evento) {
  $("#loading").fadeOut();
  $("#loading").fadeOut("slow");
  $("#loading").fadeOut(3000, function () {
    document.getElementById("loading").style.display = "none";
  });
  //
}

function LogoAppears() {
  var bottom_of_object = $('#MainLogo').offset().top + $('#MainLogo').outerHeight();
  var bottom_of_window = $(window).scrollTop() + $(window).height();

  /* If the object is completely visible in the window, fade it it */
  if (bottom_of_window > bottom_of_object) {
    $('#MainLogo').animate({
      'opacity': '1'
    }, 1500);
  }
}

function toggleMenu() {
  var target = $('.SlideBtn').parent().children(".SlideContent");
  $(target).slideToggle();
}

function toggleMenuOutside() {
  if ($('.SlideContent').css('display') == 'block' && $('.MenuLogo2').css('display') == 'block') {
      // Acción si el elemento no es visible
      toggleMenu();
  }
} 
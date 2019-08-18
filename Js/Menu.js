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
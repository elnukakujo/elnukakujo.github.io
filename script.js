window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 50) { // Change 50 to the scroll threshold you want
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
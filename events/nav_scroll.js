window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var sidebar = document.getElementById('sidebar');
    if (window.scrollY > 50) { // Change 50 to the scroll threshold you want
        nav.classList.add('scrolled');
        sidebar.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        sidebar.classList.remove('scrolled');
    }
});
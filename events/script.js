window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var menu = document.getElementById('menu-toggle');
    var sidebar = document.getElementById('sidebar');
    if (window.scrollY > 50) { // Change 50 to the scroll threshold you want
        nav.classList.add('scrolled');
        menu.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        menu.classList.remove('scrolled');
        sidebar.classList.remove('visible');
        menu.classList.remove('menu-open');
    }
});
document.querySelector('#menu-toggle').addEventListener('click', function() {
    this.classList.toggle('menu-open');
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
});
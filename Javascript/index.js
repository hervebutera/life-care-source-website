window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
  
    if ( (window.scrollY ) > navbar.offsetHeight ) {
        navbar.style.backgroundColor = "#FFFFFF";
        navbar.style.boxShadow = "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";        
    } else {
        navbar.style.backgroundColor = "#00000000";
        navbar.style.boxShadow = "none";
    }
});

window.onload = function () {
    const mobile_menu = document.getElementById('mobile-menu');
    const menu_open_btn = document.getElementById('menu-open');
    const mobile_menu_bg_blocker = document.getElementById('mobile-menu-bg-blocker');

    menu_open_btn.addEventListener('click', function() {
        mobile_menu.classList.remove('custom-left-full');
        mobile_menu.classList.add('custom-width-full');
        mobile_menu_bg_blocker.classList.remove('hidden')
        mobile_menu_bg_blocker.classList.add('mobile-menu-bg-blocker')
    })

    const menu_close_btn = document.getElementById('menu-close');

    menu_close_btn.addEventListener('click', function() {
        mobile_menu.classList.remove('custom-width-full');
        mobile_menu.classList.add('custom-left-full');
        mobile_menu_bg_blocker.classList.remove('mobile-menu-bg-blocker')
        mobile_menu_bg_blocker.classList.add('hidden')
    })
}

window.addEventListener('scroll', reveal);               

function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 0;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add("arrived");
            } else {
                reveals[i].classList.remove("arrived")
            }
    } 
    
    
}


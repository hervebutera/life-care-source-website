window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    // var large_nav_links = document.querySelectorAll(".deskt-nav-links")
  
    if ( (window.scrollY ) > navbar.offsetHeight ) {
        // navbar.classList.remove('transparent');
        navbar.style.backgroundColor = "#FFFFFF";
        navbar.style.boxShadow = "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
        
        // document.getElementById("logo").style.color = "#000000";
        // document.querySelector(".hamburger").classList.add("black_hamburger_bars")
        // document.getElementById("lang-selector").style.color = "#000000";
        // document.getElementById("desk-menu-sub").style.backgroundColor = "#ffffff";
        
        // for (let i = 0; i < large_nav_links.length; i++) {
        //     large_nav_links[i].classList.add("large-navs")
        // }
        
    } else {
        // navbar.classList.add('transparent');
        navbar.style.backgroundColor = "#00000000";
        navbar.style.boxShadow = "none";
        
        // document.getElementById("logo").style.color = "#ffffff";
        // document.querySelector(".hamburger").classList.remove("black_hamburger_bars")
        // document.getElementById("lang-selector").style.color = "#ffffff";
        // document.getElementById("desk-menu-sub").style.backgroundColor = "#000000";
        // for (let i = 0; i < large_nav_links.length; i++) {
        //     large_nav_links[i].classList.remove("large-navs")
        // }
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

    const services_nav_link = document.getElementById('services-navlink');
    const services_dropdown = document.getElementById('services-dropdown');

    services_nav_link.addEventListener('click', () => {
        services_dropdown.classList.toggle('submenu-dropdown');
    })


    const homeVideoBox = document.getElementById("home-video");
    const playBtn = document.getElementById("play-btn"); 
    const videoOverlay = document.getElementById("video-overlay");
    
    playBtn.addEventListener("click", () => {
        homeVideoBox.setAttribute("controls", "true");
        homeVideoBox.play();
        videoOverlay.style.display = "none";
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


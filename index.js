// *=============================== toggle icon navbar ==================================

// Select the menu icon and navbar elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', function() {
  // Toggle the 'bx-x' class on the menu icon
  menuIcon.classList.toggle('bx-x');
  
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');
  
  // Check if the navbar is active
  if (navbar.classList.contains('active')) {
    // Apply custom styles when the navbar is active
    menuIcon.style.color = 'white';
    navbar.style.backgroundColor = 'hsl(222deg 44% 13% / 88%)';
    navbar.style.transform = 'translateX(0)';
    navbar.style.opacity = '1';
    navbar.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  } else {
    // Apply default styles when the navbar is not active
    menuIcon.style.color = 'black';
    navbar.style.backgroundColor = 'transparent';
    navbar.style.transform = 'translateX(-100%)';
    navbar.style.opacity = '0';
    navbar.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  }
});



// *=============================== github calender ==================================
    GitHubCalendar(".calendar", "debrajj");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "debrajj", { responsive: true });

// *=============================== resume open in new tab ==================================


    let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
    let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)

    function NewTab() {
      window.open(
        "https://drive.google.com/file/d/1bGlAI9_tb69bYWptzgqlhNRqy6_L2cfG/view?usp=sharing",
        "_blank"
      );
    }

// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        });
    };

  });
  // *=============================== sticky navbar ==================================
   
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

// *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active')

};

// *=============================== scroll reveal ==================================

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-card, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'left' });

const homeContent = document.querySelector('.home-content');
homeContent.style.width = '90%';

// *===============================  typed js==================================

const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Web Developer', 'Backend Developer', 'Frontend Developer','Wordpress Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
})
// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Nav open close
const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn'),
      navCloseBtn = navMenu.querySelector('.navClose-btn')
      
if(navMenu && navOpenBtn) {
    navOpenBtn.addEventListener('click', () => {
        navMenu.classList.add('open')
        body.style.overflowY = 'hidden'
    })
}    
if(navMenu && navCloseBtn) {
    navCloseBtn.addEventListener('click', () => {
        navMenu.classList.remove('open')
        body.style.overflowY = 'scroll'
    })
}  


// Change header bg color 
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset
  if(scrollY > 5) {
    document.querySelector('header').classList.add('header-active')
  } else {
    document.querySelector('header').classList.remove('header-active')
  }

  // Scroll up button
  const scrollUpBtn = document.querySelector('.scrollUp-btn')
  if(scrollY > 250) {
     scrollUpBtn.classList.add('scrollUpBtn-active')
  } else {
     scrollUpBtn.classList.remove('scrollUpBtn-active')
  }

})

// Nav link indicator
 const sec = document.querySelectorAll('.sectionInd')
 const li = document.querySelectorAll('.nav-link')

 function activeMenu() {
  let len = sec.length 
  while(--len && window.scrollY + 100 < sec[len].offsetTop){}
  li.forEach(link => link.classList.remove('active-navlink'))
  li[len].classList.add('active-navlink')

 }

 activeMenu()
 window.addEventListener('scroll', activeMenu)

 /*    da se uvuce bocni menu na bilo koju selekciju iz menu-a   */
 li.forEach(link => {
   link.addEventListener('click', function() {
      navMenu.classList.remove('open')
      body.style.overflowY = 'scroll'  
   })
 })

 
// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.section-subtitle, .section-title, 
.section-description, .brand-image, .testimonial, .newsletter, .logo-content,
.newsletter-inputBox, .footer-content, .footer-linkContent,
.footer-copyRight, .menu-content, .contact-content,
.about-imageContent, .about-text, .about-buttons`)
  
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*=============== MENU SHOW  ===============*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN  ===============*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');


const linkAction = () => {
    // click on nav menu to remove menu class
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SHADOW HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', scrollHeader)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   emailjs.sendForm('service_tvvulfc','template_b0gi1kf','#contact-form','Kl_bohtXa0D9WQl-x')
    .then(() => {
        contactMessage.textContent = "Message Sent Successfully ✅"
    
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    
    }, () => {
        contactMessage.textContent = 'Message Not Sent (Service Error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollAction = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
    sectionsClass.classList.add('active-link')
} else{
    sectionsClass.classList.remove('active-link')
}
    })
}
window.addEventListener('scroll', scrollAction)



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

// Reveal elements
sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'right' });
sr.reveal(`.home__name, .home__info,
            .about__container .section__title-1, .about__info, .contact__social, .contact__data`, { origin: 'left' });
            sr.reveal(`.services__card, .projects__card`, {interval: 100});
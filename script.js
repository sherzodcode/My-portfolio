window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll' , () =>{
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0 )
    })

    const menuBtn = document.querySelector(".menu-btn")
    const navgation = document.querySelector('.navgation')
    const navgationItems = document.querySelectorAll(".navgation a")

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle("active")
        navgation.classList.toggle("active")
    })

    navgationItems.forEach(navItem => {
        navItem.addEventListener("click", () => {
            menuBtn.classList.remove('active')
            navgation.classList.remove('active')
        })
    })

    const scrollBtn = document.querySelector(".scrollTopBtn")
    window.addEventListener("scroll" , () =>{
        scrollBtn.classList.toggle("active" , window.scrollY > 500)
    })

    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0 ;
    })

    window.addEventListener("scroll" , () =>{
        let reveals = document.querySelectorAll(".reveal")

        for(let i = 0 ; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active')
            }
        }
    })
})
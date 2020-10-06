
    window.onload = function(){

        var typed3 = new Typed('#animated-text', {
            strings: ['Programmer', 'Ethical Hacker', 'Developer', 'Geek', 'Blogger'],
            typeSpeed: 50,
            backSpeed: 40,
            backDelay: 1000,
            smartBackspace: true, // this is a default
            loop: true
          });
    


    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let mobileNavUl = document.getElementById('mobile-nav-ul')
    let button1 = document.getElementById('button1')

    hamberger.addEventListener('click', function(){

        mobileNav.classList.add('open');

    })

    times.addEventListener('click', function(){

        mobileNav.classList.remove('open');
        
    })

    mobileNavUl.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })

    button1.addEventListener('click', function(){
        button1.innerText = "Sorry Not Available"
        setTimeout(function(){
            button1.innerText = "Download CV"
        },1000)
    })

};
const nav = document.querySelectorAll('nav');
const navLi = document.querySelectorAll('nav ul li');
 window.addEventListener('scroll', ()=> {
    let current='';
    nav.forEach( nav => {
        const navTop = nav.offsetTop;
        const navHeight = nav.clientHeight;
        if(pageYOffset > navTop) {
            current = nav.getAttribute('id')
        }
    })
    console.log(current)
 })
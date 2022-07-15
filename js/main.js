const navBtn = document.querySelectorAll('.navBtn');
const navBar = document.querySelector('#nav');
const closeNavMobile = document.querySelector('#closeNavMobile');

navBtn.forEach(btn => btn.addEventListener('click', moveNav));
closeNavMobile.addEventListener('click', () => {navBar.style.right = '-100vw';
closeNavMobile.style.display = 'none'});

function moveNav(click){
    if(click.target.classList.contains('openBtn')) navBar.style.right = '0vw';
    else navBar.style.right = '-100vw';
    closeNavMobile.style.display = 'block';
    const clickTarget = click.target.id;
    console.log(clickTarget);
};

console.log(navBtn);
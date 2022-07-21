const dots = document.querySelectorAll('.dot');
const imgs = document.querySelectorAll('.img');
const scrollContainer = document.querySelector('#scrollContainer')
const controls = document.querySelectorAll('.control')


//This function manipulates the DOM (i.e indicating selected dot and changing the image respectfully)  depending on the scroll position and with the help of the 'dotAndImgAppearance' function
scrollContainer.addEventListener('scroll', checkScroll)
function checkScroll(){
    if(scrollContainer.scrollLeft > -100 && scrollContainer.scrollLeft < 500) return dotAndImgAppearance('douglas')
    if(scrollContainer.scrollLeft > 500 && scrollContainer.scrollLeft < 1129) return dotAndImgAppearance('mark')
    if(scrollContainer.scrollLeft > 1129 && scrollContainer.scrollLeft < 1742) return dotAndImgAppearance('victor')
    return dotAndImgAppearance('anousheh')
}


//a function for how the controls the scroll position
controls.forEach(control => control.addEventListener('click', (click) => {
    click.target.classList.contains('left') ? scrollContainer.scrollLeft -= 614 : scrollContainer.scrollLeft += 614;
}))


//This function srolls the content section depending on the dot selected
dots.forEach(dot => dot.addEventListener('click', dotSelectionOperation));
function dotSelectionOperation(click){
    click.target.classList.contains('douglasDot') ? scrollContainer.scroll({top:0, left:0, behavior: 'smooth'}):
    click.target.classList.contains('markDot') ? scrollContainer.scroll({top:0, left:615, behavior: 'smooth'}):
    click.target.classList.contains('victorDot') ? scrollContainer.scroll({top:0, left:1229, behavior: 'smooth'}):
    scrollContainer.scroll({top:0, left:1844, behavior: 'smooth'});
}

//this function chooses what to display depending on how the user interacts with the DOM
function dotAndImgAppearance(name){
    dots.forEach(dot => dot.classList.contains(`${name}Dot`) ? dot.style.opacity = '1' : dot.style.opacity = '0.17')
    imgs.forEach(img => img.classList.contains(`${name}Img`) ? img.style.left = '0' : img.style.left = '150%')
}
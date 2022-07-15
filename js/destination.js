const minorNavOptions = document.querySelectorAll('.minorNavList')
const planets = document.querySelectorAll('.planet')
const innerSections = document.querySelectorAll('.innerSection')

//for selected minor navigation option
minorNavOptions.forEach(Option => Option.addEventListener('click', activate))

function activate(click){
    const clickedText = click.target.innerText.toLowerCase()

    minorNavOptions.forEach(Option => Option.classList.remove('minorNavActive'))
    click.target.classList.add('minorNavActive')

    planets.forEach(planet => planet.classList.contains(clickedText) ? planet.style.right = '53.125vw' : planet.style.right = '150vw')
    innerSections.forEach(innerSection => innerSection.classList.contains(`${clickedText}InnerSection`) ? innerSection.style.left = '57.778vw' : innerSection.style.left = '150vw')
    

}


const minorNavOptions = document.querySelectorAll('.minorNavList')
const planets = document.querySelectorAll('.planet')
const innerSectionsContent = document.querySelectorAll('.innerSectionContent')
const windowWidth = window.innerWidth

//for selected minor navigation option
minorNavOptions.forEach(Option => Option.addEventListener('click', activate))

function activate(click){
    const clickedText = click.target.innerText.toLowerCase()

    //for the after effects on the minor navigations when active
    minorNavOptions.forEach(Option => Option.classList.remove('minorNavActive'))
    click.target.classList.add('minorNavActive')

    //movement of the planetary bodies and their respective articles when the respective minor navigations is clicked
        planets.forEach(planet => planet.classList.contains(clickedText) ? planet.style.right = '0%' : planet.style.right = '500%')
        innerSectionsContent.forEach(innerSections => innerSections.classList.contains(`${clickedText}InnerSectionContent`) ? innerSections.style.left = '0%' : innerSections.style.left = '500%')
}

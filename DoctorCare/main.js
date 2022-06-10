window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  
}


function activateMenuAtCurrentSection(section) {


  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = section.offsetTop + section.offsetHeight
  const sectionEndPassedTargetLine = targetLine >= sectionEndsAt
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}



function showNavOnScroll() {
  if (scrollY > 0) {
    navigationBar.classList.add('scroll')
  } else {
    navigationBar.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 350) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1000
}).reveal(`
#home,
#home img,
#home .number-box,
#services,
#services .cards,
#services .cards .card,
#about,
#contact`)

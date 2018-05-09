var navContainer = document.getElementsByTagName('nav')
var navElementOne = document.getElementById('navOne')
var navElementTwo = document.getElementById('navTwo')
var navElementThree = document.getElementById('navThree')
var navElementFour = document.getElementById('navFour')
var onderzoeksvraag = [stressoren, kantoormedewerkers, webapp, comfort]
var designChallenge = [oorzaak, doelgroep, technologie, doel]
var fysiekVisual = document.getElementById('fysiekActive')
var webappVisual = document.getElementById('webappActive')
var buttonOne = document.getElementById('buttonOne')
var buttonTwo = document.getElementById('buttonTwo')

navContainer[0].style.display = 'none'

window.addEventListener('scroll', function() {
  if (window.pageYOffset > window.innerHeight) {
   navContainer[0].style.display = 'block'
  } else if (window.pageYOffset < window.innerHeight) {
    navContainer[0].style.display = 'none'
  }
})

navElementOne.addEventListener('click', function (event) {
  document.querySelector('#introduction').scrollIntoView({
  behavior: 'smooth'
  })
  if (navElementOne.style.textDecoration = 'none') {
    navElementOne.style.textDecoration = 'underline'
    navElementTwo.style.textDecoration = 'none'
    navElementThree.style.textDecoration = 'none'
    navElementFour.style.textDecoration = 'none'
  } else {
    navElementOne.style.textDecoration = 'none'
  }
})

navElementTwo.addEventListener('click', function (event) {
  document.querySelector('#ontwerpvraag').scrollIntoView({
  behavior: 'smooth'
  })
  if (navElementTwo.style.textDecoration = 'none') {
    navElementOne.style.textDecoration = 'none'
    navElementTwo.style.textDecoration = 'underline'
    navElementThree.style.textDecoration = 'none'
    navElementFour.style.textDecoration = 'none'
  } else {
    navElementTwo.style.textDecoration = 'none'
  }
})

navElementThree.addEventListener('click', function (event) {
  document.querySelector('#concept').scrollIntoView({
  behavior: 'smooth'
  })
  if (navElementThree.style.textDecoration = 'none') {
    navElementOne.style.textDecoration = 'none'
    navElementTwo.style.textDecoration = 'none'
    navElementThree.style.textDecoration = 'underline'
    navElementFour.style.textDecoration = 'none'
  } else {
    navElementThree.style.textDecoration = 'none'
  }
})

navElementFour.addEventListener('click', function (event) {
  document.querySelector('#planning').scrollIntoView({
  behavior: 'smooth'
  })
  if (navElementFour.style.textDecoration = 'none') {
    navElementOne.style.textDecoration = 'none'
    navElementTwo.style.textDecoration = 'none'
    navElementThree.style.textDecoration = 'none'
    navElementFour.style.textDecoration = 'underline'
  } else {
    navElementFour.style.textDecoration = 'none'
  }
})

window.addEventListener('scroll', function() {
  if (window.pageYOffset > window.innerHeight - 0.2 * window.innerHeight && window.pageYOffset < 1.5 * window.innerHeight) {
    navElementOne.style.textDecoration = 'underline'
  } else (
    navElementOne.style.textDecoration = 'none'
  )
})

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 1.8 * window.innerHeight && window.pageYOffset < 2.5 * window.innerHeight) {
    navElementTwo.style.textDecoration = 'underline'
  } else (
    navElementTwo.style.textDecoration = 'none'
  )
})

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 2.8 * window.innerHeight && window.pageYOffset < 3.5 * window.innerHeight - 100) {
    navElementThree.style.textDecoration = 'underline'
  } else (
    navElementThree.style.textDecoration = 'none'
  )
})

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 3.8 * window.innerHeight) {
    navElementFour.style.textDecoration = 'underline'
  } else (
    navElementFour.style.textDecoration = 'none'
  )
})

for (var i = 0; i < designChallenge.length; i++) {
  designChallenge[i].style.display = 'none'
}

if (window.innerWidth < 414) {
  designChallenge[0].style.display = 'block'
}

onderzoeksvraag[0].addEventListener('click', function (event) {
  if (designChallenge[0].style.display === 'none') {
    designChallenge[0].style.display = 'block'
    designChallenge[1].style.display = 'none'
    designChallenge[2].style.display = 'none'
    designChallenge[3].style.display = 'none'
  } else if (designChallenge[0].style.display === 'block') {
    designChallenge[0].style.display = 'none'
  }
})

onderzoeksvraag[1].addEventListener('click', function (event) {
  if (designChallenge[1].style.display === 'none') {
    designChallenge[0].style.display = 'none'
    designChallenge[1].style.display = 'block'
    designChallenge[2].style.display = 'none'
    designChallenge[3].style.display = 'none'
  } else if (designChallenge[1].style.display === 'block') {
    designChallenge[1].style.display = 'none'
  }
})

onderzoeksvraag[2].addEventListener('click', function (event) {
  if (designChallenge[2].style.display === 'none') {
    designChallenge[0].style.display = 'none'
    designChallenge[1].style.display = 'none'
    designChallenge[2].style.display = 'block'
    designChallenge[3].style.display = 'none'
  } else if (designChallenge[2].style.display === 'block') {
    designChallenge[2].style.display = 'none'
  }
})

onderzoeksvraag[3].addEventListener('click', function (event) {
  if (designChallenge[3].style.display === 'none') {
    designChallenge[0].style.display = 'none'
    designChallenge[1].style.display = 'none'
    designChallenge[2].style.display = 'none'
    designChallenge[3].style.display = 'block'
  } else if (designChallenge[3].style.display === 'block') {
    designChallenge[3].style.display = 'none'
  }
})

webappVisual.style.display = 'none'

buttonOne.addEventListener('click', function (event) {
  console.log('click', event.target.id)
  if (fysiekVisual.style.display === 'none') {
    fysiekVisual.style.display = 'flex'
    webappVisual.style.display = 'none'
  } else if (fysiekVisual.style.display === 'flex') {
    fysiekVisual.style.display = 'flex'
  }
})

buttonTwo.addEventListener('click', function (event) {
  console.log('click', event.target.id)
  if (webappVisual.style.display === 'none') {
    webappVisual.style.display = 'flex'
    fysiekVisual.style.display = 'none'
  } else if (webappVisual.style.display === 'flex') {
    webappVisual.style.display = 'flex'
  }
})

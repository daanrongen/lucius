var onderzoeksvraag = [stressoren, kantoormedewerkers, webapp, comfort]
var designChallenge = [oorzaak, doelgroep, technologie, doel]
var fysiekVisual = document.getElementById('fysiekActive')
var webappVisual = document.getElementById('webappActive')
var buttonOne = document.getElementById('buttonOne')
var buttonTwo = document.getElementById('buttonTwo')

for (var i = 0; i < designChallenge.length; i++) {
  designChallenge[i].style.visibility = 'collapse'
}

onderzoeksvraag[0].addEventListener('click', function (event) {
  if (designChallenge[0].style.visibility === 'collapse') {
    designChallenge[0].style.visibility = 'visible'
    designChallenge[1].style.visibility = 'collapse'
    designChallenge[2].style.visibility = 'collapse'
    designChallenge[3].style.visibility = 'collapse'
  } else if (designChallenge[0].style.visibility === 'visible') {
    designChallenge[0].style.visibility = 'collapse'
  }
})

onderzoeksvraag[1].addEventListener('click', function (event) {
  if (designChallenge[1].style.visibility === 'collapse') {
    designChallenge[0].style.visibility = 'collapse'
    designChallenge[1].style.visibility = 'visible'
    designChallenge[2].style.visibility = 'collapse'
    designChallenge[3].style.visibility = 'collapse'
  } else if (designChallenge[1].style.visibility === 'visible') {
    designChallenge[1].style.visibility = 'collapse'
  }
})

onderzoeksvraag[2].addEventListener('click', function (event) {
  if (designChallenge[2].style.visibility === 'collapse') {
    designChallenge[0].style.visibility = 'collapse'
    designChallenge[1].style.visibility = 'collapse'
    designChallenge[2].style.visibility = 'visible'
    designChallenge[3].style.visibility = 'collapse'
  } else if (designChallenge[2].style.visibility === 'visible') {
    designChallenge[2].style.visibility = 'collapse'
  }
})

onderzoeksvraag[3].addEventListener('click', function (event) {
  if (designChallenge[3].style.visibility === 'collapse') {
    designChallenge[0].style.visibility = 'collapse'
    designChallenge[1].style.visibility = 'collapse'
    designChallenge[2].style.visibility = 'collapse'
    designChallenge[3].style.visibility = 'visible'
  } else if (designChallenge[3].style.visibility === 'visible') {
    designChallenge[3].style.visibility = 'collapse'
  }
})

webappVisual.style.visibility = 'collapse'

buttonOne.addEventListener('click', function (event) {
  console.log('click', event.target.id)
  if (fysiekVisual.style.visibility === 'collapse') {
    fysiekVisual.style.visibility = 'visible'
    webappVisual.style.visibility = 'collapse'
  } else if (fysiekVisual.style.visibility === 'visible') {
    fysiekVisual.style.visibility = 'visible'
  }
})

buttonTwo.addEventListener('click', function (event) {
  console.log('click', event.target.id)
  if (webappVisual.style.visibility === 'collapse') {
    webappVisual.style.visibility = 'visible'
    fysiekVisual.style.visibility = 'collapse'
  } else if (webappVisual.style.visibility === 'visible') {
    webappVisual.style.visibility = 'visible'
  }
})

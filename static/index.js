console.log(document.readyState)

document.onreadystatechange = function() {
  if (document.readyState !== 'complete') {
    document.getElementById('loader').style.display = 'block'
  } else if (document.readyState === 'complete') {
    welcomeMessage()
  }
  console.log(document.readyState)
}

function welcomeMessage() {
  document.getElementById('loader').style.display = 'none'
  document.getElementById('welcomeMessage').style.display = 'block'
  document.getElementById('welcomeMessage').style.animation = 'fadeIn 2s linear'
}

function authorisation() {
  document.getElementById('authorisation').style.animation =
    'fadeIn 1s forwards'
}

setTimeout(authorisation, 2000)

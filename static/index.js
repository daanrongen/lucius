console.log(document.readyState)
document.onreadystatechange = function() {
  console.log(document.readyState)
  if (document.readyState === 'complete') {
    document.getElementById('loader').style.display = 'none'
    document.getElementById('welcomeMessage').style.display = 'block'
  }
}

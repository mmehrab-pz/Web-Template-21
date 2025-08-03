let X = ''
let Y = ''
let noise = document.getElementById('noise')

setInterval(() => {
  X = (Math.random() * (40 - (-20) + 1)) + (-20)
  X = parseInt(X)
  Y = (Math.random() * (15 - (-15) + 1)) + (-15)
  Y = parseInt(Y)
noise.style.transform = `translateX(${X}%)`
noise.style.transform = `translateY(${Y}%)`
  
}, 50);
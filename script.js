var slides = []

slides[0] = 'Hello World'
slides[1] = '\\o/'
slides[2] = 'sauce'
slides[3] = '/0\\'
slides[4] = 'o>-<'
slides[5] = '...ish'

var index = 0

var showslides = function(){
  var show = document.getElementById('slideshow')
  console.log('showslides')
  show.innerHTML = slides[index++]
  if(index >= slides.length){
    index = 0
  }
}

var timer = setInterval(function(){
  showslides()
}, 1000)



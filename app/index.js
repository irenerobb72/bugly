var num = 50000
var canvas = document.getElementById("myCanvas")
var width = canvas.width = 2000;
var height = canvas.height = 1000;
var ctx = canvas.getContext("2d")

var particles = d3.range(num).map(function(i) {
  return [Math.round(width*Math.random()), Math.round(height*Math.random())]
})

d3.timer(init)

function init() {
  ctx.fillStyle = "rgba(0,0,0,0.3)"
  ctx.fillRect(0,0,width,height)
  ctx.fillStyle = "rgba(250,250,250,0.5)"
  particles.map(function(p) {
    p[0] += Math.round(2*Math.random())
    p[1] += Math.round(2*Math.random())
    if (p[0] < 0) p[0] = width
    if (p[0] > width) p[0] = 0
    if (p[1] < 0) p[1] = height
    if (p[1] > height) p[1] = 0
    drawPoint(p)
 })
}

function drawPoint(p) {
  ctx.fillRect(p[0],p[1],1,1)
}

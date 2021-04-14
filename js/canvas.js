const canvas = document.querySelector("div.canvas-holder canvas")
const sandbox = new GlslCanvas(canvas, { fragmentString: frag })

const calcSize = function () {
  let ww = window.innerWidth
  let wh = window.innerHeight
  let dpi = window.devicePixelRatio

  let s = Math.max(wh, ww + 200)

  canvas.width = s * dpi
  canvas.height = s * dpi
  canvas.style.width = s + "px"
  canvas.style.height = s + "px"
}

calcSize()

window.addEventListener("resize", function () {
  calcSize()
})


const images = ["images/herm-gr-20-1850.jpg", "images/breughel-1192.jpg", "images/titian-941.jpg", "images/redon-pd-28-1964.jpg", "images/rembrandt-p-2255-r.jpg"]
let current = 0    

canvas.addEventListener("click", function () {
  current += 1

  if (current >= images.length) {
    current = 0
  }

  sandbox.setUniform("image", images[current])
})

sandbox.setUniform("image", images[current])

import './style.css'

const box = document.querySelector('#app .box') as HTMLElement

let rotate = 0

setInterval(() => {
  rotate = Math.random()
  box.style.setProperty('--rotate', `${rotate * 720}deg`)
  // console.log(rotate)
}, 500);


function randomColor() {
  const timeout = Math.random() * 3000 + 300
  console.log('next update', timeout)
  setTimeout(() => {
    const red = parseInt(String(Math.random() * 256)).toString()
    const green = parseInt(String(Math.random() * 256)).toString()
    const blue = parseInt(String(Math.random() * 256)).toString()
    box.style.setProperty(
      '--red', red
    )
    box.style.setProperty(
      '--green', green
    )
    box.style.setProperty(
      '--blue', blue
    )
    randomColor()
  }, timeout)
}

randomColor()

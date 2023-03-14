import './style.css'

const box = document.querySelector('#app .box') as HTMLElement

let rotate = 1

setTimeout(() => {
  rotate = Math.cos(rotate)
  box.style.setProperty('--rotate', `${rotate * 360}deg`)
  if (rotate === 1) {
    rotate = 0
  }
  console.log(rotate)
}, 500);
import './style.css'

const box = document.querySelector('#app .box') as HTMLElement

let rotate = 0

setTimeout(() => {
  rotate = Math.cos(rotate)
  box.style.setProperty('--rotate', `${rotate * 360}deg`)
}, 500);

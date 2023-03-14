import './style.css'

const box = document.querySelector('#app .box') as HTMLElement

let rotate = 0

setInterval(() => {
  rotate = Math.random()
  box.style.setProperty('--rotate', `${rotate * 720}deg`)
  console.log(rotate)
}, 500);

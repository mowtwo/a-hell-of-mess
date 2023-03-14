import './style.css'

const box = document.querySelector('#app .box') as HTMLElement

const makeRandomFunc = (func: () => void, debugLabel = '') => {
  return function update() {
    const timeout = Math.random() * 1000 + 300
    console.log(`next ${debugLabel} update`, timeout)
    setTimeout(() => {
      func()
      update()
    }, timeout);
  }
}

const makeRandomCssVar = <T extends readonly string[]>(keys: T, mapper: Record<T[number], () => string>, {
  debugLabel, immidiate = false
}: { debugLabel?: string, immidiate?: boolean } = {}) => {
  debugLabel = debugLabel ?? keys.join('|')
  const func = makeRandomFunc(() => {
    const updateEntries = Object.entries<() => string>(mapper).map(([key, getValue]) => [key, getValue()] as const)
    for (const [key, value] of updateEntries) {
      box.style.setProperty(
        `--${key}`,
        value
      )
    }
  }, debugLabel)

  if (immidiate) {
    func()
  }

  return func
}

makeRandomCssVar(
  ['rotate'] as const,
  {
    rotate: () => `${Math.random() * 360 * Math.random() * 10}deg`
  },
  { debugLabel: 'rotate', immidiate: true }
)


const randomColor = makeRandomFunc(() => {
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
}, 'color')

const randomRadius = makeRandomFunc(() => {
  const radius = Math.random() * 51
  box.style.setProperty(
    '--radius',
    `${radius}%`
  )
}, 'radius')

const randomSkew = makeRandomFunc(() => {
  const skew = Math.random()
  box.style.setProperty('--skew', `${skew * 360}deg`)
}, 'skew')

// randomRotate()
// randomColor()
// randomRadius()
// randomSkew()

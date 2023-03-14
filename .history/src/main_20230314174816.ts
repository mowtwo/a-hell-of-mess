import './style.css'

const box = document.querySelector('#app .box') as HTMLElement

const makeRandomFunc = (func: () => void, debugLabel = '') => {
  return function update() {
    const timeout = Math.random() * 2000 + 300
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

makeRandomCssVar(
  [
    'red',
    'green',
    'blue'
  ] as const,
  {
    red: () => parseInt(String(Math.random() * 256)).toString(),
    green: () => parseInt(String(Math.random() * 256)).toString(),
    blue: () => parseInt(String(Math.random() * 256)).toString(),
  },
  { debugLabel: 'rotate', immidiate: true }
)

makeRandomCssVar(
  ['radius'] as const,
  {
    radius: () => `${Math.random() * 51}%`
  },
  { debugLabel: 'radius', immidiate: true }
)

makeRandomCssVar(
  ['skew'] as const,
  {
    skew: () => `${Math.random() * 360}deg`
  },
  { debugLabel: 'skew', immidiate: true }
)

makeRandomCssVar(
  ['x', 'y'] as const,
  {
    x: () => `${Math.random() * window.innerWidth / 10}px`,
    y: () => `${Math.random() * window.innerHeight / 10}px`,
  },
  { debugLabel: 'x,y', immidiate: true }
)

makeRandomCssVar(
  ['scale'] as const,
  {
    scale: () => `${Math.random() * 4}`
  },
  { debugLabel: 'scale', immidiate: true }
)

// randomRotate()
// randomColor()
// randomRadius()
// randomSkew()

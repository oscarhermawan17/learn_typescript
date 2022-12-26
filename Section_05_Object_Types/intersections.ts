type Circle = {
  radius: number;
}

type Colorful = {
  color: string
}

type ColorfulCircle = Circle & Colorful & {
  isGood: boolean
}

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
  isGood: true
}
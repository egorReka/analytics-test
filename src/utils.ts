function getRandomColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
}

function getArrRandomColor(num: number) {
  const colors = []

  for (let i = 0; i < num; i++) {
    colors.push(getRandomColor())
  }

  return colors
}

export { getRandomColor, getArrRandomColor }

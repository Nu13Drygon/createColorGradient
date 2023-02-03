function setGradient(x, y, width, height, color1, color2, sketch) {
  let c1 = color1
  let c2 = color2
  for (let i = x; i <= width; i++) {
    let inter = sketch.map(i, x, width, 0, 1)
    let c = sketch.lerpColor(color1, color2, inter)
    sketch.stroke(c)
    sketch.line(i, y, i, height)
  }
}

export {setGradient}
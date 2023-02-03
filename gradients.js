/* creates a gradient for entire canvas
x and y should be 0 to start from left to right
goes from X = 0 to width = value
*/

function setGradient(x, y, width, height, color1, color2) {
    let c1 = color1
    let c2 = color2
    for (let i = x; i <= width; i++) {
      let inter = map(i, x, width, 0, 1)
      let c = lerpColor(color1, color2, inter)
      stroke(c)
      line(i, y, i, height)
    }
}


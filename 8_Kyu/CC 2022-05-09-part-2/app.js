// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A) {
    let a = A / (2 * Math.PI * (90 / 360));
    let area = Math.pow(a, 2);
    return Number(area.toFixed(2));
  }
  
  console.log(squareArea(2)); // 1.62
  console.log(squareArea(0)); // 0
  console.log(squareArea(14.05)); // 80

//arc length = 2 * PI * r * (ang / 360)
// r = (arc length) / (2 * PI * (ang / 360))

// export const squareArea = (num: number): number => {
//     return Number(Math.pow((num * 4) / (Math.PI * 2), 2).toFixed(2));
//   };
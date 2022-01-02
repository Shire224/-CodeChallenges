// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    //the formula is a^2 + b^2 = C^2
    //then return c
    let c = Math.sqrt((a * a) + (b *  b))
    return Math.sqrt(c * c)
  }

// 2 nums, +, whole
//return the 3rd num to find out the triangle

otherAngle(30,60)//90
otherAngle(60,60)//60
otherAngle(10,20)//150

function otherAngle(a, b) {
    //the formula is a^2 + b^2 = C^2
  return 180-(a+b);
  }

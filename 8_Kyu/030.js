// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    //convert Km to cm per sec
    //round down
    let convert = s * 5/18
    let newConvert = Math.floor(convert * 100)
    return newConvert
  }

  //take in interger, in km
  //return it to Cm and rounded down
  //examples
cockroachSpeed(1.08), 30;
cockroachSpeed(1.09), 30;
cockroachSpeed(0), 0;

const cockroachSpeed = s => Math.floor(s / 0.036);

function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;
    
    return Math.floor((s*centimetersInKilometers)/secsInHour);
  }
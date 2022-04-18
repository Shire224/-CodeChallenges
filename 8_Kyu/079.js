// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let num = weight / height**2   //Math.pow(hight,2)
    if(num <= 18.5){
        return 'Underweight'
    }else if(num <= 25.0){
        return "Normal"
    }else if(num <= 30.0){
        return "Overweight"
    }else if(num > 30){
        return 'Obese'
    }
  }

  //put in numbers, float or int, must be positive
  //return bmi, wight/ height ^2. return as a string 
  

//   function bmi(weight, height) {
//     var formula = (weight / Math.pow(height, 2));
//     switch (true) {
//       case formula <=18.5:
//       return 'Underweight';
//       case formula <=25.0:
//       return 'Normal';
//       case formula <=30:
//       return 'Overweight';
//       default:
//       return 'Obese';
      
//     }
//   }
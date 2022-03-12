// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
    return num_pill == 1  ? 0 : ((num_pill-2)*width) + ((100*dist)*(num_pill-1)) 
  }

  //nums,+,floats, pillars greater or equal then one, distance 10-30meters, width 10-50 cm
  //return distance between first and last pillar in cm=n

  function pillars(num_pill, dist, width) {
    // your code here
    return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
  }

  function pillars(num_pill, dist, width) {
    if (num_pill < 2) return 0;
    const widthAllPillars = (num_pill - 2) * width;
    const distAll = (num_pill - 1) * (dist * 100);
    
    return distAll + widthAllPillars;
  }
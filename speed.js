//declared a constant variable which should accept inputs from user in terms of speed in km/h
const speed = prompt("Enter speed of the car in km/h:");

//intialize demerit points to start from zero
let demerit_point =0;

//introduced if statement to check the condition of the declared variable
if (speed < 70) {
    console.log("Ok");
  } else if(speed > 70) {
    demerit_points = Math.floor((speed - 70) / 5);
    console.log("Demerit points: " + demerit_points);
  }
  //outputs license suspended in the case where demerit points are greater than or equal to 12
  else if (demerit_points>=12){
    console.log("license suspended");
  }

let averageGrade = 70;

switch (true) {
  case (averageGrade < 60):
    console.log("Really bad student (less than 60)");
    break;
  case (averageGrade >= 60 && averageGrade <= 70):
    console.log("Normal student (60-70)");
    break;
  case (averageGrade > 70 && averageGrade <= 80):
    console.log("Good student (70-80)");
    break;
  case (averageGrade > 80 && averageGrade <= 90):
    console.log("Excellent user (80-90)");
    break;
  case (averageGrade > 90 && averageGrade <= 100):
    console.log("You will get the scholarship, congrats! (90-100)");
    break;
  default:
    console.log("Wrong data. Please enter the value from 0 to 100.");
    break;
}

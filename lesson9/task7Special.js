console.log("Student average score");

function averageScore(scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return console.log("Average student score is: " + sum / scores.length);
}

averageScore([2, 3, 5, 5, 5, 5, 5, 4, 1, 1]);
averageScore([2, 4]);

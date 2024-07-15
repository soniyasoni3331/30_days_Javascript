let Score = 70;
let grade;
 switch (true) {
    case (Score >= 90 && Score <=100):
            grade = 'A'
            console.log(`Your grade is ${grade}!`);
        break;
    case (Score >= 80 && Score < 90):
        grade = 'B'
        console.log(`Your grade is ${grade}!`);
        break;
    case (Score >= 60 && Score < 80):
        grade = 'C'
        console.log(`Your grade is ${grade}!`);
        break;
    case (Score >= 40 && Score < 60):
        grade = 'D'
        console.log(`Your grade is ${grade}!`);
        break;
    default:
            grade = 'F'
            console.log(`Your grade is ${grade}`);
        break;
 }
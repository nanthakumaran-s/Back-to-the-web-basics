const mark = parseFloat(prompt("Enter Your Child entrance exam mark: "));

if (mark > 90) {
  alert("Congrats! Outstanding to admint");
} else if (mark >= 70 && mark < 90) {
  alert("Good To admit");
} else if (mark >= 50 && mark < 70) {
  alert("Acceptable to admit");
} else {
  alert("Admission application rejected");
}

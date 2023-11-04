// Get marks from user input
var ChemistryMarks = +prompt("Enter the marks obtained in Chemistry:")
var PhysicsMarks = +prompt("Enter the marks obtained in Physics:")
var MathsMarks = +prompt("Enter the marks obtained in Maths:")
var EnglishMarks = +prompt("Enter the marks obtained in English:")
var UrduMarks = +prompt("Enter the marks obtained in Urdu:")
var ComputerMarks= +prompt("Enter the marks obtained in Computer:")


var totalMarks = 550;
var MarksObtained = ChemistryMarks + PhysicsMarks + MathsMarks + EnglishMarks + UrduMarks +ComputerMarks
var percentage = ( MarksObtained / totalMarks ) * 100

alert(`Total Marks: ${totalMarks}\nMarks Obtained: ${MarksObtained}\nPercentage: ${percentage}%`)
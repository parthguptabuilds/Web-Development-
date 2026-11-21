let marks=90

if (marks>=90){
    grade="A"
}

else if(marks>75 && marks<89){
    grade="B"
}
else if(marks>50 && marks<74){
    grade="C"
}
else if(marks<49){
    grade="Fail"
}

console.log("marks:",marks)
console.log("Grade:",grade)
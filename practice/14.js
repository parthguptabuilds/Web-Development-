let student=[65, 72, 80, 90]
console.log(student)
console.log(student[0])
console.log(student[3])
let sum = 0;

for (let i = 0; i < student.length; i++) {
    sum = sum + student[i];
}
console.log(sum);

student[1]=75
console.log(student)
student.push(95)
console.log(student)
student.pop()
console.log(student)
student.unshift(60)
console.log(student)
student.shift()
console.log(student)
student.includes(80)
console.log(student)
student.indexOf(80)
console.log(student)

checking = student.map(function(marks){
    return (marks+5)
})
console.log(checking)


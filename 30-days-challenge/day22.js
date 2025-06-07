//Day 22:** Create an object for a student with properties like name, age, and course.

const myObj = [
    {
        name: "Angelo Loreno",
        age: 21,
        course: "Bachelor of Science in Computer Engineering"
    },
    {
        name: "Michael Jordan",
        age: 40,
        course: "Bachelor of Science in Computer Science"
    },
]


for(let i = 0; i < myObj.length; i++){
    console.log(`Student ${i + 1}: ${myObj[i].name} is ${myObj[i].age} years old and recently graduated in ${myObj[i].course}`)
}
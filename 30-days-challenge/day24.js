//**Day 24:** Loop through the object’s properties using a `for...in` loop.

const students = [
    {
        name: "Juan",
        age: 21,
        gender: "Male"
    },
    {
        name: "Pedro",
        age: 22,
        gender: "Male"
    },
    {
        name: "Maria",
        age: 20,
        gender: "Female"
    },

]


for(let i = 0; i < students.length; i++){
    for(let key in students[i]){
        console.log(`${key}: ${students[i][key]}`)
    }
    console.log(`\n------------------------------------\n`)
}

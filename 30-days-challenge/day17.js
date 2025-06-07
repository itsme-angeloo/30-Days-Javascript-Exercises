//Day 17:** Write a function that returns the factorial of a number.

function getFactorial(num){

    let fact = 1

    for(let i = num; i >= 1; i--){
        fact *= i
    }

    return fact
}

let x = 10

let factorial = getFactorial(x)

console.log(`Facrorial of ${x}: ${factorial} `)
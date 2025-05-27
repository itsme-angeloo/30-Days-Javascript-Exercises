//Day 13: Print all numbers from 1 to 50 that are divisible by 3 or 5.

console.log(`Numbers that are visible by 3 or 5`)
for(let i = 1; i <= 50; i++){
    
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i)
    }
}
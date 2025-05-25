//Day 5: Use if, else if, and else to assign a grade based on a score (e.g., A, B, C, D, F).

let score = 78

if (score >= 90 && score <= 100){
    console.log(`Grade: A`)
}else if (score >= 80 && score < 90){
    console.log(`Grade: B`)
}else if (score >= 70 && score < 80){
    console.log(`Grade: C`)
}else if (score >= 60 && score < 70){
    console.log(`Grade: D`)
}else if (score >= 0 && score < 60){
    console.log(`Grade: F`)
}else{
    console.log(`Invalid Score!`)
}


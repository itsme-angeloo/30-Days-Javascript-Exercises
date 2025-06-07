//Day 20:** Create a function that takes an array of numbers and returns the average.

let myArr = [9, 9, 9, 9, 9, 9, 9, 9, 9, 8]

function getAverage(numArr){
    let average, total  = 0
    for(let i = 0; i <= numArr.length - 1; i++){
        total += numArr[i]
    }

    average = total/(numArr.length - 1)
    console.log(parseFloat(average))
}

getAverage(myArr)
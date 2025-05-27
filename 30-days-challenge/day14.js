//Day 14: Count how many vowels are in a given string.

function vowelCounter(string){
    let toUp = string.toUpperCase()
    let counter = 0

    for(let i = 0; i <= toUp.length - 1; i++){
        if(toUp[i] === 'A' || toUp[i] === 'E' || toUp[i] === 'I' || toUp[i] === 'O' || toUp[i] === 'U'){
            counter += 1
        }
    }

    console.log(`Number of Vowels in string ${string}: ${counter}`)

}

vowelCounter("Coding is great")
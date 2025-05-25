//Day 12: Use a loop to reverse a string entered by the user.

function reverseString(word){
    let upWord = word.toUpperCase()
    let reversed = ''
    console.log(`Original String: ${upWord}`)

    for(let i =  upWord.length-1; i >= 0; i--){
        
        reversed += upWord[i]
    }

    console.log(`Reversed String: ${reversed}`)
}

reverseString("Butterfly")
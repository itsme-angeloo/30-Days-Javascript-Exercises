//**Day 27:** Create a function that checks if a word is a palindrome.


const palindromeChecker = (word) => {
    let newWord = word.toUpperCase();
    let reverseWord = ''

    for(let i = word.length - 1; i >= 0; i--){
        reverseWord += newWord[i] // l
    }

    return reverseWord == newWord
}

console.log(palindromeChecker("Deed"))
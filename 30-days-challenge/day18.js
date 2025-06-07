//Day 18:** Create an array of your top 5 favorite movies. Print each with a loop.


let favMovie = ["Nine Puzzle", "Shutter Island", "Sawshank Redemption", "Interstellar", "The 3 Idiots" ]

console.log("My TOP  5 movies:")
for(let i = 0; i <= favMovie.length - 1; i++){

    console.log(`${i + 1}. ${favMovie[i]}`)

}
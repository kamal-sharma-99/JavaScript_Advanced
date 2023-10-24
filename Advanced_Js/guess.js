// Nested if else number guessing

let random = Math.floor(Math.random()*100)
console.log(random);

let guess;
do {

    guess = prompt("Guess the number")

if (guess == random) {

    console.log(`you guess is correct ${guess}`);
    break;

} 
else if (guess < random){

    console.log("try bigger");

}
else if (guess > random){

    console.log("try lower");

}
} while (guess<random || guess>random);

// console.log(guess);

console.log();


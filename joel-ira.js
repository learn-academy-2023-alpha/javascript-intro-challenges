// Create a for loop that logs each number from 1 - 20.
 for(let i = 1; i < 21; i ++){
    console.log(i)
 }
 // output: 1 - 20: 

// Create a for loop that logs every other number from 1 - 20.
const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    for(let i = 0; i < numsArray.length; i++){
        if(numsArray[i] % 2  !== 0){
          console.log(`${numsArray[i]} is an odd number`);
        }
    }
    // output: every other number:

// Create a for loop that logs the result of each number from 1 - 20 tripled.
for (let i = 0; i < numsArray.length; i++) {
    console.log(numsArray[i] * 3)
  }
  //output: numbers tripled:

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
for(let i = 0; i < numsArray.length; i++){
    if(numsArray[i] % 2  !== 0){
      console.log("ODD");
    } else {
       console.log(numsArray[i])
    }
}


// Create the code that will log the largest number from the array.
// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1

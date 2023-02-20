// Create a for loop that logs each number from 1 - 20.
for(let i = 1; i<21; i++) {
    console.log(i)
}
// -->1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

// Create a for loop that logs every other number from 1 - 20.
for(let i = 1; i<21; i+=2){
    console.log(i)
}
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

// Create a for loop that logs the result of each number from 1 - 20 tripled.
for(let i = 1; i<21; i+=3){
    console.log(i)
}

// 1
// 4
// 7
// 10
// 13
// 16
// 19

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for(let i = 1; i<21; i++){
    if(i % 2 !=0){
    console.log("ODD")
    }else{console.log(i)}
}
// ODD
// 2
// ODD
// 4
// ODD
// 6
// ODD
// 8
// ODD
// 10
// ODD
// 12
// ODD
// 14
// ODD
// 16
// ODD
// 18
// ODD
// 20

// Consider this variable:

const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
console.log(nums[4])

//67

// Create the code that will log the smallest number from the array.
console.log(nums[2])
//-9

// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
for(let i = 0; i<nums.length; i++){
    console.log(nums[i] % 2)
}
//1
//1
//-1
//0
//1

const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
var arrayStudent = []
var count=0
console.log(arrayStudent = myString.split(""))
for(let i = 0; i<arrayStudent.length; i++){
if(arrayStudent[i].includes("e")){
    count++
}
}
console.log("number of letter e",count)
//number of letter e 2

// Create the code that will log every other character in the string.

for(let i = 0; i<arrayStudent.length; i+=2){
console.log(arrayStudent[i])
}
// l
// a
// n
// s
// u
// e
// t

// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
for(let i = 5; i<16; i++){
    if(i % 2 !=0){
    console.log(i, "is ODD")
    }else console.log(i, "is even")
}
// 5 is ODD
// 6 is even
// 7 is ODD
// 8 is even
// 9 is ODD
// 10 is even
// 11 is ODD
// 12 is even
// 13 is ODD
// 14 is even
// 15 is ODD

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
for(let i =1; i<101; i++){
    if(i % 3 == 0 && i % 5 == 0 ){
        console.log("fizzbuzz")
    }
    else if(i % 3 == 0){
        console.log("fizz")
    }
    else if (i % 5 == 0){
        console.log("buzz")}
        else {console.log(i)}
}

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz
// fizz
// 22
// 23
// fizz
// buzz
// 26
// fizz
// 28
// 29
// fizzbuzz
// 31
// 32
// fizz
// 34
// buzz
// fizz
// 37
// 38
// fizz
// buzz
// 41
// fizz
// 43
// 44
// fizzbuzz
// 46
// 47
// fizz
// 49
// buzz
// fizz
// 52
// 53
// fizz
// buzz
// 56
// fizz
// 58
// 59
// fizzbuzz
// 61
// 62
// fizz
// 64
// buzz
// fizz
// 67
// 68
// fizz
// buzz
// 71
// fizz
// 73
// 74
// fizzbuzz
// 76
// 77
// fizz
// 79
// buzz
// fizz
// 82
// 83
// fizz
// buzz
// 86
// fizz
// 88
// 89
// fizzbuzz
// 91
// 92
// fizz
// 94
// buzz
// fizz
// 97
// 98
// fizz
// buzz

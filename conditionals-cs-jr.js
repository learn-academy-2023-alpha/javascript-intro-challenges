// Is 34 divided by 3 greater than 67 divided by 2? false
console.log((34/3)>(67/2)) 
// Does 5 evaluate to the same as "5"? loosely
console.log(5 == "5")
console.log(5 === "5")
// Does 5 strictly equal "5"? false
console.log(5 === "5")
// Does !3 strictly equal 3? false
console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7? true
console.log("LEARN".length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10? true
console.log("LEARN".length === 5 || "Student".length === 10)
// Does "LEARN" contain the subset "RN"? true
console.log("LEARN".includes("RN"))
// Does "LEARN" contain the subset "rn"? false
console.log("LEARN".includes("rn"))
// Does "LEARN"[0] strictly equal "l"? false
console.log("LEARN"[0] === "l")
// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L")
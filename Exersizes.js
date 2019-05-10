// to run code in the terminal type node pwd/Chapter2/Exersizes.js

/// Question 1: What is typeof?
// is an operator; like multiplication or addition NOT a function


// Question 2: Fill in the Blanks
let current = 0
let table = []

// 2. while runs through code in the cases where the logical expression is true
while (current < 5 ) {
	// use string interpolation
	// with ${} we can specify where to input calculations 
	// surrounded with ``
	// rather than paste("text ", variable, " text ", "variable") etc.
	const entry = `square of ${current} is ${current*current}`
	// 1. Array.push adds new item to the end of an array
	table.push(entry)
	// 3. current = current + 1
	current += 1
}

table.reverse()
// 4. reverse the order of the array such that 5 will be the first reported
for (let line of table ) {
	console.log(line)
}

// Question 3: What is Truth
// Write a function where the output for an empty vector is falsy

const values = [[0, 1], ['', 'text'], [undefined, null], [[], [2, 3]]]
var arrayLength = values.length

for (let pair of values) {
	for (let element of pair) {
		if (element < 1 || element === undefined) {
			console.log(element, 'of type', typeof element, 'is falsy')
		} else {
			console.log(element, 'of type', typeof element, 'is truthy')
		}
	}
}


// Question 4: Combining Different Types
// What output do you expect?

const first = [3, 7, 8, 9, 1]
console.log(`aggregating ${first}`)
// print the array you're adding up
let total = 0
// create empty variable
for (let d of first) {
total += d
// total = 0 + 3
// 3 = 3 + 7
// 10 = 10 + 8
// 18 = 18 + 9
// 27 = 27 + 1
// 28
}
console.log(total)

const second = [0, 3, -1, NaN, 8]
console.log(`aggregating ${second}`)
// print the array you're adding up
total = 0
for (let d of second) {
total += d
}
console.log(total)
// assume this would print NaN because 
// we cannot add up elements of vector with NaN 

// What are the implications of this behavior when working with real world data?
// We would need to replace with 0 or write function to skip 


// Question 5: What Does this Do?
// Explain what is happening in the assignment statement that creates creature

// assign constant 'Callithrix' to genus
const genus = 'Callithrix'

// assign constant 'Jacchus' to genus
const species = 'Jacchus'

// create an object of the two constants
// where genus is the key and species the value
const creature = {genus, species}
console.log(creature)

// Question 6
// What does this code do? 

// WHAT DOES THIS QUESTION WANT?!

const creature = {
gen: 'Callithrix',
spec: 'Jacchus'
}

const {genus, species} = creat
console.log(`genus is ${genus}`)
console.log(`species is ${species}`)

// Question 7
// Return to Me, For My Heart Wants Only You

// function takes two parameters first and second
const verbose_sum = (first, second) => {

// print going to add first to second
console.log(`Going to add ${first} to ${second}`)

// total = add together first and second
let total = first + second

// return total
return total
// once return is executed the function is exited!

console.log(`Finished summing`)
// finish summing will not print!
}

var result = verbose_sum(3, 6)
// the function will print "going to add 3 to 6"
console.log(result)
// we stored the result of the function and will print this result


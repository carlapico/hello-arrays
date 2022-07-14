console.log('Hello World')

let fruits=['kiwi', 'mango','apple']
fruits.push('avocado')

console.log(fruits)

console.log(...fruits)

//this is the reg display...
// thhis is the spread ...

console.log(`This is the regular display`, fruits)
console.log(`This is the spread`, ...fruits)

// same as 

console.log('this is reg display -->', fruits, '\nthis is spread -->', ...fruits) // he used arrows but they are not necessary 


// - Add a new fruit to the beginning of the array
// - Display the array
// - Remove the last fruit.
// - Display the array

fruits.unshift('lychee')
console.log(fruits)

fruits.pop()
console.log(fruits)

// - Display the index of mango 
// - Sort the array alphabetically
// - Display the sorted array 


fruits.sort()
console.log(fruits)

const chickenEgg = ['🐔','🥚'].sort()
console.log(`The ${chickenEgg[0]} came first!`)


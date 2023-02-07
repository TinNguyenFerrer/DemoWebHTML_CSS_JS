
//===================================Array exercises=========================================

//Q1 Define a function called cleanNames that accepts an array of strings containing additional 
//space characters at the beginning and end. 
//The cleanNames() function should use the array map method to return a new array full of trimmed names.
function cleanNames(arr) {
  return arr.map((name) => name.trim())
}
//test
console.log(cleanNames(["  avenger  ", "  captain", "city  "]))

/*Q2 Write a function that converts an array of values from miles to kilometres using the map method. 
In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" 
and return this variable.*/
function milesToKilometres(arr) {
  return arr.map(mile => mile * 1.609)
}
function totalDistance(total, distance) {
  return total + distance
}
const listKm = milesToKilometres([1, 3, 5, 6, 3])
console.log(listKm)
const totalDistanceInKilometers = listKm.reduce(totalDistance, 0)
console.log(totalDistanceInKilometers)

/*Q3 Square and sum the array elements using the arrow function 
and then find the average of the array.*/
function squareArray(arr) {
  return arr.map(num => num * num)
}
function sumArray(arr = []) {
  return arr.reduce((total, num) => total + num, 0)
}
function averageArray(arr) {
  return sumArray(arr) / arr.length
}
let square = squareArray([1, 2, 3, 4, 5])
console.log(square)
let sum = sumArray(square)
console.log(sum)
let average = averageArray(square)
console.log(average)

// Q4 Create a new array using the map function whose each element is equal to the original element plus 4.
let arr = [1, 2, 3, 4, 5]
let newArr = arr.map(num => num * num)
console.log(newArr)

// Q5 From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
newArr = arr.filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((total, num) => total + num, 0)
console.log(newArr)

// Q6 Create a new array whose elements is in uppercase of words present in the original array.
let fruits = ["Orange", "PotaTo", "BananA", "MangO"]
let fruitsUppercase = fruits.map(fruit => fruit.toUpperCase())
console.log(fruitsUppercase)
/*Q7 Use the .map() method on the heros array to return a new array.
+ The new array should rename the 'name' key to 'hero'.
+ The 'name' key should not appear in the new array.
+ The new array should have a new key added called (id).
+ The key 'id' should be based on the index.

ex:
const heros = [
  { name: 'Spider-Man' },
  { name: 'Thor' },
  { name: 'Black Panther' },
  { name: 'Captain Marvel' },
  { name: 'Silver Surfer' }
];
EXPECTED OUTPUT (array of objects): 
[
  { id: 0, hero: 'Spider-Man' }, 
  { id: 1, hero: 'Thor' }, 
  { id: 2, hero: 'Black Panther' }, 
  { id: 3, hero: 'Captain Marvel' }, 
  { id: 4, hero: 'Silver Surfer' }
]
*/
const heros = [
  { name: 'Spider-Man' },
  { name: 'Thor' },
  { name: 'Black Panther' },
  { name: 'Captain Marvel' },
  { name: 'Silver Surfer' }
];
let newHeros = heros.map((hero, index) => {
  return { id: index, hero: hero.name }
})
console.log(newHeros)
/*Q8 Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. Use console.log to display the results.
+ An array of odd numbers.
+ An array of numbers divisible by 2 or 5.
+ An array of numbers divisible by 3 and then squared those numbers.
+ The sum of the following: square the numbers divisible by 5.*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// array of odd numbers
let oddNumbers = numbers.filter(num => num % 3 === 0)
console.log(oddNumbers)
// array of numbers divisible by 2 or 5
let numbersDivisible2Or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0)
console.log(numbersDivisible2Or5)
// array of numbers divisible by 3 and then squared those numbers
let numbersDivisible3AndSquared = numbers.filter(num => num % 3 === 0)
  .map(num => num * num)
console.log(numbersDivisible3AndSquared)
// sum of the following: square the numbers divisible by 5
let numbersdivisible5AndSquared = numbers.filter(num => num % 5 === 0)
  .map(num => num * num)
console.log(numbersdivisible5AndSquared)

//===================================Object exercises=========================================
/*Q1 Write a function called calculateSalesTotals() which returns an array with new two new keys (sale and total).
The key 'sale' equals the calculated sale price based on the original price and the discount. 
The key 'total' equals the computed total based on stock, the original price and the discount. 
You have to use Object Destructuring on the objects in the sales array and Object Default Values for the discount key. The default value would be 0.0.*/
/*
const sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }
];
EXPECTED OUTPUT (array of objects):
[
  {
    item: "PS4 Pro",
    original: 399.99,
    sale: 399.99,
    stock: 3,
    total: 1199.97
  },
  {
    discount: 0.1,
    item: "Xbox One X",
    original: 499.99,
    sale: 449.991,
    stock: 1,
    total: 449.991
  }
]
*/
const sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];
const updatedSales = sales.map(sale => {
  let { discount = 0, original, stock } = sale;
  sale.sale = original - discount * original
  sale.total = stock * sale.sale
  return sale
})
console.log(updatedSales)
/*Q2 Create a function named goToSecondClass() that accepts a destructured object as a parameter. 
The parameter extracts the "secondHour" property of the object. The function should return this statement:*/
const myClasses = {
  firstHour: "Ethics",
  secondHour: "Programming",
  thirdHour: "Biology"
};
function goToSecondClass({secondHour}){
  return `Time to go to ${secondHour} class!`
}
console.log(goToSecondClass(myClasses))
/*Q3 Consider the following array:
let colors = ["white", "blue", "yellow", "black", "red", "green"];
Using array destructuring assign the first 2 elements to firstColor and secondColor variables and assign the remaining elements to otherColors variable. Display the values of these 3 variables.*/
let colors = ["white", "blue", "yellow", "black", "red", "green"];
const [firstColor, secondColor, ...otherColors] = colors
console.log(firstColor)
console.log(secondColor)
console.log(otherColors)
/*
Q4 Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/
function isObject(obj) {
  return (typeof obj === "object" || typeof obj === "function")
}
function keysObject(obj){
  if(!isObject(obj)){
    return []
  }
  return Object.keys(obj)
}
var rgbColors = [{red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}]
console.log(keysObject(rgbColors))
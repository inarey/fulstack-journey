const numbers = [80,5,8,16];

//push() push 100 and see the result
numbers.push(100);
console.log(numbers); //result: [80, 5, 8.16, 100]

//includes() check if 5 is in the array
const hasFive = numbers.includes(5);
console.log(hasFive); //result: true

//forEach() iterate over the array and log each number
numbers.forEach((number) => {
  console.log(number);
}); //result: 80, 5, 8.16, 100 

//map() create a new array with each number multiplied by 2
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); //result: [160, 10, 16.32, 200]

//some() check if any number is greater than 10
const hasGreaterThanTen = numbers.some((number) => number > 10);
console.log(hasGreaterThanTen); //result: true

//find() find the first number greater than 8
const firstGreaterThanEight = numbers.find((number) => number > 8);
console.log(firstGreaterThanEight); //result: 80

//filter() create a new array with numbers greater than 8
const filteredNumbers = numbers.filter((number) => number > 8);
console.log(filteredNumbers); //result: [80, 16, 100]



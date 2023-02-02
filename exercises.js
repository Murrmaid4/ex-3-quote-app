// 3-1 . flattening(list)
/* 
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

*/

export function flattenArray()

function flattenArray(){
let arrays = [[1, 2, 3], [4, 5], [6]];

let flatten = arrays.reduce((x, y) => {
    return x.concat(y)
}, []);

console.log(flatten)
return flatten
}

console.log(flattenArray());
// -------------------------------
/* 3-2. loop(value, test, update, body)
Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning. */

// Your code here.
export function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
 
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// -----------------------------------------
/* 

3-3. everyLoop(array, test)
3-4. everySome(array, test)
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement two versions of every (everySome and everyLoop) as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

*/

export function everyLoop(array, test) 
{
    for (let element of array) {
        if (!test(element)) return false;
      }
      return true;
}

export function everySome(array, test) 
{
    return !array.some(element => !test(element));
} 

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true
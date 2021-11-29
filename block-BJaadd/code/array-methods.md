Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array.

2. `join`

- Parameter: The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
   - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
   - Example:
     ```js
    var elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join()); //"Fire,Air,Water"

    console.log(elements.join('')); //"FireAirWater"

    console.log(elements.join('-')); //"Fire-Air-Water"

     ```
   - `join` method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
   - No it does not mutate the original array.

3. `flat`

- Parameter: accepts only number, default to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
    var arr1 = [1, 2, [3, 4]];
    arr1.flat(); // [1, 2, 3, 4]

    var arr2 = [1, 2, [3, 4, [5, 6]]];
    arr2.flat(); // [1, 2, 3, 4, [5, 6]]

    var arr3 = [1, 2, [3, 4, [5, 6]]];
    arr3.flat(2);// [1, 2, 3, 4, 5, 6]
     ```
   - `flat` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - No it does not mutate the original array.

4. `push`

- Parameter: The element(s) to add to the end of the array.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
    var animals = ['pigs', 'goats', 'sheep'];

   console.log(animals.push('cows')); // Array ["pigs", "goats", "sheep", "cows"]

   animals.push('chickens');

   console.log(animals); // Array ["pigs", "goats", "sheep", "cows", "chickens"]
     ```
   - `flat` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - Yes it mutates the original array.

5. `indexOf`

- Parameter: The string value to search for.
   - Return: give index value (default by 0) and -1 if not found.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.indexOf("a"); // 3
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.indexOf("quick"); // 2
     let houseName = 'Starks';
     houseName.indexOf("A"); // -1
     ```
    `indexOf()` method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
   - No it does not mutate the original array.


6. `lastIndexOf`

- Parameter: The string value to search for.
   - Return: give last index value (default by 0) and -1 if not found.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.lastIndexOf("a"); // 7
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.lastIndexOf("b"); // 8
     let houseName = 'Starks';
     houseName.lastIndexOf("A"); // -1
     ```
    `lastIndexOf()` method returns the last index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
   - No it does not mutate the original array.

7. `includes`

- Parameter: A string to be searched for within str.
   - Return: true or false
   - Example:
     ```js
     let name = 'Arya Stark';
     name.includes("a"); // true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.includes("quick"); // true
     let houseName = 'Starks';
     houseName.includes("A"); // false
     ```
    `includes()` method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
   - No it does not mutate the original array.

8. `reverse`

- Parameter: No parameter.
   - Return: The reversed array.
   - Example:
     ```js
     var array1 = ['one', 'two', 'three'];
     console.log('array1: ', array1); // ['one', 'two', 'three']

     var reversed = array1.reverse(); 
     console.log('reversed: ', reversed);// ['three', 'two', 'one']
     ```
    `reverse` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
   - Yes it mutates the original array.

9. `every`

- Parameter: A function to test for each element, taking three arguments:
   - Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false.

   - Example:
     ```js
     function isBelowThreshold(currentValue) {
      return currentValue < 40;
    }

     var array1 = [1, 30, 39, 29, 10, 13];

     console.log(array1.every(isBelowThreshold));// true
     ```
    `every` method tests whether all elements in the array pass the test implemented by the provided function.
   - No it does not mutate the original array.

10. `shift`

- Parameter: No parameter.
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
     var array1 = [1, 2, 3];

     var firstElement = array1.shift();

     console.log(array1); // [2, 3]

     console.log(firstElement);// 1
     ```
    `shift` method removes the first element from an array and returns that element. This method changes the length of the array.
   - Yes it mutates the original array.

11. `splice`

  - Parameter: it takes two parameter start and deleteCount.
   - Return: An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
   - Example:
     ```js
     var months = ['Jan', 'March', 'April', 'June'];
     months.splice(1, 0, 'Feb'); // inserts at 1st index position
     console.log(months); // ['Jan', 'Feb', 'March', 'April', 'June']

     months.splice(4, 1, 'May'); // replaces 1 element at 4th index
     console.log(months); // ['Jan', 'Feb', 'March', 'April', 'May']
     ```
    `splice` method changes the content of an array by removing existing elements and/or adding new elements.
   - Yes it mutates the original array.

12. `find`

- Parameter: Function to execute on each value in the array, taking 3 arguments:
   - Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
   - Example:
     ```js
     var array1 = [5, 12, 8, 130, 44];

     var found = array1.find(function(element) {
      return element > 10;
    });

    console.log(found);// 12

     ```
    `find` method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
   - No it does not mutate the original array.

13. `unshift`

- Parameter: The elements to add to the front of the arr.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     var array1 = [1, 2, 3];

    console.log(array1.unshift(4, 5)) // 5

    console.log(array1);// [4, 5, 1, 2, 3]

     ```
    `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.
   - Yes it mutates the original array.

14. `findIndex`

- Parameter: A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
   - Return: The index of the first element in the array that passes the test. Otherwise, -1.
   - Example:
     ```js
     var array1 = [5, 12, 8, 130, 44];

     function isLargeNumber(element) {
      return element > 13;
    }

     console.log(array1.findIndex(isLargeNumber));// 3


     ```
    `findIndex` method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
    - No it does not mutate the original array.

15. `filter`

- Parameter: Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
   - Example:
     ```js
     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

     const result = words.filter(word => word.length > 6);

     console.log(result); // ["exuberant", "destruction", "present"]
     ```
    `filter` method creates a new array with all elements that pass the test implemented by the provided function.
    - No it does not mutate the original array.

16. `forEach`

- Parameter: Function to execute on each element. It accepts between one and three arguments:
   - Return: undefined.
   - Example:
     ```js
     var array1 = ['a', 'b', 'c'];

     array1.forEach(function(element) {
     console.log(element);
    });

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
     ```
    `forEach` method executes a provided function once per array element.
    - No it does not mutate the original array.

17. `map`

- Parameter: Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
   - Return: A new array with each element being the result of the callback function.
   - Example:
     ```js
     const array1 = [1, 4, 9, 16];

     const map1 = array1.map(x => x * 2);

     console.log(map1);// expected output: Array [2, 8, 18, 32]
     ```
    `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
    - No it does not mutate the original array.

18. `pop`

- Parameter: No parameters.
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
     const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

     console.log(plants.pop());// "tomato"

     console.log(plants);// ["broccoli", "cauliflower", "cabbage", "kale"]

     plants.pop();

    console.log(plants);// ["broccoli", "cauliflower", "cabbage"]
     ```
    `pop` method removes the last element from an array and returns that element. This method changes the length of the array.
    - Yes it mutates the original array.

19. `reduce`

- Parameter: A “reducer” function that takes four arguments:
   - Return: The value that results from running the “reducer” callback function to completion over the entire array.
   - Example:
     ```js
     const array1 = [1, 2, 3, 4];
     const reducer = (previousValue, currentValue) => previousValue + currentValue; 
     console.log(array1.reduce(reducer)); // 10 // 5 + 1 + 2 + 3 + 4
     console.log(array1.reduce(reducer, 5)); // 15
     ```
    `reduce` method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
    - No it does not mutate the original array.

20. `slice`

- Parameter: The zero-based index at which to begin extraction.
   - Return: A new string containing the extracted section of the string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.slice(2); // 'ya Stark'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.slice(0, 10); // 'A queck bro'
     let houseName = 'Starks';
     houseName.slice(7, 0); // ''
     ```
    `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.
    - No it does not mutate the original array.

21. `some`

- Parameter: A function to test for each element, taking three arguments:
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
     ```js
     const array = [1, 2, 3, 4, 5];

     const even = (element) => element % 2 === 0;

     console.log(array.some(even));// true

     ```
    `some()` It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
    - No it does not mutate the original array.

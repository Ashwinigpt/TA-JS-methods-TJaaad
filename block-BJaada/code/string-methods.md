Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.charAt(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: no parameter
   - Return: It converted to upper case .
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); // 'ARYA STARK'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(); // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
     let houseName = 'Starks';
     houseName.toUpperCase(); // "STARKS"
     ```  
     `toUpperCase()` method returns the value of the string converted to uppercase. 

3. `toLowerCase`

   - Parameter: no parameter
   - Return: It converted to lower case .
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toLowerCase(); // 'arya stark
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toLowerCase(); // 'a quick brown fox jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.toLowerCase(); // "starks"
     ```  
     `toLowerCase()` method returns the value of the string converted to lowercase. 


4. `trim`

- Parameter: no parameter
   - Return: It removes extra whitespace.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trim(); // 'Arya Stark
     let sentance = '  A quick brown   fox jumped   over a lazy dog  ';
     sentance.trim(); // 'A quick brown fox jumped over a lazy dog'
     let houseName = '   Starks ';
     houseName.trim(); // "Starks"
     ```  
     `trim()` method removes whitespace from both ends of a string and returns a new string.

5. `trimEnd`

- Parameter: no parameter
   - Return: It removes extra whitespace from the end.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trimEnd(); // '   Arya Stark'
     let sentance = '  A quick brown fox jumped over a lazy dog  ';
     sentance.trimEnd(); // '   A quick brown fox jumped over a lazy dog'
     let houseName = '   Starks ';
     houseName.trimEnd(); // '   Starks'
     ```  
     `trimEnd()` method removes whitespace from the end of a string.

6. `trimStart`

- Parameter: no parameter
   - Return: It removes extra whitespace from the begining.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trimStart(); // 'Arya Stark   '
     let sentance = '  A quick brown fox jumped over a lazy dog  ';
     sentance.trimStart(); // 'A quick brown fox jumped over a lazy dog  '
     let houseName = '   Starks ';
     houseName.trimStart(); // 'Starks  '
     ```  
     `trimStart()` method removes whitespace from the beginning of a string.

7. `concat`

- Parameter: One or more strings to concatenate to str.
   - Return: It concatinates the variables.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.concat("" , housename); // 'Arya Stark Starks'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.concat("is", name); // 'A quick brown fox jumped over a lazy dog Arya Stark'
     let houseName = 'Starks';
     houseName.concat(name); // 'StarksArya Stark'
     ```  
     `concat()` method concatenates the string arguments to the calling string and returns a new string.

8. `endsWith`

- Parameter: The characters to be searched for at the end of str.
   - Return: true or false
   - Example:
     ```js
     let name = 'Arya Stark';
     name.endsWith("h"); // true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.endsWith("dog"); // true
     let houseName = 'Starks';
     houseName.endsWith("arta"); // false
     ```
    `endsWith` method lets you determine whether or not a string ends with another string.

9. `includes`

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

10. `indexOf`

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

11. `lastIndexOf`

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

12. `padEnd`

- Parameter: take length and any string value at the end.
   - Return: A String of the specified targetLength with the padString applied at the end of the current str.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.padEnd("15", "."); // 'Arya Stark.....'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padEnd("45"); // 'A quick brown fox jumped over a lazy dog    '
     let houseName = 'Starks';
     houseName.padEnd("10", "o"); // 'Starksoooo'
     ```
    `padEnd()` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. 

13. `padStart`

- Parameter: take length and any string value at the starting.
   - Return: A String of the specified targetLength with the padString applied at the start of the current str.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.padStart("15", "."); // '.....Arya Stark'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padStart("45"); // '    A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.padStart("10", "o"); // 'oooooStarks'
     ```
    `padStart()` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. 

14. `repeat`

- Parameter: An integer between 0 and +Infinity, indicating the number of times to repeat the string.
   - Return: A new string containing the specified number of copies of the given string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.repeat(3); // 'Arya StarkArya StarkArya Stark'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.repeat(); // ""
     let houseName = 'Starks';
     houseName.repeat(4); // 'StarksStarksStarksStarks'
     ```
    `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`

- Parameter: It takes two string.
   - Return: A new string, with some or all matches of a pattern replaced by a replacement.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.replace("r", "i"); // 'Aiya Stark'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.replace("i", "e"); // 'A queck brown fox jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.replace("a"); // 'Stundefinedrks'
     ```
    `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement.

16. `slice`

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

17. `split`

- Parameter: 
  - seperator - optional - (string data type)
  - limit - optional - (number data type)
   - Return: an array of strings.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.split(''); // ['A', 'r', 'y', 'a', ' ', 'S', 't', 'a', 'r', 'k']
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.split(' '); // ['A', ' ', 'quick', ' ', 'brown', ' ', 'fox', ' ', 'jumped', ' ', 'over', ' ', 'a', ' ', 'lazy', ' ', 'dog']
     let houseName = 'Starks';
     houseName.split('o', 10); // 'Starks'
     ```
    `split()` method accepts two optional parameter seperator and limit returns array of strings.


18. `substring`

- Parameter: 
  - indexStart - The index of the first character to include in the returned substring.
  - indexEnd Optional - The index of the first character to exclude from the returned substring.
   - Return: A new string containing the specified part of the given string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.substring(0, 5); // 'Arya  '
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.substring(21, 0); // 'A quick brown fox jum'
     let houseName = 'Starks';
     houseName.substring(21, NaN); // 'A quick brown fox jum'
     ```
    `substring()` method returns the part of the string between the start and end indexes, or to the end of the string.
/*
In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). 
It represents a unique identifier, which is useful for creating non-enumerable properties on objects and preventing name collisions in object properties.

Here are some key points about Symbols:
- Uniqueness: Each Symbol value is unique. Even if you create multiple symbols with the same description, they are distinct values.
- Immutability: Symbols are immutable and cannot be changed once created.
- Description: When creating a symbol, you can provide an optional description, which is a string used for debugging purposes. However, this description does not affect the uniqueness of the symbol.
- Non-Enumerable: By default, symbols are non-enumerable, meaning they won't appear in for...in loops or Object.keys().

Symbols are typically used in the following scenarios:

- Creating Unique Keys: Symbols can be used as unique keys for object properties, especially when you want to avoid name collisions.

- Private Properties and Methods: Symbols can be used to create private properties and methods on objects. Since symbols are not accessible through normal property access methods, they can provide a form of encapsulation.

- Well-Known Symbols: JavaScript provides a set of well-known symbols that are used to define behavior for built-in language features. For example, Symbol.iterator is used to define an iterator for objects, allowing them to be iterated over using a for...of loop.
 */

let id1 = Symbol("Hello");
let id2=Symbol("Hello")
console.log(id1);
console.log(id1.description); // Output: "Hello"  Description is a Symbol Method
console.log(typeof id1)
console.log(id1==id2) //Output: False


//Inorder to use Symbol inside Object

let age=Symbol();
let user= {
    name:"Yahoo Baaba",
    class:"BTech",
    [age]:25
}

console.log(user)

/*
Output:
class
: 
"BTech"
name
: 
"Yahoo Baaba"
Symbol()
: 
25

 */


//Method 2 of using  Symbol in Object
// user[age]=25;  i.e ObjectName[SymbolName]=Value

//Inorder to  use/ display a single value from object

console.log(user.class) //Output: BTech
console.log(user[age])  //Output:25


// Symbol in Loop
console.log("Loops")
for (let key in user){
    console.log(key)
}

/*Here it only prints name and class, it doesnt prints the age as it is a Symbol
Symbols cannot be used in Loops

*/

//Converting the Object into JSON
console.log(JSON.stringify(user)) // Even here it skips the Symbol
// In order to send Symbol we need to convert it to String
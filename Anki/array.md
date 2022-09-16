# Interview (Arrays)

## What is the **arr.filter(fn)** method?

>filter returns an array of all matching elements, similiar to the find method that looks for a single (first) element that makes the function return true.

```js
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

For Instance:

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```

## What is the **arr.map** method?

>The arr.map method is one of the most useful and often used.
>
>It calls the function for each element of the array and returns the array of results.


- For instance, here we transform each element into its length:
```js
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```
 
## What is the **arr.find(fn)** method?

>
- For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:
```js
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
```
- The **arr.findIndex** method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

```js
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3
```

## forEach

## Some

## every

## reduce

## includes

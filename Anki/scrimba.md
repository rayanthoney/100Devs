# Scrimba 🐻

## Describe a **Variable**

> You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

> A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9). Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).

```js

var Declares a variable, optionally initializing it to a value.

let Declares a block-scoped, local variable, optionally initializing it to a value.

const Declares a block-scoped, read-only named constant.

```

## Describe a **Global Object**

> In JavaScript, there's always a global object defined. In a web browser, when scripts create global variables defined with the var keyword, they're created as members of the global object.
>
> >(In Node.js this is not the case.) The global object's interface depends on the execution context in which the script is running. For example:
>
- In the _Browser_ - Window
- In the _Server_ - Global
> The **_globalThis_** global property allows one to access the global object regardless of the current environment.

## **Hoisting**

> JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

const str = "Hello World";

str.length; // 11

str.charAt(4); // 0

str.endsWith("d"); // true

str.includes("World"); // true

str.indexOf("W"); // 6

str.repeat(2); // "Hello WorldHello World"

str.replace("World", "RayAnthoney"); // "Hello RayAnthoney"

str.slice(6, 10); // "Worl"

str.split(" "); // ["Hello World"]

str.startsWith("Hello"); // true

str.substring(6, 11); // "World"

str.substr(1, 4); // "ello"

str.toLowerCase(); // "hello world"

str.toUpperCase(); // "HELLO WORLD"

"  Hello World"  .trim(); // "Hello"
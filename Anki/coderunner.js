const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



const str = 'Hello world! My name is also world. How funny.';
const stringPattern = 'world';
const regexPattern = /world/gi;
const replacement = 'gitconnected';

console.log(str.replace(stringPattern, replacement));
// returned output: "Hello gitconnected! My name is also world. How funny."
console.log(str.replace(regexPattern, replacement));
// returned output:  "Hello gitconnected! My name is also gitconnected. How funny."
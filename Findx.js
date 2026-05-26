//Find number of times a digit occurs in given input
const n1 = 98790959
let n2 = (n1.toString().match(/9/g) || []).length;
console.log(n2);

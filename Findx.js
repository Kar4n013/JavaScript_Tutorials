//Find number of times a digit occurs in given input
const n1 = 98790959
const target = 9
let regex = new RegExp(target,"g");
let n2 = (n1.toString().match(regex) || []).length;
console.log(target+" is repeated "+n2+" times in given input "+n1);

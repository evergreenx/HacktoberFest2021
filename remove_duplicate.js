// remove dupilcate from ana array
const names = ['John', 'Paul', 'George', 'Ringo', 'John','Paul'];

let unique = [...new Set(names)];
console.log(unique);

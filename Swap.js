let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); 
console.log(b); 

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); 
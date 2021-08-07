var x = 5;
var y = 7;
console.log(x, y);

//First approach with temp
/* var temp = x;
x = y;
y = temp;
console.log(x, y); */

//Destructuring
[x, y] = [y, x]

console.log(x, y);
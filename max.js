function findMax(x, y, z){
    if(x>=y && x>=z){
        return x;
    }
    else if(y>=x && y>=z){
        return y;
    }
    else{
        return z;
    }
}

function findMin(x, y, z){
    if(x<=y && x<=z){
        return x;
    }
    else if(y<=x && y<=z){
        return y;
    }
    else{
        return z;
    }
}

let n = 3;
let x = Math.round(Math.random()*n);
let y = Math.round(Math.random()*n);
let z = Math.round(Math.random()*n);

console.log("The Numbers: ", x, y, z);

let max = findMax(x, y, z);
console.log("Maximum Number: ", max);

let min = findMin(x, y, z);
console.log("Minimum Number: ", min);

/* if(x > y){
    console.log(x, "x is bigger");
}
else{
    console.log(y, "y is bigger");
}
 */
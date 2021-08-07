function arraySum(arr){
    let len = arr.length;
    let sum = 0;
    for(let i = 0; i < len; i++){
        sum += arr[i];
    }
    return sum;
}


let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let mySum = arraySum(myArr);
console.log(mySum);

/* let sum = 0;
let len = arr.length;
for (let i = 0; i < len; i++){
    sum += arr[i];
}*/

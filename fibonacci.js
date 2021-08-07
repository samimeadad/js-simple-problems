/* Fibonacci Series
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ... ... ...
nth = (n-1)th + (n-2)th */

function fibonacci(n){
    let fibo = [];
    let i = 0;
    if(n <= 0 || typeof(n) != 'number'){
        return "BAD INPUT!";
    }
    else if(n == 1){
        fibo = [0];
        return fibo;
    }
    else if(n == 2){
        fibo = [0, 1];
        return fibo;
    }
    else{
        fibo = [0, 1]
        for(i = 2; i < n; i++){
            fibo[i] = fibo[i-1] + fibo[i-2];
            // console.log(fibo[i-2]);
        }
        return fibo;
    }
}

let n = 12;
let myFibo = fibonacci(n);
console.log(myFibo);
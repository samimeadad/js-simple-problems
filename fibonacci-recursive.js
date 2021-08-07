/* Fibonacci Series
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ... ... ...
nth = (n-1)th + (n-2)th */

/* function fibonacci(n){
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
        
    }
}
 */
function fibonacciSeries(n){
    let fibo = [];
    if(n == 0){
        fibo = [0];
        return fibo;
        
    }
    else if(n == 1){
        fibo = [0, 1];
        return fibo;
    }
    else{
        fibo = fibonacciSeries(n-1);
        fibo[n] = fibo[n-1] + fibo[n-2];
        return fibo;
    }
}

/* let n = 12;
let myFibo = fibonacci(n);
console.log(myFibo); */

let n = 6;
let mySeries = fibonacciSeries(n);
console.log(mySeries);
function findLargest(arr){
    let largest = arr[0];
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

function findSmallest(arr){
    let smallest = arr[0];
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

function findAvg(arr){
    let average = 0;
    let sum = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        sum += arr[i];
    }
    return sum/len;
}

function main(){
    let myArr = [-76, -78, -98, -72, -87, -89, -85, -84, -90, -87, -96, -93];
    
    let myLargest = findLargest(myArr);
    console.log("Largest Number: ", myLargest);

    let mySmallest = findSmallest(myArr);
    console.log("Smallest Number: ", mySmallest);

    let myAvg = findAvg(myArr);
    console.log("Average: ", myAvg);
}

main();
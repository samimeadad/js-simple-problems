//Random Number Generator
let selected = [];
for(let i = 0; i < 30; i++){
    let randomNumber = Math.round(Math.random()*100);
    if(selected.indexOf(randomNumber) == -1){
        selected.push(randomNumber);
    }
    else{
        console.log(selected, "found duplicate", randomNumber);
    }
}
console.log(selected);
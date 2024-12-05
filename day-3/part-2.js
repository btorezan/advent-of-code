const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    
    const mulPositions = returnMatchesMul(data);
    const dontPositions = returnMatchesDontPositions(data);
    const doPositions = returnMatchesDoPositions(data)
    
    let sumOfMuls = 0;
    let on = true;

    mulPositions.forEach(function(val, i){
        mulPosition = mulPositions[i];
        previousMulPosition  = i>0?mulPositions[i-1]:0
        
        const existDont = dontPositions.some(value => value > previousMulPosition.index && value < mulPosition.index);
        const existDo = doPositions.some(value => value > previousMulPosition.index && value < mulPosition.index);
        
        if(existDont) on = false;
        if(existDo) on = true;

        if(on){
            const factors = extract(val[0]);
            console.log(factors);
            const mul = multiply(factors[0],factors[1]);
            sumOfMuls += mul;
        }

    })



    console.log(sumOfMuls);

});

function multiply(num1, num2) {
    return num1 * num2;
}

function extract(str) {
    const regex = /\d{1,3}/g;
    const numbers = str.match(regex);
    return numbers;
}

function returnMatchesDontPositions(data){
    const regex = /don't\(\)/g;
    let dontPositions = [];

    const matchesDont = [...data.matchAll(regex)];
    matchesDont.forEach(match => {
        dontPositions.push(match.index);
    });
    return dontPositions;
}

function returnMatchesDoPositions(data){
    const regex = /do\(\)/g;
    let dontPositions = [];

    const matchesDont = [...data.matchAll(regex)];
    matchesDont.forEach(match => {
        dontPositions.push(match.index);
    });
    return dontPositions;
}

function returnMatchesMul(data){
    const regex = /mul\(\d{1,3},\d{1,3}\)/g;
    let mulPositions = [];

    const matchesMul = [...data.matchAll(regex)];
    matchesMul.forEach(match => {
        mulPositions.push(match.index);
    });
    return matchesMul
}
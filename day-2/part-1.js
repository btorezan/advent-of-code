const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const linhas = data.split('\n');
  let countTrue = 0;
  let countFalse = 0;

   linhas.forEach(function(linha, i){
     if(isReportSafe(linha)){
        countTrue++;
     }
   });

   console.log(countTrue);
});

function isReportSafe(report){
    const numbers = report.split(" ");
    let count = 0;
    let diffs = [];
    for(let i = 0; i<numbers.length-1; i++){
        const diff = numbers[i]-numbers[i+1];
    
        if(Math.abs(diff)>3||diff==0) return false;
       
        diffs.push(diff);
    }
    if(!(isAllDiffsPositive(diffs)||isAllDiffsNegative(diffs))) return false;

    return true;
}

function isAllDiffsPositive(diffs){
    return diffs.every(numero => numero > 0);
}

function isAllDiffsNegative(diffs){
    return diffs.every(numero => numero < 0);
}
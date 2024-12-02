const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const linhas = data.split('\n');
  let totalSum = 0;
  
  let firstColumn = [];
  let secondColumn = [];

  linhas.forEach(function(linha, i){
    const partes = linha.trim().split(/\s+/);

    firstColumn.push(partes[0]);
    secondColumn.push(partes[1]);

  });

    const sum = subtractPairsAndReturnSumOfDifferences(firstColumn, secondColumn);
    console.log(sum);

});


function subtractPairsAndReturnSumOfDifferences(firstSequence, secondSequence){
    firstSequenceOrdered = firstSequence.sort();
    secondSequenceOrdered = secondSequence.sort();
    
    let sumOfDiffs = 0;
    
    for(var i=0; i < firstSequence.length; i++){
        sumOfDiffs += Math.abs(firstSequence[i]-secondSequence[i]);
    }

    return sumOfDiffs;
}
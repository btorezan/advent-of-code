const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const linhas = data.split('\n');
  let totalSum = 0;
  
  let firstColumn = [];
  let secondColumn = [];

  linhas.forEach(function(linha){
    const partes = linha.trim().split(/\s+/);

    firstColumn.push(partes[0]);
    secondColumn.push(partes[1]);

  });

  console.log(findTheSimilarityFactor(firstColumn,secondColumn));
});

function findTheSimilarityFactor(firstColumn, secondColumn){
  let similarityFactor = 0;
  firstColumn.forEach(function(linha){
    const ocorrencias = secondColumn.filter(elemento => elemento === linha).length;
    similarityFactor += linha*ocorrencias;
  })
  return similarityFactor;
}
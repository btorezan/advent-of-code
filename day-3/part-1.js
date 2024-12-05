const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
  const text = data.match(regex);

  let sumOfMuls = 0;

  text.forEach(function(value, i){
      const factors = extract(value);
      const mul = multiply(factors[0],factors[1]);
      sumOfMuls += mul;
  });

  console.log(sumOfMuls);

});

function multiply(num1, num2){
    return num1*num2;
}

function extract(str){
    const regex = /\d{1,3}/g; // Captura números de 1 a 3 dígitos
    const numbers = str.match(regex); // Extrai os números
    return numbers;
    //console.log(numbers); // ["595", "110"]
}
//calcular a média do aluno: 

const prompt= require('prompt-sync')();

var media = 0;

for (let i = 1; i <= 3; i++) {
  var nota = Number(prompt(`Informe a ${i} ª nota: `));
  media += nota;
}
media = media / 3;
console.log(`A média do aluno é: ${media}`);
let result = (media >= 7) ? 'Aprovado' : 'Reprovado';
console.log(`O Aluno está ${result}`);


//*******************************************************************/
// calcular a nota faltante:

var media = 0;

for (let i = 1; i <= 2; i++) {
  var nota = Number(prompt(`Informe a ${i} ª nota: `));
  media += nota;
}

media = (media - 21);
let valor = Math.abs(media);
console.log(`O aluno precisa tirar: ${valor} para ser aprovado!`);
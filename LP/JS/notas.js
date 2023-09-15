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
const prompt= require('prompt-sync')();
// Função sem parâmetros
function saudacao() {
    console.log("Bem-vindo à calculadora!");
  }
  // Função com parâmetros e retorno de valor
  function calcular(operacao, num1, num2) {
    let resultado;
    
    switch (operacao) {
      case 'soma':
        resultado = num1 + num2;
        break;
      case 'subtracao':
        resultado = num1 - num2;
        break;
      case 'multiplicacao':
        resultado = num1 * num2;
        break;
      case 'divisao':
        resultado = num1 / num2;
        break;
      default:
        resultado = "Operação inválida";
    }
    return resultado;
  }
    // Arrow function com parâmetros e retorno de valor
  const calcularResto = (num1, num2) => num1 % num2;
    // chamar boas-vindas (Função sem parâmetros)
  saudacao();
    // Solicitar ao usuário a operação e os números
  const operacao = prompt("Escolha a operação: soma, subtracao, multplicacao, resto):");
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  
  let resultado;

  switch (operacao) {
    case 'soma':
    case 'subtracao':
    case 'multiplicacao':
    case 'divisao':
      resultado = calcular(operacao, num1, num2);
      break;
    case 'resto':
      resultado = calcularResto(num1, num2);
      break;
    default:
      resultado = "Operação inválida.";
  }
console.log(`Resultado da operação ${operacao}: ${resultado}`);




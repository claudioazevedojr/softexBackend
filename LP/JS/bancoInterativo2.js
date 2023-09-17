const prompt=require("prompt-sync")();


function saudacao() {
    console.log("Bem-vindo ao Banco");
};
// Definindo o objeto Banco
const Banco = {
    conta: "12345-6",
    saldo: 1000.00,
    tipoConta: "Conta Corrente",
    agencia: "7890",
  
    // Método para buscar o saldo
    buscarSaldo: function () {
      return this.saldo;
    },
  
    // Método para realizar um depósito
    deposito: function (valor) {
        this.saldo += valor;
        return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
      },
  
    // Método para realizar um saque
    saque: function (valor) {
        this.saldo -= valor;
        return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
      },
  
    // Método para obter o número da conta
    numeroConta: function () {
      return this.conta;
    },
  };
  
  // Exemplo de utilização dos métodos com interação do usuário
  saudacao(); 
  while (true) {
    const escolha = prompt("Escolha uma operação: (1) Saldo, (2) Depósito, (3) Saque, (4) Número da Conta, (5) Sair");
  
    switch (escolha) {
      case "1":
        console.log(`Saldo atual: R$ ${Banco.buscarSaldo().toFixed(2)}`);
        break;
      case "2":
        const valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
        console.log(Banco.deposito(valorDeposito));
        break;
      case "3":
        const valorSaque = parseFloat(prompt("Digite o valor do saque:"));
        console.log(Banco.saque(valorSaque));
        break;
      case "4":
        console.log(`Número da Conta: ${Banco.numeroConta()}`);
        break;
      case "5":
        console.log("Sessão encerrada.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
  
    if (escolha === "5") {
      break; // Encerra o loop
    }
  }
  
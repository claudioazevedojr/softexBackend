const prompt= require("prompt-sync")();

// Definindo o objeto Banco
const Banco = {
    conta: "12345-6",
    saldo: 1000.00,
    tipoConta: "Puopança",
    agencia: "0917",
  
    // Método para buscar o saldo
    buscarSaldo: function () {
      return this.saldo;
    },
  
    // Método para realizar um depósito
    deposito: function (valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
      } else {
        return "O valor do depósito deve ser maior que zero.";
      }
    },
  
    // Método para realizar um saque
    saque: function (valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
      } else if (valor <= 0) {
        return "O valor do saque deve ser maior que zero.";
      } else {
        return "Saldo insuficiente para realizar o saque.";
      }
    },
  
    // Método para obter o número da conta
    numeroConta: function () {
      return this.conta;
    },
  };
  
  // Saídas dos métodos
  console.log("Número da Conta: " + Banco.numeroConta());
  console.log("Saldo Atual: R$ " + Banco.buscarSaldo().toFixed(2));
  console.log(Banco.deposito(600));
  console.log(Banco.saque(260));
  console.log("Saldo Atual: R$ " + Banco.buscarSaldo().toFixed(2));
  
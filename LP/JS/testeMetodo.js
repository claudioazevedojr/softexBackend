const prompt=require("prompt-sync")();

const teste = {
    casa: 'azul',
    mensagem: function ola() {
        console.log("Olá mundo!")
    },
buscarCasa: function(){
    return this.casa;
},
};

function oi() {
    console.log("Olá mundo!")
};

console.log(teste.casa);
teste.mensagem(); 
oi(); 

console.log(teste.buscarCasa());
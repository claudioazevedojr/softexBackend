const prompt = require("prompt-sync")()

var lista = ['gato', 'vaca', 'boi']
for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
};
// mostra o indece que está o elemento solicitado
var lista = ['gato', 'vaca', 'boi']
console.log(lista.indexOf('vaca'));

//PUSH-adiciona elemento no final da lista
var lista = ['gato', 'vaca', 'boi']
lista.push("coelho");
console.log(lista)

//UNSHIFT-adiciona elemento no inicio da lista
var lista = ['gato', 'vaca', 'boi']
lista.unshift("coelho");
console.log(lista)    

//POP-retira o elemento do final da lista
var lista = ['gato', 'vaca', 'boi']
console.log(lista) 
lista.pop();
console.log(lista) 

//SHIFT-retira o elemento do inicio da lista
var lista = ['gato', 'vaca', 'boi']
console.log(lista) 
lista.shift();
console.log(lista) 
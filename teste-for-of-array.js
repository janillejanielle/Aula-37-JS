let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let placa = "BDR7777";

let letras = Array.from(alfabeto)

let letrasplaca = Array.from(placa)

//imprimindo o alfabeto
for(l of letras.entries()){
    console.log(l)
}

//imprimindo as letras da placa
for(letra of letrasplaca.entries()){
    console.log(letra)
}
//substituição de numero por caracter
let letraSubstituição = letras[letrasplaca[4]]
letrasplaca[4] = letraSubstituição

console.log(letrasplaca)
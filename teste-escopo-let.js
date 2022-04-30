//variável de escopo global let
let nome = "Janille";

console.log(nome)

//não pode ser redeclarada
//var nome = "Janielle"

const sobreNome = function()
{

    //variável de escopo de função
    let nome = "Silva";

   console.log(nome);

   return nome;

}

const nomeDoMeio = function()
{

    //variável de escopo de função
    let nomne = " Janielle da Silva ";

    console.log(nome);

    return nome;

}

let sobre = sobreNome()
let meio = nomeDoMeio()

//valor (nome) da variável atualizado
nome = nome + meio + sobre

console.log(nome)
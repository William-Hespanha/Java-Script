//Escopo é o contexto que a variavel foi declarada

let pokemon = "Charmander"

function evoluir(){
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal (){
    let animal = "Gato"
}

criarAnimal()
console.log(animal)

function avaliarNota(nota){
    if(nota > 60) {
        var aprovado = true
        let situacao = "Aprovado"
    }else{
        var aprovado = false
        let situacao = "Reprovado"
    }
    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}

avaliarNota(83)
avaliarNota(43)

function ola() {
    var texto = "Olá mundo!"
}
console.log(texto)
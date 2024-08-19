const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//Adicionar elementos 

// função push (adiciona no final do elemento)
arr.push("Boromir")
console.log(arr)

// unshift (adiciona no começo do elemento)
arr.unshift("Boromir")
console.log(arr)

//Remover elementos 

//pop (remover elemento que está no final)
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift (remove elemente que está no começo)
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquiser por um Elemento

//Includes (verificar se um elemento existe no array)

const inclui = arr.includes("Gandalf")
console.log(inclui)

//Index of (saber qual que é o indice desse elemento)
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e Concatenar

//Slice (cria uma cópia de uma parte do Array)
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat (Juntar dois arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituição dos Elementos

// splice (serve para remover um grupo de elementos no array e substituir por outro)
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os elementos do Array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + "se encontra na posição" + indice)
}

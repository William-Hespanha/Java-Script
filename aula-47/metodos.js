let pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla() {
        console.log("Olá, mundo! Meu noe é" + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()
let nome 
let nome_2
let velocidade
let velocidade_2

nome = prompt("Insira o nome do Veiculo 1")
console.log(nome)

nome_2 = prompt("Insira o nome do Veiculo 2")
console.log(nome_2)

velocidade = prompt("Insira a velocidade do Veiculo 1")
console.log(velocidade)

velocidade_2 = prompt("Insira a velocidade do Veiculo 2")
console.log(velocidade_2)

if (parseFloat(velocidade) == parseFloat(velocidade_2)){
    alert(
        "As velocidades são iguais"
    )
} else if (parseFloat(velocidade) > parseFloat(velocidade_2)) {
    alert(
        "O veiculo 1 possui a maior velocidade"
    )
}else{
    alert(
        "O veiculo 2 possui a maior velocidade"
    )
}
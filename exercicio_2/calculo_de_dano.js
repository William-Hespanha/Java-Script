let nome
let poder_de_ataque
let nome_2
let pontos_de_vida
let poder_de_defesa
let escudo
let situacao_1
let situacao_2
let situacao_3


nome = prompt("Insira o nome do Personagem 1")
console.log(nome)
poder_de_ataque = prompt("Insira o poder de ataque do personagem 1")
console.log(poder_de_ataque)

nome_2 = prompt("Insira o nome do Personagem 2")
console.log(nome_2)
pontos_de_vida = prompt("Insira os pontos de Vida do Personagem 2")
console.log(pontos_de_vida)
poder_de_defesa = prompt("Insira o poder de Defesa do personagem 2")

escudo = window.confirm("O seu personagem tem um escudo?")

if (parseFloat(poder_de_ataque) > parseFloat(poder_de_defesa) && escudo == false) {
    situacao_1 = parseFloat(poder_de_ataque) - parseFloat(poder_de_defesa)
        console.log(situacao_1)
    
}

if (parseFloat(poder_de_ataque) > parseFloat(poder_de_defesa) && escudo == true){
    situacao_2 = parseFloat(poder_de_ataque) - parseFloat(poder_de_defesa)
    situacao_2 / 2
    console.log(situacao_2)

}

if(parseFloat(poder_de_ataque) <= parseFloat(poder_de_defesa) ){
    situacao_3 = 0
    console.log(situacao_3)
}



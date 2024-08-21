let opcao = 0
let dinheiro = parseFloat(prompt("Qual é a sua quantidade inicial de Dinheiro? \n"))
let adicionar
let remover

do {
opcao = prompt("Escolha uma opção do menu interativo: \n 1.Adicionar Dinheiro \n 2. Remover Dinheiro \n \n 5. Ecerrar programa \n Quantidade de Dinheiro R$" + parseFloat(dinheiro))

if (opcao == 1){
    alert("Opcao 1 selecionada \n")
    adicionar = parseFloat(prompt("Quanto quer adicionar de dinheiro? \n"))
    dinheiro += adicionar
}


if (opcao == 2){
    alert("Opcao 2 selecionada \n")
    remover = parseFloat(prompt("Quanto quer remover de Dinheiro? \n"))
    dinheiro -= remover
}

if (opcao == 5){
    alert("O sistema está sendo encerrado")
}



} while (opcao != 5)
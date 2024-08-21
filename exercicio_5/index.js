let opcao = 0

do {
opcao = prompt("Escolha uma opção do menu interativo: \n 1.Ordenar valores \n 2. Contar iguais \n 3. Contar repetidos \n 4.Excluir iguais \n 5. Ecerrar programa")

if (opcao == 1){
    alert("Opcao 1 selecionada \n Ordenando valores ")
}

if (opcao == 2){
    alert("Opcao 2 selecionada \n Contando Iguais")
}

if (opcao == 3){
    alert("Opcao 3 selecionada \n Contando repetidos")
}

if(opcao == 4){
    alert("Opcao 4 selecionada \n Excluindo iguais")
}

if (opcao == 5){
    alert("O sistema está sendo encerrado")
}



} while (opcao != 5)
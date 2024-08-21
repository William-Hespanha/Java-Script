let opcao = ""
const imoveis = []

do{
    opcao = prompt("A quantidade de imoveis é: \n" + imoveis.length +  "\n1. Novo imovel\n2.Listar imoveis\n5. Sair ")

    switch (opcao){
        case "1":
        const imovel = {}
        imovel.proprietario = prompt("Informe o nome do proprietário deste imóvel")
        imovel.quant_quartos = prompt("Informe a quantidade de quartos do imóvel")
        imovel.quant_banheiros = prompt("Informe a quantidade de banheiros do imovel")
        imovel.garagem = prompt("Seu imovel possui garagem?")

        const confirmacao = confirm(
            "Salvar este imóvel?\n"+
            "\nProprietário" + imovel.proprietario + 
            "\nQuartos:" + imovel.quant_quartos +
            "\nBanheiros: " + imovel.quant_banheiros +
            "\nPossui garagem?" + imovel.garagem
        )
        if(confirmacao) {
            imoveis.push(imovel)
        }
        
        break
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imovel" + (i + 1) +
                    "\nProprietário" + imoveis[i].proprietario +
                    "\nQuartos" + imoveis[i].quant_quartos +
                    "\nBanheiros" + imoveis[i].quant_banheiros +
                    "\nGaragem" + imoveis[i].garagem
                )
            }
            break
        case "5":
            alert("Encerrando...")
            break
            default:
                alert("Opção Inválida!")
    }



} while (opcao != 5)
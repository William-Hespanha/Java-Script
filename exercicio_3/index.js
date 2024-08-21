let metros = parseFloat(prompt("Coloque quantos Metros deverão ser calculados"))
const opcao = prompt("Selecione qual opção deseja: \nmm) \ncm) \ndm) \ndam) \nhm) \nkm)")

switch(opcao){
    case "mm" :
      metros = 1000 * metros
    alert("O resultado de Metros em Milimetros é de:" + metros)
    break

    case "cm" :
        metros = 100 * metros
        alert("O resultado de Metros em Centimetros é de:" + metros)
        break

        case "dm" :
            metros = metros * 10
            alert("O resultado de Metros em Decimetros é de:" + metros)
            break 
            
            case "dam" :
                metros = metros / 10
                alert("O resultado de Metros em Decametro é de:" + metros)
                break
                
                case "hm" :
                    metros = metros / 100
                    alert("O resultado de Metros em Hectômetro é de:" + metros)
                break

                case "km" :
                    metros = metros / 1000
                    alert("O resultado de Metros em Quilômetros é de:" + metros)
                break

                default : 
                alert("Opção Inválida")


              
}
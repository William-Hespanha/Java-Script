let opcao = ""

function areaDoTriangulo () {
    const base = parseFloat(prompt("Informe a base do triângulo"))
    const altura = parseFloat(prompt("Informe a altura do triângulo"))
    return base * altura / 2
}

function areaDoRetangulo(){
    const base = parseFloat(prompt("Informe a base do retângulo"))
    const altura = parseFloat(prompt("Informe a altura do retângulo"))
    return base * altura
}

function areaDoQuadrado (){
    const lado = parseFloat(prompt("Informe o lado do quadrado"))
    return lado * lado
}

function areaDoTrapezio (){
    const baseMaior = parseFloat(prompt("Informe a base maior do Trapézio"))
    const baseMenor = parseFloat(prompt("Informe a base menor do Trapézio"))
    const altura = parseFloat(prompt("Informe a altura do trapézio"))
    return (baseMaior + baseMenor) * altura / 2
}

function areaDoCirculo (){
    const raio = parseFloat(prompt("Informe o raio do círculo"))
    return 3.14 * (raio * raio)
}

do {
    let resultado
    opcao = prompt("Selecione uma das opções: \n1. Área do triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do círculo\n9. Sair")

    switch (opcao) {
        case "1":
            resultado = areaDoTriangulo()
            break
        case "2":
            resultado = areaDoRetangulo()
            break
        case "3":
            resultado = areaDoQuadrado()
            break
        case "4":
            resultado = areaDoTrapezio()
            break
        case "5":
            resultado = areaDoCirculo()
            break
        case "9":
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida")
    }

    if (resultado){
        alert("Resultado: " + resultado)
    }

} while (opcao != "9")
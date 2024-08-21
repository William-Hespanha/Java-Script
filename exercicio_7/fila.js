let opcao = ""
let fila = []

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º -" + fila[i] + "\n"
    }
    
    opcao = prompt( "Pacientes: \n" + pacientes + "\n Escolha uma ação: \n1. Novo Paciente\n2. Consultar paciente\n5. Sair")

    switch(opcao) {
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break
    
        case "2":
            const pacienteConsultado = fila.shift()
            console.log(pacienteConsultado)
        }
    

} while (opcao != 5)
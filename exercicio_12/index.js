const devs = []

function adicionarNovaTecnologia (ev){
    const tecnologias = document.getElementById('tecnologias')

    const div = document.createElement('div')

    const tecnologiaInput = document.createElement('input')
    tecnologiaInput.type = 'text'
    tecnologiaInput.name = 'tecnologia'
    tecnologiaInput.placeholder = 'Nome da Tecnologia'

    const experiencia = document.createElement('div')

    const exp1 = document.createElement('input')
    exp1.type = 'radio'
    exp1.name = 'experiencia' + devs.length
    exp1.value = '0-2 anos'
    const exp1Label = document.createElement('label')
    exp1Label.innerText = '0 - 2 anos'
    exp1Label.appendChild(exp1)

    const exp2 = document.createElement('input')
    exp2.type = 'radio'
    exp2.name = 'experiencia' + devs.length
    exp2.value = '3 - 4 anos'
    const exp2Label = document.createElement('label')
    exp2Label.innerText = '3 - 4 anos'
    exp2Label.appendChild(exp2)

    const exp3 = document.createElement('input')
    exp3.type = 'radio'
    exp3.name = 'experiencia' + devs.length
    exp3.value = '5+ anos'
    const exp3Label = document.createElement('label')
    exp3Label.innerText = '5+ anos'
    exp3Label.appendChild(exp3)

    experiencia.appendChild(exp1Label)
    experiencia.appendChild(exp2Label)
    experiencia.appendChild(exp3Label)

    const removerBtn = document.createElement('button')
    removerBtn.type = 'button'
    removerBtn.innerText = 'Remover'
    removerBtn.onclick = function(){
        tecnologias.removeChild(div)
    }

    div.appendChild(tecnologiaInput)
    div.appendChild(experiencia)
    div.appendChild(removerBtn)

    tecnologias.appendChild(div)
    
}

function cadastrarDev(){
    const devName = document.getElementById('dev-name').value
    const tecnologias = document.getElementById('tecnologias').children

    const dev = {
        name : devName,
        tecnologias: []
    }
    for (let i = 0; i < tecnologias.length; i++){
        const tecnoligasInput = tecnologias[i].querySelector('input[type="text"]').value
        const experienciaInput = tecnologias[i].querySelector('input[type="radio"]:checked').value

        dev.tecnologias.push({
            nome: tecnologiaInput,
            experiencia: experienciaInput
        })
    }
    devs.push(dev)

    console.log(devs)

    document.getElementById('dev-form').reset()
    document.getElementById('tecnologias').innerHTML = ''
}

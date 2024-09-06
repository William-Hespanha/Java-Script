function adicionarJogador (){

    const informacoesDoJogador =  document.getElementById('lista-de-jogadores')

    const h3 = document.createElement('h3')
    h3.innerText= "Informações do Jogador"


    const ul = document.createElement('ul')

    const posicaoLi = document.createElement('li')
    posicaoLi.innerText = "Posição: "
    const posicaoInput = document.createElement('input')
    posicaoInput.type = 'text' 
    posicaoInput.name = 'posicao'
    posicaoLi.appendChild(posicaoInput)
    ul.appendChild(posicaoLi)
    ul.appendChild(document.createElement('br'))

    

    const nomeLi = document.createElement('li')
    nomeLi.innerText = "Nome do Jogador"
    const nomeInput = document.createElement('input')
    nomeInput.type = 'text'
    nomeInput.name = 'posicao'
    nomeLi.appendChild(nomeInput)
    ul.appendChild(nomeLi)
    ul.appendChild(document.createElement('br'))

    const numeroLi = document.createElement('li')
    numeroLi.innerText = "Número da Camisa do Jogador"
    const numeroInput = document.createElement('input')
    numeroInput.type = 'number'
    numeroInput.name = 'numero'
    numeroLi.appendChild(numeroInput)
    ul.appendChild(numeroLi)
    ul.appendChild(document.createElement('br'))

    const botaoEscalar = document.createElement('button')
    botaoEscalar.innerText = "Escalar jogador"
    botaoEscalar.addEventListener('click', function(){
        const posicao = posicaoInput.value
        const nome = nomeInput.value
        const numero = numeroInput.value

        if(posicao && nome && numero){
            alert("Jogador escalado: \nPosicao:" + posicao + "\nNome:" + nome + "\nNúmero" + numero)

            posicaoInput.value = ''
            nomeInput.value = ''
            numeroInput.value = ''
        }else{
            alert("Por favor preencha todas as informações do jogador")
        }

    })


    
    informacoesDoJogador.append(h3, ul, botaoEscalar);
}

    function removerJogador(){
        const informacoesDoJogador =  document.getElementById('lista-de-jogadores')
        
        const h3 = document.createElement('h3')
        h3.innerText = "Remover Jogador"

        const ul = document.createElement('ul')

        const  removerNumeroLi = document.createElement('li')
        removerNumeroLi.innerText = "Número da Camisa do Jogador a Remover:"
        const removerNumeroInput = document.createElement('input')
        removerNumeroInput.type = 'number'
        removerNumeroInput.name = 'removerNumero'
        removerNumeroLi.appendChild(removerNumeroInput)
        ul.appendChild(removerNumeroLi)
        ul.appendChild(document.createElement('br'))

        const removerBtn = document.createElement('button')
        removerBtn.innerText = "Remover Jogador"
        removerBtn.addEventListener('click', function(){
            const removerNumero = removerNumeroInput.value
            if (removerNumero) {
                const confirmacao = confirm(`Deseja remover o jogador com a camisa número ${removerNumero}?`);
                if (confirmacao) {
                    // Aqui você pode implementar a lógica para realmente remover o jogador da lista
                    // Por exemplo, iterando sobre os elementos da lista de jogadores e removendo o que corresponde ao número informado
                    
                    // Supondo que você tenha uma lista de jogadores (um array), você pode encontrar e remover o jogador assim:
                    const jogadorRemovido = document.querySelector(`#jogador-${removerNumero}`);
                    if (jogadorRemovido) {
                        jogadorRemovido.remove();
                        alert(`Jogador com a camisa número ${removerNumero} removido.`);
                    } else {
                        alert(`Jogador com o número ${removerNumero} não encontrado.`);
                    }
    
                    // Limpar o campo de texto após a remoção do jogador
                    removerNumeroInput.value = '';
                }
            } else {
                alert("Por favor, informe o número da camisa do jogador que deseja remover.");
            }
        });
    
        // Adicionando todos os elementos ao DOM
        informacoesDoJogador.append(h3, ul, removerBtn);
           
        

    }
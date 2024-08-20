function dobro(x) {
    alert("O dobro de " + x + "é " + (x * 2))
}

//dobro(5)
//dobro(7)

//dobro()

/*function dizerOla(nome = "mundo"){
    alert("Olá," + nome + "!")
}

dizerOla("Isaac") */

function soma(a, b) {
    alert("O resultado da soma é:" + (a + b))
}

//soma(7, 6)
//soma(1,1)

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo,
    }
    console.log(usuario)
}



criarUsuario("Isaac", "isaac@email.com", "1234")

function muitosParametros (nome, telefone, endereco, aniversario, email, senha) {
    // ... 
}

function objetoComParametro (usuario) {
    // ... 
    usuario.nome
    usuario.email

}

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""  
}

objetoComoParametro(dadosDoUsuario)
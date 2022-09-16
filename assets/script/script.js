let formulario = document.querySelector('form');

function pegaDadosLogin(callback){
    let botao = document.querySelector('#btn')

    botao.addEventListener('click', function(e){ 
        e.preventDefault();

        let getEmail = document.querySelector("#inputEmail").value;
        let getSenha = document.querySelector("#inputSenha").value;
      

    })
    
}

//Validando formLogin
function validarFormLogin(email, password){
    console.log("ola")
   let validarEmail = email;
   let validarSenha = password;

   let e = localStorage.getItem("nome")

   if(validarEmail === e){
    console.log('olá')
   }
}


function pegadadosCadastro(){
    let botao = document.querySelector('#btnC')

    botao.addEventListener('click', function(e){
        e.preventDefault()

        let getNome = document.querySelector('#inputNomeC').value;
        let getSenha = document.querySelector('#inputSenhaC').value;
        let getEmail = document.querySelector('#inputEmailC').value;
        let getConfiSenha = document.querySelector('#inputConfiSenhaC').value;

        salvaDados(getNome, getSenha, getEmail)
        validarFormCadastro(getSenha,getConfiSenha)
    
    })

  
}

function validarFormCadastro(senha, confiSenha){
   

    let validaSenha = senha;
    let validaCOnfiSenha = confiSenha;

    if(validaSenha !== validaCOnfiSenha){
        let messageSpan = document.querySelector('.validarSenha');
        messageSpan.innerHTML = 'Senhas não conferem' 
    }{
       window.document.location = "wwww.google.com" ; 
    }
}

//Salva dados no localStorage
function salvaDados(nome,senha,email){
    let saveNome = localStorage.setItem("nome", nome);
    let saveSenha = localStorage.setItem("senha", senha)
    let saveEmail = localStorage.setItem("email", email)

}
//pegaDadosLogin(validarFormLogin)
pegadadosCadastro()

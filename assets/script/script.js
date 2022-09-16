let formulario = document.querySelector('form');

let botao = document.querySelector('#btn')


 function pegaDadosLogin(callback){
   

    botao.addEventListener('click', function(e){ 
        e.preventDefault();

        let getEmail = document.querySelector("#inputEmail").value;
        let getSenha = document.querySelector("#inputSenha").value;
      
    
        validarFormLogin(getEmail, getSenha);
    })
    
} 

//Validando formLogin
function validarFormLogin(email, password){
   let validarEmail = email;
   let validarSenha = password;

   let e = localStorage.getItem("email");
   let p = localStorage.getItem("senha");


   if(validarEmail === e && validarSenha === p){
    console.log('ola')
     window.location = '/assets/pages/home.html';
   }
   if(validarEmail === '' || validarSenha === ''){
    alert('Campos vazios')
   }
   if(validarEmail !== e && validarSenha !== p){
    alert("usuario não cadastrado");
   }
}

pegaDadosLogin();


/* function validarFormCadastro(nome, email,senha, confiSenha){
    

    let validarNome = nome;
    let validarEmail = email;
    let validaSenha = senha;
    let validaCOnfiSenha = confiSenha;

   botao.addEventListener('click', function(e){
        console.log('oi')
   })
} */

    




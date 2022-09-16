let formulario = document.querySelector('form');

let botao = document.querySelector('#btn')


 function pegaDadosLogin(){

    botao.addEventListener('click', function(e){ 
        e.preventDefault();

        const getEmail = document.querySelector("#inputEmail").value;
        const getSenha = document.querySelector("#inputSenha").value;
        
        validarFormLogin(getEmail, getSenha);
    })
    
} 

//Validando formLogin
function validarFormLogin(email, password){

   const e = localStorage.getItem("email");
   const p = localStorage.getItem("senha");


   if(email === e && password === p){
    console.log('ola')
     window.location = '/assets/pages/home.html';
   }
 
   if(validarEmail === '' || validarSenha === ''){
    alert('Campos vazios');
   }

   if(validarEmail !== e && validarSenha !== p){
    alert("usuario não cadastrado");
   }
   
}
pegaDadosLogin();

    




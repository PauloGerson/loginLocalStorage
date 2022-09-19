
const botao = document.querySelector('#btn')

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
 
   if(email === '' && password === ''){
    //alert('Campos vazios');
    Swal.fire({
        icon: 'sucess',
        title: 'Oops...',
        text: 'Campos vázios',
        position:'center'
        
      })
      
   }else if(email === ''){
      //alert('Campos vazios');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email vázio',
        position:'center'
        
      })
   }else if(password === ''){
    //alert('Campos vazios');
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Senha vázia',
      position:'center'
      
    })
}

    else if(email !== e || password !== p){
    //alert("usuario não cadastrado");
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email ou senha incorreto',
        position:'center'
      })
   }
   
}
pegaDadosLogin();

    




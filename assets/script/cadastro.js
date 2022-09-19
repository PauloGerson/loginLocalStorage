let botaoC = document.querySelector('#btnC');

function pegadadosCadastro(){

    botaoC.addEventListener('click', (e)=>{
        e.preventDefault();

        let getNome = document.querySelector('#inputNomeC').value;
        let getSenha = document.querySelector('#inputSenhaC').value;
        let getEmail = document.querySelector('#inputEmailC').value;
        let getConfiSenha = document.querySelector('#inputConfiSenhaC').value;


        if(getNome == '' && getEmail == ''){
           //alert("Campos vazios");
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campos vázios'
            
          })
        };

        if(getSenha !== getConfiSenha){
            let message = document.querySelector('.validarSenha');
            message.innerHTML = "Senhas não conferem";
        };
        
        if(getNome !== '' && getEmail !== '' && getSenha === getConfiSenha){
            salvaDados(getNome, getSenha, getEmail);
            window.location= '/index.html';
        };
    
    })

  
}


function salvaDados(nome,senha,email){
    let saveNome = localStorage.setItem("nome", nome);
    let saveSenha = localStorage.setItem("senha", senha)
    let saveEmail = localStorage.setItem("email", email)

}

pegadadosCadastro();
const botaoC = document.querySelector('#btnC');

function pegadadosCadastro(){

    botaoC.addEventListener('click', (e)=>{
        e.preventDefault();

        const getNome = document.querySelector('#inputNomeC').value;
        const getSenha = document.querySelector('#inputSenhaC').value;
        const getEmail = document.querySelector('#inputEmailC').value;
        const getConfiSenha = document.querySelector('#inputConfiSenhaC').value;


        if(getNome == '' && getEmail == ''){
           //alert("Campos vazios");
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campos vázios'
            
          })
        };

        if(getSenha !== getConfiSenha){
            const message = document.querySelector('.validarSenha');
            message.innerHTML = "Senhas não conferem";
        };
        
        if(getNome !== '' && getEmail !== '' && getSenha === getConfiSenha){
            salvaDados(getNome, getSenha, getEmail);
            window.location= '/index.html';
        };
    
    })

  
}

function salvaDados(nome,senha,email){
    const saveNome = localStorage.setItem("nome", nome);
    const saveSenha = localStorage.setItem("senha", senha)
    const saveEmail = localStorage.setItem("email", email)
}

pegadadosCadastro();
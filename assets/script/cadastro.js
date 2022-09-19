const botaoC = document.querySelector('#btnC');

function pegadadosCadastro(){

    botaoC.addEventListener('click', function(e){
        e.preventDefault();

        const getNome = document.querySelector('#inputNomeC').value;
        const getSenha = document.querySelector('#inputSenhaC').value;
        const getEmail = document.querySelector('#inputEmailC').value;
        const getConfiSenha = document.querySelector('#inputConfiSenhaC').value;

        const emailStorage = localStorage.getItem('email');

        if(getNome == '' || getEmail == '' || getSenha == '' || getConfiSenha == ''){
           //alert("Campos vazios");
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha todos os campos'
            
          })
        };

        if(getSenha !== getConfiSenha){
            const message = document.querySelector('.validarSenha');
            message.innerHTML = "Senhas não conferem";
        };
        
        if(getNome !== '' && getEmail !== '' && getSenha === getConfiSenha && getSenha !== '' & getConfiSenha !== ''){
            if(getEmail !== emailStorage){
            salvaDados(getNome, getSenha, getEmail);
                Swal.fire({
                    icon: 'success',
                    text: 'Cadastro feito com sucesso'                   
                }).then((result) =>{
                    console.log(result)
                    if(result.isConfirmed){
                        window.location= '/index.html';
                    }
                }) 
            }
            else if(getEmail === emailStorage){
                Swal.fire({
                    icon: 'info',
                    title: 'Oops...',
                    text: 'Email já cadastrado'
                  })
            }
        }
    })
    
    }

function salvaDados(nome,senha,email){
    
    const saveNome = localStorage.setItem("nome", nome);
    const saveSenha = localStorage.setItem("senha", senha)
    const saveEmail = localStorage.setItem("email", email)
}

pegadadosCadastro();
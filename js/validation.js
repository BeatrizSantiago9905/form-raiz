function validarCadastro() {

    let nome = document.getElementById('nome');
    let cpf = document.getElementById('cpf');
    let data = document.getElementById('data');
    let telefone = document.getElementById('telefone');
    let sexo = document.getElementsByName('sexo');
    let endereco = document.getElementById('endereco');
    let cep = document.getElementById('cep');
    let logradouro = document.getElementById('logradouro');
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');
    let confirmaSenha = document.getElementById('confirmasenha');

    msgNome = document.querySelector('.erro-nome');
    if(nome.value.length < 3) {
        msgNome.innerHTML = "Por favor, preencha o campo Nome!";
        msgNome.style.opacity = 1;
        msgNome.style.transition = '1s';
        nome.style.border = 'solid 1px red';
        nome.onkeypress = digitar => {
            nome.style.border = 'solid 1px green';
            msgNome.style.opacity = 0;
        }
    } else {
        nome.style.border = 'solid 1px green';
        msgNome.style.opacity = 0;
    }

    msgCpf = document.querySelector('.erro-cpf');
    if(cpf.value.length != 11) {
        msgCpf.innerHTML = "Por favor, informe um Cpf válido!";
        msgCpf.style.opacity = 1;
        msgCpf.style.transition = '1s';
        cpf.style.border = 'solid 1px red';
        cpf.onkeypress = digitar => {
            cpf.style.border = 'solid 1px green';
            msgCpf.style.opacity = 0;
        }
    } else {
        cpf.style.border = 'solid 1px green';
        msgCpf.style.opacity = 0;
    }

    msgData = document.querySelector('.erro-data');
    if(data.value.length != 10) {
        msgData.innerHTML = "Por favor, informe uma Data válida!";
        msgData.style.opacity = 1;
        msgData.style.transition = '1s';
        data.style.border = 'solid 1px red';
        data.onkeypress = digitar => {
            data.style.border = 'solid 1px green';
            msgData.style.opacity = 0;
        }
    } else {
        data.style.border = 'solid 1px green';
        msgData.style.opacity = 0;
    }

    msgTelefone = document.querySelector('.erro-telefone');
    if(telefone.value.length < 11 ) {
        msgTelefone.innerHTML = "Por favor, informe um Telefone válido!";
        msgTelefone.style.opacity = 1;
        msgTelefone.style.transition = '1s';
        telefone.style.border = 'solid 1px red';
        telefone.onkeypress = digitar => {
            telefone.style.border = 'solid 1px green';
            msgTelefone.style.opacity = 0;
        }
    } else {
        telefone.style.border = 'solid 1px green';
        msgTelefone.style.opacity = 0;
    }

    msgSexo = document.querySelector('.erro-sexo');
    if(sexo[0].checked == false && sexo[1].checked == false) {
        msgSexo.innerHTML = "Por favor, selecione o seu sexo.";
        msgSexo.style.opacity = 1;
        msgSexo.style.transition = '1s';
    } else {
        msgSexo.style.opacity = 0;
    }

    msgEndereco = document.querySelector('.erro-endereco');
    if(endereco.value.length < 3 ) {
        msgEndereco.innerHTML = "Por favor, informe seu endereço.";
        msgEndereco.style.opacity = 1;
        msgEndereco.style.transition = '1s';
        endereco.style.border = 'solid 1px red';
        endereco.onkeypress = digitar => {
            endereco.style.border = 'solid 1px green';
            msgEndereco.style.opacity = 0;
        }
    } else {
        endereco.style.border = 'solid 1px green';
        msgEndereco.style.opacity = 0;
    }

    msgCep = document.querySelector('.erro-cep');
    if(cep.value.length < 3 ) {
        msgCep.innerHTML = "Por favor, informe um Cep válido!";
        msgCep.style.opacity = 1;
        msgCep.style.transition = '1s';
        cep.style.border = 'solid 1px red';
        cep.onkeypress = digitar => {
            cep.style.border = 'solid 1px green';
            msgCep.style.opacity = 0;
        }
    } else {
        cep.style.border = 'solid 1px green';
        msgCep.style.opacity = 0;
    }

    msgLogradouro = document.querySelector('.erro-logradouro');
    if(logradouro.value == '' ) {
        msgLogradouro.innerHTML = "Por favor, selecione seu logradouro.";
        msgLogradouro.style.opacity = 1;
        msgLogradouro.style.transition = '1s';
    } else {
        msgLogradouro.style.opacity = 0;
    }

    msgEmail = document.querySelector('.erro-email');
    if(email.value.length < 3 ) {
        msgEmail.innerHTML = "Por favor, informe um E-mail válido!";
        msgEmail.style.opacity = 1;
        msgEmail.style.transition = '1s';
        email.style.border = 'solid 1px red';
        email.onkeypress = digitar => {
            email.style.border = 'solid 1px green';
            msgEmail.style.opacity = 0;
        }
    } else {
        email.style.border = 'solid 1px green';
        msgEmail.style.opacity = 0;
    }

    msgSenha = document.querySelector('.erro-senha');
    if(senha.value.length < 5 || senha.value.length > 10 ) {
        msgSenha.innerHTML = "Por favor, informe uma Senha válida!";
        msgSenha.style.opacity = 1;
        msgSenha.style.transition = '1s';
        senha.style.border = 'solid 1px red';
        senha.onkeypress = digitar => {
            senha.style.border = 'solid 1px green';
            msgSenha.style.opacity = 0;
        }
    } else {
        senha.style.border = 'solid 1px green';
        msgSenha.style.opacity = 0;
    }

    msgConfirmaSenha = document.querySelector('.erro-confirma-senha');
    if(senha.value.length < 5 || senha.value.length > 10 ) {
        msgConfirmaSenha.innerHTML = "Confirmação de senha incorreto.";
        msgConfirmaSenha.style.opacity = 1;
        msgConfirmaSenha.style.transition = '1s';
        confirmaSenha.style.border = 'solid 1px red';
        confirmaSenha.onkeypress = digitar => {
            confirmaSenha.style.border = 'solid 1px green';
            msgConfirmaSenha.style.opacity = 0;
        }
    } else {
        confirmaSenha.style.border = 'solid 1px green';
        msgConfirmaSenha.style.opacity = 0;
    }
    

}
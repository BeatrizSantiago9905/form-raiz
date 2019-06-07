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
    if(nome.value.length == '') {
        msgNome.innerHTML = "Por favor, preencha o campo Nome!";
        msgNome.style.opacity = 1;
        msgNome.style.transition = '1s';
        nome.style.border = 'solid 1px red';
        nome.onkeypress = () => {
            nome.style.border = 'solid 1px green';
            msgNome.style.opacity = 0;
        }
    } else {
        nome.style.border = 'solid 1px green';
        msgNome.style.opacity = 0;
    }

    const regexCpf = /[\d]{3}.[\d]{3}.[\d]{3}-[\d]{2}/;
    msgCpf = document.querySelector('.erro-cpf');
    if(!regexCpf.test(cpf.value)) {
        msgCpf.innerHTML = "Por favor, informe um Cpf válido!";
        msgCpf.style.opacity = 1;
        msgCpf.style.transition = '1s';
        cpf.style.border = 'solid 1px red';
    } else {
        cpf.style.border = 'solid 1px green';
        msgCpf.style.opacity = 0;
    }

    msgData = document.querySelector('.erro-data');
    if(!data.value) {
        msgData.innerHTML = "Por favor, informe uma Data válida!";
        msgData.style.opacity = 1;
        msgData.style.transition = '1s';
        data.style.border = 'solid 1px red';
    } else {
        data.style.border = 'solid 1px green';
        msgData.style.opacity = 0;
    }

    const regexTelefone = /\([\d]{2}\)[\d]{5}-[\d]{4}/;
    msgTelefone = document.querySelector('.erro-telefone');
    if(!regexTelefone.test(telefone.value)) {
        msgTelefone.innerHTML = "Por favor, informe um Telefone válido!";
        msgTelefone.style.opacity = 1;
        msgTelefone.style.transition = '1s';
        telefone.style.border = 'solid 1px red';
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
    if(endereco.value.length == '') {
        msgEndereco.innerHTML = "Por favor, informe seu endereço.";
        msgEndereco.style.opacity = 1;
        msgEndereco.style.transition = '1s';
        endereco.style.border = 'solid 1px red';
    } else {
        endereco.style.border = 'solid 1px green';
        msgEndereco.style.opacity = 0;
    }

    const regexCep = /[\d]{5}-[\d]{3}/;
    msgCep = document.querySelector('.erro-cep');
    if(!regexCep.test(cep.value)) {
        msgCep.innerHTML = "Por favor, informe um Cep válido!";
        msgCep.style.opacity = 1;
        msgCep.style.transition = '1s';
        cep.style.border = 'solid 1px red';
    } else {
        cep.style.border = 'solid 1px green';
        msgCep.style.opacity = 0;
    }

    msgLogradouro = document.querySelector('.erro-logradouro');
    if(!logradouro.value) {
        msgLogradouro.innerHTML = "Por favor, selecione seu logradouro.";
        msgLogradouro.style.opacity = 1;
        msgLogradouro.style.transition = '1s';
    } else {
        msgLogradouro.style.opacity = 0;
    }

    const regexEmail = /[A-Za-z0-9]+@[a-z]+\.[a-z]{3}/;
    msgEmail = document.querySelector('.erro-email');
    if(!regexEmail.test(email.value)) {
        msgEmail.innerHTML = "Por favor, informe um E-mail válido!";
        msgEmail.style.opacity = 1;
        msgEmail.style.transition = '1s';
        email.style.border = 'solid 1px red';
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
    } else {
        senha.style.border = 'solid 1px green';
        msgSenha.style.opacity = 0;
    }

    msgConfirmaSenha = document.querySelector('.erro-confirma-senha');
    if(confirmaSenha.value != senha.value || confirmaSenha.value == '' || confirmaSenha.value.length < 5 || confirmaSenha.value.length > 10 ) {
        msgConfirmaSenha.innerHTML = "Confirmação de senha incorreto.";
        msgConfirmaSenha.style.opacity = 1;
        msgConfirmaSenha.style.transition = '1s';
        confirmaSenha.style.border = 'solid 1px red';
    } else {
        confirmaSenha.style.border = 'solid 1px green';
        msgConfirmaSenha.style.opacity = 0;
    }
    

}
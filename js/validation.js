function validarCadastro() {

    let nome = document.getElementById('nome');
    let cpf = document.getElementById('cpf');
    let data = document.getElementById('data');

    msgNome = document.querySelector('.erro-nome');
    if(nome.value.length == '') {
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
    

}
function validarCadastro() {
    let nome = document.getElementById('nome');

    msgNome = document.querySelector('.erro-nome');
    if(nome.value == '') {
        msgNome.innerHTML = "Por favor, preencha o campo Nome!";
        msgNome.style.opacity = 1;
        msgNome.style.transition = '1s';
        nome.style.border = 'solid 1px red';
    } else {
        nome.style.border = 'solid 1px green';
    }

}
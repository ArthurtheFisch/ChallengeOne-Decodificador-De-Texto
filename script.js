let campoTexto = document.getElementById('areaDeTexto');
let btnCriptografar = document.getElementById('btnCriptografar');
let btnDescriptografar = document.getElementById('btnDescriptografar');
let textoDestino = document.getElementById('areaCopia');
let btnCopiar = document.getElementById('botaoCopiar');
let campoCopia = document.getElementById('areaCopia');
let conteudoAreaCopia = document.querySelector('.conteudo_area_copia');
let conteudoMensagens = document.querySelector('.conteudo_principal_mensagens');

campoCopia.style.display = 'none';
btnCopiar.style.display = 'none';

function mostrarCampoCopia() {
    campoCopia.style.display = 'block';
}

function mostrarCopiar() {
    btnCopiar.style.display = 'block';
}

function criptografar() {
    if (!this.disable) {
        var textoCriptografado = campoTexto.value;
        var textoModificado = textoCriptografado.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

            conteudoMensagens.textContent = textoModificado; //acessa o conteudo do elemento e da valor
            conteudoMensagens.classList.add('ativo');
    
            campoCopia.value = textoModificado; // Define o texto modificado na caixa de cópia
        
            mostrarCampoCopia();
            mostrarCopiar();

            conteudoMensagens.style.display = 'none';
    }
}

btnCriptografar.addEventListener('click', criptografar);


function descriptografar() {
    if (!this.disable) {
        var textoDescriptografado = campoTexto.value;
        var textoModificado = textoDescriptografado.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        conteudoMensagens.textContent = textoModificado; 
        conteudoMensagens.classList.add('ativo');

        campoCopia.value = textoModificado;

        conteudoMensagens.style.display = 'none';
    }
}

btnDescriptografar.addEventListener('click', descriptografar);


function copiar() {
    if (campoCopia.value.length > 0) {
        campoCopia.select();
        campoCopia.setSelectionRange(0, 99999);
        document.execCommand('copy');
    }
}

btnCopiar.addEventListener('click', copiar);

campoTexto.addEventListener('input', function () {  //outro jeito de fazer uma função
    this.value = this.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    this.value = this.value.replace(/[^\w\s]/gi, "");


    verificarTexto();
});

function verificarTexto() {
    var textoNoCampo = campoTexto.value.trim();
    btnCriptografar.disabled = textoNoCampo === '';
    btnDescriptografar.disabled = textoNoCampo === '';
}

verificarTexto();
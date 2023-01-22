let input = document.getElementById('input');
let output = document.getElementById('output');

const criptografar = document.getElementById("cripto");
const descriptografar = document.getElementById("descripto");
const copiarTexto = document.getElementById("copiar");

criptografar.addEventListener('click', () =>{
    let textoParaCriptografar = input.value;

    let criptE = textoParaCriptografar.replace(/e/gmi, 'enter');
    let criptI = criptE.replace(/i/gmi, 'imes');
    let criptA = criptI.replace(/a/gmi, 'ai');
    let criptO = criptA.replace(/o/gmi,'ober');
    let criptResultado = criptO.replace(/u/gmi,'ufat');

    output.value = criptResultado;
})

descriptografar.addEventListener('click', () => {
    let textoParaDescriptografar = input.value;

    let descriptEnter = textoParaDescriptografar.replace(/enter/gmi, 'e');
    let descriptImes = descriptEnter.replace(/imes/gmi,'i');
    let descriptAi = descriptImes.replace(/ai/gmi, 'a');
    let descriptOber = descriptAi.replace(/ober/gmi,'o');
    let descriptResultado = descriptOber.replace(/ufat/gmi,'u');

    output.value = descriptResultado;
})


copiarTexto.addEventListener('click', () => {
    output.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(output.value);
    console.log(output.value)
})

setInterval(function verificarSeHaOutput() {
    let comOutput = document.getElementById('message');
    let semOutput = document.getElementById('no-message');

    if (output.value == "") {
        comOutput.style.display = 'none';
        semOutput.style.display = 'flex';
    } else {
        comOutput.style.display = 'flex';
        semOutput.style.display = 'none';
    }
})
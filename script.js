document.addEventListener('DOMContentLoaded', function() {
    const textoInput = document.getElementById('texto-input');
    const resultadoText = document.getElementById('resultado-text');
    const noresultado = document.getElementById('no-resultado');
    const encriptarBtn = document.getElementById('encriptar');
    const desencriptarBtn = document.getElementById('desencriptar');
    const copiarBtn = document.getElementById('copiar');

    function encriptar(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function desencriptar(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    function mostrarResultado(texto) {
        noresultado.style.display = 'none';
        resultadoText.style.display = 'block';
        resultadoText.value = texto;
        copiarBtn.style.display = 'block';
    }

    encriptarBtn.addEventListener('click', function() {
        const textoOriginal = textoInput.value.toLowerCase();
        const textoEncriptado = encriptar(textoOriginal);
        mostrarResultado(textoEncriptado);
    });

    desencriptarBtn.addEventListener('click', function() {
        const textoEncriptado = textoInput.value.toLowerCase();
        const textoDesencriptado = desencriptar(textoEncriptado);
        mostrarResultado(textoDesencriptado);
    });

    copiarBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(resultadoText.value)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch(err => console.error('Error al copiar: ', err));
    });
});


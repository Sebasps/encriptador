const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptarTexto() {
    let textoBase = document.getElementById("texto_base").value
    let textoModificado = ""

    for (let i = 0; i < textoBase.length; i++) {
        let letra = textoBase[i];
        let modificacion = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                modificacion = llaves[j][1];
                break;
            }
        }
        textoModificado += modificacion;
    }
    nuevoTexto = document.getElementById("texto_modificado")
    nuevoTexto.textContent = textoModificado
    return;
}

function desencriptarTexto() {
    let textoBase = document.getElementById("texto_base").value
    let textoModificado = textoBase;
    
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], "g");
        textoModificado = textoModificado.replace(regex, llaves[i][0]);
    }
    nuevoTexto = document.getElementById("texto_modificado")
    nuevoTexto.textContent = textoModificado
    return;
}

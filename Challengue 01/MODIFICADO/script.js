//FUNCIONAL HTML//
//<input class="btn" type="text" value="desencriptar!" id="btn-desencriptar" onclick="desencriptar()">
//<button class="button-64" type="text" role="button" value="desencriptar!" id="btn-desencriptar" onclick="desencriptar()"><span class="text">Desencriptar</span></button>
function boton(){
    encriptar();
    document.getElementById("input-texto").value = "";
}
function encriptar(){
    var error = false;
    var texto = document.getElementById("input-texto").value;
    error = detectarMayuscula(texto);
    if(error){
        alert("ERROR. Recuerde que solo esta permitido letras minusculas. No mayusculas, carecteres especiales o acentos");
        error = false;
    }else {
        var encriptado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        texto = encriptado;
        document.getElementById("msg").value = texto;
        error = false;
    }
    console.log(texto);
}
function desencriptar(){
    var textoencriptado = document.getElementById("input-texto").value;
    document.getElementById("input-texto").value = " ";
    var desencriptado = textoencriptado.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    textoencriptado = desencriptado;
    document.getElementById("msg").value = textoencriptado;
}
function detectarMayuscula(texto){
    var flag = false;
    var palabra = texto;
    for(var x = 0; x< palabra.length; x++){
        var letraActual = palabra.charAt(x);
        if(isMayus(letraActual)){
            flag = true;
            return flag;
        }
    }
    return flag;
}
function isMayus(letra){
    if(letra == " "){
        return false;
    }else if(letra == "á"){
        return true;

        } else if(letra == "é"){
                    return true;
            } else if(letra == "í"){
                    return true;
            } else if(letra == "ó"){
                    return true;
            } else if(letra == "ú"){
                    return true;
            } else{
                    return letra === letra.toUpperCase();
            }   
}
function copy(){
    var contenido = document.getElementById('msg');  
    contenido.select();
    document.execCommand('copy');
    alert("Copiado");
}

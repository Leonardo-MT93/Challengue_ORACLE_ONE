var x;
var y;
var radio = 25;
var pantalla;
var pincel;
var palabras = ["insomnio", "lagarto", "pejelagarto", "leon", "halcon"];
var palabraRandom;
var palabraElegida;
var intentosfallados = 0;
var arrayletraIngresada = [];
var posicionX = 100;
var posicionY = 500;
var letrasminuscula = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
var caracterEspecial = ['!','|','°','?','¡','¿','$','%','&','/','(',')','-','.',',','{','}','[',']'];

function crearTablero(){
     pantalla = document.querySelector("canvas");
     pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgreen";
    pincel.fillRect(0,50,1200,800);
}
function disenharCirculo(x,y,radio){
    pincel.fillStyle= "black";
    pincel.beginPath();
    pincel.arc(x,y,radio, 0, 2*Math.PI);
    pincel.stroke();
}
crearTablero();
//dibujarHorca();
function mostrarGuiones(){
    palabraRandom = Math.floor(Math.random()*palabras.length);
    palabraElegida = palabras[palabraRandom];
    console.log(palabraElegida);
    var cantidad = palabraElegida.length;  
    dibujarGuion(cantidad);
}
mostrarGuiones();
function dibujarGuion(cantidad){
    var x = 75;
    var y = 700;
    for(var z=0; z<cantidad; z++){ 
        if((palabraElegida[z] == 'i') || (palabraElegida[z] == 't') || (palabraElegida[z] == 'l')){
            pincel.beginPath();
            pincel.lineWidth = 5;
            pincel.strokeStyle = "darkblue";
            pincel.moveTo(x+15, y);   // BASE
            pincel.lineTo(x+75, y);
            pincel.stroke();
            pincel.font = "70px Arial"
            pincel.strokeStyle = "gray";
            pincel.strokeText(palabraElegida[z],x+39,y-13);
            x = x + 70; 
        }    else if((palabraElegida[z] == 'm')|| (palabraElegida[z] == 'w')) {
            pincel.beginPath();
            pincel.lineWidth = 5;
            pincel.strokeStyle = "darkblue";
            pincel.moveTo(x+15, y);   // BASE
            pincel.lineTo(x+75, y);
            pincel.stroke();
            pincel.font = "70px Arial"
            pincel.strokeStyle = "gray";
            pincel.strokeText(palabraElegida[z],x+15,y-13);
            x = x + 70;    
        }   else{
            pincel.beginPath();
            pincel.lineWidth = 5;
            pincel.strokeStyle = "darkblue";
            pincel.moveTo(x+15, y);   // BASE
            pincel.lineTo(x+75, y);
            pincel.stroke();
            pincel.font = "70px Arial"
            pincel.strokeStyle = "gray";
            pincel.strokeText(palabraElegida[z],x+23,y-13);
            x = x + 70; 
        }    
    }
}
while(intentosfallados <= 5){ // intentos totales - REFORMULAR
    for(var w = 0; w<5;w++){
        intentosfallados++; 
        switch(intentosfallados){
            case 1: 
                pincel.beginPath();
                pincel.lineWidth = 5;
                pincel.strokeStyle = "darkblue";
                pincel.moveTo(50, 500);   // BASE
                pincel.lineTo(200, 500);
                pincel.moveTo(125, 500);   // MASTIL
                pincel.lineTo(125, 125);
                pincel.lineCap = "round";
                pincel.stroke();
                break;
            case 2:
                pincel.beginPath();
                pincel.lineWidth = 5;
                pincel.strokeStyle = "darkblue";
                pincel.moveTo(125, 125);   // EXTREMO MASTIL
                pincel.lineTo(450, 125);
                pincel.moveTo(450, 125);   // BAJADA MASTIL
                pincel.lineTo(450, 175);
                pincel.stroke();
                break;
            case 3: 
                 // CABEZA
                pincel.beginPath();
                pincel.lineWidth = 5;
                pincel.strokeStyle = "black";
                disenharCirculo(450,200,radio);
                pincel.beginPath();
                pincel.moveTo(450, 225);   // COLUMNA
                pincel.lineTo(450, 350);
                pincel.stroke();
            break;
            case 4: 
                pincel.moveTo(450, 350);   // PIERNA IZQUIERDA
                pincel.lineTo(400, 440);
                pincel.moveTo(450, 350);   // PIERNA DERECHA
                pincel.lineTo(500, 440);
                pincel.stroke();
            break;
            case 5: 
                pincel.moveTo(450, 260);   // BRAZO IZQUIERDO
                pincel.lineTo(400, 350);
                pincel.moveTo(450, 260);   // BRAZO DERECHO
                pincel.lineTo(500, 350);
                pincel.stroke();          
            break;   
        }
    }

}
document.addEventListener("keyup", teclaPresionada);
function teclaPresionada(event){
    var detectar;
    console.log(event.key);
    var tecla = event.key;
    detectar = detectarLetra(tecla);
    if(detectar == 1){
        alert("Usted ingreso una minuscula");    
    }else if(detectar == 2){
        dibujarLetra(tecla);
    }else if(detectar == 3){
        alert("Usted ingreso un numero.")
    }else if(detectar == 4){
        alert("Usted ingreso un caracter especial")
    }
}
function dibujarLetra(tecla){   
        pincel.font = "45px TimesNewRoman"
        pincel.strokeStyle = "Darkred";
        pincel.strokeText(tecla,posicionX+525,posicionY-300);
        posicionX = posicionX+50;
}
function detectarLetra(tecla){
    var detectado;
    for(var z = 0; z<letrasminuscula.length;z++){
        if(tecla == letrasminuscula[z]){   
                detectado = 1;
        }else if(tecla == letrasminuscula[z].toUpperCase()){          
                detectado = 2;
        } else if(true != isNaN(tecla)){           
                detectado = 3;
        } else if(tecla == caracterEspecial[z]){
                detectado = 4;
        }       
}
return detectado;
}
pincel.font = "55px TimesNewRoman"
pincel.strokeStyle = "black";
pincel.strokeText("Letras ingresadas:",posicionX+545,posicionY-390);
posicionX = posicionX+50;

//funcion para agregar palabra-validacion

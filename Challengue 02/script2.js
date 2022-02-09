function crearTablero(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgreen";
    pincel.fillRect(0,500,1200,400);
}
crearTablero();

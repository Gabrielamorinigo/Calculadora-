// Acá agrego a la pantalla el valor del botón que se hace click
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// Con esta función vaciamos la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

// Con esta función elimino el último caracter
function borrarUltimo() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}
// Con esta función realiza la accion de calcular
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}

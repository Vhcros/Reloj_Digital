const numeros = document.querySelectorAll(".numero");
const segmentos = Array.from(numeros).map(numero => numero.querySelectorAll("svg")) //lista individual de todos los segmentos, lo que hace es mapear la variable numeros, buscando todos los elementos que contengan la clase "svg", y asignandola en la variable segmentos, PERO, CONVIRTIENDO TODO EN UN ARRAY.

//mapa numerico
const mapaNumeros = [
    [1, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0, 1, 1]
    
];

function setNumero(indice, valor){
    segmentos[indice].forEach((segmento, j) => {
        segmento.children[0].classList.toggle("on", mapaNumeros[valor][j])
    })
}

//ejecuta algo en un tiempo determinado
/* setInterval(()=> {
    const ya = new Date(); //importa la fecha
//separar la hora, en Hora, minutos, segundos,

//convirtiendola a cadena de texto y asegurandonos de que solo muestre un solo numero por cadena
    const horas= getDosNumeros(ya.getHours().toString());
    const minutos= getDosNumeros(ya.getMinutes().toString());
    const segundos= getDosNumeros(ya.getSeconds().toString()); 

    setNumero(0,horas[0]);
    setNumero(1,horas[1]);
    setNumero(2,minutos[0]);
    setNumero(3,minutos[1]);
    setNumero(4,segundos[0]);
    setNumero(5,segundos[1]);


}, 1000) *///tiempo en el que ocurre la ejecucion, en milisegundos (un segundo)

setInterval(()=>{
    actualizarHora();
})


function getDosNumeros(numero) { //Esta funcion sirve para formatear numeros que siempre necesitan ser dos digitos, como las fechas.
    if(numero.length === 2 ) return numero;
    return "0" + numero;

}

function actualizarHora(){
    
    const ya = new Date();
    const horas= getDosNumeros(ya.getHours().toString());
    const minutos= getDosNumeros(ya.getMinutes().toString());
    const segundos= getDosNumeros(ya.getSeconds().toString()); 

    setNumero(0,horas[0]);
    setNumero(1,horas[1]);
    setNumero(2,minutos[0]);
    setNumero(3,minutos[1]);
    setNumero(4,segundos[0]);
    setNumero(5,segundos[1]);

}


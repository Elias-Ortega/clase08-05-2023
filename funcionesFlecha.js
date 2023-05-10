/* ES5 */
/* Función traducional */
/* Funciones con o sin parámetros */
/* Funciones con o sin retorno */
/* Funciones Anónimas */

/*function nombreDeFunción(parametro o no){
    
}  */
function nombreDeFuncion(paraUno, paraDos, etc) {
    return;//puede o no retornar
}

var nombreDeFuncion = function (paraUno, paraDos, etc, /* parametros o no */) {
    return;//
}

/* ES6 */
/* Función Flecha */
const nombreFuncionFlecha = (paraUno, paraDos, etc /* parametros o no */) => {
    return;//puede o no retornar
}

const funcionFlecha = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

//sumar dos numeros y mostrarlos por pantalla
const funcionFlechaUnaLineaDeCodigo = (a, b)=> console.log(a + b ); 
const funcionFlechaUnaLineaDeCodigoAlert = (a, b)=> alert(a + b ); 

    
funcionFlechaUnaLineaDeCodigo(1,3);

//sumar dos números y retornarlos
const funcionFlechaUnaLineaDeCodigoRetorno = (a, b) =>  a + b;    
console.log(funcionFlechaUnaLineaDeCodigoRetorno(2,5));


//identificar si un número es par o impar, retornar un mensaje que diga si el número
//es par o impar

const funcionParImpar = (numero) => {
    //Operador Modulo
    if(numero % 2 == 0){
       return 'El número es par'
    }else{
        return 'El número es impar';
    }
}


console.log(funcionParImpar(5));
console.log(funcionParImpar(6));
  
/* Transformando la funcion previa a una sola línea. cuando recibo solo un parametro,ya sea un objeto o una coleccion
de datos, o un arreglo, si es uno se puede eliminar los parentesis. Si es mas de un parametro, hay que poner parentesis. */
const funcionParImparDos = numero => numero % 2 == 0 ?  'El número es par': 'El número es impar';   
    

console.log(funcionParImparDos(5));
console.log(funcionParImparDos(6));
const variableUno = 0;// Const debe inicializarse
const arregloUno =[];
let arregloDos =[];
const objetoUno ={
    rut:'11111111-1',
    nombre:'Marcos'
}
objetoUno.nombre = 'Antonio';
console.log(objetoUno);

objetoUno = {};
// no es reasignable la variable de tipo constante, pero si puedo cambiar sus valores internos
arregloUno.push('Hola');
arregloUno.push('Adiós');
arregloUno.push('Hola, que tal');
 console.log(arregloUno); 
arregloUno[0]= 'Cambiando';
console.log(arregloUno); 


//Las funciones se declaran con la palabra const, porque  se supone no van a cambiar
var funcionDos = function(){
   
}

//funcion flecha
const funcionTres = () => true ? 'Hola':'Adiós';   



function funcionUno(){
    arregloUno =[]
}

funcionUno();
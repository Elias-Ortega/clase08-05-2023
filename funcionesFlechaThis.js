/* Funciones tradicionales y objeto this */
function tradicionalThis() {
    console.log(this);
}

tradicionalThis();

let persona = {
    rut: '11111111-1',
    nombre: 'Elias',
    apellido: 'Ortega',
    tradicionalThisDentroObjeto: function () {
        console.log(this);
    }
}

persona.tradicionalThisDentroObjeto();

/* Funciones flecha y objeto this */
const funcionFlechaThis = () => {
    console.log(this);
}

funcionFlechaThis();

let personaFlecha = {
    rut: '11111111-1',
    nombre: 'Elias',
    apellido: 'Ortega',
    flechaThisDentroObjeto: () => {
        console.log(this);
    }
}

personaFlecha.flechaThisDentroObjeto();


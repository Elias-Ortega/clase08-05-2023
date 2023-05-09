/* ES6 */ 
/* let - const */
let variableUno = 10;

function funcionUno() {
    let variableDos = 5;
    let variableUno = 100;
    
    console.log(variableUno);
    console.log(variableDos);
    for (let i = 0; i < 10; i++) {
        let variableUno = 200;
        console.log(`Variable i dentro del for:${i}`);
        console.log(variableUno);
    }
    
}

funcionUno();
console.log(variableUno);
console.log(variableDos);
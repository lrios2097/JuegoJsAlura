//Variables
let maxUsuario = 10 
let numeroSecreto = Math.floor(Math.random()*maxUsuario)+1; // 10 es el valor máximo y el uno es para que salgo de 1 a 10 y no de 0 a 9
let numeroUsuario = 0;
let intentos = 1;
//let PalabraVeces = 'vez';
let maximosIntentos = 3


console.log(numeroSecreto);

    maxUsuario= parseInt(prompt("Indique el numero maxico del numero: "))
while (numeroUsuario != numeroSecreto){
    
    //console

    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${maxUsuario} por favor:`));

    console.log(typeof(numeroUsuario)); //typeof nos devuleve el tipo de dato

    if (numeroUsuario == numeroSecreto) { 
        alert(`Acertaste, el número es:  ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' :'veces'}`); //expresion ternaria
    } else{
        if(numeroUsuario>numeroSecreto){
            alert('El número es menor')
        } else {
            alert('El número es mayor')
        }
        //alert('Lo siento, no acertaste el número');
        intentos ++;
        //PalabraVeces= 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
};
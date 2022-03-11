console.log("JS OK")

// Crea un array di numeri interi 
// e fai la somma di tutti gli elementi che sono in posizione dispari.

// creo un array con numeri interi casuali
const numeriInteriCasuali = [8, 16, 24, 32, 40, 48, 56]
console.log('Numeri interi casuali:', numeriInteriCasuali)
// creo un array vuoto dove andrò ad inserire i numeri in posizione dispari
let arrayPosizioneDispari = []

// pusho nell'array vuoto tutti i numeri in posizione dispari
arrayPosizioneDispari.push(8, 24, 40, 56)
console.log('Numeri interi che sono in posizione dispari:', arrayPosizioneDispari)

// faccio la somma dei numeri nell'arrayPosizioneDispari
let sommaInDispari = 0;

for (let i = 0; i < arrayPosizioneDispari.length; i++) {
    sommaInDispari += arrayPosizioneDispari[i];
}

console.log('Somma dei numeri interi che sono in posizione dispari:', sommaInDispari)
console.log("JS OK")

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// creo array lungo
const arrayLungo = [67, 93, 52, 20, 96]

console.log(`Lista lunga ${arrayLungo}`)

// creo array corto
let arrayCorto = [34]

console.log(`Lista corta ${arrayCorto}`)

// arraycorto.lenght == arraylungo.lenght
// per far si che succeda devo pushare cose random all'interno di arrayCorto
for (i = 0; i < arrayLungo.length; i++) {
    arrayCorto.push(Math.floor(Math.random() * 100))
    if (arrayCorto.length == arrayLungo.length) {
        break;
    }
}

// oppure

/*
for (i = 0; i < (arrayLungo.length - 1); i++) {
    arrayCorto.push(Math.floor(Math.random() * 100))
}
*/


// stampo in console
console.log(`Aggiunti elementi random, ora le nostre due liste hanno lo stesso numero di elementi ${arrayCorto}`)
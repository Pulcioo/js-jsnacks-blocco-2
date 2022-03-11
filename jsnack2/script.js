console.log("JS OK")

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// chiedere per 5 volte all'utente di inserire un numero
// FOR
let somma = 0

for (let i = 0; i < 5; i++) {
    // chiedo all'utente di inserire un numero
    let numeroUtente = prompt('Inserisci un numero')
    // fintanto che l'utente non mette un numero richiedo di inserire nuovamente
    while (isNaN(numeroUtente)) {
        numeroUtente = parseInt(prompt('Hai sbagliato a digitare...inserisci un numero'))
    }
    // stampo numeri inseriti
    console.log(numeroUtente)
    // calcolo la somma 
    somma = somma + parseInt(numeroUtente)
}


console.log(`La somma dei numeri da te inseriti è: ${somma}`)


// -Crea una Promise che simula il recupero dei dati da un'API. A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore. -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 -La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data

function fetchDataFromAPI() {

    //creazione di una variabile che avrà valore stringa perchè useremo il "ToFixed" per ridurre il risultato della randomizzazzione a 1 cifra dopo la virgola
    const randomString = (Math.random() * 0.5).toFixed(1);
    //riconversione della variabile in tipo numerico
    const success = parseFloat(randomString);

    return new Promise((resolve, reject) => {
        if (success < 0.5) {
            
            //tratto il return della promise come un oggetto e quindi gli assegno una nuova chiave chiamata "msg", per avere un output più leggibile
            resolve({msg: "Good,", success });
        } else {
            reject({msg: "Not good,", success });
        }
    })
}

fetchDataFromAPI()
.then((data) => {
    console.log(data.msg, data.success)
})
.catch((error) => {
    console.log(error.msg, error.success)
})
document.addEventListener('DOMContentLoaded', function () {
    var constructionText = document.querySelector('.construction-text');
    var lettere = document.querySelectorAll('.construction-text span');
    var testoOriginale = "Webpage under construction :)";
    
    // Funzione per generare un numero casuale tra min e max
    function numeroCasuale(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Funzione per impostare una posizione leggibile
    function impostaPosizioneLeggibile() {
        lettere.forEach(function (lettera, index) {
            var leftPos = 100 + index * 20; // Imposta l'intervallo tra le lettere a 20px
            var topPos = 100;
            lettera.style.transition = 'transform 3s ease'; // Aggiungi una transizione per il movimento fluido
            lettera.style.transform = `translate(${leftPos}px, ${topPos}px)`;
        });

        // Dopo l'impostazione iniziale, avvia la fase di fluttuazione
        setTimeout(fluttuaLettere, 100);
    }

    // Funzione per far fluttuare lentamente le lettere
    function fluttuaLettere() {
        lettere.forEach(function (lettera) {
            var leftPos = numeroCasuale(0, window.innerWidth - 50);
            var topPos = numeroCasuale(0, window.innerHeight - 30);
            lettera.style.transition = 'transform 10s ease'; // Aggiungi una transizione lenta
            lettera.style.transform = `translate(${leftPos}px, ${topPos}px)`;
        });

        var durataFluttuazione = 10000; // Durata fissa di 10 secondi
        setTimeout(impostaPosizioneLeggibile, durataFluttuazione);
    }

    // Avvia il processo partendo dalla posizione originale
    impostaPosizioneLeggibile();
});

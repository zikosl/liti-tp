function calcule() {
    // Récupérer les valeurs des champs de saisie
    let value = document.getElementById('text').value;
    let number = parseInt(value);

    let premier = true;

    // 100  ==> 2 - 99

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            premier = false;
            break;
        }
    }

    // Afficher le résultat
    if (premier)
        document.getElementById('resultat').innerHTML = "Le number est un nombre premier";
    else
        document.getElementById('resultat').innerHTML = "Le number n'est pas un nombre premier";
}
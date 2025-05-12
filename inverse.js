function calcule() {
    // Récupérer les valeurs des champs de saisie
    let value = document.getElementById('text').value;

    let table = value.split("");

    let inverse = table.reverse();

    let result = inverse.join("");

    document.getElementById("resultat").innerHTML = result;

}
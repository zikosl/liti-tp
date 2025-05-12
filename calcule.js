function calcule() {
    // Récupérer les valeurs des champs de saisie
    let value1 = document.getElementById('text1').value;
    let value2 = document.getElementById('text2').value;

    let number1 = parseInt(value1);
    let number2 = parseInt(value2);

    let result = number1 + number2;

    // Afficher le résultat
    let resultElement = document.getElementById('resultat');
    resultElement.innerHTML = "Le résultat est : " + result;
    resultElement.style.color = "blue"; // Change the text color to blue

}

function change() {
    let resultElement = document.getElementById('resultat');
    resultElement.style.color = "red"; // Change the text color to red
}
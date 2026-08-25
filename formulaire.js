// Fonction pour récupérer les données du formulaire
function recupererDonnees() {

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;

    return {
        nom: nom,
        prenom: prenom,
        email: email
    };
}


// Fonction pour enregistrer les données
function enregistrer() {

    let etudiant = recupererDonnees();

    localStorage.setItem(
        "etudiant",
        JSON.stringify(etudiant)
    );

    afficher();
}


// Fonction pour afficher les données
function afficher() {

    let donnees = localStorage.getItem("etudiant");

    if (donnees) {

        let etudiant = JSON.parse(donnees);

        document.getElementById("resultat").innerHTML =
            "Nom : " + etudiant.nom + "<br>" +
            "Prénom : " + etudiant.prenom + "<br>" +
            "Email : " + etudiant.email;

    }
}


// Quand on clique sur Enregistrer
document.getElementById("formulaire").addEventListener("submit", function(event) {

    event.preventDefault();

    enregistrer();

});
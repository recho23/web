const formulaire = document.getElementById("formulaire");

const resultat = document.getElementById("resultat");


formulaire.addEventListener("submit", function(event) {

    // Empêcher le rechargement de la page
    event.preventDefault();


    // Récupérer les valeurs du formulaire
    const nom = document.getElementById("nom").value;

    const prenom = document.getElementById("prenom").value;

    const email = document.getElementById("email").value;


    // URL de Google Apps Script
    const url = "https://script.google.com/macros/s/AKfycbw7qnpaPcKfj5MR7CMjdJo_48wSMFEqBraoBH1GNQMbOo4phCcvLcRyJpm-oVaDRBEX8Q/exec";


    // Créer les données à envoyer
    const donnees = new URLSearchParams();

    donnees.append("nom", nom);

    donnees.append("prenom", prenom);

    donnees.append("email", email);


    // Afficher un message pendant l'envoi
    resultat.textContent = "Enregistrement en cours...";


    // Envoyer les données à Google Apps Script
    fetch(url, {

        method: "POST",

        body: donnees

    })


    // Récupérer la réponse
    .then(function(response) {

        return response.json();

    })


    // Traiter la réponse
    .then(function(data) {

        console.log(data);


        if (data.success) {

            resultat.textContent =
                "Étudiant enregistré avec succès !";


            // Vider le formulaire
            formulaire.reset();

        } else {

            resultat.textContent =
                "❌ Erreur : " + data.message;

        }

    })


    // Gérer les erreurs
    .catch(function(erreur) {

        console.error(erreur);

        resultat.textContent =
            "❌ Impossible de contacter Google Sheets.";

    });

});
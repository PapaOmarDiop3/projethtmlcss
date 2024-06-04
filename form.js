// Fonction pour obtenir un élément par son ID
let id = (id) => document.getElementById(id);

// Fonction pour obtenir des éléments par leur classe
let formClass = (formClass) => document.getElementsByClassName(formClass);

// Déclarations des variables
let matricule = id("inputMatricule"),
    nom = id("inputNom"),
    prenom = id("inputPrenom"),
    form = document.forms["formEnseignant"],
    errorMsg = formClass("error"),
    failureIcon = formClass("failure-icon")[0], // Utilisation de l'index 0 car getElementsByClassName renvoie une collection
    successIcon = formClass("success-icon")[0]; // Utilisation de l'index 0 car getElementsByClassName renvoie une collection

// Cacher les icônes d'exclamation par défaut
failureIcon.style.display = "none";

// Utilisation de la fonction dans l'écouteur d'événements
form.addEventListener("submit", (e) => {
    e.preventDefault();
    invalForm(matricule, formClass("failure-icon")[0], formClass("success-icon")[0], "Le champ matricule ne doit pas être vide");
    invalForm(nom, formClass("failure-icon")[1], formClass("success-icon")[1], "Le champ nom ne doit pas être vide");
    invalForm(prenom, formClass("failure-icon")[2], formClass("success-icon")[2], "Le champ prénom ne doit pas être vide");
});

// Fonction de validation du formulaire
let invalForm = (field, errorElement, successIcon, message) => {
    if (field.value.trim() === "") {
        errorElement.style.display = "inline"; // Afficher l'icône d'échec
        errorMsg.innerHTML = message;
        field.style.border = "2px solid red";
        successIcon.style.display = "none"; // Cacher l'icône de succès
    } else {
        errorElement.style.display = "none"; // Cacher l'icône d'échec
        errorMsg.innerHTML = "";
        field.style.border = "2px solid green";
        successIcon.style.display = "inline"; // Afficher l'icône de succès
    }
};
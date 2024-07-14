// Utility functions
let id = (id) => document.getElementById(id);
let formClass = (formClass) => document.getElementsByClassName(formClass);

// Variables
let matricule = id("inputMatricule"),
    nom = id("inputNom"),
    prenom = id("inputPrenom"),
    status1 = id("gridCheckstatus1"),
    status2 = id("gridCheckstatus2"),
    grade = id("inputGrade"),
    departement = id("inputDepartement"),
    form = document.forms["formEnseignant"],
    errorMsg = formClass("error"),
    failureIcon = formClass("failure-icon"),
    successIcon = formClass("success-icon");

// Hide failure icons by default
Array.from(failureIcon).forEach(icon => icon.style.display = "none");

// Form validation function
let validateForm = (field, errorElement, successElement, message) => {
    let errorMsgElement = errorElement.nextElementSibling;
    if (field.value.trim() === "") {
        errorElement.style.display = "inline";
        errorMsgElement.textContent = message;
        field.style.border = "2px solid red";
        successElement.style.display = "none";
    } else {
        errorElement.style.display = "none";
        errorMsgElement.textContent = "";
        field.style.border = "2px solid green";
        successElement.style.display = "inline";
    }
};

// Status validation function
let validateStatus = (status1, status2, errorElement, successElement, message) => {
    let errorMsgElement = errorElement.nextElementSibling;
    if (!status1.checked && !status2.checked) {
        errorElement.style.display = "inline";
        errorMsgElement.textContent = message;
        successElement.style.display = "none";
    } else {
        errorElement.style.display = "none";
        errorMsgElement.textContent = "";
        successElement.style.display = "inline";
        toggleFields(status1, status2);
    }
};

// Toggle fields based on status
let toggleFields = (status1, status2) => {
    let gradeField = id("grade").parentElement;
    let deptField = id("departement").parentElement;

    if (status1.checked || status2.checked) {
        gradeField.style.display = "block";
        deptField.style.display = "block";
    } else {
        gradeField.style.display = "none";
        deptField.style.display = "none";
    }
};

// Event listeners for form validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm(matricule, formClass("failure-icon")[0], formClass("success-icon")[0], "Le champ matricule ne doit pas être vide");
    validateForm(nom, formClass("failure-icon")[1], formClass("success-icon")[1], "Le champ nom ne doit pas être vide");
    validateForm(prenom, formClass("failure-icon")[2], formClass("success-icon")[2], "Le champ prénom ne doit pas être vide");
    validateStatus(status1, status2, formClass("failure-icon")[3], formClass("success-icon")[3], "Veuillez sélectionner un statut");
    validateForm(grade, formClass("failure-icon")[4], formClass("success-icon")[4], "Le champ grade ne doit pas être vide");
    validateForm(departement, formClass("failure-icon")[5], formClass("success-icon")[5], "Le champ departement ne doit pas être vide");
});

// Event listeners for status fields
status1.addEventListener("change", () => toggleFields(status1, status2));
status2.addEventListener("change", () => toggleFields(status1, status2));

document.addEventListener('DOMContentLoaded', () => {
    // Additional DOM manipulation or event listeners can be added here
});

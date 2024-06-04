document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.forms['formEnseignant'];
    const statusCheckboxes = [form['status1'], form['status2']];
    const hiddenFields = document.querySelectorAll('.cacher');

    // Afficher les champs cachés lorsque l'un des statuts est coché
    statusCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                hiddenFields.forEach(field => field.hidden = false);
            } else {
                const otherCheckboxChecked = statusCheckboxes.some(checkbox => checkbox.checked);
                if (!otherCheckboxChecked) {
                    hiddenFields.forEach(field => field.hidden = true);
                }
            }
        });
    });

    // Fonction de validation du formulaire
    function validateForm() {
        let valid = true;
        const requiredFields = ['matricule', 'nom', 'prenom'];
        
        requiredFields.forEach(fieldName => {
            const field = form[fieldName];
            if (!field.value.trim()) {
                valid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });

        if (!statusCheckboxes.some(checkbox => checkbox.checked)) {
            alert('Veuillez sélectionner au moins un statut (PER ou VACATAIRE).');
            valid = false;
        }

        if (!valid) {
            alert('Veuillez remplir tous les champs obligatoires.');
        }

        return valid;
    }

    // Événement de soumission du formulaire
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

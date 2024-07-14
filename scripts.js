document.addEventListener('DOMContentLoaded', function () {
    // Scripts pour la validation des formulaires, la gestion des tableaux, etc.
    // Exemple de validation simple pour les formulaires
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const inputs = form.querySelectorAll('input[required]');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value) {
                    input.nextElementSibling.textContent = 'Ce champ est requis.';
                    valid = false;
                } else {
                    input.nextElementSibling.textContent = '';
                }
            });
            if (!valid) e.preventDefault();
        });
    }

    // Exemple de gestion de l'affichage des tableaux
    const toggleButtons = document.querySelectorAll('.toggle');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = button.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (target) {
                target.classList.toggle('hidden');
            }
        });
    });
});

Alpine.data('validation', () => ({
    formData: {
        fullname: '',
        email: '',
        message: ''
    },
    errors: {},

    clearErrors() {
        this.errors = {};
    },

    submitForm() {
        // Validation des champs
        if (!this.formData.fullname.trim()) {
            this.errors.fullname = true;
        }

        if (!this.isValidEmail(this.formData.email)) {
            this.errors.email = true;
        }

        if (!this.formData.message.trim()) {
            this.errors.message = true;
        }

        // Si aucune erreur, soumettre le formulaire
        if (Object.keys(this.errors).length === 0) {
            // Soumettre le formulaire ou effectuer d'autres actions ici
            console.log('Formulaire soumis avec succès!');
        }
    },

    isValidEmail(email) {
        // Utilisez une expression régulière ou une autre logique pour valider l'e-mail
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
}));
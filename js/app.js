document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la navigation
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const sections = document.querySelectorAll('.content-section');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retirer la classe active de tous les éléments
            sidebarItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Ajouter la classe active à l'élément cliqué
            this.classList.add('active');
            
            // Afficher la section correspondante
            const targetSection = document.getElementById(this.dataset.section);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Gestion des thèmes
    const themeSections = document.querySelectorAll('.theme-section');
    
    themeSections.forEach(section => {
        // Au survol
        section.addEventListener('mouseenter', function() {
            // Fermer tous les autres thèmes
            themeSections.forEach(s => {
                if (s !== this) {
                    s.classList.remove('active');
                }
            });
            this.classList.add('active');
        });

        // Au clic (pour mobile)
        section.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Exemple de données pour les actualités
    const news = [
        {
            title: "Calendrier des examens",
            date: "15 Mai 2024",
            content: "Les dates des examens BTS sont disponibles. Consultez le planning détaillé."
        },
        {
            title: "Nouveaux supports de cours",
            date: "10 Mai 2024",
            content: "De nouveaux supports pour l'E5.1 GPME sont disponibles dans la section ressources."
        }
    ];

    // Affichage des actualités
    const newsContainer = document.querySelector('.news-container');
    if (newsContainer) {
        news.forEach(item => {
            const newsCard = document.createElement('div');
            newsCard.className = 'content-card';
            newsCard.innerHTML = `
                <h4>${item.title}</h4>
                <p class="news-date">${item.date}</p>
                <p>${item.content}</p>
            `;
            newsContainer.appendChild(newsCard);
        });
    }

    // Exemple de données pour les témoignages
    const testimonials = [
        {
            name: "Marie L.",
            formation: "BTS GPME",
            content: "Les ressources disponibles m'ont permis de mieux comprendre les enjeux de la gestion des risques."
        },
        {
            name: "Thomas D.",
            formation: "BTS MCO",
            content: "La section E5 est particulièrement bien structurée et les exercices pratiques sont très utiles."
        }
    ];

    // Affichage des témoignages
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (testimonialsGrid) {
        testimonials.forEach(item => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'content-card';
            testimonialCard.innerHTML = `
                <h4>${item.name}</h4>
                <p class="testimonial-formation">${item.formation}</p>
                <p>${item.content}</p>
            `;
            testimonialsGrid.appendChild(testimonialCard);
        });
    }

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Le formulaire est maintenant géré par FormSubmit
            // Nous ajoutons juste une notification visuelle
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Envoi en cours...';
            button.disabled = true;

            // Réinitialiser le bouton après 2 secondes
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Gestion du logo pour retourner à l'accueil
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retirer la classe active de tous les éléments
            document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            
            // Afficher la section accueil
            const accueilSection = document.getElementById('accueil');
            if (accueilSection) {
                accueilSection.classList.add('active');
            }
        });
    }

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
        const title = section.querySelector('h3');
        
        // Au clic sur le titre
        title.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Fermer les autres sections
            themeSections.forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.classList.remove('active');
                }
            });
            
            // Basculer la section actuelle
            section.classList.toggle('active');
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

    // Gestionnaire pour les menus contextuels
    const chapterLinks = document.querySelectorAll('.chapter-link');
    
    chapterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Fermer tous les autres menus
            document.querySelectorAll('.context-menu').forEach(menu => {
                if (menu !== this.nextElementSibling) {
                    menu.classList.remove('show');
                }
            });
            
            // Basculer le menu actuel
            const menu = this.nextElementSibling;
            menu.classList.toggle('show');
        });
    });
    
    // Fermer le menu si on clique ailleurs
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.chapter-item')) {
            document.querySelectorAll('.context-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const contentSections = document.querySelectorAll('.content-section');

    sidebarItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Désactiver tous les éléments de la sidebar et sections
            sidebarItems.forEach(i => i.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // Activer l'élément cliqué
            item.classList.add('active');
            
            // Trouver et activer la section correspondante
            const sectionId = item.getAttribute('data-section');
            const activeSection = document.getElementById(sectionId);
            activeSection.classList.add('active');
        });
    });
});

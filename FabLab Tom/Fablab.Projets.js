// Script pour les interactions des projets
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");

    // Ajout d'un effet de clic sur chaque carte
    projectCards.forEach((card) => {
        card.addEventListener("click", function() {
            const projectId = this.id; // Récupère l'ID du projet (project1, project2, project3)
            window.location.href = `${projectId}.html`; // Redirige vers la page correspondante
        });

        // Effet de survol personnalisé avec JavaScript
        card.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});

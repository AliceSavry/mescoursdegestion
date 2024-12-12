# Mes Cours de Gestion

## Description
Un site web moderne et professionnel pour les cours de gestion, offrant un accès facile à différents domaines de formation.

## Sous-domaines
- BTS GPME - Gestion Financière (6 thèmes)
- GPME - EBP (3 thèmes)
- GPME - Gestion des risques (3 thèmes)
- MCO - Gestion opérationnelle (6 thèmes)

## Installation

1. Cloner le repository
2. Créer un environnement virtuel
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Installer les dépendances
```bash
pip install -r requirements.txt
```

4. Initialiser la base de données
```bash
python manage.py migrate
```

5. Lancer le serveur de développement
```bash
python manage.py runserver
```

## Technologies
- Backend: Django
- Frontend: Tailwind CSS
- Design: Moderne et professionnel

# Mes Cours de Gestion - ASY Formation

## Description
Site web de formation en gestion pour BTS GPME, développé avec Django et Tailwind CSS.

## Prérequis
- Python 3.9+
- pip
- virtualenv (recommandé)

## Installation

1. Cloner le repository
```bash
git clone https://github.com/AliceSavry/mescoursdegestion.git
cd mescoursdegestion
```

2. Créer un environnement virtuel
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Installer les dépendances
```bash
pip install -r requirements.txt
```

4. Configurer la base de données
```bash
python manage.py migrate
```

5. Lancer le serveur de développement
```bash
python manage.py runserver
```

## Fonctionnalités
- Cours de GPME E6
- Cours de GPME E51
- Cours de GPME EBP
- Cours de MCO E5

## Technologies
- Django
- Tailwind CSS
- HTML5
- JavaScript

## Licence
Propriété d'ASY Formation

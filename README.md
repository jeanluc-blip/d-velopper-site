# developper — Site vitrine

Site vitrine pour un développeur freelance — sites web, applications sur-mesure, intégrations et maintenance.

Site statique (HTML / CSS / JS), aucune dépendance ni build nécessaire.

## 📁 Structure

```
.
├── index.html              Accueil
├── services.html           Détail des prestations
├── portfolio.html          Réalisations
├── a-propos.html           À propos
├── contact.html            Formulaire de contact
├── mentions-legales.html   Mentions légales & confidentialité
├── css/
│   └── style.css           Styles + tokens de la charte graphique
├── js/
│   └── main.js             Menu mobile, animations au scroll, formulaire
└── assets/
    ├── logo-lockup.png     Logo complet (icône + wordmark)
    ├── logo-icon.png       Icône seule (monogramme)
    ├── favicon-32.png
    └── favicon-512.png
```

## 🖥️ Prévisualiser en local

Aucune installation requise : ouvrez simplement `index.html` dans un navigateur.

## 🚀 Déployer sur GitHub Pages

1. Allez dans **Settings** du dépôt → **Pages**
2. Source : **Deploy from a branch**
3. Branch : **main**, dossier **/ (root)**
4. **Save** — le site est en ligne sous `https://<votre-utilisateur>.github.io/<nom-du-depot>/`

## ✏️ À personnaliser

Le contenu marqué entre crochets (`[Nom du client]`, `[X années d'expérience]`, `[Téléphone à ajouter]`...) doit être remplacé par vos vraies informations : identité, expérience, projets réels, témoignages, coordonnées.

Le formulaire de contact (`contact.html` + `js/main.js`) est une démo front-end : il affiche une confirmation mais n'envoie pas encore d'email. Pour un envoi réel, il faut le connecter à un service comme [Resend](https://resend.com) ou [Formspree](https://formspree.io) (nécessite un petit backend ou un service tiers, GitHub Pages ne servant que du contenu statique).

## 🎨 Charte graphique

Couleurs, typographies (Montserrat + Inter) et usages du logo sont documentés dans les tokens CSS en tête de `css/style.css`.

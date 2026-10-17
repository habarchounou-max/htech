# Hayata Technology — édition Premium

Site vitrine statique en HTML5, CSS et JavaScript natif. La structure et les ressources de la version source sont conservées, avec des corrections ciblées de robustesse et d’accessibilité.

## Lancer localement
- Ouvrir `index.html` dans un navigateur pour une vérification visuelle simple.
- Pour tester via HTTP, lancer `python -m http.server 8080` depuis ce dossier, puis ouvrir `http://localhost:8080`.
- Google Fonts, Font Awesome et la carte OpenStreetMap nécessitent une connexion Internet.

## Pages
- `index.html` — Accueil ; `a-propos.html` — À propos ; `services.html` — Services ; `connectivite.html` — Connectivité ; `contact.html` — Contact ; `404.html` — erreur.
- `assets/css/style.css` — styles ; `assets/js/main.js` — interactions.

## Formulaires
Sans configuration, le formulaire ouvre l’application de messagerie du visiteur via `mailto:`. Le site ne peut pas confirmer l’envoi effectif : l’utilisateur doit envoyer le message depuis sa messagerie. Pour une transmission automatisée, configurer un endpoint compatible puis définir `window.HAYATA_FORM_ENDPOINT` avant le chargement de `assets/js/main.js`. Vérifier le format attendu par le fournisseur. Ne jamais intégrer de clé privée dans le code navigateur.

## Avant publication
Confirmer le domaine, les coordonnées, les horaires et les réseaux sociaux ; configurer/tester les formulaires ; activer HTTPS ; vérifier les en-têtes serveur ; effectuer des tests multi-navigateurs, Lighthouse et accessibilité manuelle.

## Limites
Aucun backend n’est inclus. Les en-têtes dépendent du support de l’hébergeur. Aucune CSP restrictive n’a été ajoutée sans validation des ressources externes et de l’endpoint du formulaire.

## Version 2
Consulter `CHANGELOG-V2.md` pour les évolutions de la direction visuelle et les limites connues. Les tests de rendu multi-navigateurs et Lighthouse restent à effectuer avant publication.


## Signature Edition V3
La V3 ajoute une couche visuelle premium non destructive dans `assets/css/style.css` et suspend l’animation du canvas lorsque l’onglet est masqué. Consultez `CHANGELOG-V3.md` et `RAPPORT-TESTS-V3.md`. Les tests navigateur, l’endpoint de formulaire et la validation des coordonnées restent à effectuer avant la production.


## V4 — Vision stratégique
La V4 introduit une section éditoriale de vision sur la page d’accueil et une couche visuelle claire/sombre plus contrastée. Voir `VISION-STRATEGIQUE-V4.md` et `RAPPORT-TESTS-V4.md`.


## ULTIMATE FINAL — préparation à la production
Cette livraison finalise les réglages de cache, harmonise le manifeste et documente la mise en production. Consultez `DEPLOIEMENT-FINAL.md` et `RAPPORT-VALIDATION-FINALE.md` avant publication. Le site reste statique ; aucun backend ni service d'envoi de formulaire n'est inclus. Le domaine et les coordonnées doivent être confirmés.


## Version 6.0.0 — Client Experience Edition

Cette édition ajoute `assets/css/v6-experience.css` et `assets/js/v6-experience.js`. Elle adopte une direction éditoriale plus claire sur les pages intérieures, affine l accueil sombre, réduit les animations décoratives et renforce les interactions clavier. Consulter `CHANGELOG-V6.md`, `GUIDE-DEPLOIEMENT-V6.md` et `RAPPORT-VALIDATION-V6.md` avant publication.

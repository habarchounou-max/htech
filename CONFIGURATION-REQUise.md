# Configuration requise

## État actuel
- Site statique sans backend applicatif.
- Formulaires `mailto:contact@hayatatech.com` par défaut.
- Ressources distantes : Google Fonts, Font Awesome CDN et carte OpenStreetMap.
- Domaine référencé : `https://www.hayatatech.com` (à confirmer).
- Aucun secret/API key ajouté.

## Envoi automatisé des formulaires
Choisir un fournisseur ou un endpoint HTTPS ; confirmer format accepté, CORS, protection anti-spam, limitation de débit et conservation des données ; configurer `window.HAYATA_FORM_ENDPOINT` avant `assets/js/main.js` ; tester le parcours de bout en bout. Ne jamais placer une clé privée dans le JavaScript navigateur.

## Actions humaines
Confirmer domaine, coordonnées et réseaux sociaux ; choisir/configurer le service de formulaire si nécessaire ; vérifier HTTPS et en-têtes HTTP après déploiement.

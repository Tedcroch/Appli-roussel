# AGENTS.md - Instructions de projet (Agence Fleurs Roussel)

## Stack et Outils
- HTML5, Tailwind CSS 4 compilé avec CLI (`npm run dev`), JavaScript pur (Vanilla JS)[cite: 1].
- Aucun CDN, aucune bibliothèque JS/CSS ajoutée[cite: 1].
- Aucun attribut `style`, aucune balise `<style>` : tout passe par les classes Tailwind[cite: 1].
- Fichiers de code et commentaires rédigés exclusivement en français[cite: 1].

## Thème Roussel (src/input.css)
Utiliser strictement les classes du thème à la place de toute couleur brute :
- Vert principal (#2f5d3a) : `bg-roussel-vert`, `text-roussel-vert`[cite: 1]
- Vert clair (#e7f0e9) : `bg-roussel-vert-clair`[cite: 1]
- Rose (#b0305c) : `text-roussel-rose`, `outline-roussel-rose`[cite: 1]
- Texte (#1f2421) : `text-roussel-texte`[cite: 1]
- Gris (#555c57) : `text-roussel-gris`[cite: 1]

## Structure et Formulaires
- Mobile first : classes sans préfixe visent 375 px ; `md:` et `lg:` pour les grands écrans[cite: 1].
- Un seul `<h1>` par page. Utiliser des `<h2>` pour les différentes sections de l'application[cite: 1].
- Les choix du formulaire doivent utiliser de vrais `<input type="radio">` avec `<label>` et `<button>`, regroupés dans un `<fieldset>` avec un `<legend>`[cite: 1].
- Placer toute zone de message dynamique (prix, résultat, coups joués) dans une zone avec `aria-live="polite"`.

## JavaScript (js/app.js)
- Tout le code JavaScript doit être dans `js/app.js`, inclus avec l'attribut `defer`.
- Déclaration de variables uniquement avec `const` ou `let`, jamais `var`.
- Une fonction par action avec un nom en français décrivant son rôle (ex: `afficherPrix`), précédée d'un commentaire d'une ligne[cite: 2].
- Charger les données depuis `data/donnees.json` avec `fetch` (jamais de données écrites en dur dans le code)[cite: 2].
- Afficher les données textuelles impérativement avec `textContent` (JAMAIS d'injection avec `innerHTML`)[cite: 2].
- Aucun `alert()` et aucun `console.log()` dans la version livrée[cite: 2]. La console du navigateur ne doit afficher aucune erreur[cite: 2].

## Accessibilité et Sécurité
- Tout lien et tout bouton doit inclure : `focus-visible: outline-2 focus-visible: outline-roussel-rose`[cite: 2].
- Zones cliquables d'au moins 44 px de haut sur mobile (ex: classe `py-3` sur un bouton)[cite: 2].
- L'application doit être utilisable à 100% au clavier[cite: 2]. Ne pas transmettre d'information uniquement par la couleur[cite: 2].
- Aucune donnée personnelle (nom, email, téléphone client) ni secret dans le code ou les prompts[cite: 2, 6]. Ne jamais compléter ni inventer d'information manquante[cite: 2].
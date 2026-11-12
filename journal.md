# **Prompt pour le contenu-memoire**

**Prompt :** Lis"contenu-memoire.txt" et convertis en format json das schema-memoire.json

**Erreur :** L'IA (Claude) a créer un nouveau .json avec les bonnes données dedans.

# **2éme Prompt pour le contenu-memoire**

**Prompt :** Lis "contenu-memoire.txt" et convertis en format json selon le schema dans schema-memoire.json.

**Erreur :** On ne comprenait pas tous les lignes de codes données par l'IA.

# **3éme Prompt pour le contenu-memoire**

**Prompt :**  Lis "contenu-memoire.txt" et convertis le en format json selon le schema dans schema-memoire.json puis explique moi chaque ligne.

**Erreur :** Aucune.

**4éme Prompt pour le contenu-memoire**

**Prompt :** Lis "sujet-memoire.pdf" et convertis la partie cas de tests en format json selon le schema dans schema-memoire.json puis explique moi chaque ligne en écrasant memoire.json.

**Erreur :** Aucune.

**5éme Prompt pour la première fonctionnalité**

**Erreur :** Aucune.

**6éme Prompt pour la deuxième fonctionnalité**

**Erreur :** Aucune.

**7éme Prompt pour la troisième fonctionnalité**

**Erreur :** Aucune.

**8éme Prompt pour la quatrième fonctionnalité**

**Erreur :** Aucune.

**8éme Prompt pour la cinquième fonctionnalité**

**Erreur :** Aucune.

**9éme Prompt pour la sixième fonctionnalité**

**Erreur :** Aucune.

**10éme Prompt pour la relecture**

| N° | Critère | Verdict | Justification (ligne de code ou exigence) |
|:--|:--|:--|:--|
| 1 | Aucun CDN, aucune bibliothèque ajoutée | conforme | La page ne charge que deux ressources locales : `dist/output.css` (`index.html:7`) et `js/app.js` (`index.html:9`). Aucun `import` ni `require` dans `app.js`. |
| 2 | Aucun attribut style, aucune balise `<style>` | conforme | Ni `index.html` ni `app.js` ne contiennent `style=` ou `<style>`. Le JS ne passe que par `className` et `classList` (`app.js:55`, `app.js:106-108`). |
| 3 | Tout le JS dans js/app.js, chargé avec defer | non conforme | `app.js` est bien chargé avec `defer` (`index.html:9`). Mais un second fichier JS existe, `js/nav.js:1-13`, même si aucune page ne le charge. |
| 4 | const et let, jamais var | conforme | Le mot-clé `var` n'apparaît nulle part. Exemples : `app.js:6`, `app.js:12-24`, `app.js:43`. |
| 5 | Une action par fonction, nom en français, commentaire d'une ligne au-dessus | non conforme | Les noms sont en français et chaque fonction nommée a son commentaire. Mais certaines fonctions enchaînent plusieurs actions : `retournerCarte` (`app.js:100-117`), `validerPaire` (`app.js:142-152`) et `reinitialiserPartie` (`app.js:214-225`). De plus, les fonctions anonymes des lignes `73`, `180` et `203` n'ont pas de commentaire au-dessus. |
| 6 | Données lues dans data/donnees.json avec fetch, non recopiées | conforme | Lecture avec `fetch('data/donnees.json')` (`app.js:28`). Aucun nom de fleur ni aucune anecdote n'est écrit dans le JS. |
| 7 | textContent, jamais innerHTML | conforme | Le nom s'affiche en `app.js:90` et l'anecdote en `app.js:173`, tous deux avec `textContent`. Il n'y a aucun `innerHTML`. |
| 8 | Aucun alert(), aucun console.log | conforme | Aucune occurrence. Les erreurs passent par `afficherMessage` (`app.js:239`). |
| 9 | Aucune couleur en dur, seulement le thème roussel | non conforme | Le blanc, une couleur par défaut de Tailwind, est utilisé : `bg-white` (`index.html:11`), `text-white` (`index.html:37`, `index.html:44`, `app.js:55`, `app.js:193`) et `outline-white` (`index.html:16-21`). Le thème de `input.css:5-11` ne définit pas de blanc. |
| 10 | Un seul `<h1>`, des `<h2>` pour les parties | non conforme | Il y a bien un seul `<h1>` (`index.html:29`). En revanche, aucune partie n'a de `<h2>` : ni la grille (`index.html:50`), ni le compteur, ni l'anecdote. |
| 11 | Cartes et « Rejouer » en `<button>` | conforme | Les cartes sont créées avec `createElement('button')` (`app.js:53`). « Rejouer » est un `<button>` (`index.html:44`). |
| 12 | Messages qui changent en zone aria-live="polite" | conforme | État : `index.html:32`. Coups : `index.html:36`. Résultat : `index.html:41`. Anecdote : `index.html:47`. |
| 13 | focus-visible:outline-2 et focus-visible:outline-roussel-rose sur chaque bouton | conforme | Les deux classes sont présentes sur « Nouvelle partie » (`index.html:37`), « Rejouer » (`index.html:44`) et les cartes (`app.js:55`). |
| 14 | Boutons d'au moins 44 px de haut sur mobile | conforme | « Nouvelle partie » et « Rejouer » ont `py-3` (`index.html:37`, `index.html:44`). Les cartes ont `min-h-11`, soit 44 px (`app.js:55`). Le rendu réel à 375 px n'a pas été vérifié dans un navigateur. |
| 15 | Aucune information portée par la seule couleur | conforme | Une carte cachée affiche « ? » (`app.js:58`) et une carte visible affiche l'image et le nom (`app.js:109`). Les états sont aussi écrits en toutes lettres dans les messages (`app.js:146`, `app.js:179`). |
| 16 | Aucun nom complet, courriel, téléphone ni secret | conforme | La seule coordonnée est l'adresse de la boutique (`index.html:57`). Aucune donnée de personne dans `app.js` ni dans `donnees.json`. |
| 17 | Aucun ajout au contenu de la cliente, manque signalé par [À COMPLÉTER] | conforme | Chaque manque affiche `[À COMPLÉTER]` : `app.js:82`, `90`, `104`, `146`, `171-172` et `233`. |
| 18 | Troisième clic ignoré tant que deux cartes sont en attente | conforme | `peutRetournerCarte` refuse le clic si `plateauBloque` est vrai ou si `cartesRetournees.length < 2` est faux (`app.js:96`). Elle est appelée en `app.js:101` et le plateau est bloqué en `app.js:178`. |
| 19 | 16 cartes (8 paires), mélangées à chaque nouvelle partie | conforme | Le jeu prend 8 fleurs, les double puis les mélange (`app.js:236`) avec Fisher-Yates (`app.js:41-48`). Ce mélange a lieu à chaque partie (`app.js:244`, `247`, `249`). |


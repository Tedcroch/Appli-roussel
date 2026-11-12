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

| N° | Critère | Verdict | Justification (ligne de code ou exigence) | Remarque | Raison |
|:--|:--|:--|:--|:--|:--|
| 1 | Tout le JS dans js/app.js, chargé avec defer | non conforme | `app.js` est bien chargé avec `defer` (`index.html:9`). Mais un second fichier JS existe, `js/nav.js:1-13`, même si aucune page ne le charge. | Accepté : nav.js ne sert pas, on le supprime. | Un fichier JS inutile embrouille les juniors qui relisent le projet, et la règle demande tout le JS dans app.js. |
| 2 | const et let, jamais var | conforme | Le mot-clé `var` n'apparaît nulle part. Exemples : `app.js:6`, `app.js:12-24`, `app.js:43`. | Refusé | Le code respecte déjà la règle : il n’y a rien à corriger. |
| 3 | Une action par fonction, nom en français, commentaire d'une ligne au-dessus | non conforme | Les noms sont en français et chaque fonction nommée a son commentaire. Mais certaines fonctions enchaînent plusieurs actions : `retournerCarte` (`app.js:100-117`), `validerPaire` (`app.js:142-152`) et `reinitialiserPartie` (`app.js:214-225`). De plus, les fonctions anonymes des lignes `73`, `180` et `203` n'ont pas de commentaire au-dessus. | Refusé | Découper encore créerait beaucoup de petites fonctions et rendrait le code plus dur à suivre ; les fonctions actuelles restent courtes. |
| 4 | Données lues dans data/donnees.json avec fetch, non recopiées | conforme | Lecture avec `fetch('data/donnees.json')` (`app.js:28`). Aucun nom de fleur ni aucune anecdote n'est écrit dans le JS. | Accepté : les fleurs viennent de donnees.json avec fetch. | Déjà conforme : la cliente peut changer les fleurs dans donnees.json sans toucher au code. |
| 5 | Aucune couleur en dur, seulement le thème roussel | non conforme | Le blanc, une couleur par défaut de Tailwind, est utilisé : `bg-white` (`index.html:11`), `text-white` (`index.html:37`, `index.html:44`, `app.js:55`, `app.js:193`) et `outline-white` (`index.html:16-21`). Le thème de `input.css:5-11` ne définit pas de blanc. | Accepté : on remplace le blanc par une couleur du thème. | Toutes les couleurs viennent du thème Roussel : la charte de la boutique est respectée et se modifie à un seul endroit (input.css). |
| 6 | Un seul `<h1>`, des `<h2>` pour les parties | non conforme | Il y a bien un seul `<h1>` (`index.html:29`). En revanche, aucune partie n'a de `<h2>` : ni la grille (`index.html:50`), ni le compteur, ni l'anecdote. | Refusé | La page ne contient qu’une seule partie, le jeu : des h2 en plus alourdiraient l’écran du téléphone sans aider à se repérer. |
| 7 | focus-visible:outline-2 et focus-visible:outline-roussel-rose sur chaque bouton | conforme | Les deux classes sont présentes sur « Nouvelle partie » (`index.html:37`), « Rejouer » (`index.html:44`) et les cartes (`app.js:55`). | Accepté : le contour rose est sur les 3 sortes de boutons. | Déjà conforme : le contour rose montre où l’on est quand on joue au clavier. |
| 8 | Aucun nom complet, courriel, téléphone ni secret | conforme | La seule coordonnée est l'adresse de la boutique (`index.html:57`). Aucune donnée de personne dans `app.js` ni dans `donnees.json`. | Refusé | Déjà conforme : seule l’adresse publique de la boutique apparaît, il n’y a rien à retirer. |
| 9 | Troisième clic ignoré tant que deux cartes sont en attente | conforme | `peutRetournerCarte` refuse le clic si `plateauBloque` est vrai ou si `cartesRetournees.length < 2` est faux (`app.js:96`). Elle est appelée en `app.js:101` et le plateau est bloqué en `app.js:178`. | Accepté : peutRetournerCarte bloque le 3e clic. | Déjà conforme : ce blocage évite qu’un visiteur retourne trois cartes en tapant vite sur son téléphone. |
| 10 | 16 cartes (8 paires), mélangées à chaque nouvelle partie | conforme | Le jeu prend 8 fleurs, les double puis les mélange (`app.js:236`) avec Fisher-Yates (`app.js:41-48`). Ce mélange a lieu à chaque partie (`app.js:244`, `247`, `249`). | Refusé | Déjà conforme : le jeu reste intéressant quand on rejoue, il n’y a rien à corriger. |


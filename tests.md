
---

# tests.md : cas de test de l'application (Jeu de mémoire)

---

## 🟢 Fonctionnalité 1 : Voir seize cartes faces cachées (huit paires), dans un ordre différent à chaque partie

> 📌 **[CAS 1] Affichage initial de la grille**

* **Action** : Charger la page `index.html`.
* **Résultat attendu** : La grille affiche exactement 16 cartes (éléments cliquables) orientées face cachée, correctement alignées sur un écran de 375 px de large.

> 📌 **[CAS 2] Composition exacte des paires**

* **Action** : Inspecter le contenu du jeu en retournant toutes les cartes.
* **Résultat attendu** : Le jeu contient exactement 8 paires distinctes (chaque identifiant `id` de fleur apparaît exactement 2 fois).

> 📌 **[CAS 3] Mélange aléatoire à chaque nouvelle partie**

* **Action** : Noter l'emplacement de 3 cartes, puis rafraîchir la page ou relancer une partie.
* **Résultat attendu** : L'emplacement et l'ordre des fleurs sur la grille sont différents de la partie précédente.

---

## 🟢 Fonctionnalité 2 : Retourner une carte d'un clic ou au clavier (image et nom visibles)

> 📌 **[CAS 1] Interaction à la souris (clic)**

* **Action** : Cliquer sur une carte face cachée.
* **Résultat attendu** : La carte se retourne immédiatement et affiche son nom en français ainsi que son image SVG (`img/fleurs/[id].svg`).

> 📌 **[CAS 2] Navigation au clavier (Focus visuel)**

* **Action** : Naviguer dans le jeu en appuyant sur la touche `Tab` à plusieurs reprises.
* **Résultat attendu** : Chaque carte reçoit le focus à son tour avec un repère visuel clair (`focus-visible:outline-roussel-rose`) d'une hauteur d'au moins 44 px.

> 📌 **[CAS 3] Activation au clavier (Entrée ou Espace)**

* **Action** : Amener le focus sur une carte fermée et appuyer sur `Entrée` ou `Espace`.
* **Résultat attendu** : La carte ciblée se retourne et affiche correctement son image et son nom.

---

## 🟢 Fonctionnalité 3 : Paire gardée visible avec l'anecdote, sinon cartes recachées après un court instant

> 📌 **[CAS 1] Paire identique (Match)**

* **Action** : Retourner deux cartes représentant la même fleur.
* **Résultat attendu** : Les deux cartes restent face visible de manière permanente. L'anecdote botanique s'affiche immédiatement dans la zone d'information (`aria-live="polite"`).

> 📌 **[CAS 2] Paire différente (Mismatch)**

* **Action** : Retourner deux cartes représentant des fleurs différentes.
* **Résultat attendu** : Les deux cartes restent visibles un court instant (environ 1 seconde) puis se remettent automatiquement face cachée.

> 📌 **[CAS 3] Cumul et conservation des paires trouvées**

* **Action** : Découvrir une deuxième paire après en avoir déjà trouvé une première.
* **Résultat attendu** : La première paire reste face visible et l'anecdote de la nouvelle paire découverte s'affiche.

---

## 🟢 Fonctionnalité 4 : Jamais plus de deux cartes retournées en attente (3e clic ignoré)

> 📌 **[CAS 1] Clics rapides consécutifs (Souris)**

* **Action** : Retourner 2 cartes différentes, puis cliquer immédiatement sur une 3e carte pendant le délai d'attente.
* **Résultat attendu** : Le 3e clic est totalement ignoré. Aucune 3e carte ne se retourne tant que les deux premières ne sont pas recachées.

> 📌 **[CAS 2] Tentative d'activation au clavier pendant le délai**

* **Action** : Retourner 2 cartes au clavier et appuyer immédiatement sur `Entrée` ou `Espace` sur une 3e carte pendant le délai.
* **Résultat attendu** : L'action au clavier sur la 3e carte est entièrement ignorée.

---

## 🟢 Fonctionnalité 5 : Voir le nombre de coups joués (un coup = deux cartes retournées)

> 📌 **[CAS 1] Incrémentation du compteur de coups**

* **Action** : Retourner une 1ère carte puis une 2e carte (que la paire soit valide ou non).
* **Résultat attendu** : Le compteur de coups s'incrémente de +1 (mis à jour dans la zone `aria-live="polite"`).

> 📌 **[CAS 2] Réinitialisation du compteur lors d'une nouvelle partie**

* **Action** : Jouer 5 coups, puis cliquer sur le bouton de réinitialisation/nouvelle partie.
* **Résultat attendu** : Le compteur de coups se réinitialise immédiatement et affiche `0`.

---

## 🟢 Fonctionnalité 6 : Message de fin quand toutes les paires sont trouvées (avec nombre de coups) et rejouer

> 📌 **[CAS 1] Affichage du message de victoire**

* **Action** : Découvrir la 8e et dernière paire du jeu.
* **Résultat attendu** : Un message de victoire s'affiche (`aria-live="polite"`) indiquant le nombre total de coups joués et présentant un bouton "Rejouer".

> 📌 **[CAS 2] Accessibilité et interaction sur le bouton Rejouer**

* **Action** : Accéder au bouton "Rejouer" au clavier avec `Tab` et l'activer avec `Entrée` ou `Espace`.
* **Résultat attendu** : Le bouton est facilement utilisable au clavier (focus `outline-roussel-rose`) et relance immédiatement une nouvelle partie.

> 📌 **[CAS 3] Relance complète du jeu**

* **Action** : Cliquer sur "Rejouer" après une victoire.
* **Résultat attendu** : Le message de victoire disparaît, la grille est à nouveau remplie de 16 cartes face cachée mélangées, et le compteur de coups revient à `0`.
# tests.md : cas de test de l'application

---

## Fonctionnalité 1 : voir seize cartes faces cachées (huit paires), dans un ordre différent à chaque partie

### Cas 1
- **Action** : Distribution des cartes en face cachée.
- **Résultat attendu** : Afficher exactement 16 cartes face cachée avec un espace entre elles.


### Cas 2
- **Action** : Distribution des paires
- **Résultat attendu** : Une paire par cartes.

### Cas 3
- **Action** : Relancer plusieurs partie
- **Résultat attendu** : Toutes les cartes sont dans un ordre différent.

---

## Fonctionnalité 2 : retourner une carte d'un clic ou au clavier (image et nom visibles)

### Cas 1
- **Action** : Clique sur une carte.
- **Résultat attendu** : la retourne et affiche le nom avec la bonne image.

### Cas 2
- **Action** : Appuyer sur la touche "tab" à répétition.
- **Résultat attendu** : Les cartes se surbrillance à la selection.

### Cas 3
- **Action** : Appuyer sur entrée quand une carte est en surbrillance.
- **Résultat attendu** : la carte se retourne et affiche le bon nom et image.

---

## Fonctionnalité 3 : après deux cartes retournées, paire gardée visible avec l'anecdote de la fleur, sinon les cartes se recachent après un court instant

### Cas 1
- **Action** : Clique sur une carte puis sur une autre
- **Résultat attendu** : Si c'est une paire elle reste retournée de manière permanente.

### Cas 2
- **Action** : Clique sur une carte puis sur une autre
- **Résultat attendu** : Si les cartes sont différente, elles se remetent face cachée.

### Cas 3
- **Action** : Clique sur une carte puis sur une autre
- **Résultat attendu** : Si les deux cartes sont identiques elle restent, l'anecdote correspond a cette fleur s'affiche immédiatement a l'écran.

---

## Fonctionnalité 4 : jamais plus de deux cartes retournées en attente (un troisième clic est ignoré)

### Cas 1
- **Action** : Clique très rapide sur trois cartes différentes l'une après l'autre
- **Résultat attendu** : Le troisième clique est totalement ignoré, le système permet de retourner que deux cartes en même temps.

## Fonctionnalité 5 : voir le nombre de coups joués (un coup = deux cartes retournées)

### Cas 1
- **Action** : Retourner deux cartes
- **Résultat attendu** : Vérifier que l'incrémentation de +1 se fait dans le compteur de coups

### Cas 2
- **Action** : Relancer une partie
- **Résultat attendu** : Vérifier que le compteur de coups se réinitialise à zéro

---

## Fonctionnalité 6 : message de fin quand toutes les paires sont trouvées (avec le nombre de coups) et possibilité de rejouer

### Cas 1
- **Action** : Retourner toutes les cartes
- **Résultat attendu** : Affiche un pop-up avec affiché le nombre de coups et un petit bouton rejouer

### Cas 2
- **Action** : Consulter l'écran une fois toutes les paires découvertes.
- **Résultat attendu** : Un bouton "bouton" est clairement présent et utilisable aussi bien au clavier qu'à la souris.

### Cas 3
- **Action** : Cliquer sur le bouton rejouer après avec gagner à la souris et au clavier
- **Résultat attendu** : Une nouvelle partie se relance en effaçant le pup-up de victoire de l'écran.

Compte-rendu de Test Croisé — Jeu de Mémoire Fleurs Roussel
Équipe testée : (Nom de l'autre équipe)
Équipe testeuse : Équipe Fleurs Roussel
Date : 12 novembre 2026

1. Test du prompt de contenu (prompts/contenu.md)
   Exécution avec la seule documentation : (À cocher : Oui / Non — Préciser si les instructions ont suffi sans aide orale)
   Conformité des données générées (data/donnees.json) :
   Normalisation des identifiants (id en minuscules, sans accents) : (OK / À revoir)
   Gestion des anecdotes manquantes ou contradictoires (null + a_verifier) : (OK / À revoir)
   Résistance à l'injection de prompt cachée dans le texte source : (OK / À revoir)
2. Ergonomie & Affichage (Desktop et Mobile 375 px)
   Points d'amélioration observés
   Affichage Desktop (grilles trop hautes) :

Observation : Sur grand écran, le conteneur principal s'élargit trop et, comme les cartes conservent un ratio carré (aspect-square), la grille dépasse la hauteur de la fenêtre. Il est nécessaire de scroller pour voir les cartes de la dernière rangée.
Piste d'amélioration : Borner la largeur maximale du conteneur principal même sur desktop (par exemple max-w-[375px] ou max-w-md sur <main>) afin que l'ensemble de la grille 4×4 reste visible sans défilement vertical.
Affichage Mobile (375 px) en fin de partie :

Observation : Lorsqu'une partie est gagnée, l'apparition du message de victoire et du bouton « Rejouer » allonge la hauteur de la page et oblige l'utilisateur à scroller vers le bas pour les consulter.
Piste d'amélioration : Réduire légèrement les marges verticales (mb-2, p-3) et l'espacement entre les cartes (gap-1.5), ou réserver dès le chargement une hauteur minimale pour la zone d'anecdote afin d'éviter le décalage en fin de partie.
3. Accessibilité Clavier & Console Technique
   Navigation clavier (Tab, Entrée, Espace) : (OK / À compléter selon votre test)
   Visibilité du focus et gestion de fin de partie : (OK / À compléter selon votre test)
   Console navigateur (erreurs JS / ressources 404) : (OK / À compléter selon votre test)
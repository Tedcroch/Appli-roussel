// Application Fleurs Roussel.
// Les données viennent de data/donnees.json, produites par le prompt de contenu.
// Règles de code : voir AGENTS.md et les conventions d'intégration de l'agence.

// Nombre de paires de fleurs dans une partie.
const NOMBRE_DE_PAIRES = 8;

// Lit la liste des fleurs dans data/donnees.json.
async function chargerFleurs() {
  const reponse = await fetch('data/donnees.json');
  if (!reponse.ok) {
    throw new Error('Données introuvables');
  }
  return reponse.json();
}

// Renvoie un tableau où chaque fleur apparaît deux fois.
function doublerFleurs(fleurs) {
  return [...fleurs, ...fleurs];
}

// Mélange une copie des cartes avec l'algorithme de Fisher-Yates.
function melangerCartes(cartes) {
  const copie = [...cartes];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

// Crée une carte face cachée : un bouton dans un élément de liste.
function creerCarte(fleur, position) {
  const element = document.createElement('li');
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.className = 'aspect-square w-full min-h-11 rounded-lg bg-roussel-vert text-2xl font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roussel-rose';
  bouton.dataset.fleur = fleur.id;
  bouton.setAttribute('aria-label', 'Carte ' + position + ', face cachée');
  bouton.textContent = '?';
  element.appendChild(bouton);
  return element;
}

// Vide la grille puis y place les cartes dans l'ordre reçu.
function afficherGrille(cartes) {
  const grille = document.getElementById('grille');
  grille.replaceChildren();
  cartes.forEach(function (fleur, index) {
    grille.appendChild(creerCarte(fleur, index + 1));
  });
}

// Écrit un message dans la zone d'état.
function afficherMessage(texte) {
  document.getElementById('message').textContent = texte;
}

// Prépare une nouvelle partie : charge, double, mélange et affiche les cartes.
async function demarrerPartie() {
  try {
    const fleurs = await chargerFleurs();
    if (!Array.isArray(fleurs) || fleurs.length < NOMBRE_DE_PAIRES) {
      afficherMessage('[À COMPLÉTER] Il faut ' + NOMBRE_DE_PAIRES + ' fleurs dans les données pour jouer.');
      return;
    }
    const cartes = melangerCartes(doublerFleurs(fleurs.slice(0, NOMBRE_DE_PAIRES)));
    afficherGrille(cartes);
  } catch (erreur) {
    afficherMessage('Le jeu n\'a pas pu être chargé. Rechargez la page.');
  }
}

demarrerPartie();

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
  bouton.className = 'flex aspect-square w-full min-h-11 flex-col items-center justify-center gap-1 rounded-lg bg-roussel-vert p-1 text-2xl font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roussel-rose';
  bouton.dataset.fleur = fleur.id;
  bouton.setAttribute('aria-label', 'Carte ' + position + ', face cachée');
  bouton.textContent = '?';
  // Un bouton réagit au clic, à Entrée et à Espace avec le même événement.
  bouton.addEventListener('click', function () {
    retournerCarte(bouton, fleur, position);
  });
  element.appendChild(bouton);
  return element;
}

// Crée l'image SVG de la fleur (alt vide : le nom est écrit juste en dessous).
function creerImageFleur(fleur) {
  const image = document.createElement('img');
  image.src = 'img/fleurs/' + fleur.id + '.svg';
  image.alt = '';
  image.className = 'h-auto w-3/4';
  image.addEventListener('error', function () {
    afficherImageManquante(image);
  });
  return image;
}

// Remplace une image introuvable par le texte [À COMPLÉTER].
function afficherImageManquante(image) {
  const remplacement = document.createElement('span');
  remplacement.textContent = '[À COMPLÉTER]';
  image.replaceWith(remplacement);
}

// Crée le nom de la fleur affiché sous l'image.
function creerNomFleur(fleur) {
  const nom = document.createElement('span');
  nom.className = 'text-xs font-semibold break-words';
  nom.textContent = fleur.nom || '[À COMPLÉTER]';
  return nom;
}

// Retourne une carte cachée : affiche son image et son nom, puis l'annonce.
function retournerCarte(bouton, fleur, position) {
  if (bouton.dataset.etat === 'visible') {
    return;
  }
  const nom = fleur.nom || '[À COMPLÉTER]';
  bouton.dataset.etat = 'visible';
  bouton.classList.replace('bg-roussel-vert', 'bg-roussel-vert-clair');
  bouton.classList.replace('text-white', 'text-roussel-texte');
  bouton.classList.replace('text-2xl', 'text-xs');
  bouton.replaceChildren(creerImageFleur(fleur), creerNomFleur(fleur));
  bouton.setAttribute('aria-label', 'Carte ' + position + ', ' + nom);
  afficherMessage('Carte ' + position + ' : ' + nom);
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

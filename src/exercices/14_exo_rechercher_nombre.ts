/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

/**
 * Écrire un programme qui demande à l'utilisateur de remplir un tableau d'entiers à partir du clavier.
 * Puis le programme devra lui demander d'entrer un nombre à rechercher dans le tableau.Si nombre existe, le programme lui dira que le nombre existe et le nombre de fois qu'ils se retrouve dans le tableau.
 * Sinon le programme lui dira que le nombre recherché n'existe pas dans le tableau
 *
 * Ex : tableau saisi à partir du clavier : 12,45,6,7,12,23,33,6,22,3,6
 * ->Entrer un nombre à rechercher : 6
 * ->6 existe et se retrouve 3 fois dans le tableau
 */

const listeNombres: number[] = []
let nombreATrouver
let occurrences = 0

// Demander à l'utilisateur de remplir le tableau
let tailleTableau = +prompt('Entrer la taille du tableau:')
for (let i = 0; i < tailleTableau; i++) {
  listeNombres.push(parseInt(prompt('Entrer un nombre entier:')))
}

// Demander à l'utilisateur de rechercher un nombre
nombreATrouver = parseInt(prompt('Entrer un nombre à rechercher:'))

// Compter les occurrences du nombre
for (let i = 0; i < listeNombres.length; i++) {
  if (listeNombres[i] === nombreATrouver) {
    occurrences++
  }
}

// Afficher le résultat
if (occurrences > 0) {
  console.log(
    nombreATrouver + ' existe et se retrouve ' + occurrences + ' fois dans le tableau'
  )
} else {
  console.log(nombreATrouver + " n'existe pas dans le tableau")
}

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

// Écrire un programme qui permet à l’utilisateur de saisir un entier entre 1 et 12 et qui affiche le nom du mois correspondant.

// Ex:
// Mois : 4
// Résult : Avril

const mois = +prompt('Entrer un nombre de mois : ')

switch (mois) {
  case 1:
    console.log('Janvier')
    break
  case 2:
    console.log('Février')
    break
  case 3:
    console.log('Mars')
    break
  case 4:
    console.log('Avril')
    break
  case 5:
    console.log('Mai')
    break
  case 6:
    console.log('Juin')
    break
  case 7:
    console.log('Juillet')
    break
  case 8:
    console.log('Août')
    break
  case 9:
    console.log('Septembre')
    break
  case 10:
    console.log('Octobre')
    break
  case 11:
    console.log('Novembre')
    break
  case 12:
    console.log('Decembre')
    break
  default:
    console.log('Mois invalide')
}

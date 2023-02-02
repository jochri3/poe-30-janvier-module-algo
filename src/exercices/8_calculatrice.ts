/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()
// Écrire un programme Java qui demande à l’utilisateur d'entrer 2 nombres à partir du clavier, et qui ensuite va lui proposer un menu avec les opérations disponibles à choisir. Enfin le programme va exécuter le calcul selon le choix de l’utilisateur.

// Exemple d’exécution

// Entrez le premier nombre : 4
// Entrez le 2ème nombre : 7

// Addition (choisir 1 ou +)
// Soustraction (choisir 2 ou -)
// Multiplication (choisir 3 ou x)
// Division(Choisir 4 ou /)
// Votre choix : +

// 4 + 7 = 11

const nombre1: number = +prompt('Premier nombre: ')

const nombre2: number = +prompt('Deuxième nombre: ')

console.log('*********************************************')
console.log("** Veuillez choisir l'opération à exécuter **")
console.log('*********************************************\n')
console.log('1. Addition(+)')
console.log('2. Soustraction(-)')
console.log('3. Multiplication(x)')
console.log('4. Division(/)')

const choix: string = prompt('Votre choix : ')
let resultat: number
switch (choix) {
  case '+':
  case '1':
    resultat = nombre1 + nombre2
    console.log(`${nombre1} + ${nombre2} = ${resultat}`)
    break

  case '-':
  case '2':
    resultat = nombre1 - nombre2
    console.log('%d - %d = %d', nombre1, nombre2, resultat)
    break

  case 'x':
  case '3':
    resultat = nombre1 * nombre2
    console.log('%d x %d = %d', nombre1, nombre2, resultat)
    break

  case '/':
  case '4':
    resultat = nombre1 / nombre2
    console.log('%d / %d = %d', nombre1, nombre2, resultat)
    break

  default:
    console.log("Vous n'avez pas entre un choix valide")
}

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

// Ecrivez un programme  qui lit un nombre et indique s'il est positif, négatif ou s'il vaut zéro et s'il est pair ou impair.
// Exemple d'exécution:
// Entrez un nombre entier: 5
// Le nombre est positif et impair
// Entrez un nombre entier: -4
// Le nombre est négatif et pair
// Entrez un nombre entier: 0
// Le nombre est zéro (et il est pair)
let num: number = parseInt(prompt('Entrez un nombre entier: '))

let positiveNegative: string = ''
if (num > 0) {
  positiveNegative = 'positif'
} else if (num < 0) {
  positiveNegative = 'négatif'
} else {
  positiveNegative = 'zéro'
}

let evenOdd: string = num % 2 === 0 ? 'pair' : 'impair'

// let evenOdd: string = ''
// if (num % 2 === 0) {
//   evenOdd = 'pair'
// } else {
//   evenOdd = 'impair'
// }

console.log(`Le nombre est ${positiveNegative} et ${evenOdd}`)

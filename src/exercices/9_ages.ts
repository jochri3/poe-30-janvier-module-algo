/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()
// Écrire un algorithme qui demande l’âge d’un enfant. Ensuite, il l’informe
// de sa catégorie :
// « Poussin » de 7 à 9 ans
// « Pupille » de 10 à 11 ans
// « Benjamin » de 12 à 13 ans
// « Minime » de 14 à 15 ans
// « Cadet » 16 à 17 ans

let age: number = parseInt(prompt("Entrez l'age : "))
if (age >= 7 && age <= 9) {
  console.log('Poussin')
} else if (age >= 10 && age <= 11) {
  console.log('Pupille')
} else if (age >= 12 && age <= 13) {
  console.log('Benjamin')
} else if (age >= 14 && age <= 15) {
  console.log('Minime')
} else if (age >= 16 && age <= 17) {
  console.log('Cadet')
} else {
  console.log("Vous n'appartenez à aucune catégorie")
}

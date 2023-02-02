/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

const NOTE_MIN: number = 0
const NOTE_MAX: number = 20

let nombreNotes: number = 0

const notesCours: number[] = []

do {
  nombreNotes = +prompt('Combien de notes voulez-vous entrer?')
  if (!isNaN(nombreNotes) && nombreNotes > 0) {
    break
  }
  console.log('Veuillez entrer une valeur > 0')
} while (true)

for (let i = 0; i < nombreNotes; i++) {
  do {
    const note = +prompt(`Veuillez entrer la note ${i + 1} : `)
    if (!isNaN(note) && note >= NOTE_MIN && note <= NOTE_MAX) {
      notesCours[i] = note
      break
    }
    console.log('Veuillez entrer une valeur [0,20]')
  } while (true)
}

let sommeNotes = 0

for (let note of notesCours) {
  //   console.log(note)
  sommeNotes = sommeNotes + note
}

const moyenneNotes = sommeNotes / notesCours.length

console.log(`Somme : ${sommeNotes}`)
console.log(`Moyenne : ${moyenneNotes}`)

// 1 - Demander à l'utilisateur le nombre des notes à saisir
//   * Le nombre des notes ne peut pas être négatif ou nul
// 2 - Selon le nombre donné par l'utilisateur, insérer des valeurs de le tableau
//    * Les valeurs  des notes doivent toujours être dans [0,20]
// 3. Afficher la somme et la moyenne

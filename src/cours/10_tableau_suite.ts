/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const notes2: number[] = [12, 14, 18, 15, 9]

let somme2 = 0

for (let note of notes2) {
  //   console.log(note)
  somme2 = somme2 + note
}

const moyenne2 = somme2 / notes2.length

console.log(`Somme : ${somme2}`)
console.log(`Moyenne : ${moyenne2}`)

// 1 - Demander à l'utilisateur le nombre des notes à saisir
//   * Le nombre des notes ne peut pas être négatif ou nul
// 2 - Selon le nombre donné par l'utilisateur, insérer des valeurs de le tableau
//    * Les valeurs  des notes doivent toujours être dans [0,20]
// 3. Afficher la somme et la moyenne

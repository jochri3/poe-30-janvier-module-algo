/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const notes: number[] = [12, 14, 18, 15, 9]
// const notes: Array<number> = [12, 14, 18, 15, 9]

let somme: number = 0

for (let index = 0; index < notes.length; index++) {
  somme = somme + notes[index]
}

const moyenne = somme / notes.length

console.log(`Somme : ${somme}`)
console.log(`Moyenne : ${moyenne}`)

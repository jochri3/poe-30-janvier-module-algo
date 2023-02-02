/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const notes: number[] = [12, 14, 18, 15, 9]
// const notes: Array<number> = [12, 14, 18, 15, 9]

let somme: number = 0

for (let index = 0; index < notes.length; index++) {
  sommeTableaux = sommeTableaux + notes[index]
}

const moyenne = sommeTableaux / notes.length

console.log(`Somme : ${sommeTableaux}`)
console.log(`Moyenne : ${moyenne}`)

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let tableau1 = [2, 6, 8, 15, 39, 11]
let tableau2 = [21, 33, 12, 19, 0]
let tableau3 = [17, 18, 46]

let sommeTableaux: number = 0

// Afficher les tableaux
console.log(tableau1)
console.log(tableau2)
console.log(tableau3)

// Calculer la somme des éléments multiples de 3
for (let i = 0; i < tableau1.length; i++) {
  if (tableau1[i] % 3 === 0) {
    sommeTableaux += tableau1[i]
  }
}
for (let i = 0; i < tableau2.length; i++) {
  if (tableau2[i] % 3 === 0) {
    sommeTableaux += tableau2[i]
  }
}
for (let i = 0; i < tableau3.length; i++) {
  if (tableau3[i] % 3 === 0) {
    sommeTableaux += tableau3[i]
  }
}

// Afficher la somme
console.log(`Somme :  ${sommeTableaux}`)

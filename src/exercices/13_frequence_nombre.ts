/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

//Le but de cet exercice est d’écrire un programme permettant d’identifier l’élément apparaissant le plus fréquemment dans un tableau d’entiers.Ce programme devra également afficher le nombre
//d'occurrences dans le tableau de cet élément le plus fréquent.
//Par exemple, pour le tableau suivant :{2, 7, 5, 6, 7, 1, 6, 2, 1, 7}
//votre programme devra indiquer que l’élément le plus fréquent est le 7 et que sa fréquence d’apparition est 3.
//Notez à ce propos que si dans un tableau donné il y a plus d’un nombre ayantle plus grand nombre d'occurrences, alors votre programme ne retiendra que celui qui apparaît en premier dans le tableau.
const listeDeNombres: number[] = [2, 7, 5, 6, 7, 1, 6, 2, 1, 7]

let frequence: number[] = []
let occurnces: number = 0
let nombrePlusFrequent

for (let i = 0; i < listeDeNombres.length; i++) {
  let num = listeDeNombres[i]
  frequence[num] = (frequence[num] || 0) + 1

  if (frequence[num] > occurnces) {
    occurnces = frequence[num]
    nombrePlusFrequent = num
  }
}

console.log(
  `Le nombre le plus fréquent est ${nombrePlusFrequent} avec ${occurnces} occurrences.`
)

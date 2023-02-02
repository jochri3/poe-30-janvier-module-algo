/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const tableDNombres: number[] = [12, 3, 5, 6, -3]

let plusGrand: number = tableDNombres[0]
let indexPlusGrand: number = 0

let plusPetit: number = tableDNombres[0]
let indexPlusPetit: number = 0

for (let i = 0; i < tableDNombres.length; i++) {
  if (tableDNombres[i] > plusGrand) {
    plusGrand = tableDNombres[i]
    indexPlusGrand = i
  }

  if (tableDNombres[i] < plusPetit) {
    plusPetit = tableDNombres[i]
    indexPlusPetit = i
  }
}

let tableAAfficher = '['
for (let nombre of tableDNombres) {
  if (nombre === plusGrand) {
    tableAAfficher += `${nombre}(PG),`
  } else if (nombre === plusPetit) {
    tableAAfficher += `${nombre}(PP),`
  } else {
    tableAAfficher += `${nombre},`
  }
}
tableAAfficher += ']'

console.log(tableAAfficher)
console.log(`Plus grand : ${plusGrand}, sa position ${indexPlusGrand}`)
console.log(`Plus petit : ${plusPetit}, sa position ${indexPlusPetit}`)

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let firstName: string = 'Christian'
let lastName: string = 'Lisangola'
let age: number = 78
age = 89
const AGE_DE_RETRAITE: number = 30
// L'instructions ci-dessous va créer une erreur
// AGE_DE_RETRAITE = 32

console.log(`Vous êtes ${firstName} ${lastName}, et vous avez ${age} ans.`)
console.log(`Age de la retraite : ${AGE_DE_RETRAITE}`)

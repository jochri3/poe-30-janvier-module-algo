/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

// Écrivez un programme  qui permet de résoudre une équation du 2nd degré de la forme ax2+bx+c = 0.
// L’utilisateur devra fournir a,b,c à partir du clavier, ensuite le programme lui donnera la solution
// Principe du fonctionnement d’une équation du 2nd degré:

// https://www.maths-et-tiques.fr/telech/Secondegre2ESL.pdf

const a: number = parseFloat(prompt('Entrez la valeur de a: '))
const b: number = parseFloat(prompt('Entrez la valeur de b: '))
const c: number = parseFloat(prompt('Entrez la valeur de c: '))

if (a == 0) {
  console.log(`${a} = 0, ce n'est pas une équation du 2nd dégré`)
} else {
  //   const delta: number = b * b - 4 * a * c
  const delta = Math.pow(b, 2) - 4 * a * c

  if (delta > 0) {
    const x1: number = (-b + Math.sqrt(delta)) / (2 * a)
    const x2: number = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(
      `L'équation a deux solutions réelles distinctes : x1 = ${x1} et x2 = ${x2}`
    )
  } else if (delta === 0) {
    const x: number = -b / (2 * a)
    console.log(`L'équation a une solution double : x = ${x}`)
  } else {
    console.log(`L'équation n'a pas de solution réelle`)
  }
}

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let age: number = +prompt('Votre age svp : ')

// > =
// < =
// >
//<
if (age >= 18) {
  console.log("Vous êtes un majeur, et vous aurez donc acces à l'event")
} else {
  console.log('Dégagez')
}

/**
 * Si l'age > = 18 alors
 *  Vous êtes un majeur, et vous aurez donc acces à l'event
 * Sinon
 *  Dégagez
 */

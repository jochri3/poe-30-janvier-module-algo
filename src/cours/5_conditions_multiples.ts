/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let language: string = prompt('Entrez une langue : ')
language = language.toLowerCase()
// FrencH
// F => f
// r => r
// e => e
// n =>n
// c => c
// H => h

if (language === 'french') {
  console.log('Salut!')
} else if (language === 'english') {
  console.log('Hi!')
} else if (language === 'spanish') {
  console.log('Hola!')
} else if (language === 'german') {
  console.log('Guten tag!')
} else {
  console.log("Désolé, la langue choisie n'est pas supportée.")
}

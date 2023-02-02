/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

// Dans les paramètres
const codePIN = +prompt('Veuillez définir un code PIN : ')

// Après quelques minutes...
let codePINATester: number

do {
  codePINATester = +prompt("Veuillez saisir le code PIN de l'appareil : ")
  if (codePINATester !== codePIN) {
    console.log('Code PIN incorrect, veuillez ressayer.')
  }
} while (codePINATester !== codePIN)

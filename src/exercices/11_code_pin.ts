/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

const CODE_PIN_LENGTH:number = 4
const MAX_ATTEMPTS:number = 5

let codePin:number = 0
let tentatives:number = 0

do {
  codePin = +prompt(
    'Veuillez définir un code PIN de ' + CODE_PIN_LENGTH + ' chiffres :'
  )
  if (!isNaN(codePin) && codePin.toString().length === CODE_PIN_LENGTH) {
    break
  }
  console.log(
    'Erreur. Le code PIN doit être composé de ' + CODE_PIN_LENGTH + ' chiffres.'
  )
} while (true)



do {
  let codePinATester = +prompt("Veuillez entrer un code PIN pour débloquer l'appareil :")
  if (!isNaN(codePinATester)) {
    tentatives++
    if (codePinATester == codePin) {
      console.log('Appareil débloqué')
      break
    }
  }
  console.log('Code PIN incorrect. Veuillez ressayer.')

  if (tentatives >= MAX_ATTEMPTS) {
    console.log(
      'Vous avez saisi ' +
        tentatives +
        ' fois de mauvais code PIN, votre compte est bloqué.'
    )
    break
  }
  
  if (tentatives >= 3) {
    console.log('Il vous reste ' + (MAX_ATTEMPTS - tentatives) + ' tentative(s).')
  }
} while (true)
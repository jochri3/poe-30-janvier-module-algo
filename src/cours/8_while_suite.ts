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
  // 1234
  // 1234===1111 => false
  if (codePINATester === codePIN) {
    break
  }
  console.log('Code PIN incorrect, veuillez ressayer.')
} while (true)


// Requirements
// 1 - Le code doit toujours être composé de 4 chiffres
// 2- L'utilisateur n'a que 5 chances. Après 5 tentatives, afficher : 
//       "Voucs entré 5 fois de suite un code PIN incorrect, votre appareil est bloqué"
// 3.- AU bout d 3 tentatives, commencer à afficher le nombre de tentatives restants.
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

// A partir de l'exercice précédent, voici les nouveaux requirements
// A part la langue, il faut entrer le niveau de difficulté en parant du principe que
// Pour chacune des langues, on peut avoir plusieurs niveau : beginner, intermediate, advanced
// Selon le niveau de difficulté ou expérience on affiche des messages differents.
// Pour "english":
//   -> beginner : Hello!
//   -> intermediate : Hi!
//   -> advanced : Good evening!

// Pour "french":
//   -> beginner : Bonjour!
//   -> intermediate : Salut!
//   -> advanced : Bonsoir!

// Pour "spanish":
//   -> beginner : Buenos dias!
//   -> intermediate : Hola!
//   -> advanced : Buenas noches!

// Pour "german":
//   -> beginner : Guten morgen!
//   -> intermediate : Guten tag!
//   -> advanced : Guten abend!



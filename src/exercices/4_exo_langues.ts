/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()
let language: string = prompt('Entrez une langue : ')
let level: string = prompt(
  'Entrez un niveau de difficulté (débutant, intermédiaire, avancé) : '
)
language = language.toLowerCase()
level = level.toLowerCase()

if (language === 'french') {
  if (level === 'débutant') {
    console.log('Bonjour!')
  } else if (level === 'intermédiaire') {
    console.log('Salut!')
  } else if (level === 'avancé') {
    console.log('Bonsoir!')
  } else {
    console.log("Désolé, le niveau de difficulté choisi n'est pas supporté.")
  }
} else if (language === 'english') {
  if (level === 'débutant') {
    console.log('Hello!')
  } else if (level === 'intermédiaire') {
    console.log('Hi!')
  } else if (level === 'avancé') {
    console.log('Good evening!')
  } else {
    console.log("Désolé, le niveau de difficulté choisi n'est pas supporté.")
  }
} else if (language === 'spanish') {
  if (level === 'débutant') {
    console.log('Buenos dias!')
  } else if (level === 'intermédiaire') {
    console.log('Hola!')
  } else if (level === 'avancé') {
    console.log('Buenas noches!')
  } else {
    console.log("Désolé, le niveau de difficulté choisi n'est pas supporté.")
  }
} else if (language === 'german') {
  if (level === 'débutant') {
    console.log('Guten morgen!')
  } else if (level === 'intermédiaire') {
    console.log('Guten tag!')
  } else if (level === 'avancé') {
    console.log('Guten abend!')
  } else {
    console.log("Désolé, le niveau de difficulté choisi n'est pas supporté.")
  }
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

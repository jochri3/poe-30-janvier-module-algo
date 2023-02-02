/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

// Demander à l'utilisateur un nombre à partir du clavier
// Afficher la table de multiplication de ce nombre
// En allant de a à b

const multiplicande: number = +prompt(
  'Entrez le nombre dont vous voulez connaître la table : '
)
const premierMultiplicateur: number = +prompt('Nombre de départ :')
const dernierMultiplicateur: number = +prompt('Nombre de limite : ')

for (let i = premierMultiplicateur; i <= dernierMultiplicateur; i++) {
  console.log(`${multiplicande} x ${i} = ${multiplicande * i}`)
}

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// A partir de la distance parcourue et le temps
// Calculer la vitesse d'un mobile en MRU
// v = espace parcourue/ temps
import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let distance: number = parseFloat(prompt('Distance parcourue : '))
let temps: number = parseFloat(prompt('Temps : '))
let vitesse: number = distance / temps
console.log(`Vitesse : ${vitesse}m/s`)

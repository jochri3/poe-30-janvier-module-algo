/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let longueur: number = parseInt(prompt('Entrer la longueur : '))
let largeur: number = parseInt(prompt('Entrer la largeur : '))

let perimetre: number = 2 * (longueur + largeur)
let aire: number = longueur * largeur

// perimètre : 1500 m
// aire : 125000 m2
console.log(`Perimetre : ${perimetre} m`)
console.log(`Aire : ${aire} m2`)

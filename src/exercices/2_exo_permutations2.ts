/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let a: number = +prompt('Entrez la première valeur (a) :')
let b: number = +prompt('Entrez la deuxième valeur (b) :')
let c: number = +prompt('Entrez la troisième valeur (c) :')

console.log(`Les valeurs entrées sont : a = ${a}, b = ${b} et c = ${c}`)

let temp = a
a = c
c = b
b = temp

console.log(`Les valeurs permutées sont : a = ${a}, b = ${b} et c = ${c}`)

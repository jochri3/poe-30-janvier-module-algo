/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let age: number = +prompt('Donnez votre age :')

console.log(`Votre année de naissance est : ${2023 - age}`)

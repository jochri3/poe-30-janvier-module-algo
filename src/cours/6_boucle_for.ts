// console.log(`Le carré de 2 est ${2 * 2}`)
// console.log(`Le carré de 3 est ${3 * 3}`)
// console.log(`Le carré de 4 est ${4 * 4}`)
// console.log(`Le carré de 5 est ${5 * 5}`)
// console.log(`Le carré de 6 est ${6 * 6}`)
// console.log(`Le carré de 7 est ${7 * 7}`)
// console.log(`Le carré de 8 est ${8 * 8}`)
// console.log(`Le carré de 9 est ${9 * 9}`)
// console.log(`Le carré de 10 est ${10 * 10}`)

// où est-ce qu'on commence? : 2
// où est-ce qu'on s'arrête? : 10
// on avance d'un pas(1)

// Pour valeur allant de 2 à 10
// Calculer son carré
// avancer d'un pas
// nombre = nombre+1
// nombre +=1
// nombre ++ : post incrementation. Uniquement quand on increment de 1
// ++nombre : pre-incrementation. Uniquement quand on increment de 1

for (let nombre = 2; nombre <= 10; nombre++) {
  // nombre=2,Le carré de 2 est 4
  //  nombre = nombre+1=2+1=3, Le carré de 3 est 9
  // nombre = nombre+1 = 3+1= 4, Le carré de 4 est 16
  // nombre=nombre+1= 4+1=5,  Le carré de 4 est 16
  //...
  // nombre=nombre+1 = 9+1=10, La carre de 10 est 100
  // nombre=nombre+1 = 10+1= 11
  console.log(`Le carré de ${nombre} est ${nombre * nombre}`)
}


// Demander à l'utilisateur un nombre à partir du clavier
// Afficher la table de multiplication de ce nombre
// En allant de a à b
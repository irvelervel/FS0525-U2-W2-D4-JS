// VARIABILI
// una variabile è una allocazione di memoria atta a contenere un valore

let age = 20
const mainURL = 'https://www.epicode.com'

age = 21
// mainURL = 'https://www.google.com' // <-- CREA UN ERRORE

// TIPI PRIMITIVI
// - stringhe es. 'ciao'
// - numeri es. 20
// - booleani es. false
// - undefined
// - null

// TIPI COMPLESSI
// - array es. ['ciao', 25, 'boh']
// - oggetti es. { myName: 'Stefano', age: 20 }

// una cosa da NON fare è riassegnare una variabile con un TIPO differente
// age = 'Giangiorgio' // <-- BAD PRACTISE

// OPERAZIONI CLASSICHE CON I TIPI
let dogName = 'Pippo'
dogName.charAt(1) // 'i'
dogName.toUpperCase() // 'PIPPO'
dogName.length // 5

age.toFixed(2) // 21.00

let iCanDrive = true

const pets = ['cane', 'gatto', 'criceto']
pets.length // 3
pets.push('pesce rosso') // aggiunge un elemento in coda
pets.pop() // rimuove l'ultimo elemento
pets.unshift('cavallo')
pets.shift() // rimuove 'cavallo'

pets.length // 3
pets.slice(0, 2) // ['cane', 'gatto']
pets.splice(1, 1) // ciao ciao 'gatto'

// esistono due famiglie di metodi degli array, quelli che MUTANO l'array
// e quelli che NON MUTANO l'array
// metodi MUTATIVI -> es. splice, sort, push etc.
// metodi NON MUTATIVI -> slice, filter, map, etc. (tornano sempre un nuovo array)

// gli oggetti sono anche loro manipolabili in vario modo
const obj = {
  city: 'Milan',
  street: 'Via Roma',
  civicNumber: 1,
}

// DOT NOTATION
obj.city // 'Milan'
// SQ NOTATION
obj['civicNumber'] // 1

let p = 'street'
obj.p // undefined
obj[p] // 'Via Roma'

obj.city = 'Trieste' // modifico proprietà
obj.region = 'FVG' // aggiungo proprietà

obj['street'] = 'Corso Italia' // modifico proprietà
obj['country'] = 'Italy' // aggiungo proprietà

// fate attenzione alla CLONAZIONE delle variabili
// c'è differenza su come JS tratta dati PRIMITIVI vs DATI COMPLESSI
let a = 10
let b = a // 10, crea una VERA COPIA di a
b = 5
console.log(a) // 10

// con gli oggetti, il discorso cambia
const objA = { value: 10 }
const objB = objA // NON È UNA VERA COPIA, È SOLO UN ALTRO NOME PER LO STESSO OGGETTO

objA.value = 5
console.log(objB.value) // 5!!! perchè objB non è mai stata una vera copia

const realACopy = { ...objA } // questa è una VERA COPIA di objA
const realACopy2 = Object.assign({}, objA) // questa è una VERA COPIA di objA

// CICLI
// un CICLO in programmazione è una maniera automatizzata per eseguire più volte
// un blocco di codice.
// DUE TIPI DI CICLI:
// a) ciclo capace di ri-eseguire un blocco di codice un numero PREDETERMINATO
// DI VOLTE (es. faccio questa cosa 10 volte)
// b) ciclo capace di ri-eseguire un blocco di codice un numero NON PREDETERMINATO
// DI VOLTE (es. batto questo chiodo finchè non entra)

// a) for
// b) while

for (let i = 0; i < 10; i++) {
  console.log('ciao')
}

for (let i = 10; i > 0; i--) {
  console.log('ciao decrementato')
}

for (let i = 0; i < 10; i = i + 5) {
  console.log('a 5 a 5')
}

// il ciclo for è utilissimo per ESPLORARE GLI ARRAY
const anotherPets = ['salamandra', 'coccodrillo', 'ragno']
// salamandra [0]
// coccodrillo [1]
// ragno [2] <-- length - 1

for (let i = 0; i < anotherPets.length; i++) {
  // i vale 0, 1 e 2
  // anotherPets[i] vale 'salamandra', 'coccodrillo', 'ragno'
  console.log(anotherPets[i])
}

// b)
// il ciclo while ogni tanto serve quando NON SI SA quante volte sarà necessario
// ripetere un'operazione al fine di ottenere il risultato desiderato
Math.random() * 6 // fornisce un numero tra 0.000006 e 5.999999
// se lo arrotondassi per eccesso.......
Math.ceil(Math.random() * 6) // da 1 a 6

let result = 0
let numeroDiLanci = 0
while (result !== 6) {
  numeroDiLanci++
  result = Math.ceil(Math.random() * 6)
  console.log('RISULTATO', result)
}

console.log('per fare 6 ho impiegato ' + numeroDiLanci + ' lanci')

// ARRAY ADVANCED
// alcuni moderni metodi degli array semplificano la loro esplorazione
// integrando dei cicli for "automatici"
const cities = ['trieste', 'modena', 'roma', 'venezia', 'napoli']

// forEach
for (let i = 0; i < cities.length; i++) {
  cities[i]
}

cities.forEach((città, i) => {
  // questa funzione verrà eseguita tante volte quanti sono gli elementi di cities
  console.log(città, i)
  let targa = città.slice(0, 2).toUpperCase() + '00' + i
  console.log(targa)
})

// map trasforma un array in un altro array di pari lunghezza
const cittàMaiuscole = cities.map((città) => {
  return città.toUpperCase()
})
// ['TRIESTE', 'MODENA', 'ROMA', 'VENEZIA', 'NAPOLI']

const citiesLengths = cities.map((città) => {
  return città.length
})
// [7, 6, 4, 7, 6]

const boh = cities.map((città) => {
  //
  console.log(città)
})
// [undefined, undefined, undefined, undefined, undefined]

// filter
const justModena = cities.filter((città) => {
  // entriamo 5 volte, e "città" ogni volta è una città diversa
  if (città === 'modena') {
    return true
  } else {
    return false
  }
  // versione PRO
  // return città === 'modena' || città === 'roma'
})
// ['modena']

const citiesOfSevenChars = cities.filter((città) => {
  if (città.length === 7) {
    return true
  } else {
    return false
  }
})
// ['trieste', 'venezia']

const citiesOfSevenCharsShortened = cities.filter((città) => {
  if (città.length === 7) {
    return true
  } else {
    return false
  }

  // versione PRO
  // return città.length === 7
})

// reduce
const citiesAsString = cities.reduce((acc, città) => {
  // entro sempre 5 volte qui dentro, ogni volta città è diversa
  return acc + ' ' + città
}, '')
console.log('STRING', citiesAsString)

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
]

const count = fruitBasket.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1
  return acc
}, {})
console.log(count)

// {
//   banana: 2,
//   cherry: 3,
//   orange: 3,
//   apple: 2,
//   fig: 1
// }

// LOGICA CONDIZIONALE
// if/else creano dei blocchi alternativi per il flusso del codice sulla base
// di una condizione. Se la condizione torna true, il blocco if verrà eseguito,
// altrimenti no. Opzionalmente è possibile concatenare al blocco if un blocco else
// che verrà eseguito solamente se il blocco if viene saltato (se la condizione
// invece che essere vera risulta false)

if (cities.includes('modena')) {
  console.log("modena esiste nell'array")
}

if (cities.includes('trapani')) {
  console.log("trapani esiste nell'array")
} else {
  console.log("trapani NON esiste nell'array")
}

// AND e OR
const hwIsFinished = true
const isGoodWeather = false

// TRUE && TRUE -> TRUE
// FALSE && TRUE -> FALSE
// TRUE && FALSE -> FALSE
// FALSE && FALSE -> FALSE

// AND && -> entrambe le parti devono essere VERE affinchè l'intera espressione sia VERA
if (hwIsFinished && isGoodWeather) {
  console.log('vado al mare!')
} else {
  console.log('oggi non vado al mare :(')
}

// OR || -> basta che UNA delle parti sia VERA affinchè l'intera espressione sia VERA
const haveEnoughMoney = false
const grandmaBuysIt = true

// TRUE || TRUE -> TRUE
// FALSE || TRUE -> TRUE
// TRUE || FALSE -> TRUE
// FALSE || FALSE -> FALSE

if (haveEnoughMoney || grandmaBuysIt) {
  console.log('OGGI PIZZA!!!')
} else {
  console.log('che sfiga, non ho soldi e la nonna è a casa :(')
}

// OGNI valore in JS può venire implicitamente convertito a booleano
// TRUTHY e FALSY

if (100) {
  // VALORE TRUTHY
  console.log('100 vale come true')
}

if ('') {
  console.log('null è un valore falsy')
}

// la regole dice: TUTTI i valori in JS sono truthy a parte:
// - false
// - null
// - undefined
// - ''
// - 0 e -0
// - NaN

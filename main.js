// tady je místo pro náš program

//const address = 'Pod Kaštany 31, 123 11 Horní Dlouhonosy'
/*
const adresa = {
  ulice: 'Pod Kaštany',
  cislo: 31,
  mesto: 'Horní Dlouhonosy',
  psc: '123 11'
}
*/

/* const address = {
  streetName: 'Pod Kaštany',
  number: 31,
  city: 'Horní Dlouhonosy',
  postalCode: '123 11',
}

// let vstupUzivatel = prompt("Zadej správné číslo domu:")
// address.number = Number(vstupUzivatel)

const user1 = {
  fullName: 'Lubomír Větvička',
  login: 'lubos',
  address: {
    streetName: 'Pod Kaštany',
    number: 31,
    city: 'Horní Dlouhonosy',
    postalCode: '123 11'
  },
  cartItems: 1
}

// DESTRUKTUROVÁNÍ

const product = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'Kč'
}

const {name, price, currency} = product */

/* ÚLOHA Č.1 */

const title = "Harry Potter"
title.length
title.toUpperCase()
title.slice(0, 5)
title.slice(title.length - 5, title.length)


/* ÚLOHA Č. 2 */

const email = prompt('Zadajte Váš email:')
const atIndex = email.indexOf('@')
const parsedEmail = {
	userName: email.slice(0, atIndex),
	domain: email.slice(atIndex + 1),
}

document.body.innerHTML = '<p>Užívateľské meno: ' + parsedEmail.userName + '</p>'
document.body.innerHTML += '<p>Doména: ' + parsedEmail.domain + '</p>'


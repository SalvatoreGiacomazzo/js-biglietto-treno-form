console.log('JS OK')

/*TO DO LIST
1. Raccolta degli elementi del DOM
2. Gestione degli eventi interattivi
3. Calcolo del prezzo del biglietto e se scontarlo
4. Inserimento del risultato all'interno del DOM
*/ 


//Fase di preparazione e raccolta elementi dal DOM
const nameUser = document.getElementById('name')
const kmUser = document.getElementById('kilometers')
const ageUser = document.getElementById('age')
const generateButton = document.getElementById('generate')

const ticketSection = document.getElementById('ticket-section')
const userNameDisplay = document.getElementById('name-display')
const ticketType = document.getElementById('ticket-type')
const userCarriage = document.getElementById('carriage')
const cpCode = document.getElementById('cp-code')
const ticketPrice = document.getElementById('ticket-price')


const button = document.getElementById('generate')
const resetButton = document.getElementById('reset')


//Eventi interattivi

generate.addEventListener('click', function (e){
    e.preventDefault() //fermare il refreshing alla pressione del bottone
  const nameValue = nameUser.value
  const kmValue = parseInt(kmUser.value)
  const ageValue = ageUser.value
  

  console.log('nameValue', nameValue)
  console.log('kmValue', kmValue)
  console.log('ageValue', ageValue)
 
//Prezzo
const priceKm = (0.21)

console.log('priceKm', priceKm)

let standardPrice = kmValue * priceKm
rateName = 'Biglietto Standard'
console.log('standardPrice', standardPrice)


//Sezione sconti
if (ageValue === 'junior'){
    let juniorPrice = standardPrice - ((20 / 100) * standardPrice)
    console.log('juniorPrice', juniorPrice)
    rateName = 'Offerta Minorenni'
    
   
    ticketPrice.innerText = `€${juniorPrice.toFixed(2)}`

} else {
    ticketPrice.innerText = `€${standardPrice.toFixed(2)}`
}

if (ageValue === 'senior'){
    let seniorPrice = standardPrice - ((40 / 100) * standardPrice)
    console.log('seniorPrice', seniorPrice)
    rateName = 'Offerta over65'

    ticketPrice.innerText = `€${seniorPrice.toFixed(2)}`
}

console.log(rateName)


//Codice CP e numero Carrozza
const carriageNumber = Math.floor(Math.random()* 9) +1
console.log('carriageNumber', carriageNumber)


const fiveDigitsCode = Math.floor(Math.random()*(99999 + 1 - 90000)+ 90000)
console.log('fiveDigitsCode', fiveDigitsCode)

//Inserire i dati nel biglietto
userNameDisplay.innerText= nameValue
ticketType.innerText= rateName
userCarriage.innerText= carriageNumber
cpCode.innerText= fiveDigitsCode
})
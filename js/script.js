const passNum = 21;

let firstName, lastName , colorFav;

firstName = prompt('Dimmi il tuo nome')
lastName = prompt('Dimmi il tuo cognome')
colorFav = prompt('Dimmi il tuo colore preferito')

document.getElementById('password').innerHTML = 
`
${firstName}${lastName}${colorFav}${passNum}
`
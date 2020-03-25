//CONTROLLO INSERIMENTO

console.log(' script.js è stato inserito correttamente. ');

// VARIBILI 

var name = prompt('Inserisci il tuo nome : ');
var surname = prompt('Inserisci il tuo cognome : ');
var favoriteColor = prompt('Inserisci il tuo colore preferito : ');
var password = name + surname + favoriteColor + '20';

// USER INFO 

document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('favoriteColor').innerHTML = favoriteColor;

// CONTROLO RICEZIONE DATI 

console.log(name);
console.log(surname);
console.log(favoriteColor);
console.log(password);

// PASSWORD GENERATOR 

document.getElementById('password').innerHTML = password;
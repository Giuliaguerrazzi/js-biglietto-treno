// nome
var nome = prompt('Inserisci il tuo nome');

document.getElementById('name').innerHTML = 'Benvenuto/a a ' + nome;

// age
var age = prompt('Quanti anni hai?');

document.getElementById('age').innerHTML = age;

// km
var distance = prompt('Quanti km devi percorrere?');

document.getElementById('km').innerHTML = distance;

// ticket
var priceTicket = distance * 0.21;

document.getElementById('priceTicket').innerHTML = priceTicket;

var sale20 = (priceTicket / 100) * 20;
var sale40 = (priceTicket / 100) * 40;

// sale
if (age < 18) {
  var finalTicket18 = priceTicket - sale20;
  document.getElementById('sconto20').innerHTML = 'su cui viene applicato uno sconto del 20%';
  document.getElementById('finalTicket18').innerHTML = finalTicket18;
}

if (age > 65) {
  var finalTicket65 = priceTicket - sale40;
  document.getElementById('sconto40').innerHTML = 'su cui viene applicato uno sconto del 40%';
  document.getElementById('finalTicket65').innerHTML = finalTicket65;
}

// nome
var nome = prompt('Inserisci il tuo nome');

document.getElementById('name').innerHTML = 'Salve ' + nome;

// age
var age = parseInt (prompt('Quanti anni hai?') );

document.getElementById('age').innerHTML = age;

// km
var distance = parseInt (prompt('Quanti km devi percorrere?') );

document.getElementById('km').innerHTML = distance;

// ticket
var priceTicket = distance * 0.21;
var n = priceTicket.toFixed(2);

document.getElementById('priceTicket').innerHTML = priceTicket.toFixed(2);

var sale20 = (priceTicket / 100) * 20;
var sale40 = (priceTicket / 100) * 40;

// sale
if (age <= 18) {
  var finalTicket18 = priceTicket - sale20;
  var n = finalTicket18.toFixed(2);
  document.getElementById('sconto20').innerHTML = 'su cui viene applicato uno sconto del 20% &#8364;';
  document.getElementById('finalTicket18').innerHTML = finalTicket18.toFixed(2);
}

if (age >= 65) {
  var finalTicket65 = priceTicket - sale40;
  var n = finalTicket65.toFixed(2);
  document.getElementById('sconto40').innerHTML = 'su cui viene applicato uno sconto del 40% &#8364;';
  document.getElementById('finalTicket65').innerHTML = finalTicket65.toFixed(2);
}

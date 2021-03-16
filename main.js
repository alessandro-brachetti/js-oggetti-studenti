$(document).ready(function(){
//Creare un oggetto che descriva uno studente con proprietà: nome, cognome e età
var studente = {
  nome: 'alessandro',
  cognome: 'brachetti',
  età: '28'
};

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto
var dati = "";

for (var key in studente) {
  dati += key + ": " + studente[key] + ' ';
}

$('#studente').text(dati);

//Creare un array di oggetti di studenti
var studenti = [
  {
    nome: 'alessandro',
    cognome: 'brachetti',
    età: '28',
  },
  {
    nome: 'paolo',
    cognome: 'rossi',
    età: '25',
  },
  {
    nome: 'giulia',
    cognome: 'bianchi',
    età: '25',
  },
  {
    nome: 'laura',
    cognome: 'verdi',
    età: '21',
  },
];

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome
var classe = [];

for (var i = 0; i < studenti.length; i++) {
  classe.push(studenti[i].nome + ' ' + studenti[i].cognome + ' ');
};

$('#classe').text(classe.join(''));

//Dare la possibilità all’utente, attraverso 3 input, di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età
$('#add').click(function(){
  var nome = $('#nome').val();
  var cognome = $('#cognome').val();
  var eta = $('#eta').val();

  var studente = {
    nome: nome,
    cognome: cognome,
    età: eta,
  };

  studenti.push(studente);

  console.log(studenti);
});

});

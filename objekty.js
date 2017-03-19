objekt instancja klassy
var obj = var object ()'funkcje w obiektach to metody'
literał var obj1 = ()
var obj = obj.prototype...
garbage colection odsmiecanie pamieci obj = gabl;?
obj.new =  'one'()
Literałyobjetków
export default Class

1. var car1 = {
manualFactory: "ford",
model: "modelT"
}
2. var car2;
car1.factormanual = 'fiat';
car1.model = 'modelT';
var arr = ['red', 'green', 'blue'];
console.log(arr[1]);
//literały wyrazeń regularnych
var numbers = (/ds/g)
var numbers2 = new RegExp(\ds\,'g');
//dostep do kluczy//
1.var array  = [];
array.push[123];
2.or array['push'](132);
var method = 'push';
array[method] (3435);
//Identifikowanie typow referencyjnych//
function add(a,b) {
  return a + b;
}
console.log(typeof.add);
//metoda instance of://
var item = [];
var obj = ();

console.log(item instanceof Array); //true
console.log(item instanceof Object); //true
console.log(obj instanceof Object); //true
console.log(obj instanceof Array); //false
console.log(add instanceof function); //true
console.log(add instanceof Object); //true

console.log(Array.isArray(item)); //nowa.metoda
//typy opakowujace//
//string,number,boolean//
var name= 'Paweł';
var firstCharakter = name.charAt(0);
console.log(firstCharakter); //wyswieli ilterke p//
//to co sie dzieje w tle//
var name = 'Marcin';
var temporary = newString(name1);
var firstCharakter1 = temporary.charAt(0);
temporary = nul1;
console.log(firstCharakter1); //wystwielka sie literka M//

var name = 'Grzesiek';
name.last = 'Kowalski';
console.log(name.last);//underfiled
//w temporaty.charAt (i tutaj mozna cos zrobic np. function...)//
var name = 'Zosia';
var temp = new String(name2);
temp.last = 'Kowalska';
temp = null;
var temp = new String(name2);
console.log(temp.last); //underfiled
temp = null;
//
var name3 = 'Genowefa';
var count = 10;
var found = false;
jezeli do zmiennne  przypisujemy stringa to typ prosty. wywoalnie mteody-charAt9O w tle js tymczasowo temporaty zrobi..
zniszczyobjekt, i powroci do typu prostego
console.log(name3 instanceof String); //false
console.log(count instanceof Number); //false
console.log(found instanceof Boolean); //false
//
var name4 = new String('Genowefa');
var count1 = new Number(10);
var found1 = new Boolean(false);

console.log(typeof name4); //
console.log(typeof count1);
console.log(typeof found1);
//
var founded = new Boolean(false);

if (founded) {
  console.log('I found a variable');
} else {
  console.log('I haven"t found a variable');
}
//sprawdza czy on istnieje wiec wyswietli 'I found a variable'
//
//funkcje -tez sa objektami i typami referencyjnymi
//wlasciwosc typu function[(Cell)]-objekt moze zostac wykonany
1. var function
2. function()
//deklaracja funkcji
var sum = add(3, 4);
console.log(sum);//wyswietli sie 7

function add(a,b) {
  return a + b;
};
//wyrazenie funkcji
var result = add(3, 4)
console.log(result); //blad
var add = function(a, b) {
  return a + b;
};

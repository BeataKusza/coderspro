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

//funcja jako wartosc
function sayHello() {
  console.log('Hi')
;}

sayHello();
var sayHallo2 = sayHallo;

//
var numbers = [1, 45, 2, 4, 6, 78, 11};
numbers.sort(funtion(a, b) {
  return (a + b);
});
console.log(numbers.sort);

var foo = numbers.sort(function (a, b) {
  return a - b;
});
console.log(foo);
//parametry funckcji//

function show(value) {
  return value;
}
//array.isArray(argument)- false
console.log(show('Hi'));
console.log(show('Hi', 34));
console.log(show.lenght);//arność funcji-lenght

show = function () {
  return arguments[0];
}

console.log(show('Hello')); //Hello
console.log(show('Hello', 45)); //'hello'
console.log(show.lenght); //0
--zwracanie sumy danej parametrow, ale nie wiemy jaka bedzie ilosc takich parametrow(wyzej)
function sum() {
  var result = 0;
  var len = argument.length;
  var i = 0;

while(i < len) {
  result ( += arguments[i]);
  i++;
}
return result;
}

console.log(sum(i,5)); //6
console.log(sum(4,5,7)); //16
console.log(sum(3)); //3
console.log(i); //0
//
over loading-przeciazenia
void funkcja (int);
void funkcja (int, char);

function message(mes) {
  console.log(mes);
}

function message() {
  console.log('Default');
}
message('Hello');
//dostaniemy Default, wyswietla ostatni parametr,kotry ptzypisalismy
==
var message = new Function('message', 'console.log(message)');
message = new Function ('console log('Default')');
message('Hello');
//
function message (message) {
  if(arguments.lenght === 0) {
    message = 'Default';
  }
  console.log(message);
}

console.log(message('Hello')); // wyswietli sie Hello
console.log(message()); // Default
//objekt this
var person = (
  name: 'Piotr',
  logName: function () {
    console.log(person.name)
  }
);

person.logName(); //dostaniemy Piotr
or console.log(this.name)
this.logName(); //kontekst wywolania funcji
..
function allSayHello() {
  controle.log(this.name)
}

var person1 = {
  name: 'Peter',
  sayHello: allSayHello
};
var person2 = {
  name: 'Karol',
  sayHello: allSayHello
};
var name = 'Kinga';
 console.log(person1.sayHello()); //Piot
 console.log(person2.sayHello()); //Karol
 controle.log(allSayHello()); //Kinga
//modyfikacja this
call()
function logName(arg) {
  console.log(arg + "i" + this.name);
}

var person1 = {
  name: 'Piter',
};

var person2 = {
  name: 'Michael',
};

var name = 'Michaelie';

logNameAll.cell(this.'global');//wywolywanie metody , wyswietli global: Michaelie
logNameAll.cell(person1,'person1'); //person1: Piter
logNameAll.cell(person2,'person2');//person2: Micheal
...

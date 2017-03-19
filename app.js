/*{
var foo = 4;
var bar = 'name';

console.log (bar + foo);
}

{
var foo = 6;
var bar = 'name';

console.log (bar + foo);
}
let x;
const b;
*/
// Proste
/*
boolean (true, false)
stirng 9char, litera, ciag znakow)
object
null (typ pusty)
underfiled (nieokreslony, nadawany automatycznie)
number (liczby calkowiete, zmiennoprzecinkowe)

wykrywanie typow zmiennych
var x = 4/true/null;
console.log(typeof x);
*/
/*
var x = 'blue';
var y = x;
console.log (y);
console.log (x);

x = 'green';
console.log (y);
console.log (x);
*/
/*
literał/pojekt
1.var x = new.Object;
2.lub var x = {
  foo: 4;
  bar: function (); {
  }
}
x.foo
3.x['foo']
*/
/*var obj1 = [
  foo: 6
];

var obj2 = obj1;
console.log (obj1);
console.log (obj2);
*/
/*typy referencyjne:
array-literał
date -konstukotr
error-konstrkotr
function
Object-literał
refexp-literał
*/
var array = new Array (1,2,3);
var foo= {
  name: 'John'
};
var array1 = [[1,2,3]1,2,3, foo];
console.log(array);
console.log(array1);

var numbers = new.function('volue', 'return value');
var numbers1 = function(value) {
  return value;
};

console.log(numbers);
console.log(numbers1);

/*
operatory
x = 4;
x = x + 1;
x = x - 1;
x = x * 1;
x = x / 1;
x += 1;
x -= 1;
x ++1;
x -- 1;
y *= y;
x /=y;
x%= y;
x = x+y;
operatory porównania
var x = 6;
x== y;  true
x ===y; false
 x != 8; true
 x !== 8; false
 logiczne &&
 ||
 !(x ==y)

 var a = 4;
 var b = 6;
 a == b ? console.log ('tak') : console.log('nie');
 wyswietli sie nie i slwo nieokreslony

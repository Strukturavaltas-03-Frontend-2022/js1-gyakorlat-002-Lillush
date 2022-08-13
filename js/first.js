/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

'use strict';

const numbers = [12, 22, 59, 68, 89];
// const brutto = numbers.map(item => [item * 1.27]);
// brutto.reduce((previousValue, currentValue) => previousValue + currentValue);
// Math.round();



const brutto = () => {(numbers.map(item => item * 1.27))}




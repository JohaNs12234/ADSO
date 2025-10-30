// /* 
// const edad = Number(prompt('Ingrese su edad:'));
// if (edad > 0 && edad < 12) {
//     console.log('Usted es un niño.');
// } else if (edad >= 12 && edad < 18) {
//     console.log('Usted es un adolescente.');
// } else if (edad >= 18 && edad < 55) {
//     console.log('Usted es un adulto.');
// } else if (edad >= 55) {
//     console.log('Usted es un adulto mayor.');
// }

// if ((edad > 0 && edad < 12) || (edad >= 55)) {
//     console.log('Usted recibio un subsidio.');
// }

// let canasta = ["manzana", "pera", "naranja", "uva"];
// for (i = 0; i < canasta.length; i++) {
//     console.log(canasta[i]);
// }
// const listaDeCompras = {
//  manzana: 5,
//  pera: 3,
//  naranja: 2,
//  uva:1,
// };
// for (fruta in listaDeCompras) {
//     console.log(fruta);
// }
// for (fruta in listaDeCompras) {
//     console.log(${fruta}: ${listaDeCompras[fruta]});
// }
// let contador = 0;
// while (contador < 10) {
//     console.log(contador);
//     contador++;
// }
// */
// /*
// function calculateDiscountedPrice(price, discountPresentage) {
//     const discount = (price * discountPresentage) / 100;
//     const priceWithDiscount = price - discount;

//     return priceWithDiscount;
// }

// const originalPrice = 100;
// const discountPresentage = 20;
// const finalPrice = calculateDiscountedPrice(originalPrice, discountPresentage);

// console.log(Original Price: $+ originalPrice );
// console.log(`Discount: `+ discountPresentage + %);
// console.log(Price with discount: $+ finalPrice );

// function a () {}
// function b (a) {}
// b(a)

// // retornar funciones//

// function a () {
// function b () {}
// return b
// }

// // asignar funciones a variables//

// const a = function () {}

// // Tener Propiedades y metodos//
// function a () {}
// const objeto = {}
// a.call(objeto)

// // Anidar funciones -> Nested functions//
// function a () {
//     function b () {
//       function c () {

//         }
//         c()
//     }
//     b()
// }
// a()
// */
// /* Es posible almacenar funciones en objetos//

// const rocket = {
//     name: 'Falcon 9',
//     launchMessage: function launchMessage () {
//         console.log(this.name);
//     }
// }
// rocket.launchMessage() 

// // Funciones Puras//

// // Side Effects//
// // 1. Modificar variables globales//
// // 2. Modificar parametros//
// // 3. Solicitar HTTP//
// // 4. Imprimir mensajes en pantalla de consola//
// // 5. Manipular el DOM//
// // 6. Obtener la fecha y hora actual//

// const greeting = function (name) {
//     return Hola1, ${name};
//     console.log(greeting);
// }

// const newGreeting = (name) => {
//     return Hola2, ${name};
//     console.log(newGreeting);
// }

// const newGreetingImplicit = name => Hola3, ${name};
// console.log(newGreetingImplicit ('Luis'));
// console.log(greeting('Juan'));
// console.log(newGreeting('Pedro'));

// */

// const fruits = Array('apple', 'banana', 'orange');
// console.log(fruits);
// console.log(fruits.length);
// const Array2 = Array(12);
// console.log(Array2)

// const number = Array(1,2,3,4,5,6,7,8,9,10);
// console.log(number);

// const oneNumber = [1, "two", 3, "four", 5];
// console.log(oneNumber);

// const emptyArray = [];
// console.log(emptyArray);

// const sports = ['soccer', 'basketball', 'tennis'];
// console.log(sports);

// const recipeIngredients = [
//     'flour',
//     true,
//     2,
//     {
//         ingredient: 'milk', quantity: '1 cup'
//     },
//     false
// ];
// console.log(recipeIngredients);

// const firstFruit = fruits[0];
// console.log(firstFruit);

// const numberOfFruits = fruits.length;
// console.log(numberOfFruits);

// fruits.push('watermelon');
// console.log(fruits);

// const newFruits = fruits.concat(['grape', 'kiwi']);
// console.log(fruits);
// console.log(newFruits);

// const isArray = Array.isArray(fruits);
// console.log(Array.isArray(fruits));

// const numbersArray = [1, 2, 3, 4, 5];
// let sum = 0;
// for  (let i = 0; i < numbersArray.length; i++){
//     sum += numbersArray[i];
// }
// console.log(sum);

//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//  const doubles = numbers.map(x => x * 2); // doubles es [2, 4, 6]
//     console.log(doubles);

// const filtered = numbers.filter(x => x > 1); // filtered es [2, 3]
// console.log(filtered);

// const joined = numbers.join('-'); // joined es "1-2-3"
// console.log(joined);

// const concatenated = numbers.concat([11, 12, 13]); // concatenated es [1, 2, 3, ..., 13]
// console.log(concatenated);

// const flattened = [[1, 2], [3, 4]].flat(); // flattened es [1, 2, 3, 4]
// console.log(flattened);

// const sliced = numbers.slice(2, 4); // sliced es [3, 4]
// console.log(sliced);
 
// const spliced = numbers.splice(2, 3); // spliced es [3, 4, 5], numbers es ahora [1, 2, 6, 7, 8, 9, 10]
// console.log(spliced);
// console.log(numbers);

// const popped = numbers.pop(); // popped es 10, numbers es ahora [1, 2, 6, 7, 8, 9]
// console.log(popped);
// console.log(numbers);

// const shifted = numbers.shift(); // shifted es 1, numbers es ahora [2, 6, 7, 8, 9]
// console.log(shifted);
// console.log(numbers);

// const sorted = numbers.sort((a, b) => a - b); // sorted es [2, 6, 7, 8, 9]
// console.log(sorted); 

// const reversed = numbers.reverse(); // reversed es [9, 8, 7, 6, 2]
// console.log(reversed);

// function compareNumbers(a, b) {
//     return a - b;
// }

// const filled = numbers.fill(0, 1, 3); // filled es [9, 0, 0, 6, 2]
// console.log(filled);

// const findResult = numbers.find(x => x > 5); // findResult es 6
// console.log(findResult);

// const index = numbers.findIndex(x => x > 5); // index es 3
// console.log(index);

// const some = numbers.some(x => x > 8); // some es true
// console.log(some);

// const every = numbers.every(x => x > 0); // every es true
// console.log(every);

// const includes = numbers.includes(6); // includes es true
// console.log(includes);

// const numbersReduce = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // numbersReduce es la suma de todos los elementos
// console.log(numbersReduce);
// console.log(sum);

// const carrito = [
//     ['producto1', 1000],
//     ['producto2', 2000],
//     ['producto3', 3000]
// ];
// const total = carrito.reduce((acc, item) => acc + item[1], 0);
// console.log("Total a pagar: $ " + total);

// const words = ['hello', 'world', 'this', 'is', 'JavaScript', 'reduce',];

// const wordFrequency = words.reduce((accumulator, currentValue) => {
//     if (accumulator[currentValue]) {
//         accumulator[currentValue]++;
//     } else {
//         accumulator[currentValue] = 1
//     }
//     return accumulator;
// }, {});
// console.log(wordFrequency);

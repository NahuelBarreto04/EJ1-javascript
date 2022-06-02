/* 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

👉 Crear una función que acepte ese array como parámetro.

Dentro de la función, debemos lograr lo siguiente:
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares".
👉 Hacer lo mismo con los impares, enviándolos al array "impares".
👉 Imprimir en consola: "Los ingredientes pares son: (ingredientes en array pares).
Los ingredientes impares son: (ingredientes en array impares)." */
let arrayIngredientsPizza = [
    "Salsa",
    "Queso",
    "Masa",
    "Sal",
    "Levadura",
    "Agua",
    "Tomate",
    "Cebolla",
    "Aceite",
    "Albahaca",
  ],
  ingredientLengthPair = [],
  ingredientLengthOdd = [];

let arrayLengthPairOrOdd = (arrayIngredientsPizza) => {
  for (let i = 0; i < arrayIngredientsPizza.length; i++) {
    if (arrayIngredientsPizza[i].length % 2 === 0) {
      ingredientLengthPair[ingredientLengthPair.length] =
        arrayIngredientsPizza[i];
      // ingredientLengthPair.push(arrayIngredientsPizza[i]);
    } else {
      ingredientLengthOdd[ingredientLengthOdd.length] =
        arrayIngredientsPizza[i];
      //   ingredientLengthOdd.push(arrayIngredientsPizza[i]);
    }
  }
};
arrayLengthPairOrOdd(arrayIngredientsPizza);
console.log(`Los ingredientes pares son: ${ingredientLengthPair.join(", ")}.`);
console.log(`Los ingrediente impares son: ${ingredientLengthOdd.join(", ")}.`);

// MISMO CASO HECHO CON OTROS METODOS

// -----Mismo caso con un forEach()

// arrayIngredientsPizza.forEach((ingredient) => {
//   if (ingredient.length % 2 === 0) {
//     ingredientLengthPair.push(ingredient);
//   } else {
//     ingredientLengthOdd.push(ingredient);
//   }
// });
// console.log(`Los ingredientes pares son: ${ingredientLengthPair.join(", ")}.`);
// console.log(`Los ingrediente impares son: ${ingredientLengthOdd.join(", ")}.`);

// -----Mismo caso hecho con filter()

// let pair = arrayIngredientsPizza.filter(
//   (ingredient) => ingredient.length % 2 === 0
// );
// console.log(pair);
// let odd = arrayIngredientsPizza.filter(
//   (ingredient) => ingredient.length % 2 !== 0
// );
// console.log(`Los ingredientes pares son: ${pair.join(", ")}`);
// console.log(`Los ingredientes impares son: ${odd.join(", ")}`);

// -------Mismo caso hecho con for in

// for (ingredient in arrayIngredientsPizza) {
//   if (arrayIngredientsPizza[ingredient].length % 2 === 0) {
//     ingredientLengthPair.push(arrayIngredientsPizza[ingredient]);
//   } else {
//     ingredientLengthOdd.push(arrayIngredientsPizza[ingredient]);
//   }
// }

// console.log(ingredientLengthPair);
// console.log(ingredientLengthOdd);

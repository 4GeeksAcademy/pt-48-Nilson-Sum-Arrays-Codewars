function sum (numbers) {
    "use strict";
    return numbers.reduce ((acumulador, valorActual) => acumulador + valorActual, 0);
};

const numbersList = [1, 5.2, 4 , 0, -1];
const result = sum (numbersList);
module.exports = sum;
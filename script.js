const numbers = [2, 4, 9, 10, 45, 67, 8, 90];

function filterNumbers(array, condition) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}


const evenNumbers = filterNumbers(numbers, num => num % 2 === 0);
console.log(evenNumbers); 


const greaterThanTen = filterNumbers(numbers, num => num > 10);
console.log(greaterThanTen); 
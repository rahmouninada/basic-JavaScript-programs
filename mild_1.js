/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 */
export function sumToString(a, b) {
    let string = a + ' + ' + b + ' = ' + (a+b)
    return string;
}

// Returns an increasing array from specified start number to end number:
export function getIncreasingArray(startNumber, endNumber) {
    var increasing = [];
    var index = 0;
    var length = endNumber - startNumber + 1;
    while (index < length) {
        increasing.push(startNumber);
        startNumber++;
        index++;
    }
    return increasing;
}

/**
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 */
export function maxAndMin(numbers) {
    var maxNum = (Math.max(...numbers));
    var minNum = (Math.min(...numbers));
    return {min: minNum, max: maxNum};
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    var count = {};
    for(var i = 0; i < array.length; i++) {
        if (count.hasOwnProperty(array[i])) {
            count[array[i]]++;
        } else {
            count[array[i]] = 1;
        }
    }
    return count;
}

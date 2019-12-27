// Identify the type and value of a variable:
export function identifyVariable(variable) {
    return {type: (typeof variable), value: variable};
}


/**
 *
 * @param array
 * @returns {[]}
 * example: identifyArray(['some', 3, [3, 4], false]);
 * returns: [
    { type: 'string', value: 'some' },
    { type: 'number', value: 3 },
    { type: 'object', value: [ 3, 4 ] },
    { type: 'boolean', value: false }
    ]
 */
export function identifyArray(array) {
    var idArray = [];
    for(var i = 0; i < array.length; i++) {
        var object = {};
        object['type'] = typeof array[i];
        object['value'] = array[i];
        idArray.push(object);
    }
    return idArray;
}

// Mutates the object passed in by removing the specified key:
export function removeKey(object, key) {
    delete object[key];
}

// Returns (copy of an) an object with its keys removed without mutating the object:
export function removeKeyNonDestructive(object, key) {
    let copy = Object.assign({}, object);
    delete copy[key];
    return copy;
}

// Remove and return (a copy of) the object with the specified keys removed without mutating the object passed in:
export function removeKeys(object, keyList) {
    let copy = Object.assign({}, object);
    for(var i = 0; i < keyList.length; i++) {
        delete copy[keyList[i]];
    }
    return copy;
}


// Function that calls a given function a specified number of times.
export const repeat = (fn, n, ...params) => {
    var array = [];
    var i = 0;
    while (i < n) {
        array.push(fn(...params));
        i++;
    }
    return array;
};

 // Uses the above repeat function to log the string "Hello,world!" to the console 10 times.
export const repeatDemo = () => {
    function fn (...params) {
        console.log("Hello, world!");
        return;
    }
    repeat(fn, 10, 0);
};

// Function that takes a number & returns a function that takes a different number and returns the product of the two numbers.
export const multiplyBy = (num1) => {
    return function (num2) { 
        return num1 * num2;
    }
};

// Uses above multiplyBy function to create and export a function that multiples a number by 10.
export const tenTimes = (num) => {
    var ten = multiplyBy(num); 
    return ten(10);
};

// Function that uses the above TenTimes function to multiply 50 by 10 and return the result.
export const tenTimesFifty = () => {
    var fifty = tenTimes(50);
    return fifty;
};



// Returns true if every even element in the given array passes the given test function.
export const everyEven = (arr, test) => {
    var filtered = arr.filter((obj => (arr.indexOf(obj) % 2 == 0) && test(obj)));

    if ((arr.length % 2) == 1) { // if arr's length is odd
        if (filtered.length == ((arr.length + 1)/ 2)) { // there must be length+1/2 items in filtered
            return true;
        }
    } else { // if arr's length is even
        if (filtered.length == (arr.length / 2)) { // there must be length/2 items in filtered
        return true;
        }
    }
    return false;
};

// Returns true if at least one even element in the given array passes the given test function.
export const someEven = (arr, test) => {
    var evens = [];

    arr.forEach(function(elt) { // puts all even-indexed elts into evens
        if ((arr.indexOf(elt) % 2) == 0) {
            evens.push(elt);
        }
      });
    return evens.some(test);
};

// Returns true if every odd element in the given array passes the given test.
export const filter = (arr, test) => {
    var obj = {pass: [], fail: []};
    
    var passed = arr.filter((obj => test(obj)));
    var failed = arr.filter((obj => !test(obj)));
    
    obj['pass'] = passed;
    obj['fail'] = failed;

    return obj;
 
};

// Returns true if all even elements in the array are odd numbers.
export const allEvensAreOdd = (arr) => {
   return everyEven(arr, x => (x % 2) == 1 );
};

// Returns true if at least one of the even elements in the array is an odd number.
export const anEvenIsOdd = (arr) => {
    return someEven(arr, x => (x % 2) == 1 );
};

// Returns true if exactly n elements in the given array pass the given test.
export const hasExactly = (arr, test, n) => {
    var obj = filter(arr, test);

    if (obj['pass'].length == n) {
        return true;
    }

    return false;
};

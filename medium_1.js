import {variance} from "/data/stats_helpers";

// Calculates the sum of an array of numbers:
export function getSum(array) {
    var sum = 0;
    var copy = array.slice();
    while(copy.length != 0) {
        sum = sum + copy.pop();
    }
    return sum;
}

// Calcultes the median of an array of numbers:
export function getMedian(array) {
    var copy = array.slice();
    var ordered = [];

    ordered = [...copy].sort((a, b) => a - b);
    while (ordered.length > 2) {
        ordered.pop()
        ordered.shift();
    }

    if (ordered.length == 1) {
        return ordered[0];
    } else {
        return (ordered[0] + ordered[1]) / 2;
    }
}

// Calculates statistics on an array of numbers:
export function getStatistics(array) {
    var stats = {};
    var a = array.slice();
    stats['length'] = a.length;
    stats['sum'] = getSum(a);
    var mean = getSum(a) / a.length;
    stats['mean'] = mean;
    stats['median'] = getMedian(a);
    stats['min'] = Math.min(...a);
    stats['max'] = Math.max(...a);
    var v = variance(a, (getSum(a) / a.length));
    stats['variance'] = v;
    stats['standard_deviation'] = Math.sqrt(v);

    return stats;
}


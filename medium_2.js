import { getStatistics, getSum } from "./medium_1";
import mpg_data from "/data/mpg_data";


// Obect that contains data about every car in the `mpg_data` object:
export const allCarStats = {
    avgMpg: avgMpg(mpg_data),
    allYearStats: allYearStats(mpg_data),
    ratioHybrids: ratioHybrids(mpg_data),
};

function allYearStats(array) {
    var y = [];

    for (var i = 0; i < array.length; i++) {
        y[i] = array[i]["year"];
    }

    return getStatistics(y);
}

function ratioHybrids(array) {
    var h = 0;
    var not = 0;

    for(var i = 0; i < array.length; i++) {
        if (array[i]["hybrid"]) {
            h = h + 1;
        } else {
            not = not + 1;
        }
    }
    return h/(h+not);
}


function avgMpg(array) {
    var city = [];
    var highway = [];
    
    for(var i = 0; i < array.length; i++) {
        city[i] = array[i]["city_mpg"];
    }

    for(var i = 0; i < array.length; i++) {
        highway[i] = array[i]["highway_mpg"];
    }

    var avgCity = (getSum(city) / city.length);
    var avgHighway = (getSum(highway) / highway.length);

    return {'city': avgCity, 'highway': avgHighway};
}


export const moreStats = {
    makerHybrids: makerHybrids(mpg_data),
    avgMpgByYearAndHybrid: avgMpgByYearAndHybrid(mpg_data),
};

/*
* Given an array of objects where keys are the `make` of the car and a list of `hybrids` available,
* sort by the number of hybrids in descending order.
* Return an object where keys are the `year` and the values are an object with `hybrid` and `notHybrid` keys.
*/
function makerHybrids(arr) {
    var toReturn = [];
    var makes = {};

    arr.forEach(elt => {
        if(!(elt.make in makes)) {
            makes[elt.make] = toReturn.length;
            toReturn[toReturn.length] = {};
            toReturn[makes[elt.make]].make = elt.make;
            toReturn[makes[elt.make]].hybrids = [];
            if (elt.hybrid){
                toReturn[makes[elt.make]].hybrids.push(elt['id']);
            }
        } else {
            if (elt.hybrid) {
                toReturn[makes[elt.make]].hybrids.push(elt['id']);
            }
        }
    });

    var newReturn = toReturn.filter(elt => { return elt.hybrids.length > 0 });
    return newReturn.sort((a, b) => {b.hybrids.length - a.hybrids.length});
}

function avgMpgByYearAndHybrid(obj) {
    var toReturn = {};
    var yrs = new Set();

    obj.forEach(elt => { yrs.add(elt.year)});

    var current = new Set();
    var yrsArray = [...yrs]; 
    var justHybrids;
    var notHybrids;

    yrsArray.forEach(elt => {
        toReturn[elt] = {};

        current = obj.filter(obj => { return obj.year === elt;});

        justHybrids = current.filter(obj => { return obj.hybrid});

        notHybrids = current.filter(obj => {return !obj.hybrid});

        toReturn[elt].hybrid = avgMpg(justHybrids);
        toReturn[elt].notHybrid = avgMpg(notHybrids);
    });

    return toReturn;
}
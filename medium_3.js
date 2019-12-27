
// Returns an array of car objects with >= minHorsePower and torque >= minTorque sorted by horsepower in descending order.

export function searchHighPower(car_data, minHorsepower, minTorque) {
    var cars = car_data.filter(obj => obj.horsepower >= minHorsepower && obj.torque >= minTorque);

    var sorted = cars.sort((a, b) => (a.horsepower > b.horsepower) ? -1 : 1);
    return sorted;
}

// Returns an array of car objects with highway_mpg >= minHighway and city_mpg >= minCity sorted by highway_mpg in descending order
export function searchMpg(car_data, minCity, minHighway) {
    var cars = car_data.filter(obj => obj.highway_mpg >= minHighway && obj.city_mpg >= minCity);
    var sorted = cars.sort((a, b) => (a.highway_mpg > b.highway_mpg) ? -1 : 1);

    return sorted;
}

/* 
 * Returns an array of cars where the `id` contains the specified search term below.
 * Results are sorted so that if the term appears earlier in the string, the car will appear earlier in the list.
 */
export function searchName(car_data, searchTerm) {
    searchTerm = searchTerm.toLowerCase();

    car_data.forEach(obj => {obj['id'] = obj['id'].toLowerCase()});

    var filtered = [];
    for (var i = 0; i < car_data.length; i++) {
        let s = String(car_data[i]['id']);
        if(s.includes(searchTerm)) {
            filtered.push(car_data[i]);
        }
    }

    var sorted = filtered.sort((a, b) => {(a.id.search(searchTerm) > b.id.search(searchTerm)) ? -1 : 1});
    return sorted;
}

// Returns array of all car objects mae in year asked for in ascending order.
export function searchByYear(car_data, years) {
    var yearFilter = car_data.filter(obj => years.includes(obj.year));
    var sorted = yearFilter.sort((a, b) => (a.year > b.year) ? -1 : 1);
    return sorted;
}

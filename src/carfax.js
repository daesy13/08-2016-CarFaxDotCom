var database = database.carDataBase
var carData = database.carData;
console.log(carData);
// your code here



//1. testing loop
var testArray = [1,2,3,4,5];

var addThree = function(array){
	var results = [];
	toolbelt.loop(array, function(element){
		results.push(element + 3);
	})
	return results;
};

// console.log(addThree(testArray));

//testing transform
var multByThree = function(array){
	return toolbelt.transform(array, function(element){
		return element * 3;
	})
};

// console.log(multByThree(testArray));


//2. creating priceParser
//target list will be an array with the current prices of each car
//input will be carData, which is an array of objects containing cars and their properties
var priceParser = function(array){
//loop through the carData array
	var priceList = [];
	toolbelt.loop(array, function(car){
		priceList.push(car.price);
	})
//output will be a new array with the current prices of each car
return priceList;
};

// console.log(priceParser(carData));


//3. creating yearParser
//target list will be an array with the year each car was created
//input will be carData, which is an array of objects containing cars and their properties
var yearParser = function(array){
//loop through the carData array
	var yearList = [];
	toolbelt.loop(array, function(car){
		yearList.push(car.year);
	})
//output will be a new array with the year each car was created
return yearList;
};

// console.log(yearParser(carData));


//4. averageAgeCalculator
var ageCalculator = function(array){
	return toolbelt.transform(array, function(car){
		return 2016 - car.year
	})
};

var ageList = ageCalculator(carData);

var averageAgeCalculator = function(array){
	var totalAge = 0
	toolbelt.loop(array, function(age){
		totalAge += age;
	})
	return totalAge / array.length;
};

// console.log(averageAgeCalculator(ageList));


//5. filterByColor
var filterByColor = function(array, color){
	var colorList = [];
	toolbelt.loop(array, function(car){
		if(car.color === color){
			colorList.push(car);
		}
	});
	return colorList;
}
//console.log(filterByColor(carData, 'blue'));


//6. Year Filters
var filterAboveYear = function(array, year){
	var aboveYearList = [];
	toolbelt.loop(array, function(car){
		if(car.year > year){
			aboveYearList.push(car);
		}
	});
	return aboveYearList;
}

//console.log(filterAboveYear(carData, 2000));

var filterBelowYear = function(array, year){
	var belowYearList = [];
	toolbelt.loop(array, function(car){
		if(car.year < year){
			belowYearList.push(car);
		}
	});
	return belowYearList;
}

//console.log(filterBelowYear(carData, 1999));

//7. filterBy
// var filter = function(){
// 	loop()
// }

// var filterBy = function(collection, callback){
// 	var results = [];
// 	toolbelt.loop(collection, function(element){
// 		if(){

// 		}

// 		})
// 	return results;
// };

// console.log


//8. pricingData
var carPrices = function(array){
	var carPriceList = [];
	toolbelt.loop(array, function(car){
		carPriceList.push(car.price)
	})
	return carPriceList;
};

var carPriceArr = carPrices(carData);

// console.log(carPrices(carData));

var pricingData = function(array){
	var totalPrice = 0;
	toolbelt.loop(array, function(price){
		totalPrice += price;		
	})
	return totalPrice / array.length;
};

console.log(pricingData(carPriceArr));

var mostExpensiveCar = function(array){
	var mostExpensive = array[0];
	toolbelt.loop(array, function(price){
		if(price > mostExpensive){
			mostExpensive = price;
		}
	})
	return mostExpensive
};

console.log(mostExpensiveCar(carPriceArr));

var leastExpensiveCar = function(array){
	var leastExpensive = array[0];
	toolbelt.loop(array, function(price){
		if(price < leastExpensive){
			leastExpensive = price;
		}
	})
	return leastExpensive
};

console.log(leastExpensiveCar(carPriceArr));



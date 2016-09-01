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

//5.
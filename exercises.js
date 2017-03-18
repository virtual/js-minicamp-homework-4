'use strict';

//Do not change any of the function names

function multiplyArguments() {
	//use the arguments keyword to multiply all of the arguments together and return the product
	//if no arguments are passed in return 0
	//if one argument is passed in just return it
  var args = Array.prototype.slice.call(arguments);  
	var sum = null;
	if (args.length > 0) {
		args.forEach(function(i){
		if (i === 0) {
			sum= 0;
		} else if (sum === null) {
			sum = i;
			}  else {
				sum = sum * i;
			}
		});
	} else {
		return 0;
	}
return sum;	
}

function invokeCallback(cb) {
	//invoke cb
	return cb();
}

function sumArray(numbers, cb) {
	//sum up all of the integers in the numbers array
	//pass the result to cb
	//no return is necessary
	var sum = numbers.reduce(function(sumval,i){
		return sumval += i;
	});
	cb(sum);
}

function forEach(arr, cb) {
	//iterate over arr and pass its values to cb one by one
	//hint: you will be invoking cb multiple times (once for each value in the array)
	arr.forEach(function(i){
		cb(i);
	});
}

function map(arr, cb) {
	//create a new array
	//iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
	//the new array should be the same length as the array argument
	var newArray = [];
	arr.map(function(val,i){
		newArray.push(cb(val));
	});
	return newArray;
}

function getUserConstructor() {
	//create a constructor called User
	//it should accept an options object with username, name, email, and password properties
	//in the constructor set the username, name, email, and password properties
	//the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
	//{{name}} should be the name set on each instance
	//return the constructor
	function User(options) {
		this.username = options.username;
		this.name = options.name;
		this.email = options.email;
		this.password = options.password;
	}
	User.prototype.sayHi = function() {
		return 'Hello, my name is ' + this.name;
	};

	return User;
}

function addPrototypeMethod(Constructor) {
	//add a method to the constructor's prototype
	//the method should be called 'sayHi' and should return the string 'Hello World!'
	Constructor.prototype.sayHi = function(){
		return 'Hello World!';
	};
	//return Constructor;
}

function addReverseString() {
	//add a method to the string constructor's prototype that returns a reversed copy of the string
	//name this method reverse
	//hint:
	//you will need to use 'this' inside of reverse
	String.prototype.reverse = function(){
		var str = '';
		for (var i = this.length; i >= 0; i-- ) {
      str += this.charAt(i);
    }
    return str;
	}; 
}

function nFactorial(n) {
	//return the factorial for n
	//solve this recursively
	//example:
	//the factorial of 3 is 6 (3 * 2 * 1)
	if (n <= 1) { return 1; } 
	return ((n) * nFactorial(n-1));
}

function cacheFunction(cb) {
	//Extra Credit
	//use closure to create a cache for the cb function
	//the function that you return should accept a single argument and invoke cb with that argument
	//when the function you return is invoked with an argument it should save that argument and its result
	//when the function you return is called again with an argument that it has seen before it should not call cb
	//but should instead directly returned the previous result
	//example:
	//cb -> function(x) { return x * x; }
	//if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
	//if the function you return is invoked again with 5 it will look on an object in the closure scope
	//and return 25 directly and will not invoke cb again
	var cache = {};
	
	return function() {
		var arg = Array.prototype.slice.apply(arguments, [0]);
		if (cache.hasOwnProperty(arg)) {
			return cache[arg];
		} else {
			cache[arg] = cb(arg);
			return cache[arg];
		}
	};
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
	multiplyArguments: multiplyArguments,
	invokeCallback: invokeCallback,
	sumArray: sumArray,
	forEach: forEach,
	map: map,
	getUserConstructor: getUserConstructor,
	addPrototypeMethod: addPrototypeMethod,
	addReverseString: addReverseString,
	nFactorial: nFactorial,
	cacheFunction: cacheFunction
};

/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	if (string === undefined) {
		return "missing argument";
	} else if (typeof string !== "string") {
		return "argument not string";
	}
	let result = "";
	let length = string.length;
	for (let i = 1; i < length; i+=2) {
		result += string[i];
	}
	return result;
}

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	function f(a, b) {
		if (b > 0) {
			return a + b;
		} else {
			return a;
		}
	}
	return array.reduce(f, 0);
}


function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

function makePositive(array) {
	function f (n) {
		if (typeof n === "number") {
			if (n < 0) {
				n = -n;
			}				
		}
			
		return n;
	}
	
	return array.map(f);
	
}
function removeZerosAlt(array) {
  let arr = [];
  for (let each of array) {
    if (each !== 0) arr.push(each);
    else {
      if (arr[arr.length - 1] !== "*") {
		  arr.push("*");
	  }
    }
  }
  return arr;
}

function removeZeros(array) {
		let start = 0, length = 0;
		for (let i=0; i<array.length; i++) {
			if (array[i] === 0) {		// loop to find adjacent zeros
				start = i++;			// start of sequence of zeros
				length = 1;				// this will be how many zeros to delete
				while (i < array.length && array[i] === 0) {	// loop until non-zero hit.
					i++;
					length++;
				}
				array.splice(start, length, "*");		// replace the sequence of zeros with an "*"
				i = start;				// will be index of "*" (i will be incremented when loop continues
				length = 0;				// begin search for zeroes at the beginning of the modified array.
			}
		}

	
	return array;
}

function bench(f) {
  let date1 = new Date(0);
  let start = Date.now();
  for (let i = 0; i < 100000; i++) f([5, 0, 0, 0, 4, 5, 0, 0, 3, 0]);
  return Date.now() - start;
}

function compare() {
	console.log( 'Time of removeZerosAlt: ' + bench(removeZerosAlt) + 'ms' );
	console.log( 'Time of removeZeros: ' + bench(removeZeros) + 'ms' );
}




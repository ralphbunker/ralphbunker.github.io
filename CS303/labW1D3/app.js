/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties
}	
*/
function analyzer() {
	let numProperties = 0;
	let cntShortName = 0;
	let cntReference = 0;
	for (let pname in this) {
		numProperties++;
		if (pname.length < 3) {
			cntShortName++;
		}
		if (typeof this[pname] === "object") {
			cntReference++;
		}
	}
	
	return {numProperties, cntShortName, cntReference};
}

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name = name;
	this.country = country;
	this.grades = grades;
	this.computeGrade = function() {
		let sum = 0;
		for (let grade of grades) {
			sum += grade;
		}
		return sum / grades.length;
	}
}

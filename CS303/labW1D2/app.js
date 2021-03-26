/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function nameString(obj) {
	if (obj === null) {
		return "null argument";
	}
	
	if (obj === undefined) {
		return "no object passed";
	}
	let properties = [];
	for (let property in obj) {
		properties.push(property);
	}
	
	if (properties.length === 0) {
		return "object has no properties";
	}

	properties.sort();
	let buffer = "";
	let length = properties.length;
	for (let i=0; i<length; i++) {
		if (buffer.length != 0) {
			buffer += ".";
		}
		buffer += properties[i];
	}
	
	return buffer;
}

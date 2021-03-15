/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
"use strict";

function mochaTests() {
    describe("pow", function () {
        it("raises to n-th power", function () {
            assert.equal(pow(2, 3), 8);
        });
    });

    describe("add2", function (...args) {
        it("add two numbers", function () {
            assert.equal(add(1, 2, 3), 6);
        });
    });

    describe("add", function (...args) {
        it("add variable number of arguments", function () {
            assert.equal(add(1, 2, 3), 6);
        });
    });

    describe("add", function (...args) {
        it("add variable number of arguments", function () {
            assert.equal(add(), 0);
        });
    });
}

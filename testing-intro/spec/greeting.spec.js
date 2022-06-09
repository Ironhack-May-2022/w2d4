// this imports the greeting function

const greeting = require('../src/greeting')
// terminology:
// a test suite
describe('The function greeting', function () {
	// spec - specification
	it('should be a function', function () {
		// expectation - using a matcher
		expect(typeof greeting).toBe('function')
	});
	it('should return a greeting', function () {
		expect(greeting()).toEqual('hello ironhackers!')
	})
})
const Chuck = require('../src/Chuck')

describe('Chuck', function () {
	let chuck;
	const joke = 'Chuck Norris can divide by zero'
	// this mocks Math.random()	
	const mockMath = Object.create(global.Math)
	mockMath.random = function () {
		return 0.5
	}
	global.Math = mockMath
	beforeEach(function () {
		// here you can prepare a setup that runs 
		// before every test
		chuck = new Chuck()
	})
	describe('add joke method', function () {
		it('should add a joke', function () {
			chuck.addJoke(joke)
			expect(chuck.jokes).toContain(joke)
		})
	})
	describe('get random joke method', function () {
		it('(Math.random) always returns 0.5', function () {
			expect(Math.random()).toEqual(0.5)
		})
		it('should return a random joke', function () {
			expect(chuck.getRandomJoke()).toEqual('Chuck Norris is the only man to ever defeat a brick wall in a game of tennis');
		});
	})
})
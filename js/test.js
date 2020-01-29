let recive = require('../js/logic.js');



describe('Testing if object push  product array', () => {
	test('Should return length of array + 1 when push object', () => {
		var actual = recive.addProduct(["1"], "2");
		var expected = 2;
		expect(actual.length).toBe(expected);
	});
})

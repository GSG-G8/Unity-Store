let recive = require('../js/logic.js');



describe('Testing if object push  product array', () => {
	test('Should return length of array + 1 when push object', () => {
		var actual = recive.addProduct(["1"], "2");
		var expected = 2;
		expect(actual.length).toBe(expected);
	});

	test('Should return type of element', () => {
		var actual = recive.product();
		var expected = "object";
		expect(typeof actual).toBe(expected);
	});
})

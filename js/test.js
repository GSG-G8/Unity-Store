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

	test('Test if the function remove elements or not', () => {
		var actual = recive.removeProduct(['1','2','3'], 3);
		var expected = "3"
		expect(actual).toContain(expected);
	});
	
	test('Test if the function search products or not', () => {
		var actual = recive.searchProduct([{title: "black", price:33}, {title: "white", price:44}], "black");
		var expected = [{title: "black", price:33}];
		expect(actual).toBe(expected);
	});

})

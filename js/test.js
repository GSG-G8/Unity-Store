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


	test('Test the search function', () => {
		var actual = recive.searchProduct([
			{ id: 1, title: "black" },
			{ id: 2, title: "watch" },
			{ id: 3, title: "perfume" }
		], "black");
		var expected = [{ id: 1, title: "black" }];
		expect(actual).toEqual(expected);
	});

	test('Test the search function', () => {
		var actual = recive.searchProduct([
			{ id: 1, title: "black" },
			{ id: 2, title: "watch" },
			{ id: 3, title: "perfume" }
		], "BLACK");
		var expected = [{ id: 1, title: "black" }];
		expect(actual).toEqual(expected);
	});
	test('Test the search function', () => {
		var actual = recive.searchProduct([
			{ id: 1, title: "black" },
			{ id: 2, title: "watch" },
			{ id: 3, title: "perfume" }
		], "BLAck");
		var expected = [{ id: 1, title: "black" }];
		expect(actual).toEqual(expected);
	});
	test('Test the search function', () => {
		var actual = recive.searchProduct([
			{ id: 1, title: "black" },
			{ id: 2, title: "watch" },
			{ id: 3, title: "perfume" }
		], "");
		var expected = [
			{ id: 1, title: "black" },
			{ id: 2, title: "watch" },
			{ id: 3, title: "perfume" }
		];
		expect(actual).toEqual(expected);
	});

})

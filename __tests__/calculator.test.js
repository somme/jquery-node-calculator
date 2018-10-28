var $ = require('jquery');
global.$ = global.jQuery = $;
var module = require('../public/javascripts/calculator');

describe('caluclator', function () {

	document.body.innerHTML =
	'<input class="display" disabled>' +
	'<button class="operators">+</button>' +
	'<button class="operators">-</button>' +
	'<button class="operators">/</button>' +
	'<button class="operators">*</button>' +
	'<button class="digits">0</button>' +
	'<button class="digits">1</button>' +
	'<button class="digits">2</button>' +
	'<button class="digits">3</button>' +
	'<button class="digits">4</button>' +
	'<button class="digits">5</button>' +
	'<button class="digits">6</button>' +
	'<button class="digits">7</button>' +
	'<button class="digits">8</button>' +
	'<button class="digits">9</button>' +
	'<button class="digits">.</button>' +
	'<button class="clear">C</button>' +
	'<button class="equals">=</button>';

	module.calculator.init();

	test('calculate (3 + 9.4) = 12.4', () => {
		$('button:contains("3")').click();
		$('button:contains("+")').click();
		$('button:contains("9")').click();
		$('button:contains(".")').click();
		$('button:contains("4")').click();
		$('button:contains("=")').click();
		expect($('.display').val()).toEqual('12.4')
  	});

	test('calculate (5 x 5) = 25', () => {
		$('button:contains("5")').click();
		$('button:contains("*")').click();
		$('button:contains("5")').click();
		$('button:contains("=")').click();
		expect($('.display').val()).toEqual('25')
	});

	test('calculate (10 - 5) = 5', () => {
		$('button:contains("1")').click();
		$('button:contains("0")').click();
		$('button:contains("-")').click();
		$('button:contains("5")').click();
		$('button:contains("=")').click();
		expect($('.display').val()).toEqual('5')
	});

	test('calculate (300 / 6) = 50', () => {
		$('button:contains("3")').click();
		$('button:contains("0")').click();
		$('button:contains("0")').click();
		$('button:contains("/")').click();
		$('button:contains("6")').click();
		$('button:contains("=")').click();
		expect($('.display').val()).toEqual('50')
	});

	test('calculate (123 + 456) - (5 * 12) / (2.5) = 207.6', () => {
		$('button:contains("1")').click();
		$('button:contains("2")').click();
		$('button:contains("3")').click();
		$('button:contains("+")').click();
		$('button:contains("4")').click();
		$('button:contains("5")').click();
		$('button:contains("6")').click();
		$('button:contains("=")').click();
		$('button:contains("-")').click();
		$('button:contains("5")').click();
		$('button:contains("*")').click();
		$('button:contains("1")').click();
		$('button:contains("2")').click();
		$('button:contains("=")').click();
		$('button:contains("/")').click();
		$('button:contains("2")').click();
		$('button:contains(".")').click();
		$('button:contains("5")').click();
		$('button:contains("=")').click();
		expect($('.display').val()).toEqual('207.6')
	});

	test('click on 3 then C should clear', () => {
		$('button:contains("3")').click();
		$('button:contains("C")').click();
		expect($('.display').val()).toEqual('')
	});
});

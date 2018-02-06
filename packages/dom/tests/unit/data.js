/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Data', function (assert) {
	var
		testDiv = newElement('div', 1),
		testDivFirstData = '1',
		testDivSecondData = 2,
		testDivThirdData = 'three';

	testDiv = document.find('.el-1')
		.data({
			first: testDivFirstData,
			second: testDivSecondData
		})
		.data('third', testDivThirdData);

	assert.equal(testDiv.data('first'), testDivFirstData);
	assert.equal(testDiv.data('second'), testDivSecondData);
	assert.equal(testDiv.data('third'), testDivThirdData);

});

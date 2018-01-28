/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Remove data', function (assert) {
	var
		testDiv,
		testDivFirstData = '1',
		testDivSecondData = 2,
		testDivThirdData = 'three';

	newElement('div', 1);

	testDiv = document.find('.el-1')
		.data({
			first: testDivFirstData,
			second: testDivSecondData
		})
		.data('third', testDivThirdData);

	assert.equal(testDiv.data('first'), testDivFirstData);
	assert.equal(testDiv.data('second'), testDivSecondData);
	assert.equal(testDiv.data('third'), testDivThirdData);

	testDiv.removeData('first second third');

	assert.notOk(testDiv.data('first'));
	assert.notOk(testDiv.data('second'));
	assert.notOk(testDiv.data('third'));

});

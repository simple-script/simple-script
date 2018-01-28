/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Eq', function (assert) {
	var testArray = [1, 2, 3];
	assert.equal(testArray.eq(0), 1);
	assert.equal(testArray.eq(1), 2);
	assert.equal(testArray.eq(2), 3);
	assert.equal(testArray.eq(0, true), 3);
	assert.equal(testArray.eq(1, true), 2);
	assert.equal(testArray.eq(2, true), 1);

	var testObject = {
		first: 1,
		second: 2,
		third: 3
	};
	assert.equal(testObject.eq(0), 1);
	assert.equal(testObject.eq(1), 2);
	assert.equal(testObject.eq(2), 3);
	assert.equal(testObject.eq(0, true), 3);
	assert.equal(testObject.eq(1, true), 2);
	assert.equal(testObject.eq(2, true), 1);

	newElement('div', 3);
	var elements = getWorkspace().find('div');
	assert.ok(elements.eq(0).hasClass('el-1'));
	assert.ok(elements.eq(1).hasClass('el-2'));
	assert.ok(elements.eq(2).hasClass('el-3'));
	assert.ok(elements.eq(0, true).hasClass('el-3'));
	assert.ok(elements.eq(1, true).hasClass('el-2'));
	assert.ok(elements.eq(2, true).hasClass('el-1'));
});

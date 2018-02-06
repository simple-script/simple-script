/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('First', function (assert) {
	var testArray = [1, 2, 3];
	assert.equal(testArray.first(), 1);

	var testObject = {
		itemA: 1,
		itemB: 2,
		item3: 3
	};
	assert.equal(testObject.first(), 1);

	newElement('div', 3);
	assert.ok(getWorkspace().find('div').first().hasClass('el-1'));
});

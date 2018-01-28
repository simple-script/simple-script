/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Is', function (assert) {
	newElement('div', 3);
	var elements = getWorkspace().find('div');
	assert.ok(elements.eq(0).is('.el-1'));
	assert.ok(elements.eq(1).is('.el-2'));
	assert.ok(elements.eq(2).is('.el-3'));
});

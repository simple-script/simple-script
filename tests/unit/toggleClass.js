/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Toggle class', function (assert) {
	newElement('div', 2);

	var element = getWorkspace().find('div');

	assert.notOk(element.hasClass('testA'));
	assert.notOk(element.hasClass('testB'));

	element.toggleClass('testA testB');

	assert.ok(element.hasClass('testA'));
	assert.ok(element.hasClass('testB'));
});

/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

QUnit.test('Remove', function (assert) {
	newElement('div', 3);

	var elements =  getWorkspace().find('div');
	assert.equal(elements.length, 3);

	elements.remove();
	assert.equal(getWorkspace().find('div').length, 0);
});

/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Offset', function (assert) {
	var element = newElement('button');

	getWorkspace().html(element.outerHTML);
	assert.ok(getWorkspace().find('button').offset() instanceof DOMRect);
});

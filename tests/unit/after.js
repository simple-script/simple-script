/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

QUnit.test('After', function (assert) {
	var
		firstDiv = newElement('div').addClass('first'),
		secondDiv = newElement('div').addClass('second');

	getWorkspace().html(firstDiv.outerHTML);
	firstDiv = document.find('.first').after(secondDiv.outerHTML);
	assert.ok(firstDiv.next().hasClass('second'))
});

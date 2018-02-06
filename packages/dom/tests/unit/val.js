/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Val', function (assert) {
	var
		testText = 'Test text',
		input = newElement('input');

	getWorkspace().html(input.outerHTML);
	getWorkspace().find('input').val(testText);

	assert.equal(getWorkspace().find('input').val(), testText);
});

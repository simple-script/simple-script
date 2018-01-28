/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Text', function (assert) {
	var
		text = 'Hello World!',
		element = newElement('div').text(text);
	getWorkspace().html(element.outerHTML);
	element = getWorkspace().find('div');

	assert.ok(element.children().first() instanceof Text);
	assert.equal(element.text(), text);
});

/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Children', function (assert) {
	var element = newElement('div').addClass('wrapper');

	getWorkspace().html(element.outerHTML);
	element = getWorkspace().find('.wrapper').html(document.createElement('div').addClass('inner').outerHTML);
	assert.ok(element.children() instanceof NodeList);
	assert.ok(element.children().first().hasClass('inner'));
});

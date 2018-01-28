/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Wrap', function (assert) {
	var wrapper = newElement('div').addClass('wrapper');
	getWorkspace().html(newElement('div').addClass('test').outerHTML);

	var element = getWorkspace().find('.test');
	assert.notOk(element.parent().hasClass('wrapper'));

	element.wrap(wrapper);
	element = getWorkspace().find('.test');
	assert.ok(element.parent().hasClass('wrapper'))
});

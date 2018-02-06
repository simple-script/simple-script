/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Wrap inner', function (assert) {
	var wrapper = newElement('div').addClass('wrapper');
	getWorkspace().html(newElement('div').addClass('test').outerHTML);

	getWorkspace().find('.test').html(document.createElement('div').addClass('inner').outerHTML);
	var element = getWorkspace().find('.test');
	assert.notOk(element.children().first().hasClass('wrapper'));

	element.wrapInner(wrapper);

	assert.ok(element.children().first().hasClass('wrapper'));
	assert.ok(element.find('inner').parent().hasClass('wrapper'));
});

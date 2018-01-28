/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Remove class', function (assert) {
	var element = newElement('div').addClass('testA testB');

	assert.ok(element.hasClass('testA'));
	assert.ok(element.hasClass('testB'));

	getWorkspace().html(element.outerHTML);
	var testElement = document.find('.testA');

	assert.ok(testElement.hasClass('testB'));
	testElement.removeClass('testA testB');

	assert.notOk(testElement.hasClass('testA'));
	assert.notOk(testElement.hasClass('testB'));
});

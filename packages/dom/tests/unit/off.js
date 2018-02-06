/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Off', function (assert) {
	var element = newElement('button').addClass('clickMe').on('click', addTestClass);

	getWorkspace().html(element.outerHTML);
	element = getWorkspace().find('.clickMe');
	assert.notOk(element.hasClass('clicked'));
	element.first().click();
	assert.ok(getWorkspace().find('div').hasClass('clicked'));

	element.removeClass('clicked');
	assert.notOk(element.hasClass('clicked'));
	element.off('click', addTestClass);
	element.first().click();
	assert.notOk(element.hasClass('clicked'));

	function addTestClass() {
		this.addClass('clicked');
	}
});

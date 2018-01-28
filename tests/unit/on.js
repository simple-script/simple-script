/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('On', function (assert) {
	var element = newElement('button').addClass('clickMe').on('click', function () {
		this.addClass('testClass');
	});

	getWorkspace().html(element.outerHTML);
	element = getWorkspace().find('.clickMe');
	assert.notOk(element.hasClass('testClass'));
	element.first().click();
	assert.ok(getWorkspace().find('div').hasClass('testClass'));


	getWorkspace().html(element.clone().outerHTML);
	element.first().click();
	assert.notOk(getWorkspace().find('.clickMe').hasClass('clicked'));

	element = newElement('button').addClass('clickMe');

	getWorkspace().html(element.outerHTML);

	document.find('.clickMe').on('click', function () {
		this.addClass('clicked');
	});

	element = getWorkspace().find('.clickMe');
	assert.notOk(element.hasClass('clicked'));
	element.first().click();
	assert.ok(getWorkspace().find('.clickMe').hasClass('clicked'));

	element.removeClass('clicked');
	getWorkspace().html(element.clone().outerHTML);

	element = getWorkspace().find('.clickMe');
	assert.notOk(element.hasClass('clicked'));
	element.first().click();
	assert.ok(getWorkspace().find('clickMe').hasClass('clicked'));
});

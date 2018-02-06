/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Attr', function (assert) {
	var testDiv = newElement('div')
		.attr({
			id: "testDiv",
			class: "classA classB"
		})
		.attr('data-number', 123);

	getWorkspace().html(testDiv.outerHTML);
	testDiv = document.find('#testDiv');
	assert.ok(testDiv.hasClass('classA'));
	assert.ok(testDiv.hasClass('classB'));
	assert.equal(testDiv.attr('data-number'), 123);
});

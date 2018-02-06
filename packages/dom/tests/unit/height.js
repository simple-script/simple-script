/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Height', function (assert) {
	var element = newElement('div').css({
		height: '200px',
		'border-top': '1px solid',
		'border-bottom': '1px solid',
		'padding-top': '10px',
		'padding-bottom': '10px',
		'margin-top': '10px',
		'margin-bottom': '10px'
	});

	getWorkspace().html(element.outerHTML);
	element = getWorkspace().find('div');
	assert.equal(element.height(), 200);

	element.height('100px');
	assert.ok(element.height(), 100);
});

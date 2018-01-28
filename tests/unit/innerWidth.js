/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Inner width', function (assert) {
	var element = newElement('div').css({
		width: '200px',
		'border-left': '1px solid',
		'border-right': '1px solid',
		'padding-left': '10px',
		'padding-right': '10px',
		'margin-left': '10px',
		'margin-right': '10px'
	});

	getWorkspace().html(element.outerHTML);
	element = getWorkspace().find('div');

	assert.equal(element.innerWidth(), 220);
	element.width('100px');
	assert.ok(element.innerWidth(), 120);
});

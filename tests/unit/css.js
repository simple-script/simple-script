/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Css', function (assert) {
	var
		testDiv = newElement('div').addClass('testDiv').text('Hello World!'),
		testDivColor = 'steelblue',
		testDivFontSize = '14px',
		testDivFontWeight = 'bold';

	getWorkspace().html(testDiv.outerHTML);
	testDiv = document.find('.testDiv')
		.css({
			color: testDivColor,
			'font-size': testDivFontSize,
		})
		.css('font-weight', testDivFontWeight);

	assert.equal(testDiv.css('color'), testDivColor);
	assert.equal(testDiv.css('font-size'), testDivFontSize);
	assert.equal(testDiv.css('font-weight'), testDivFontWeight);

});

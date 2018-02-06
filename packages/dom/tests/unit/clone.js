/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Clone', function (assert) {
	var testDiv = newElement('div').addClass('testDiv');

	getWorkspace().append(testDiv).append(testDiv);
	getWorkspace().append(document.find('.testDiv').clone().addClass('cloned'));

	//getWorkspace().append(clonedDiv.addClass('tu'));
	var clonedDiv = document.find('.testDiv.cloned');
	assert.ok(clonedDiv instanceof NodeList);
	assert.ok(clonedDiv.length === 1);
});

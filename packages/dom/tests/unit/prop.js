/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Prop', function (assert) {
	var element = newElement('input').attr({
		type: 'checkbox'
	});

	getWorkspace().html(element.outerHTML);
	element = getWorkspace().find('input');
	assert.notOk(element.prop('checked'));
	element.first().click();
	assert.ok(element.prop('checked'));

	assert.notOk(element.prop('disabled'));
	element.prop('disabled', true);
	assert.ok(getWorkspace().find('input').prop('disabled'));

	function testPlugin()
	{
		this.addClass('testPluginClass').css('width', '200px').data('plugin', 'testPlugin');
	}

	function secondTestPlugin()
	{
		this.addClass('anotherClass').css('width', '300px').data('label', 'Some label');
	}
	getWorkspace().html('');

	newElement('div', 2);
	getWorkspace().find('div').prop(testPlugin).prop(secondTestPlugin);
	var
		firstDiv = getTestElement(1),
		secondDiv = getTestElement(2);

	assert.ok(firstDiv.hasClass('testPluginClass'));
	assert.ok(firstDiv.hasClass('anotherClass'));
	assert.equal(firstDiv.css('width'), '300px');
	assert.equal(firstDiv.data('plugin'), 'testPlugin');
	assert.equal(firstDiv.data('label'), 'Some label');

	assert.ok(secondDiv.hasClass('testPluginClass'));
	assert.ok(secondDiv.hasClass('anotherClass'));
	assert.equal(secondDiv.css('width'), '300px');
	assert.equal(secondDiv.data('plugin'), 'testPlugin');
	assert.equal(secondDiv.data('label'), 'Some label');

});

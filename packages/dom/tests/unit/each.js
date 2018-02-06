/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Each', function (assert) {
	[1, 2, 3].each(function (key, value, iterator) {
		key = parseInt(key);

		if (key === 0) {
			assert.ok(iterator.isFirst);
			assert.ok(iterator.isOdd);
			assert.notOk(iterator.isEven);
			assert.notOk(iterator.isLast);
			assert.equal(value, 1);

		} else if (key === 1) {
			assert.notOk(iterator.isFirst);
			assert.notOk(iterator.isOdd);
			assert.ok(iterator.isEven);
			assert.equal(value, 2);

		} else if (key === 2) {
			assert.ok(iterator.isLast);
			assert.equal(value, 3);
		}
	});

	var firstArrayValue = [1, 2, 3].each(function (key, value, iterator) {
		if (iterator.isFirst) {
			return value;
		}
	});

	assert.ok(firstArrayValue === 1);

	var testObject = {
		first: 1,
		second: 2,
		third: 3
	};

	testObject.each(function (key, value, iterator) {
		if (key === 'first') {
			assert.ok(iterator.isFirst);
			assert.ok(iterator.isOdd);
			assert.notOk(iterator.isEven);
			assert.notOk(iterator.isLast);
			assert.equal(value, 1);

		} else if (key === 'second') {
			assert.notOk(iterator.isFirst);
			assert.notOk(iterator.isOdd);
			assert.ok(iterator.isEven);
			assert.equal(value, 2);

		} else if (key === 'third') {
			assert.ok(iterator.isLast);
			assert.equal(value, 3);
		}
	});

	newElement('div', 3);
	var testElements = getWorkspace().find('div');

	testElements.each(function (key, iterator) {
		key = parseInt(key);
		var element = this.addClass('div-' + key);

		if (key === 0) {
			assert.ok(iterator.isFirst);
			assert.ok(iterator.isOdd);
			assert.notOk(iterator.isEven);
			assert.notOk(iterator.isLast);
			element.data('is-first', iterator.isFirst);

		} else if (key === 1) {
			assert.notOk(iterator.isFirst);
			assert.notOk(iterator.isOdd);
			assert.ok(iterator.isEven);

		} else if (key === 2) {
			assert.ok(iterator.isLast);
			element.data('is-last', iterator.isLast);
		}
	});

	var firstDiv = getWorkspace().find('.div-0');
	assert.equal(firstDiv.length, 1);
	assert.equal(firstDiv.data('is-first'), 'true');

	assert.equal(getWorkspace().find('.div-1').length, 1);

	var secondDiv = getWorkspace().find('.div-2');
	assert.equal(secondDiv.length, 1);
	assert.equal(secondDiv.data('is-last'), 'true');
});

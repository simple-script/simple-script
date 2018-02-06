/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'prop', prop);


/**
 * @preserve
 * @alias Element.prototype.prop
 * @alias NodeList.prototype.prop
 * @param {Object|string|function} name
 * @param {string} [value]
 * @param {{configurable: boolean, enumerable: boolean, writable: boolean}} [options]
 * @returns {{value: *, type: string}}
 */
function prop(name, value, options)
{
	var element = this;

	options = options || {};

	if (isObject(name)) {
		name.each(function () {
			element.prop(name, value, options);
		});

	} else if (typeof name === 'function') {
		name.call(this);

	} else if ( ! value) {
		return immediateStatement(element[name]);

	} else {
		Object.defineProperty(this, name, {
			configurable: ! options.configurable,
			enumerable: ! options.enumerable,
			value: value,
			writable: ! options.writable
		})
	}

	return originalStatement(element);
}

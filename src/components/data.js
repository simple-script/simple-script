/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'data', data);


/**
 * @preserve
 * @alias Element.prototype.data
 * @alias NodeList.prototype.data
 * @param {Object|string} name
 * @param {string|number} [value]
 * @returns {{value: *, type: string}}
 */
function data(name, value)
{
	var
		attributePrefix = 'data-',
		element = this;

	if (isObject(name)) {
		name.each(function (attribute, value) {
			element.setAttribute(attributePrefix + attribute, value);
		});

	} else if ( ! value) {
		return immediateStatement(this.getAttribute(attributePrefix + name));

	} else {
		this.setAttribute(attributePrefix + name, value);
	}

	return originalStatement(this);
}

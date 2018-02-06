/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'css', css);


/**
 * @preserve
 * @alias Element.prototype.css
 * @alias NodeList.prototype.css
 * @param {Object|string} propertyName
 * @param {string|number} [value]
 * @returns {{value: *, type: string}}
 */
function css(propertyName, value)
{
	var element = this;

	if (isObject(propertyName)) {
		propertyName.each(function (property, value) {
			element.style.setProperty(property, value);
		});

	} else if ( ! value) {
		return immediateStatement(this.style.getPropertyValue(propertyName), true);

	} else {
		this.style.setProperty(propertyName, value);
	}

	return originalStatement(this);
}

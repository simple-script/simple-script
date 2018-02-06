/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'width', width);


/**
 * @preserve
 * @alias Element.prototype.width
 * @alias NodeList.prototype.width
 * @param {string|number} [value]
 * @returns {{value: *, type: string}}
 */
function width(value)
{
	if ( ! value) {
		var
			style = getComputedStyle(this),
			paddingSize = parseInt(style.paddingLeft) + parseInt(style.paddingRight),
			borderSize = parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth),
			width = this.offsetWidth - paddingSize - borderSize;

		return immediateStatement(width);
	}

	this.style.width = value;
	return originalStatement(this);
}

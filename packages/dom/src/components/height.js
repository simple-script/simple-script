/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'height', height);


/**
 * @preserve
 * @alias Element.prototype.height
 * @alias NodeList.prototype.height
 * @param {string} [value]
 * @returns {{value: *, type: string}}
 */
function height(value)
{
	if ( ! value) {
		var
			style = getComputedStyle(this),
			paddingSize = parseInt(style.paddingTop) + parseInt(style.paddingBottom),
			borderSize = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth),
			height = this.offsetHeight - paddingSize - borderSize;

		return immediateStatement(height);
	}

	this.style.height = value;
	return originalStatement(this);
}

/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'innerWidth', innerWidth);


/**
 * @preserve
 * @alias Element.prototype.innerWidth
 * @alias NodeList.prototype.innerWidth
 * @returns {{value: *, type: string}}
 */
function innerWidth()
{
	var
		style = getComputedStyle(this),
		borderSize = parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth),
		width = this.offsetWidth - borderSize;

	return immediateStatement(width);
}

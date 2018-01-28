/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'innerHeight', innerHeight);


/**
 * @preserve
 * @alias Element.prototype.innerHeight
 * @alias NodeList.prototype.innerHeight
 * @returns {{value: *, type: string}}
 */
function innerHeight()
{
	var
		style = getComputedStyle(this),
		borderSize = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth),
		height = this.offsetHeight - borderSize;

	return immediateStatement(height);
}

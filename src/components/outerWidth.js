/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'outerWidth', outerWidth);


/**
 * @preserve
 * @alias Element.prototype.outerWidth
 * @alias NodeList.prototype.outerWidth
 * @returns {{value: *, type: string}}
 */
function outerWidth(withMargin)
{
	var
		style = getComputedStyle(this),
		width = this.offsetWidth;

	if ( !! withMargin) {
		width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	}

	return immediateStatement(width);
}

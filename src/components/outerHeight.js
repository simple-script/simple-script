/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'outerHeight', outerHeight);


/**
 * @preserve
 * @alias Element.prototype.outerHeight
 * @alias NodeList.prototype.outerHeight
 * @returns {{value: *, type: string}}
 */
function outerHeight(withMargin)
{
	var
		style = getComputedStyle(this),
		height = this.offsetHeight;

	if ( !! withMargin) {
		height += parseInt(style.marginTop) + parseInt(style.marginBottom);
	}

	return immediateStatement(height);
}

/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'prepend', prepend);


/**
 * @preserve
 * @alias Element.prototype.prepend
 * @alias NodeList.prototype.prepend
 * @param {Text|Element} content
 * @returns {{value: *, type: string}}
 */
function prepend(content)
{
	this.insertBefore(content, this.firstChild);
	return originalStatement(this);
}

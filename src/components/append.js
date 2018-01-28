/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'append', append);


/**
 * @preserve
 * @alias Element.prototype.append
 * @alias NodeList.prototype.append
 * @param {Text|HTMLElement} content
 * @returns {{value: *, type: string}}
 */
function append(content)
{
	this.appendChild(content);
	return originalStatement(this);
}

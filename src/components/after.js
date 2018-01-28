/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'after', after);


/**
 * @preserve
 * @alias Element.prototype.after
 * @alias NodeList.prototype.after
 * @param {string|outerHTML} content
 * @returns {{value: *, type: string}}
 */
function after(content)
{
	this.insertAdjacentHTML('afterend', content);
	return originalStatement(this);
}

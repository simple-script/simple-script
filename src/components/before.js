/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'before', before);


/**
 * @preserve
 * @alias Element.prototype.before
 * @alias NodeList.prototype.before
 * @param {Text|outerHTML} content
 * @returns {{value: *, type: string}}
 */
function before(content)
{
	this.insertAdjacentHTML('beforebegin', content);
	return originalStatement(this);
}

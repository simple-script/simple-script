/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element.concat(prototypesSet.global), 'find', find);


/**
 * @preserve
 * @alias Document.prototype.find
 * @alias DocumentFragment.prototype.find
 * @alias Element.prototype.find
 * @alias NodeList.prototype.find
 * @param {string} selector
 * @returns {{value: *, type: string}}
 */
function find(selector)
{
	return immediateStatement(this.querySelectorAll(selector));
}

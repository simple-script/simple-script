/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'clone', clone);


/**
 * @preserve
 * @alias Element.prototype.clone
 * @alias NodeList.prototype.clone
 * @param {boolean} [notDeep]
 * @returns {{value: *, type: string}}
 */
function clone(notDeep)
{
	return immediateStatement(this.cloneNode( ! notDeep));
}

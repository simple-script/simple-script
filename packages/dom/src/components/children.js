/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'children', children);


/**
 * @preserve
 * @alias Element.prototype.children
 * @alias NodeList.prototype.children
 * @returns {{value: NodeList, type: string}}
 */
function children()
{
	return immediateStatement(this.childNodes);
}

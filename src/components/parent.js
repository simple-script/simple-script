/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'parent', parent);


/**
 * @preserve
 * @alias Element.prototype.parent
 * @alias NodeList.prototype.parent
 * @returns {{value: *, type: string}}
 */
function parent()
{
	return immediateStatement(this.parentNode);
}

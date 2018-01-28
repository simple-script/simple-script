/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element.concat(prototypesSet.iterable), 'first', first, true);


/**
 * @preserve
 * @alias Array.prototype.first
 * @alias Element.prototype.first
 * @alias NodeList.prototype.first
 * @alias Object.prototype.first
 * @returns {{value: *, type: string}}
 */
function first()
{
	return immediateStatement(this.eq(0));
}

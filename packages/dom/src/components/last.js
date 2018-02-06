/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element.concat(prototypesSet.iterable), 'last', last, true);


/**
 * @preserve
 * @alias Element.prototype.last
 * @alias NodeList.prototype.last
 * @returns {{value: *, type: string}}
 */
function last()
{
	return immediateStatement(this.eq(0, true));
}

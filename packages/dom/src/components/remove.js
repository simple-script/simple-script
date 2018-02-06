/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'remove', remove);


/**
 * @preserve
 * @alias Element.prototype.remove
 * @alias NodeList.prototype.remove
 * @returns {{type: string}}
 */
function remove()
{
	this.parent().removeChild(this);
	return voidStatement();
}

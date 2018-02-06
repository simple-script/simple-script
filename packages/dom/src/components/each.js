/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element.concat(prototypesSet.iterable), 'each', each, true);


/**
 * @preserve
 * @alias Array.prototype.each
 * @alias Element.prototype.each
 * @alias NodeList.prototype.each
 * @alias Object.prototype.each
 * @param {function} callback
 * @returns {{value: *, type: string}}
 */
function each(callback)
{
	var
		iteratorResult = iterator(this, function (key, item, iterator) {
			return item instanceof Node ? callback.call(item, key, iterator) : callback.call(this, key, item, iterator);
		}),
		statementValue = !! iteratorResult ? iteratorResult : this;

	return originalStatement(statementValue);
}

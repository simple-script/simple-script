/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'removeData', removeData);


/**
 * @preserve
 * @alias Element.prototype.removeData
 * @alias NodeList.prototype.removeData
 * @param {string} attributeName
 * @returns {{value: *, type: string}}
 */
function removeData(attributeName)
{
	var element = this;

	attributeName.split(' ').each(function (key, attribute) {
		element.removeAttribute('data-' + attribute);
	});

	return originalStatement(element);
}

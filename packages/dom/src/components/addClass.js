/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'addClass', addClass);


/**
 * @preserve
 * @alias Element.prototype.addClass
 * @alias NodeList.prototype.addClass
 * @param {string} className
 * @returns {{value: *, type: string}}
 */
function addClass(className)
{
	var
		classNameToArray = className.trim().split(' '),
		element = this;

	if (element.classList) {
		classNameToArray.each(function (index, classToAdd) {
			if (classToAdd.trim()) {
				element.classList.add(classToAdd);
			}
		});

	} else {
		var newClassList = '';

		classNameToArray.each(function (index, classToAdd) {
			if (classToAdd.trim() && ! element.hasClass(classToAdd)) {
				newClassList += ' ' + classToAdd;
			}
		});

		element.attr('class', newClassList.trim());
	}

	return originalStatement(this);
}

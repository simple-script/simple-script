/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'removeClass', removeClass);


/**
 * @preserve
 * @alias Element.prototype.removeClass
 * @alias NodeList.prototype.removeClass
 * @param {string} className
 * @returns {{value: *, type: string}}
 */
function removeClass(className)
{
	var
		classNameToArray = className.trim().split(' '),
		element = this;

	if (this.classList) {
		classNameToArray.each(function (index, classToRemove) {
			if (classToRemove.trim()) {
				element.classList.remove(classToRemove);
			}
		});

	} else {
		var
			newClassList = '';

		this.attr('class').split(' ').each(function (index, oldClass) {
			if (classNameToArray.indexOf(oldClass) < 0) {
				newClassList += ' ' + oldClass;
			}
		});

		element.attr('class', newClassList.trim());
	}

	return originalStatement(this);
}

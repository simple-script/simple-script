/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'wrapInner', wrapInner);


/**
 * @preserve
 * @param {Element} wrapper
 * @returns {{value: *, type: string}}
 */
function wrapInner(wrapper)
{
	this.html(wrapper.html(this.html()).outerHTML);
	return originalStatement(this);
}

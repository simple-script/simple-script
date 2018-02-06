/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/* eslint-disable no-unused-vars */

var prototypesSet = {
	init: function () {
		this.dom = [Document.prototype, DocumentFragment.prototype];
		this.element = [Element.prototype, NodeList.prototype];
		this.global = this.dom.concat([Window.prototype]);
		this.iterable = [Array.prototype, Object.prototype];
		return this;
	}
}.init();

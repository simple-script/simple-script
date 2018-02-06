/*! Copyright (c) Vladimír Macháček | BSD-3-Clause | https://github.com/simple-script/simple-script */
(function() {
	"use strict";

	function defineProperty(prototype, property, method, selfIterating) {
		var prototypeIterator = prototype.length;
		while (prototypeIterator--) {
			Object.defineProperty(prototype[prototypeIterator], property, {
				value: function() {
					if (!!selfIterating || !isNodeListInstance(this) && !this.length) {
						return method.apply(this, arguments).value
					}
					var callbackArguments = arguments,
						emptyStatement = false,
						statement = iterator(this, function(key, item, iterator) {
							var statement = method.apply(item, callbackArguments);
							if (statement.type === "immediate") {
								return statement.value
							}
							if (statement.type === "void" && iterator.isLast) {
								emptyStatement = true
							}
						});
					if (!emptyStatement) {
						if (typeof statement === "undefined") {
							return this
						}
						return statement
					}
				}
			})
		}
	}

	function immediateStatement(value) {
		return {
			value: value,
			type: "immediate"
		}
	}

	function isNodeListInstance(value) {
		return value instanceof NodeList
	}

	function isObject(value) {
		return typeof value === "object"
	}

	function iterator(items, callback) {
		var breakLoop, iteratorReturnValue = this,
			itemsLength = 0,
			iterator = 0,
			iteratorParameters = {
				isFirst: true,
				isLast: false,
				isOdd: true,
				isEven: false
			};
		if (!!items.length) {
			itemsLength = items.length
		} else if (typeof items === "object") {
			itemsLength = Object.keys(items).length
		}
		itemsLength--;
		if (isNodeListInstance(items)) {
			for (var key = 0; key <= itemsLength; key++) {
				iteratorStepper();
				breakLoop = processLoopValue(callback(key, items[key], iteratorParameters));
				if (breakLoop) {
					break
				}
			}
		} else {
			for (var key in items) {
				if (!items.hasOwnProperty(key)) {
					continue
				}
				iteratorStepper();
				breakLoop = processLoopValue(callback(key, items[key], iteratorParameters));
				if (breakLoop) {
					break
				}
			}
		}
		return iteratorReturnValue;

		function iteratorStepper() {
			if (iterator > 0) {
				iteratorParameters.isFirst = false;
				if (iteratorParameters.isOdd === true) {
					iteratorParameters.isOdd = false;
					iteratorParameters.isEven = true
				} else if (iteratorParameters.isEven) {
					iteratorParameters.isOdd = true;
					iteratorParameters.isEven = false
				}
			}
			if (iterator === itemsLength) {
				iteratorParameters.isLast = true
			}
			iterator++
		}

		function processLoopValue(loopReturnValue) {
			if (typeof loopReturnValue !== "undefined") {
				iteratorReturnValue = loopReturnValue;
				return true
			}
			return false
		}
	}

	function originalStatement(value) {
		return {
			value: value,
			type: "original"
		}
	}
	var prototypesSet = {
		init: function() {
			this.dom = [Document.prototype, DocumentFragment.prototype];
			this.element = [Element.prototype, NodeList.prototype];
			this.global = this.dom.concat([Window.prototype]);
			this.iterable = [Array.prototype, Object.prototype];
			return this
		}
	}.init();

	function voidStatement() {
		return {
			type: "void"
		}
	}
	defineProperty(prototypesSet.element, "addClass", addClass);
	/**
	 * @preserve
	 * @alias Element.prototype.addClass
	 * @alias NodeList.prototype.addClass
	 * @param {string} className
	 * @returns {{value: *, type: string}}
	 */
	function addClass(className) {
		var classNameToArray = className.trim().split(" "),
			element = this;
		if (element.classList) {
			classNameToArray.each(function(index, classToAdd) {
				if (classToAdd.trim()) {
					element.classList.add(classToAdd)
				}
			})
		} else {
			var newClassList = "";
			classNameToArray.each(function(index, classToAdd) {
				if (classToAdd.trim() && !element.hasClass(classToAdd)) {
					newClassList += " " + classToAdd
				}
			});
			element.attr("class", newClassList.trim())
		}
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "after", after);
	/**
	 * @preserve
	 * @alias Element.prototype.after
	 * @alias NodeList.prototype.after
	 * @param {string|outerHTML} content
	 * @returns {{value: *, type: string}}
	 */
	function after(content) {
		this.insertAdjacentHTML("afterend", content);
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "append", append);
	/**
	 * @preserve
	 * @alias Element.prototype.append
	 * @alias NodeList.prototype.append
	 * @param {Text|HTMLElement} content
	 * @returns {{value: *, type: string}}
	 */
	function append(content) {
		this.appendChild(content);
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "attr", attr);
	/**
	 * @preserve
	 * @alias Element.prototype.attr
	 * @alias NodeList.prototype.attr
	 * @param {Object|string} name
	 * @param {string} [value]
	 * @returns {{value: *, type: string}}
	 */
	function attr(name, value) {
		var element = this;
		if (isObject(name)) {
			name.each(function(attribute, value) {
				element.attr(attribute, value)
			})
		} else if (!value) {
			return immediateStatement(element.getAttribute(name))
		} else {
			element.setAttribute(name, value)
		}
		return originalStatement(element)
	}
	defineProperty(prototypesSet.element, "before", before);
	/**
	 * @preserve
	 * @alias Element.prototype.before
	 * @alias NodeList.prototype.before
	 * @param {Text|outerHTML} content
	 * @returns {{value: *, type: string}}
	 */
	function before(content) {
		this.insertAdjacentHTML("beforebegin", content);
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "children", children);
	/**
	 * @preserve
	 * @alias Element.prototype.children
	 * @alias NodeList.prototype.children
	 * @returns {{value: NodeList, type: string}}
	 */
	function children() {
		return immediateStatement(this.childNodes)
	}
	defineProperty(prototypesSet.element, "clone", clone);
	/**
	 * @preserve
	 * @alias Element.prototype.clone
	 * @alias NodeList.prototype.clone
	 * @param {boolean} [notDeep]
	 * @returns {{value: *, type: string}}
	 */
	function clone(notDeep) {
		return immediateStatement(this.cloneNode(!notDeep))
	}
	defineProperty(prototypesSet.element, "css", css);
	/**
	 * @preserve
	 * @alias Element.prototype.css
	 * @alias NodeList.prototype.css
	 * @param {Object|string} propertyName
	 * @param {string|number} [value]
	 * @returns {{value: *, type: string}}
	 */
	function css(propertyName, value) {
		var element = this;
		if (isObject(propertyName)) {
			propertyName.each(function(property, value) {
				element.style.setProperty(property, value)
			})
		} else if (!value) {
			return immediateStatement(this.style.getPropertyValue(propertyName), true)
		} else {
			this.style.setProperty(propertyName, value)
		}
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "data", data);
	/**
	 * @preserve
	 * @alias Element.prototype.data
	 * @alias NodeList.prototype.data
	 * @param {Object|string} name
	 * @param {string|number} [value]
	 * @returns {{value: *, type: string}}
	 */
	function data(name, value) {
		var attributePrefix = "data-",
			element = this;
		if (isObject(name)) {
			name.each(function(attribute, value) {
				element.setAttribute(attributePrefix + attribute, value)
			})
		} else if (!value) {
			return immediateStatement(this.getAttribute(attributePrefix + name))
		} else {
			this.setAttribute(attributePrefix + name, value)
		}
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element.concat(prototypesSet.iterable), "each", each, true);
	/**
	 * @preserve
	 * @alias Array.prototype.each
	 * @alias Element.prototype.each
	 * @alias NodeList.prototype.each
	 * @alias Object.prototype.each
	 * @param {function} callback
	 * @returns {{value: *, type: string}}
	 */
	function each(callback) {
		var iteratorResult = iterator(this, function(key, item, iterator) {
				return item instanceof Node ? callback.call(item, key, iterator) : callback.call(this, key, item, iterator)
			}),
			statementValue = !!iteratorResult ? iteratorResult : this;
		return originalStatement(statementValue)
	}
	defineProperty(prototypesSet.element.concat(prototypesSet.iterable), "eq", eq, true);
	/**
	 * @preserve
	 * @alias Array.prototype.eq
	 * @alias Element.prototype.eq
	 * @alias NodeList.prototype.eq
	 * @alias Object.prototype.eq
	 * @param {number} index
	 * @param {boolean} [fromEnd]
	 * @returns {{value: *, type: string}}
	 */
	function eq(index, fromEnd) {
		if (this instanceof Element) {
			return this
		}
		var isNodeListOrArray = this instanceof Array || this instanceof NodeList;
		if (fromEnd) {
			var length;
			if (isNodeListOrArray) {
				length = this.length
			} else {
				length = Object.keys(this).length
			}
			index = length - 1 - index
		}
		if (!isNodeListOrArray) {
			index = Object.keys(this)[index]
		}
		return immediateStatement(this[index])
	}
	defineProperty(prototypesSet.element.concat(prototypesSet.global), "find", find);
	/**
	 * @preserve
	 * @alias Document.prototype.find
	 * @alias DocumentFragment.prototype.find
	 * @alias Element.prototype.find
	 * @alias NodeList.prototype.find
	 * @param {string} selector
	 * @returns {{value: *, type: string}}
	 */
	function find(selector) {
		return immediateStatement(this.querySelectorAll(selector))
	}
	defineProperty(prototypesSet.element.concat(prototypesSet.iterable), "first", first, true);
	/**
	 * @preserve
	 * @alias Array.prototype.first
	 * @alias Element.prototype.first
	 * @alias NodeList.prototype.first
	 * @alias Object.prototype.first
	 * @returns {{value: *, type: string}}
	 */
	function first() {
		return immediateStatement(this.eq(0))
	}
	defineProperty(prototypesSet.element, "hasClass", hasClass);
	/**
	 * @preserve
	 * @alias Element.prototype.hasClass
	 * @alias NodeList.prototype.hasClass
	 * @param {string} className
	 * @returns {{value: *, type: string}}
	 */
	function hasClass(className) {
		className = className.trim();
		var classList = this.classList,
			result = classList ? classList.contains(className) : this.className.split(" ").indexOf(className) >= 0;
		return immediateStatement(result)
	}
	defineProperty(prototypesSet.element, "height", height);
	/**
	 * @preserve
	 * @alias Element.prototype.height
	 * @alias NodeList.prototype.height
	 * @param {string} [value]
	 * @returns {{value: *, type: string}}
	 */
	function height(value) {
		if (!value) {
			var style = getComputedStyle(this),
				paddingSize = parseInt(style.paddingTop) + parseInt(style.paddingBottom),
				borderSize = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth),
				height = this.offsetHeight - paddingSize - borderSize;
			return immediateStatement(height)
		}
		this.style.height = value;
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "html", html);
	/**
	 * @preserve
	 * @alias Element.prototype.html
	 * @alias NodeList.prototype.html
	 * @param {string|outerHTML} [content]
	 * @returns {{value: *, type: string}}
	 */
	function html(content) {
		if (!content) {
			return immediateStatement(this.innerHTML)
		}
		this.innerHTML = content;
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "innerHeight", innerHeight);
	/**
	 * @preserve
	 * @alias Element.prototype.innerHeight
	 * @alias NodeList.prototype.innerHeight
	 * @returns {{value: *, type: string}}
	 */
	function innerHeight() {
		var style = getComputedStyle(this),
			borderSize = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth),
			height = this.offsetHeight - borderSize;
		return immediateStatement(height)
	}
	defineProperty(prototypesSet.element, "innerWidth", innerWidth);
	/**
	 * @preserve
	 * @alias Element.prototype.innerWidth
	 * @alias NodeList.prototype.innerWidth
	 * @returns {{value: *, type: string}}
	 */
	function innerWidth() {
		var style = getComputedStyle(this),
			borderSize = parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth),
			width = this.offsetWidth - borderSize;
		return immediateStatement(width)
	}
	defineProperty(prototypesSet.element, "is", is);
	/**
	 * @preserve
	 * @alias Element.prototype.is
	 * @alias NodeList.prototype.is
	 * @param {string|Element} selector
	 * @returns {{value: *, type: string}}
	 */
	function is(selector) {
		var is;
		if (selector === ":checked") {
			var inputsAllowedToCheck = ["checkbox", "radio"];
			is = this.is("input") && inputsAllowedToCheck.indexOf(this.type) && this.checked
		} else if (selector === ":selected") {
			is = this.is("option") && this.selected
		} else {
			is = this.matches.call(this, selector)
		}
		return immediateStatement(is)
	}
	defineProperty(prototypesSet.element.concat(prototypesSet.iterable), "last", last, true);
	/**
	 * @preserve
	 * @alias Element.prototype.last
	 * @alias NodeList.prototype.last
	 * @returns {{value: *, type: string}}
	 */
	function last() {
		return immediateStatement(this.eq(0, true))
	}
	defineProperty(prototypesSet.element, "next", next);
	/**
	 * @preserve
	 * @alias Element.prototype.next
	 * @alias NodeList.prototype.next
	 * @returns {{value: *, type: string}}
	 */
	function next() {
		return immediateStatement(this.nextElementSibling)
	}
	defineProperty(prototypesSet.element.concat(prototypesSet.global), "off", off);
	/**
	 * @preserve
	 * @alias Document.prototype.off
	 * @alias DocumentFragment.prototype.off
	 * @alias Element.prototype.off
	 * @alias NodeList.prototype.off
	 * @alias Window.prototype.off
	 * @param {string} event
	 * @param {function} listener
	 * @param {boolean} [useCapture]
	 * @returns {{value: *, type: string}}
	 */
	function off(event, listener, useCapture) {
		this.removeEventListener(event, listener, !useCapture);
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "offset", offset);
	/**
	 * @preserve
	 * @alias Element.prototype.offset
	 * @alias NodeList.prototype.offset
	 * @returns {{value: *, type: string}}
	 */
	function offset() {
		return immediateStatement(this.getBoundingClientRect())
	}
	defineProperty(prototypesSet.element.concat(prototypesSet.global), "on", on);
	/**
	 * @preserve
	 * @alias Document.prototype.on
	 * @alias DocumentFragment.prototype.on
	 * @alias Element.prototype.on
	 * @alias NodeList.prototype.on
	 * @alias Window.prototype.on
	 * @param {string} [event]
	 * @param {string|function} [selector]
	 * @param {function} [callback]
	 * @returns {{value: *, type: string}}
	 */
	function on(event, selector, callback) {
		var selectorType = typeof selector;
		if (selectorType === "string") {
			this.addEventListener(event, function(event) {
				if (event.target.is(selector)) {
					callback.call(event.target)
				}
			})
		} else if (selectorType === "function") {
			this.addEventListener(event, selector)
		}
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "outerHeight", outerHeight);
	/**
	 * @preserve
	 * @alias Element.prototype.outerHeight
	 * @alias NodeList.prototype.outerHeight
	 * @returns {{value: *, type: string}}
	 */
	function outerHeight(withMargin) {
		var style = getComputedStyle(this),
			height = this.offsetHeight;
		if (!!withMargin) {
			height += parseInt(style.marginTop) + parseInt(style.marginBottom)
		}
		return immediateStatement(height)
	}
	defineProperty(prototypesSet.element, "outerWidth", outerWidth);
	/**
	 * @preserve
	 * @alias Element.prototype.outerWidth
	 * @alias NodeList.prototype.outerWidth
	 * @returns {{value: *, type: string}}
	 */
	function outerWidth(withMargin) {
		var style = getComputedStyle(this),
			width = this.offsetWidth;
		if (!!withMargin) {
			width += parseInt(style.marginLeft) + parseInt(style.marginRight)
		}
		return immediateStatement(width)
	}
	defineProperty(prototypesSet.element, "parent", parent);
	/**
	 * @preserve
	 * @alias Element.prototype.parent
	 * @alias NodeList.prototype.parent
	 * @returns {{value: *, type: string}}
	 */
	function parent() {
		return immediateStatement(this.parentNode)
	}
	defineProperty(prototypesSet.element, "prepend", prepend);
	/**
	 * @preserve
	 * @alias Element.prototype.prepend
	 * @alias NodeList.prototype.prepend
	 * @param {Text|Element} content
	 * @returns {{value: *, type: string}}
	 */
	function prepend(content) {
		this.insertBefore(content, this.firstChild);
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "prev", prev);
	/**
	 * @preserve
	 * @alias Element.prototype.prev
	 * @alias NodeList.prototype.prev
	 * @returns {{value: *, type: string}}
	 */
	function prev() {
		return immediateStatement(this.previousElementSibling)
	}
	defineProperty(prototypesSet.element, "prop", prop);
	/**
	 * @preserve
	 * @alias Element.prototype.prop
	 * @alias NodeList.prototype.prop
	 * @param {Object|string|function} name
	 * @param {string} [value]
	 * @param {{configurable: boolean, enumerable: boolean, writable: boolean}} [options]
	 * @returns {{value: *, type: string}}
	 */
	function prop(name, value, options) {
		var element = this;
		options = options || {};
		if (isObject(name)) {
			name.each(function() {
				element.prop(name, value, options)
			})
		} else if (typeof name === "function") {
			name.call(this)
		} else if (!value) {
			return immediateStatement(element[name])
		} else {
			Object.defineProperty(this, name, {
				configurable: !options.configurable,
				enumerable: !options.enumerable,
				value: value,
				writable: !options.writable
			})
		}
		return originalStatement(element)
	}
	defineProperty(prototypesSet.dom, "ready", ready);
	/**
	 * @preserve
	 * @alias Document.prototype.ready
	 * @alias DocumentFragment.prototype.ready
	 * @param {function} callback
	 * @returns {{value: *, type: string}}
	 */
	function ready(callback) {
		this.on("DOMContentLoaded", function() {
			callback.call(this)
		});
		return voidStatement()
	}
	defineProperty(prototypesSet.element, "remove", remove);
	/**
	 * @preserve
	 * @alias Element.prototype.remove
	 * @alias NodeList.prototype.remove
	 * @returns {{type: string}}
	 */
	function remove() {
		this.parent().removeChild(this);
		return voidStatement()
	}
	defineProperty(prototypesSet.element, "removeAttr", removeAttr);
	/**
	 * @preserve
	 * @alias Element.prototype.removeAttr
	 * @alias NodeList.prototype.removeAttr
	 * @param {string} attributeName
	 * @returns {{value: *, type: string}}
	 */
	function removeAttr(attributeName) {
		var element = this;
		attributeName.split(" ").each(function(key, attribute) {
			element.removeAttribute(attribute)
		});
		return originalStatement(element)
	}
	defineProperty(prototypesSet.element, "removeClass", removeClass);
	/**
	 * @preserve
	 * @alias Element.prototype.removeClass
	 * @alias NodeList.prototype.removeClass
	 * @param {string} className
	 * @returns {{value: *, type: string}}
	 */
	function removeClass(className) {
		var classNameToArray = className.trim().split(" "),
			element = this;
		if (this.classList) {
			classNameToArray.each(function(index, classToRemove) {
				if (classToRemove.trim()) {
					element.classList.remove(classToRemove)
				}
			})
		} else {
			var newClassList = "";
			this.attr("class").split(" ").each(function(index, oldClass) {
				if (classNameToArray.indexOf(oldClass) < 0) {
					newClassList += " " + oldClass
				}
			});
			element.attr("class", newClassList.trim())
		}
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "removeData", removeData);
	/**
	 * @preserve
	 * @alias Element.prototype.removeData
	 * @alias NodeList.prototype.removeData
	 * @param {string} attributeName
	 * @returns {{value: *, type: string}}
	 */
	function removeData(attributeName) {
		var element = this;
		attributeName.split(" ").each(function(key, attribute) {
			element.removeAttribute("data-" + attribute)
		});
		return originalStatement(element)
	}
	defineProperty(prototypesSet.element, "text", text);
	/**
	 * @preserve
	 * @alias Element.prototype.test
	 * @alias NodeList.prototype.text
	 * @param {string} content
	 * @returns {{value: *, type: string}}
	 */
	function text(content) {
		if (!content) {
			return immediateStatement(this.textContent)
		}
		this.textContent = content;
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "toggleClass", toggleClass);

	function toggleClass(className) {
		var classesToAdd = "",
			classesToRemove = "",
			element = this;
		className.split(" ").each(function(key, classToToggle) {
			classToToggle = " " + classToToggle;
			if (element.hasClass(classToToggle)) {
				classesToRemove += classToToggle
			} else {
				classesToAdd += classToToggle
			}
		});
		element.removeClass(classesToRemove);
		element.addClass(classesToAdd);
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "val", val);
	/**
	 * @preserve
	 * @alias Element.prototype.val
	 * @alias NodeList.prototype.val
	 * @param {string|number} [value]
	 * @returns {{value: *, type: string}}
	 */
	function val(value) {
		if (!value) {
			return immediateStatement(this.value)
		}
		this.value = value;
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "width", width);
	/**
	 * @preserve
	 * @alias Element.prototype.width
	 * @alias NodeList.prototype.width
	 * @param {string|number} [value]
	 * @returns {{value: *, type: string}}
	 */
	function width(value) {
		if (!value) {
			var style = getComputedStyle(this),
				paddingSize = parseInt(style.paddingLeft) + parseInt(style.paddingRight),
				borderSize = parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth),
				width = this.offsetWidth - paddingSize - borderSize;
			return immediateStatement(width)
		}
		this.style.width = value;
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "wrap", wrap);
	/**
	 * @preserve
	 * @alias Element.prototype.wrap
	 * @alias NodeList.prototype.wrap
	 * @param {Element} wrapper
	 * @returns {{value: *, type: string}}
	 */
	function wrap(wrapper) {
		this.parent().replaceChild(wrapper.html(this.outerHTML), this);
		return originalStatement(this)
	}
	defineProperty(prototypesSet.element, "wrapInner", wrapInner);
	/**
	 * @preserve
	 * @param {Element} wrapper
	 * @returns {{value: *, type: string}}
	 */
	function wrapInner(wrapper) {
		this.html(wrapper.html(this.html()).outerHTML);
		return originalStatement(this)
	}
})();
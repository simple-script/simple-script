/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/* eslint-disable no-unused-vars */


/**
 * @param {Array} prototype
 * @param {string} property
 * @param {function} method
 * @param {*} [selfIterating]
 */
function defineProperty(prototype, property, method, selfIterating)
{
	var prototypeIterator = prototype.length;

	while (prototypeIterator --) {
		Object.defineProperty(prototype[prototypeIterator], property, {
			value: function () {
				if ( !! selfIterating || ( ! isNodeListInstance(this) && ! this.length)) {
					return (method.apply(this, arguments)).value;
				}

				var
					callbackArguments = arguments,
					emptyStatement = false,
					statement = iterator(this, function (key, item, iterator) {
						var statement = method.apply(item, callbackArguments);

						if (statement.type === 'immediate') {
							return statement.value;
						}

						if (statement.type === 'void' && iterator.isLast) {
							emptyStatement = true;
						}
					});

				if ( ! emptyStatement) {
					if (typeof statement === 'undefined') {
						return this;
					}

					return statement;
				}
			}
		});
	}
}

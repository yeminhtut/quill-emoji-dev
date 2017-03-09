/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShortNameEmoji = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _fuse = __webpack_require__(2);

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = function e(tag, attrs) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    var elem = document.createElement(tag);
    Object.keys(attrs).forEach(function (key) {
        return elem[key] = attrs[key];
    });
    children.forEach(function (child) {
        if (typeof child === "string") child = document.createTextNode(child);
        elem.appendChild(child);
    });
    return elem;
};
var Inline = Quill.import('blots/inline');

var EmojiBlot = function (_Inline) {
    _inherits(EmojiBlot, _Inline);

    function EmojiBlot() {
        _classCallCheck(this, EmojiBlot);

        return _possibleConstructorReturn(this, (EmojiBlot.__proto__ || Object.getPrototypeOf(EmojiBlot)).apply(this, arguments));
    }

    _createClass(EmojiBlot, [{
        key: 'format',
        value: function format(name, value) {
            if (name === "emoji" && value) {
                this.domNode.dataset.unicode = value;
            } else {
                _get(EmojiBlot.prototype.__proto__ || Object.getPrototypeOf(EmojiBlot.prototype), 'format', this).call(this, name, value);
            }
        }
    }, {
        key: 'formats',
        value: function formats() {
            var formats = _get(EmojiBlot.prototype.__proto__ || Object.getPrototypeOf(EmojiBlot.prototype), 'formats', this).call(this);
            formats['emoji'] = EmojiBlot.formats(this.domNode);
            return formats;
        }
    }], [{
        key: 'create',
        value: function create(unicode) {
            var node = _get(EmojiBlot.__proto__ || Object.getPrototypeOf(EmojiBlot), 'create', this).call(this);
            node.dataset.unicode = unicode;
            return node;
        }
    }, {
        key: 'formats',
        value: function formats(node) {
            return node.dataset.unicode;
        }
    }]);

    return EmojiBlot;
}(Inline);

EmojiBlot.blotName = "emoji";
EmojiBlot.tagName = "SPAN";
EmojiBlot.className = "emoji";

Quill.register({
    'formats/emoji': EmojiBlot
});

var ShortNameEmoji = function () {
    function ShortNameEmoji(quill, props) {
        _classCallCheck(this, ShortNameEmoji);

        this.fuseOptions = {
            shouldSort: true,
            matchAllTokens: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 3,
            keys: ["shortname"]
        };
        this.emojiList = emojiOne;
        this.fuse = new _fuse2.default(this.emojiList, this.fuseOptions);

        this.quill = quill;
        this.onClose = props.onClose;
        this.onOpen = props.onOpen;
        this.container = this.quill.container.parentNode.querySelector(props.container);
        this.container.style.position = "absolute";
        this.container.style.display = "none";

        this.onSelectionChange = this.maybeUnfocus.bind(this);
        this.onTextChange = this.update.bind(this);

        this.open = false;
        this.atIndex = null;
        this.focusedButton = null;

        quill.keyboard.addBinding({
            // TODO: Once Quill supports using event.key (#1091) use that instead of shift-2
            key: 186, // 2
            shiftKey: true
        }, this.onAtKey.bind(this));

        quill.keyboard.addBinding({
            key: 39, // ArrowRight
            collapsed: true,
            format: ["emoji"]
        }, this.handleArrow.bind(this));

        quill.keyboard.addBinding({
            key: 40, // ArrowRight
            collapsed: true,
            format: ["emoji"]
        }, this.handleArrow.bind(this));
        // TODO: Add keybindings for Enter (13) and Tab (9) directly on the quill editor
    }

    _createClass(ShortNameEmoji, [{
        key: 'onAtKey',
        value: function onAtKey(range, context) {
            if (this.open) return true;
            if (range.length > 0) {
                this.quill.deleteText(range.index, range.length, Quill.sources.USER);
            }

            this.quill.insertText(range.index, ":", "emoji", Quill.sources.USER);
            var atSignBounds = this.quill.getBounds(range.index);
            this.quill.setSelection(range.index + 1, Quill.sources.SILENT);

            this.atIndex = range.index;
            this.container.style.left = atSignBounds.left + "px";
            this.container.style.top = atSignBounds.top + atSignBounds.height + 50 + "px", this.open = true;

            this.quill.on('text-change', this.onTextChange);
            this.quill.once('selection-change', this.onSelectionChange);
            this.update();
            this.onOpen && this.onOpen();
        }
    }, {
        key: 'handleArrow',
        value: function handleArrow() {
            if (!this.open) return true;
            this.buttons[0].focus();
        }
    }, {
        key: 'update',
        value: function update() {
            var sel = this.quill.getSelection().index;

            //Using: fuse.js
            this.query = this.quill.getText(this.atIndex);
            this.query = this.query.trim();
            var emojis = this.fuse.search(this.query);

            if (emojis.length > 50) {
                //return only 50
                emojis = emojis.slice(0, 40);
            };
            this.renderCompletions(emojis);
        }
    }, {
        key: 'maybeUnfocus',
        value: function maybeUnfocus() {
            if (this.container.querySelector("*:focus")) return;
            this.close(null);
        }
    }, {
        key: 'renderCompletions',
        value: function renderCompletions(emojis) {
            var _this2 = this;

            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
            }var buttons = Array(emojis.length);
            this.buttons = buttons;
            var handler = function handler(i, emoji) {
                return function (event) {
                    if (event.key === "ArrowRight" || event.keyCode === 39) {
                        event.preventDefault();
                        buttons[Math.min(buttons.length - 1, i + 1)].focus();
                    } else if (event.key === "ArrowLeft" || event.keyCode === 37) {
                        event.preventDefault();
                        buttons[Math.max(0, i - 1)].focus();
                    } else if (event.key === "ArrowDown" || event.keyCode === 40) {
                        event.preventDefault();
                        buttons[Math.min(buttons.length - 1, i + 1)].focus();
                    } else if (event.key === "Enter" || event.keyCode === 13 || event.key === " " || event.keyCode === 32 || event.key === "Tab" || event.keyCode === 9) {
                        event.preventDefault();
                        _this2.close(emoji);
                    }
                };
            };
            emojis.forEach(function (emoji, i) {
                var li = e('li', {}, e('button', { type: "button" }, e("span", { className: "ico", innerHTML: emoji.code_decimal }), e('span', { className: "matched" }, _this2.query), e('span', { className: "unmatched" }, emoji.shortname.slice(_this2.query.length))));
                _this2.container.appendChild(li);
                buttons[i] = li.firstChild;
                // Events will be GC-ed with button on each re-render:
                buttons[i].addEventListener('keydown', handler(i, emoji));
                buttons[i].addEventListener("mousedown", function () {
                    return _this2.close(emoji);
                });
                buttons[i].addEventListener("focus", function () {
                    return _this2.focusedButton = i;
                });
                buttons[i].addEventListener("unfocus", function () {
                    return _this2.focusedButton = null;
                });
            });
            this.container.style.display = "block";
        }
    }, {
        key: 'close',
        value: function close(value) {
            this.container.style.display = "none";
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
            }this.quill.off('selection-change', this.onSelectionChange);
            this.quill.off('text-change', this.onTextChange);
            if (value) {
                var name = value.name,
                    unicode = value.unicode,
                    shortname = value.shortname,
                    code_decimal = value.code_decimal;

                var emoji_icon_html = e("span", { className: "ico", innerHTML: code_decimal });
                var emoji_icon = emoji_icon_html.innerHTML;
                this.quill.deleteText(this.atIndex, this.query.length + 1, Quill.sources.USER);
                this.quill.insertText(this.atIndex, emoji_icon, "emoji", unicode, Quill.sources.USER);
                this.quill.insertText(this.atIndex + emoji_icon.length + 2, " ", 'emoji', false, Quill.sources.USER);
                this.quill.setSelection(this.atIndex + emoji_icon.length + 2, 0, Quill.sources.SILENT);
            }
            this.quill.focus();
            this.open = false;
            this.onClose && this.onClose(value);
        }
    }]);

    return ShortNameEmoji;
}();

Quill.register('modules/short_name_emoji', ShortNameEmoji);
exports.ShortNameEmoji = ShortNameEmoji;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var h = function h(tag, attrs) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    var elem = document.createElement(tag);
    Object.keys(attrs).forEach(function (key) {
        return elem[key] = attrs[key];
    });
    children.forEach(function (child) {
        if (typeof child === "string") child = document.createTextNode(child);
        elem.appendChild(child);
    });
    return elem;
};

var Inline = Quill.import('blots/inline');

var MentionBlot = function (_Inline) {
    _inherits(MentionBlot, _Inline);

    function MentionBlot() {
        _classCallCheck(this, MentionBlot);

        return _possibleConstructorReturn(this, (MentionBlot.__proto__ || Object.getPrototypeOf(MentionBlot)).apply(this, arguments));
    }

    _createClass(MentionBlot, [{
        key: "format",
        value: function format(name, value) {
            if (name === "mention" && value) {
                this.domNode.dataset.label = value;
            } else {
                _get(MentionBlot.prototype.__proto__ || Object.getPrototypeOf(MentionBlot.prototype), "format", this).call(this, name, value);
            }
        }
    }, {
        key: "formats",
        value: function formats() {
            var formats = _get(MentionBlot.prototype.__proto__ || Object.getPrototypeOf(MentionBlot.prototype), "formats", this).call(this);
            formats['mention'] = MentionBlot.formats(this.domNode);
            return formats;
        }
    }], [{
        key: "create",
        value: function create(label) {
            var node = _get(MentionBlot.__proto__ || Object.getPrototypeOf(MentionBlot), "create", this).call(this);
            node.dataset.label = label;
            return node;
        }
    }, {
        key: "formats",
        value: function formats(node) {
            return node.dataset.label;
        }
    }]);

    return MentionBlot;
}(Inline);

MentionBlot.blotName = "mention";
MentionBlot.tagName = "SPAN";
MentionBlot.className = "mention";

Quill.register({
    'formats/mention': MentionBlot
});

var Mentions = function () {
    function Mentions(quill, props) {
        _classCallCheck(this, Mentions);

        this.quill = quill;
        this.onClose = props.onClose;
        this.onOpen = props.onOpen;
        this.users = props.users;
        this.container = this.quill.container.parentNode.querySelector(props.container);
        this.container.style.position = "absolute";
        this.container.style.display = "none";

        this.onSelectionChange = this.maybeUnfocus.bind(this);
        this.onTextChange = this.update.bind(this);

        this.open = false;
        this.atIndex = null;
        this.focusedButton = null;

        quill.keyboard.addBinding({
            // TODO: Once Quill supports using event.key (#1091) use that instead of shift-2
            key: 50, // 2
            shiftKey: true
        }, this.onAtKey.bind(this));

        quill.keyboard.addBinding({
            key: 40, // ArrowDown
            collapsed: true,
            format: ["mention"]
        }, this.handleArrow.bind(this));
        // TODO: Add keybindings for Enter (13) and Tab (9) directly on the quill editor
    }

    _createClass(Mentions, [{
        key: "onAtKey",
        value: function onAtKey(range, context) {
            if (this.open) return true;
            if (range.length > 0) {
                this.quill.deleteText(range.index, range.length, Quill.sources.USER);
            }
            this.quill.insertText(range.index, "@", "mention", "0", Quill.sources.USER);
            var atSignBounds = this.quill.getBounds(range.index);
            this.quill.setSelection(range.index + 1, Quill.sources.SILENT);

            this.atIndex = range.index;
            this.container.style.left = atSignBounds.left + "px";
            this.container.style.top = atSignBounds.top + atSignBounds.height + 50 + "px", this.open = true;

            this.quill.on('text-change', this.onTextChange);
            this.quill.once('selection-change', this.onSelectionChange);
            this.update();
            this.onOpen && this.onOpen();
        }
    }, {
        key: "handleArrow",
        value: function handleArrow() {
            if (!this.open) return true;
            this.buttons[0].focus();
        }
    }, {
        key: "update",
        value: function update() {
            var _this2 = this;

            var sel = this.quill.getSelection().index;
            if (this.atIndex >= sel) {
                // Deleted the at character
                return this.close(null);
            }
            this.query = this.quill.getText(this.atIndex + 1, sel - this.atIndex - 1);
            // TODO: Should use fuse.js or similar fuzzy-matcher
            var users = this.users.filter(function (u) {
                return u.username.startsWith(_this2.query);
            }).sort(function (u1, u2) {
                return u1.username > u2.username;
            });
            this.renderCompletions(users);
        }
    }, {
        key: "maybeUnfocus",
        value: function maybeUnfocus() {
            if (this.container.querySelector("*:focus")) return;
            this.close(null);
        }
    }, {
        key: "renderCompletions",
        value: function renderCompletions(users) {
            var _this3 = this;

            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
            }var buttons = Array(users.length);
            this.buttons = buttons;
            var handler = function handler(i, user) {
                return function (event) {
                    if (event.key === "ArrowDown" || event.keyCode === 40) {
                        event.preventDefault();
                        buttons[Math.min(buttons.length - 1, i + 1)].focus();
                    } else if (event.key === "ArrowUp" || event.keyCode === 38) {
                        event.preventDefault();
                        buttons[Math.max(0, i - 1)].focus();
                    } else if (event.key === "Enter" || event.keyCode === 13 || event.key === " " || event.keyCode === 32 || event.key === "Tab" || event.keyCode === 9) {
                        event.preventDefault();
                        _this3.close(user);
                    }
                };
            };
            users.forEach(function (user, i) {
                var li = h('li', {}, h('button', { type: "button" }, h('span', { className: "matched" }, "@" + _this3.query), h('span', { className: "unmatched" }, user.username.slice(_this3.query.length))));
                _this3.container.appendChild(li);
                buttons[i] = li.firstChild;
                // Events will be GC-ed with button on each re-render:
                buttons[i].addEventListener('keydown', handler(i, user));
                buttons[i].addEventListener("mousedown", function () {
                    return _this3.close(user);
                });
                buttons[i].addEventListener("focus", function () {
                    return _this3.focusedButton = i;
                });
                buttons[i].addEventListener("unfocus", function () {
                    return _this3.focusedButton = null;
                });
            });
            this.container.style.display = "block";
        }
    }, {
        key: "close",
        value: function close(value) {
            this.container.style.display = "none";
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
            }this.quill.off('selection-change', this.onSelectionChange);
            this.quill.off('text-change', this.onTextChange);
            if (value) {
                var label = value.label,
                    username = value.username;

                this.quill.deleteText(this.atIndex, this.query.length + 1, Quill.sources.USER);
                this.quill.insertText(this.atIndex, "@" + username, "mention", label, Quill.sources.USER);
                this.quill.insertText(this.atIndex + username.length + 1, " ", 'mention', false, Quill.sources.USER);
                this.quill.setSelection(this.atIndex + username.length + 2, 0, Quill.sources.SILENT);
            }
            this.quill.focus();
            this.open = false;
            this.onClose && this.onClose(value);
        }
    }]);

    return Mentions;
}();

Quill.register('modules/mentions', Mentions);
exports.Mentions = Mentions;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license
 * Fuse - Lightweight fuzzy-search
 *
 * Copyright (c) 2012-2016 Kirollos Risk <kirollos@gmail.com>.
 * All Rights Reserved. Apache Software License 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
;(function (global) {
  'use strict'

  /** @type {function(...*)} */
  function log () {
    console.log.apply(console, arguments)
  }

  var defaultOptions = {
    // The name of the identifier property. If specified, the returned result will be a list
    // of the items' dentifiers, otherwise it will be a list of the items.
    id: null,

    // Indicates whether comparisons should be case sensitive.

    caseSensitive: false,

    // An array of values that should be included from the searcher's output. When this array
    // contains elements, each result in the list will be of the form `{ item: ..., include1: ..., include2: ... }`.
    // Values you can include are `score`, `matchedLocations`
    include: [],

    // Whether to sort the result list, by score
    shouldSort: true,

    // The search function to use
    // Note that the default search function ([[Function]]) must conform to the following API:
    //
    //  @param pattern The pattern string to search
    //  @param options The search option
    //  [[Function]].constructor = function(pattern, options)
    //
    //  @param text: the string to search in for the pattern
    //  @return Object in the form of:
    //    - isMatch: boolean
    //    - score: Int
    //  [[Function]].prototype.search = function(text)
    searchFn: BitapSearcher,

    // Default sort function
    sortFn: function (a, b) {
      return a.score - b.score
    },

    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: deepValue,

    // List of properties that will be searched. This also supports nested properties.
    keys: [],

    // Will print to the console. Useful for debugging.
    verbose: false,

    // When true, the search algorithm will search individual words **and** the full string,
    // computing the final score as a function of both. Note that when `tokenize` is `true`,
    // the `threshold`, `distance`, and `location` are inconsequential for individual tokens.
    tokenize: false,

    // When true, the result set will only include records that match all tokens. Will only work
    // if `tokenize` is also true.
    matchAllTokens: false,

    // Regex used to separate words when searching. Only applicable when `tokenize` is `true`.
    tokenSeparator: / +/g,

    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1,

    // When true, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    findAllMatches: false
  }

  /**
   * @constructor
   * @param {!Array} list
   * @param {!Object<string, *>} options
   */
  function Fuse (list, options) {
    var key

    this.list = list
    this.options = options = options || {}

    for (key in defaultOptions) {
      if (!defaultOptions.hasOwnProperty(key)) {
        continue;
      }
      // Add boolean type options
      if (typeof defaultOptions[key] === 'boolean') {
        this.options[key] = key in options ? options[key] : defaultOptions[key];
      // Add all other options
      } else {
        this.options[key] = options[key] || defaultOptions[key]
      }
    }
  }

  Fuse.VERSION = '2.6.2'

  /**
   * Sets a new list for Fuse to match against.
   * @param {!Array} list
   * @return {!Array} The newly set list
   * @public
   */
  Fuse.prototype.set = function (list) {
    this.list = list
    return list
  }

  Fuse.prototype.search = function (pattern) {
    if (this.options.verbose) log('\nSearch term:', pattern, '\n')

    this.pattern = pattern
    this.results = []
    this.resultMap = {}
    this._keyMap = null

    this._prepareSearchers()
    this._startSearch()
    this._computeScore()
    this._sort()

    var output = this._format()
    return output
  }

  Fuse.prototype._prepareSearchers = function () {
    var options = this.options
    var pattern = this.pattern
    var searchFn = options.searchFn
    var tokens = pattern.split(options.tokenSeparator)
    var i = 0
    var len = tokens.length

    if (this.options.tokenize) {
      this.tokenSearchers = []
      for (; i < len; i++) {
        this.tokenSearchers.push(new searchFn(tokens[i], options))
      }
    }
    this.fullSeacher = new searchFn(pattern, options)
  }

  Fuse.prototype._startSearch = function () {
    var options = this.options
    var getFn = options.getFn
    var list = this.list
    var listLen = list.length
    var keys = this.options.keys
    var keysLen = keys.length
    var key
    var weight
    var item = null
    var i
    var j

    // Check the first item in the list, if it's a string, then we assume
    // that every item in the list is also a string, and thus it's a flattened array.
    if (typeof list[0] === 'string') {
      // Iterate over every item
      for (i = 0; i < listLen; i++) {
        this._analyze('', list[i], i, i)
      }
    } else {
      this._keyMap = {}
      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      // Iterate over every item
      for (i = 0; i < listLen; i++) {
        item = list[i]
        // Iterate over every key
        for (j = 0; j < keysLen; j++) {
          key = keys[j]
          if (typeof key !== 'string') {
            weight = (1 - key.weight) || 1
            this._keyMap[key.name] = {
              weight: weight
            }
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1')
            }
            key = key.name
          } else {
            this._keyMap[key] = {
              weight: 1
            }
          }
          this._analyze(key, getFn(item, key, []), item, i)
        }
      }
    }
  }

  Fuse.prototype._analyze = function (key, text, entity, index) {
    var options = this.options
    var words
    var scores
    var exists = false
    var existingResult
    var averageScore
    var finalScore
    var scoresLen
    var mainSearchResult
    var tokenSearcher
    var termScores
    var word
    var tokenSearchResult
    var hasMatchInText
    var checkTextMatches
    var i
    var j

    // Check if the text can be searched
    if (text === undefined || text === null) {
      return
    }

    scores = []

    var numTextMatches = 0

    if (typeof text === 'string') {
      words = text.split(options.tokenSeparator)

      if (options.verbose) log('---------\nKey:', key)

      if (this.options.tokenize) {
        for (i = 0; i < this.tokenSearchers.length; i++) {
          tokenSearcher = this.tokenSearchers[i]

          if (options.verbose) log('Pattern:', tokenSearcher.pattern)

          termScores = []
          hasMatchInText = false

          for (j = 0; j < words.length; j++) {
            word = words[j]
            tokenSearchResult = tokenSearcher.search(word)
            var obj = {}
            if (tokenSearchResult.isMatch) {
              obj[word] = tokenSearchResult.score
              exists = true
              hasMatchInText = true
              scores.push(tokenSearchResult.score)
            } else {
              obj[word] = 1
              if (!this.options.matchAllTokens) {
                scores.push(1)
              }
            }
            termScores.push(obj)
          }

          if (hasMatchInText) {
            numTextMatches++
          }

          if (options.verbose) log('Token scores:', termScores)
        }

        averageScore = scores[0]
        scoresLen = scores.length
        for (i = 1; i < scoresLen; i++) {
          averageScore += scores[i]
        }
        averageScore = averageScore / scoresLen

        if (options.verbose) log('Token score average:', averageScore)
      }

      mainSearchResult = this.fullSeacher.search(text)
      if (options.verbose) log('Full text score:', mainSearchResult.score)

      finalScore = mainSearchResult.score
      if (averageScore !== undefined) {
        finalScore = (finalScore + averageScore) / 2
      }

      if (options.verbose) log('Score average:', finalScore)

      checkTextMatches = (this.options.tokenize && this.options.matchAllTokens) ? numTextMatches >= this.tokenSearchers.length : true

      if (options.verbose) log('Check Matches', checkTextMatches)

      // If a match is found, add the item to <rawResults>, including its score
      if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
        // Check if the item already exists in our results
        existingResult = this.resultMap[index]

        if (existingResult) {
          // Use the lowest score
          // existingResult.score, bitapResult.score
          existingResult.output.push({
            key: key,
            score: finalScore,
            matchedIndices: mainSearchResult.matchedIndices
          })
        } else {
          // Add it to the raw result list
          this.resultMap[index] = {
            item: entity,
            output: [{
              key: key,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            }]
          }

          this.results.push(this.resultMap[index])
        }
      }
    } else if (isArray(text)) {
      for (i = 0; i < text.length; i++) {
        this._analyze(key, text[i], entity, index)
      }
    }
  }

  Fuse.prototype._computeScore = function () {
    var i
    var j
    var keyMap = this._keyMap
    var totalScore
    var output
    var scoreLen
    var score
    var weight
    var results = this.results
    var bestScore
    var nScore

    if (this.options.verbose) log('\n\nComputing score:\n')

    for (i = 0; i < results.length; i++) {
      totalScore = 0
      output = results[i].output
      scoreLen = output.length

      bestScore = 1

      for (j = 0; j < scoreLen; j++) {
        score = output[j].score
        weight = keyMap ? keyMap[output[j].key].weight : 1

        nScore = score * weight

        if (weight !== 1) {
          bestScore = Math.min(bestScore, nScore)
        } else {
          totalScore += nScore
          output[j].nScore = nScore
        }
      }

      if (bestScore === 1) {
        results[i].score = totalScore / scoreLen
      } else {
        results[i].score = bestScore
      }

      if (this.options.verbose) log(results[i])
    }
  }

  Fuse.prototype._sort = function () {
    var options = this.options
    if (options.shouldSort) {
      if (options.verbose) log('\n\nSorting....')
      this.results.sort(options.sortFn)
    }
  }

  Fuse.prototype._format = function () {
    var options = this.options
    var getFn = options.getFn
    var finalOutput = []
    var item
    var i
    var len
    var results = this.results
    var replaceValue
    var getItemAtIndex
    var include = options.include

    if (options.verbose) log('\n\nOutput:\n\n', results)

    // Helper function, here for speed-up, which replaces the item with its value,
    // if the options specifies it,
    replaceValue = options.id ? function (index) {
      results[index].item = getFn(results[index].item, options.id, [])[0]
    } : function () {}

    getItemAtIndex = function (index) {
      var record = results[index]
      var data
      var j
      var output
      var _item
      var _result

      // If `include` has values, put the item in the result
      if (include.length > 0) {
        data = {
          item: record.item
        }
        if (include.indexOf('matches') !== -1) {
          output = record.output
          data.matches = []
          for (j = 0; j < output.length; j++) {
            _item = output[j]
            _result = {
              indices: _item.matchedIndices
            }
            if (_item.key) {
              _result.key = _item.key
            }
            data.matches.push(_result)
          }
        }

        if (include.indexOf('score') !== -1) {
          data.score = results[index].score
        }

      } else {
        data = record.item
      }

      return data
    }

    // From the results, push into a new array only the item identifier (if specified)
    // of the entire item.  This is because we don't want to return the <results>,
    // since it contains other metadata
    for (i = 0, len = results.length; i < len; i++) {
      replaceValue(i)
      item = getItemAtIndex(i)
      finalOutput.push(item)
    }

    return finalOutput
  }

  // Helpers

  function deepValue (obj, path, list) {
    var firstSegment
    var remaining
    var dotIndex
    var value
    var i
    var len

    if (!path) {
      // If there's no path left, we've gotten to the object we care about.
      list.push(obj)
    } else {
      dotIndex = path.indexOf('.')

      if (dotIndex !== -1) {
        firstSegment = path.slice(0, dotIndex)
        remaining = path.slice(dotIndex + 1)
      } else {
        firstSegment = path
      }

      value = obj[firstSegment]
      if (value !== null && value !== undefined) {
        if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
          list.push(value)
        } else if (isArray(value)) {
          // Search each item in the array.
          for (i = 0, len = value.length; i < len; i++) {
            deepValue(value[i], remaining, list)
          }
        } else if (remaining) {
          // An object. Recurse further.
          deepValue(value, remaining, list)
        }
      }
    }

    return list
  }

  function isArray (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  }

  /**
   * Adapted from "Diff, Match and Patch", by Google
   *
   *   http://code.google.com/p/google-diff-match-patch/
   *
   * Modified by: Kirollos Risk <kirollos@gmail.com>
   * -----------------------------------------------
   * Details: the algorithm and structure was modified to allow the creation of
   * <Searcher> instances with a <search> method which does the actual
   * bitap search. The <pattern> (the string that is searched for) is only defined
   * once per instance and thus it eliminates redundant re-creation when searching
   * over a list of strings.
   *
   * Licensed under the Apache License, Version 2.0 (the "License")
   * you may not use this file except in compliance with the License.
   *
   * @constructor
   */
  function BitapSearcher (pattern, options) {
    options = options || {}
    this.options = options
    this.options.location = options.location || BitapSearcher.defaultOptions.location
    this.options.distance = 'distance' in options ? options.distance : BitapSearcher.defaultOptions.distance
    this.options.threshold = 'threshold' in options ? options.threshold : BitapSearcher.defaultOptions.threshold
    this.options.maxPatternLength = options.maxPatternLength || BitapSearcher.defaultOptions.maxPatternLength

    this.pattern = options.caseSensitive ? pattern : pattern.toLowerCase()
    this.patternLen = pattern.length

    if (this.patternLen <= this.options.maxPatternLength) {
      this.matchmask = 1 << (this.patternLen - 1)
      this.patternAlphabet = this._calculatePatternAlphabet()
    }
  }

  BitapSearcher.defaultOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,

    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100,

    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,

    // Machine word size
    maxPatternLength: 32
  }

  /**
   * Initialize the alphabet for the Bitap algorithm.
   * @return {Object} Hash of character locations.
   * @private
   */
  BitapSearcher.prototype._calculatePatternAlphabet = function () {
    var mask = {},
      i = 0

    for (i = 0; i < this.patternLen; i++) {
      mask[this.pattern.charAt(i)] = 0
    }

    for (i = 0; i < this.patternLen; i++) {
      mask[this.pattern.charAt(i)] |= 1 << (this.pattern.length - i - 1)
    }

    return mask
  }

  /**
   * Compute and return the score for a match with `e` errors and `x` location.
   * @param {number} errors Number of errors in match.
   * @param {number} location Location of match.
   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
   * @private
   */
  BitapSearcher.prototype._bitapScore = function (errors, location) {
    var accuracy = errors / this.patternLen,
      proximity = Math.abs(this.options.location - location)

    if (!this.options.distance) {
      // Dodge divide by zero error.
      return proximity ? 1.0 : accuracy
    }
    return accuracy + (proximity / this.options.distance)
  }

  /**
   * Compute and return the result of the search
   * @param {string} text The text to search in
   * @return {{isMatch: boolean, score: number}} Literal containing:
   *                          isMatch - Whether the text is a match or not
   *                          score - Overall score for the match
   * @public
   */
  BitapSearcher.prototype.search = function (text) {
    var options = this.options
    var i
    var j
    var textLen
    var findAllMatches
    var location
    var threshold
    var bestLoc
    var binMin
    var binMid
    var binMax
    var start, finish
    var bitArr
    var lastBitArr
    var charMatch
    var score
    var locations
    var matches
    var isMatched
    var matchMask
    var matchedIndices
    var matchesLen
    var match

    text = options.caseSensitive ? text : text.toLowerCase()

    if (this.pattern === text) {
      // Exact match
      return {
        isMatch: true,
        score: 0,
        matchedIndices: [[0, text.length - 1]]
      }
    }

    // When pattern length is greater than the machine word length, just do a a regex comparison
    if (this.patternLen > options.maxPatternLength) {
      matches = text.match(new RegExp(this.pattern.replace(options.tokenSeparator, '|')))
      isMatched = !!matches

      if (isMatched) {
        matchedIndices = []
        for (i = 0, matchesLen = matches.length; i < matchesLen; i++) {
          match = matches[i]
          matchedIndices.push([text.indexOf(match), match.length - 1])
        }
      }

      return {
        isMatch: isMatched,
        // TODO: revisit this score
        score: isMatched ? 0.5 : 1,
        matchedIndices: matchedIndices
      }
    }

    findAllMatches = options.findAllMatches

    location = options.location
    // Set starting location at beginning text and initialize the alphabet.
    textLen = text.length
    // Highest score beyond which we give up.
    threshold = options.threshold
    // Is there a nearby exact match? (speedup)
    bestLoc = text.indexOf(this.pattern, location)

    // a mask of the matches
    matchMask = []
    for (i = 0; i < textLen; i++) {
      matchMask[i] = 0
    }

    if (bestLoc != -1) {
      threshold = Math.min(this._bitapScore(0, bestLoc), threshold)
      // What about in the other direction? (speed up)
      bestLoc = text.lastIndexOf(this.pattern, location + this.patternLen)

      if (bestLoc != -1) {
        threshold = Math.min(this._bitapScore(0, bestLoc), threshold)
      }
    }

    bestLoc = -1
    score = 1
    locations = []
    binMax = this.patternLen + textLen

    for (i = 0; i < this.patternLen; i++) {
      // Scan for the best match; each iteration allows for one more error.
      // Run a binary search to determine how far from the match location we can stray
      // at this error level.
      binMin = 0
      binMid = binMax
      while (binMin < binMid) {
        if (this._bitapScore(i, location + binMid) <= threshold) {
          binMin = binMid
        } else {
          binMax = binMid
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin)
      }

      // Use the result from this iteration as the maximum for the next.
      binMax = binMid
      start = Math.max(1, location - binMid + 1)
      if (findAllMatches) {
        finish = textLen;
      } else {
        finish = Math.min(location + binMid, textLen) + this.patternLen
      }

      // Initialize the bit array
      bitArr = Array(finish + 2)

      bitArr[finish + 1] = (1 << i) - 1

      for (j = finish; j >= start; j--) {
        charMatch = this.patternAlphabet[text.charAt(j - 1)]

        if (charMatch) {
          matchMask[j - 1] = 1
        }

        if (i === 0) {
          // First pass: exact match.
          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch
        } else {
          // Subsequent passes: fuzzy match.
          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch | (((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1) | lastBitArr[j + 1]
        }
        if (bitArr[j] & this.matchmask) {
          score = this._bitapScore(i, j - 1)

          // This match will almost certainly be better than any existing match.
          // But check anyway.
          if (score <= threshold) {
            // Indeed it is
            threshold = score
            bestLoc = j - 1
            locations.push(bestLoc)

            if (bestLoc > location) {
              // When passing loc, don't exceed our current distance from loc.
              start = Math.max(1, 2 * location - bestLoc)
            } else {
              // Already passed loc, downhill from here on in.
              break
            }
          }
        }
      }

      // No hope for a (better) match at greater error levels.
      if (this._bitapScore(i + 1, location) > threshold) {
        break
      }
      lastBitArr = bitArr
    }

    matchedIndices = this._getMatchedIndices(matchMask)

    // Count exact matches (those with a score of 0) to be "almost" exact
    return {
      isMatch: bestLoc >= 0,
      score: score === 0 ? 0.001 : score,
      matchedIndices: matchedIndices
    }
  }

  BitapSearcher.prototype._getMatchedIndices = function (matchMask) {
    var matchedIndices = []
    var start = -1
    var end = -1
    var i = 0
    var match
    var len = matchMask.length
    for (; i < len; i++) {
      match = matchMask[i]
      if (match && start === -1) {
        start = i
      } else if (!match && start !== -1) {
        end = i - 1
        if ((end - start) + 1 >= this.options.minMatchCharLength) {
            matchedIndices.push([start, end])
        }
        start = -1
      }
    }
    if (matchMask[i - 1]) {
      if ((i-1 - start) + 1 >= this.options.minMatchCharLength) {
        matchedIndices.push([start, i - 1])
      }
    }
    return matchedIndices
  }

  // Export to Common JS Loader
  if (true) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = Fuse
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(function () {
      return Fuse
    })
  } else {
    // Browser globals (root is window)
    global.Fuse = Fuse
  }

})(this);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moduleMention = __webpack_require__(1);

var _moduleMention2 = _interopRequireDefault(_moduleMention);

var _moduleEmoji = __webpack_require__(0);

var _moduleEmoji2 = _interopRequireDefault(_moduleEmoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
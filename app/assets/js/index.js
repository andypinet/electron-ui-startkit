(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    // prepare variable
    var now = Date.now();

    var DateWidget = function (_HTMLElement) {
        _inherits(DateWidget, _HTMLElement);

        function DateWidget() {
            _classCallCheck(this, DateWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(DateWidget).apply(this, arguments));
        }

        _createClass(DateWidget, [{
            key: "createdCallback",


            // Fires when an instance of the element is created.
            value: function createdCallback() {
                var self = this;
                if (!this.dataset.store) {
                    console.error("need a vm");
                }

                if (!window[this.dataset.store]) {
                    console.error("need a vm");
                }
                self.store = window[this.dataset.store];
                console.dir(this.store);

                this.innerHTML = "\n                <div class=\"container\" zl-datawidget>\n                    " + self.store.now / 10000 + "\n                </div>\n            ";
            }
        }, {
            key: "attachedCallback",

            // Fires when an instance was inserted into the document.
            value: function attachedCallback() {}
        }, {
            key: "attributeChangedCallback",

            // Fires when an attribute was added, removed, or updated.
            value: function attributeChangedCallback(attrName, oldVal, newVal) {}
        }]);

        return DateWidget;
    }(HTMLElement);

    document.registerElement('date-widget', DateWidget);
})();

},{}],2:[function(require,module,exports){
"use strict";

require("../../elements/date-widget");

},{"../../elements/date-widget":1}]},{},[2])
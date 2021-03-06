"use strict";

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _defaults(subClass, superClass); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var list = require('postcss').list;

var Value = require('../value');

var CrossFade = /*#__PURE__*/function (_Value) {
  _inheritsLoose(CrossFade, _Value);

  var _super = _createSuper(CrossFade);

  function CrossFade() {
    return _Value.apply(this, arguments) || this;
  }

  var _proto = CrossFade.prototype;

  _proto.replace = function replace(string, prefix) {
    var _this = this;

    return list.space(string).map(function (value) {
      if (value.slice(0, +_this.name.length + 1) !== _this.name + '(') {
        return value;
      }

      var close = value.lastIndexOf(')');
      var after = value.slice(close + 1);
      var args = value.slice(_this.name.length + 1, close);

      if (prefix === '-webkit-') {
        var match = args.match(/\d*.?\d+%?/);

        if (match) {
          args = args.slice(match[0].length).trim();
          args += ", " + match[0];
        } else {
          args += ', 0.5';
        }
      }

      return prefix + _this.name + '(' + args + ')' + after;
    }).join(' ');
  };

  return CrossFade;
}(Value);

_defineProperty(CrossFade, "names", ['cross-fade']);

module.exports = CrossFade;
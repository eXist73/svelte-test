(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_svelte"],{

/***/ "./resources/js/Pages/Home.svelte":
/*!****************************************!*\
  !*** ./resources/js/Pages/Home.svelte ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources\js\Pages\Home.svelte generated by Svelte v3.35.0 */



function add_css() {
  var style = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("style");
  style.id = "svelte-k92cej-style";
  style.textContent = ".full-height.svelte-k92cej.svelte-k92cej{height:100vh}.flex-center.svelte-k92cej.svelte-k92cej{align-items:center;display:flex;justify-content:center}.position-ref.svelte-k92cej.svelte-k92cej{position:relative}.content.svelte-k92cej.svelte-k92cej{text-align:center}.title.svelte-k92cej.svelte-k92cej{font-size:84px}.links.svelte-k92cej>a.svelte-k92cej{color:#636b6f;padding:0 25px;font-size:13px;font-weight:600;letter-spacing:.1rem;text-decoration:none;text-transform:uppercase}.m-b-md.svelte-k92cej.svelte-k92cej{margin-bottom:30px}";
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(document.head, style);
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (74:12) {#each links as link}


function create_each_block(ctx) {
  var a;
  var t_value =
  /*link*/
  ctx[1].text + "";
  var t;
  var a_href_value;
  return {
    c: function c() {
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value =
      /*link*/
      ctx[1].url);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "svelte-k92cej");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
    }
  };
}

function create_fragment(ctx) {
  var link;
  var style;
  var t1;
  var div3;
  var div2;
  var div0;
  var t3;
  var div1;
  var each_value =
  /*links*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      link = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("link");
      style = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("style");
      style.textContent = "html, body {\n            background-color: #fff;\n            color: #636b6f;\n            font-family: 'Nunito', sans-serif;\n            font-weight: 200;\n            height: 100vh;\n            margin: 0;\n        }";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0.textContent = "Goodbye!";
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      document.title = "Laravel and Svelte with Inertia";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(link, "href", "https://fonts.googleapis.com/css?family=Nunito:200,600");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(link, "rel", "stylesheet");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "title m-b-md svelte-k92cej");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "links svelte-k92cej");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "content svelte-k92cej");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "flex-center position-ref full-height svelte-k92cej");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(document.head, link);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(document.head, style);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div3, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(div1, null);
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*links*/
      1) {
        each_value =
        /*links*/
        ctx[0];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(div1, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(link);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(style);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

function instance($$self) {
  (0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(function () {
    console.log("the component has mounted");
  });
  var links = [{
    text: "Laravel",
    url: "https://laravel.com/"
  }, {
    text: "Inertia",
    url: "https://inertiajs.com/"
  }, {
    text: "Svelte",
    url: "https://svelte.dev/"
  }];
  return [links];
}

var Home = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Home, _SvelteComponent);

  var _super = _createSuper(Home);

  function Home(options) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this);
    if (!document.getElementById("svelte-k92cej-style")) add_css();
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return Home;
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

}]);
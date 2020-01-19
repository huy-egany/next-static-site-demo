webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/featured-product.js":
/*!****************************************!*\
  !*** ./components/featured-product.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/macos/Downloads/ega-sales-page/components/featured-product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Product = function Product(props, i) {
  return __jsx("div", {
    className: "item col-xs-12 col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    },
    __self: this
  }, __jsx("div", {
    className: "item_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("a", {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("img", {
    src: props.img,
    alt: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }))), __jsx("div", {
    className: "item_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.title))));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var settings = _ref.settings;

  var leftProduct = function leftProduct() {
    var arr = [];

    for (var i = 1; i < 4; i++) {
      var show = settings["xmas_001__featured__left__".concat(i, "__show")];
      var title = settings["xmas_001__featured__left__".concat(i, "__name")];
      var img = settings["xmas_001__featured__left__".concat(i, "__img_url")];
      var link = settings["xmas_001__featured__left__".concat(i, "__url")];

      if (show) {
        arr.push(__jsx(Product, {
          title: title,
          img: img,
          link: link,
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }));
      }
    }

    return arr;
  };

  var rightProduct = function rightProduct() {
    var arr = [];

    for (var i = 1; i < 4; i++) {
      var show = settings["xmas_001__featured__right__".concat(i, "__show")];
      var title = settings["xmas_001__featured__right__".concat(i, "__name")];
      var img = settings["xmas_001__featured__right__".concat(i, "__img_url")];
      var link = settings["xmas_001__featured__right__".concat(i, "__url")];

      if (show) {
        arr.push(__jsx(Product, {
          title: title,
          img: img,
          link: link,
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }));
      }
    }

    return arr;
  };

  return __jsx("section", {
    id: "block1",
    "data-setting": "featured",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h2", {
    className: "title_background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, settings.xmas_001__featured__title), __jsx("img", {
    src: settings.xmas_001__featured__img_url,
    "data-setting": "featured__img_url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("div", {
    className: "hot_products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "col-xs-12 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "item_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, settings.xmas_001__featured__left__title), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, leftProduct()))), __jsx("div", {
    className: "col-xs-12 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "item_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, settings.xmas_001__featured__right__title), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, rightProduct()))))));
});

/***/ })

})
//# sourceMappingURL=index.js.e7c060916551004d9ed6.hot-update.js.map
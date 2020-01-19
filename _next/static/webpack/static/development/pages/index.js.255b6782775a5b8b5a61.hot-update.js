webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/collections.js":
/*!***********************************!*\
  !*** ./components/collections.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/macos/Downloads/ega-sales-page/components/collections.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var collections = function collections(_ref) {
  var settings = _ref.settings,
      collections = _ref.collections;

  var product = function product(_ref2) {
    var product = _ref2.product,
        i = _ref2.i;
    var proClass = i < 4 ? 'col-sm-4' : 'col-sm-3';
    proClass += ' product_item col-xs-6';
    var sale = 0;

    if (product.compare_at_price > product.price) {
      sale = product.compare_at_price - price;
      sale = Math.floor(sale / product.price * 100);
    }

    var saleFlash = sale > 0 ? __jsx("div", {
      "class": "sale_flash",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "- ", sale, "%") : '';
    return __jsx("div", {
      className: proClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "item_inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "product_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("a", {
      href: product.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      src: product.featured_image.src,
      alt: product.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), saleFlash), __jsx("div", {
      "class": "product_caption",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      "class": "product_title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      href: product.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, product.title))), __jsx("div", {
      "class": "product_price clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, product.compare_at_price > product.price ? __jsx("del", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, product.compare_at_price) : '', __jsx("ins", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, product.price)))));
  };

  console.log(collections);
  return __jsx("section", {
    id: "block2",
    "data-setting": "collection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h2", {
    className: "title_background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "snowfall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, settings.xmas_001__collection__title), __jsx("img", {
    src: settings.xmas_001__collection__img_url,
    "data-setting": "collection__img_url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    className: "recommended_products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))));
};

collections.getInitialProps = function _callee() {
  var collectionUrl, res, collections;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          collectionUrl = "https://huy-egany.myharavan.com/collections/".concat(settings.xmas_001__collection__coll, "/products.json");
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(collectionUrl));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          collections = _context.sent;
          console.log(collections);
          return _context.abrupt("return", {
            settings: settings,
            collections: collections
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (collections);

/***/ })

})
//# sourceMappingURL=index.js.255b6782775a5b8b5a61.hot-update.js.map
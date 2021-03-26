exports.ids = [4];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Login.vue?vue&type=template&id=f1aeec0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"login",attrs:{"id":"login"}},[_vm._ssrNode("<div class=\"header\" data-v-f1aeec0c><img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt class=\"login--img\" data-v-f1aeec0c></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("col2",{ 'signup-form': !_vm.showLoginForm }))+" data-v-f1aeec0c>","</div>",[(_vm.showLoginForm)?_vm._ssrNode("<form data-v-f1aeec0c>","</form>",[_vm._ssrNode("<div data-v-f1aeec0c><label for=\"email1\" data-v-f1aeec0c>Name</label> <input type=\"text\" placeholder=\"you@email.com\" id=\"email1\""+(_vm._ssrAttr("value",(_vm.loginForm.name)))+" data-v-f1aeec0c></div> <div data-v-f1aeec0c><label for=\"password1\" data-v-f1aeec0c>Email</label> <input id=\"password1\""+(_vm._ssrAttr("value",(_vm.loginForm.password)))+" data-v-f1aeec0c></div> "),_c('DatePicker',{attrs:{"mode":"dateTime","timezone":null,"is24hr":""},model:{value:(_vm.loginForm.date),callback:function ($$v) {_vm.$set(_vm.loginForm, "date", $$v)},expression:"loginForm.date"}})],2):_vm._e()]),_vm._ssrNode(" <button data-v-f1aeec0c>Submit</button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Login.vue?vue&type=template&id=f1aeec0c&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(50);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  asyncData() {
    return {
      sessionId: "",
      loginForm: {
        name: "LarsTest",
        email: "larsvanderniet@gmail.com",
        date: null
      },
      signupForm: {
        name: "",
        title: "",
        email: ""
      },
      showLoginForm: true,
      showPasswordReset: false
    };
  },

  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },

    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },

    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    },

    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        name: this.signupForm.name,
        title: this.signupForm.title
      });
    },

    submit() {
      this.$store.dispatch("paymentSuccesfull", {
        name: this.loginForm.name,
        email: this.loginForm.email,
        date: this.loginForm.date
      });
    }

  },

  created() {
    external_axios_default.a.post("https://us-central1-dinnerwalks-7fc99.cloudfunctions.net/CheckoutSession").then(response => {
      this.sessionId = response.data;
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }

});
// CONCATENATED MODULE: ./pages/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f1aeec0c",
  "aa23fe3a"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0f254d2b", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/login.dd9963d.png";

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f1aeec0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f1aeec0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f1aeec0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f1aeec0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f1aeec0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main_container[data-v-f1aeec0c]{padding:0!important}.header[data-v-f1aeec0c]{margin-top:0}.login--img[data-v-f1aeec0c]{width:100%;max-width:150px;height:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=Login.js.map
exports.ids = [1];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout.vue?vue&type=template&id=5e7f1666&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"checkout"},[_vm._ssrNode("<h1 class=\"checkout--title header--title\" data-v-5e7f1666>\n        Bevestig je boeking en betaal\n    </h1> <p class=\"checkout--sub header--sub\" data-v-5e7f1666>\n        Bekijk hieronder je boeking en bevestig de gegevens. Zodra de\n        betaling voltooid is, krijg je een e-mail met de boekingsgegevens en\n        een link naar de desbetreffende wandeling.\n    </p> "),_vm._ssrNode("<div class=\"flex_container\" data-v-5e7f1666>","</div>",[_vm._ssrNode("<div class=\"flex_container--item boekingsgegevens\" data-v-5e7f1666>","</div>",[_vm._ssrNode("<h3 class=\"boekingsgegevens--title\" data-v-5e7f1666>Boekingsgegevens</h3> <div class=\"boekingsgegevens_field\" data-v-5e7f1666><select name=\"locatie\" id=\"locatie\" data-v-5e7f1666><option value=\"null\" data-v-5e7f1666>Kies een locatie</option> <option value=\"Noordwijk\" data-v-5e7f1666>Noordwijk</option> <option value=\"Katwijk\" data-v-5e7f1666>Katwijk</option></select> <label for=\"locatie\" data-v-5e7f1666>Locatie</label></div> "),_vm._ssrNode("<div class=\"boekingsgegevens_field\" data-v-5e7f1666>","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.peopleCount),expression:"peopleCount"}],attrs:{"name":"peopleCount","id":"peopleCount"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.peopleCount=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"null"}},[_vm._v("Kies het aantal personen")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("1")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("2")])]),_vm._ssrNode(" <label for=\"peopleCount\" data-v-5e7f1666>Aantal personen</label>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"boekingsgegevens_field\" data-v-5e7f1666>","</div>",[_c('DatePicker',{attrs:{"mode":"dateTime","type":"date","name":"date","id":"date","placeholder":"20 Maart 2021 om 12:30","timezone":_vm.timezone,"minute-increment":5,"is24hr":"","locale":"nl"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('input',_vm._g({domProps:{"value":inputValue}},inputEvents))]}}])}),_vm._ssrNode(" <label for=\"date\" data-v-5e7f1666>Datum van de wandeling</label>")],2),_vm._ssrNode(" <div class=\"boekingsgegevens_field\" data-v-5e7f1666><input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Uw naam\" data-v-5e7f1666> <label for=\"name\" data-v-5e7f1666>Volledige naam</label></div> <div class=\"boekingsgegevens_field\" data-v-5e7f1666><input type=\"email\" name=\"email\" id=\"email\" placeholder=\"email@voorbeeld.nl\" data-v-5e7f1666> <label for=\"email\" data-v-5e7f1666>E-mailadres</label></div> <div class=\"boekingsgegevens_field\" data-v-5e7f1666><input type=\"tel\" name=\"phone\" id=\"phone\" placeholder=\"06-1234567\" data-v-5e7f1666> <label for=\"phone\" data-v-5e7f1666>Telefoonnummer</label></div>")],2),_vm._ssrNode(" <div class=\"flex_container--item boekingskosten\" data-v-5e7f1666><h3 class=\"boekingskosten--title\" data-v-5e7f1666>Deze boeking kost</h3> <div class=\"boekingskosten_prijs\" data-v-5e7f1666><p class=\"boekingskosten_prijs--teken\" data-v-5e7f1666>€</p> <p class=\"boekingskosten_prijs--amount\" data-v-5e7f1666>"+_vm._ssrEscape(_vm._s(_vm.getPrice))+"</p> <p class=\"boekingskosten_prijs--after\" data-v-5e7f1666>.00</p></div> <p class=\"boekingskosten--sub\" data-v-5e7f1666>\n                Het is niet mogelijk om dit bedrag terug te krijgen.\n                Wandelen kan namelijk altijd!\n            </p> <p class=\"boekingskosten_extra\" data-v-5e7f1666>\n                Betalen kan via credit card, IDEAL, Paypal, Klarna, etc.\n            </p></div>")],2),_vm._ssrNode(" <div class=\"checkout_buttons\" data-v-5e7f1666><a href=\"/walks\" class=\"checkout_buttons--return\" data-v-5e7f1666>Terug naar walks</a> <button class=\"checkout_buttons--betalen\" data-v-5e7f1666>Betalen</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Checkout.vue?vue&type=template&id=5e7f1666&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Checkoutvue_type_script_lang_js_ = ({
  name: "Checkout",

  asyncData() {
    return {
      peopleCount: null,
      price: 0,
      timezone: ""
    };
  },

  methods: {
    goToWalks() {
      this.$router.push("/walks");
    }

  },
  computed: {
    getPrice: function () {
      if (this.peopleCount == 1) {
        return 3;
      } else if (this.peopleCount == 2) {
        return 6;
      }

      return 0;
    }
  }
});
// CONCATENATED MODULE: ./pages/Checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Checkoutvue_type_script_lang_js_ = (Checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Checkout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5e7f1666",
  "7bf94388"
  
)

/* harmony default export */ var Checkout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2d63a94b", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5e7f1666_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5e7f1666_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5e7f1666_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5e7f1666_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5e7f1666_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".checkout[data-v-5e7f1666]{margin-top:30px;background-color:#fcfcfc;box-shadow:0 4px 49px 6px rgba(0,0,0,.25);text-align:left;padding:100px 90px;margin-right:200px}.checkout--sub[data-v-5e7f1666]{max-width:700px;width:100%}.flex_container--item[data-v-5e7f1666]{flex:1 1 auto}.boekingsgegevens[data-v-5e7f1666]{padding:50px;box-shadow:18px 15px 23px -13px rgba(0,0,0,.1);border-radius:20px;background-color:#fff;margin-top:50px;max-width:570px;width:100%}.boekingsgegevens--title[data-v-5e7f1666]{font-weight:600;color:#000;letter-spacing:.16em;text-transform:uppercase;margin-bottom:20px;font-size:23px;margin-left:10px}.boekingsgegevens_field[data-v-5e7f1666]{display:flex;flex-flow:column-reverse}label[data-v-5e7f1666]{font-size:22px;font-weight:600;margin-bottom:10px;margin-left:10px;letter-spacing:.05em;color:#b7b7b7;z-index:0}input[data-v-5e7f1666],label[data-v-5e7f1666]{transition:all .2s;touch-action:manipulation;background:none}input[data-v-5e7f1666],select[data-v-5e7f1666],textarea[data-v-5e7f1666]{font-family:Avenir,Helvetica,Arial,sans-serif;resize:none;border:1px solid rgba(0,0,0,.185);border-radius:20px;margin-bottom:10px;padding:10px 5px 10px 20px;color:#000;font-size:22px;-webkit-appearance:none;cursor:pointer;z-index:1}input[data-v-5e7f1666]:focus,select[data-v-5e7f1666]:focus,textarea[data-v-5e7f1666]:focus{border:2px solid #ffb496}input:-moz-placeholder-shown+label[data-v-5e7f1666]{cursor:text;max-width:66.66%;white-space:nowrap;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(.5rem,3rem) scale(1.1)}input:-ms-input-placeholder+label[data-v-5e7f1666]{cursor:text;max-width:66.66%;white-space:nowrap;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(.5rem,3rem) scale(1.1)}input:placeholder-shown+label[data-v-5e7f1666]{cursor:text;max-width:66.66%;white-space:nowrap;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(.5rem,3rem) scale(1.1)}[data-v-5e7f1666]::-moz-placeholder{color:rgba(0,0,0,.274)}[data-v-5e7f1666]::placeholder{color:rgba(0,0,0,.274)}[data-v-5e7f1666]:-ms-input-placeholder{color:rgba(0,0,0,.274)}[data-v-5e7f1666]::-ms-input-placeholder{color:rgba(0,0,0,.274)}[data-v-5e7f1666]::-webkit-input-placeholder{opacity:0;-webkit-transition:inherit;transition:inherit}input[data-v-5e7f1666]:focus::-webkit-input-placeholder{opacity:1}input:not(:-moz-placeholder-shown)+label[data-v-5e7f1666]{transform:translate(0) scale(1);cursor:pointer}input:not(:-ms-input-placeholder)+label[data-v-5e7f1666]{transform:translate(0) scale(1);cursor:pointer}input:focus+label[data-v-5e7f1666],input:not(:placeholder-shown)+label[data-v-5e7f1666]{transform:translate(0) scale(1);cursor:pointer}.boekingskosten[data-v-5e7f1666]{padding:50px;background-color:#ffb496;border-radius:20px;box-shadow:18px 15px 23px -13px rgba(0,0,0,.1);color:#fff;height:100%;margin-top:50px;margin-left:30px;width:auto}.boekingskosten--title[data-v-5e7f1666]{font-weight:600;font-size:22px;padding-bottom:10px}.boekingskosten_prijs[data-v-5e7f1666]{padding:10px 0;position:relative}.boekingskosten_prijs--teken[data-v-5e7f1666]{display:inline-block;color:#ffede5;font-weight:700;font-size:20px;top:10px;left:-15px;position:absolute}.boekingskosten_prijs--amount[data-v-5e7f1666]{display:inline-block;font-size:46px;font-weight:700}.boekingskosten_prijs--after[data-v-5e7f1666]{display:inline-block;color:#ffede5;font-weight:700}.boekingskosten--sub[data-v-5e7f1666]{color:hsla(0,0%,100%,.7);padding:10px 0}.boekingskosten_extra[data-v-5e7f1666]{background-color:#ffccb8;color:#fff;margin-top:10px;padding:20px}.checkout_buttons[data-v-5e7f1666]{margin:50px 0;position:relative;width:100%}.checkout_buttons--return[data-v-5e7f1666]{color:#b7b7b7;text-decoration:none;font-weight:500;font-size:20px}.checkout_buttons--betalen[data-v-5e7f1666]{margin:0;position:absolute;top:50%;right:0;transform:translateY(-50%);background-color:#ffb496;padding:20px 30px;border-radius:20px;font-size:20px;font-weight:500;color:#fff;border:none;box-shadow:18px 15px 23px -13px rgba(0,0,0,.1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=Checkout.js.map
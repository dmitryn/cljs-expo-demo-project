// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_exponent.core');
goog.require('cljs.core');
cljs_exponent.core.react_native = ((typeof require !== 'undefined')?require("react-native"):null);
cljs_exponent.core.react = ((typeof require !== 'undefined')?require("react"):null);
cljs_exponent.core.exponent = ((typeof require !== 'undefined')?require("expo"):null);
cljs_exponent.core.expo = cljs_exponent.core.exponent;
if(cljs.core.truth_(cljs_exponent.core.react_native)){
window.React = cljs_exponent.core.react;
} else {
}

//# sourceMappingURL=core.js.map
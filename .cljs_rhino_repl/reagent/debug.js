// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__47998__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__47998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47999__i = 0, G__47999__a = new Array(arguments.length -  0);
while (G__47999__i < G__47999__a.length) {G__47999__a[G__47999__i] = arguments[G__47999__i + 0]; ++G__47999__i;}
  args = new cljs.core.IndexedSeq(G__47999__a,0);
} 
return G__47998__delegate.call(this,args);};
G__47998.cljs$lang$maxFixedArity = 0;
G__47998.cljs$lang$applyTo = (function (arglist__48000){
var args = cljs.core.seq(arglist__48000);
return G__47998__delegate(args);
});
G__47998.cljs$core$IFn$_invoke$arity$variadic = G__47998__delegate;
return G__47998;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__48001__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__48001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48002__i = 0, G__48002__a = new Array(arguments.length -  0);
while (G__48002__i < G__48002__a.length) {G__48002__a[G__48002__i] = arguments[G__48002__i + 0]; ++G__48002__i;}
  args = new cljs.core.IndexedSeq(G__48002__a,0);
} 
return G__48001__delegate.call(this,args);};
G__48001.cljs$lang$maxFixedArity = 0;
G__48001.cljs$lang$applyTo = (function (arglist__48003){
var args = cljs.core.seq(arglist__48003);
return G__48001__delegate(args);
});
G__48001.cljs$core$IFn$_invoke$arity$variadic = G__48001__delegate;
return G__48001;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
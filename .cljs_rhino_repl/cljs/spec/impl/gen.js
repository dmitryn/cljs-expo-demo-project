// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__46124__auto__,writer__46125__auto__,opt__46126__auto__){
return cljs.core._write.call(null,writer__46125__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48771 = arguments.length;
var i__46689__auto___48772 = (0);
while(true){
if((i__46689__auto___48772 < len__46688__auto___48771)){
args__46695__auto__.push((arguments[i__46689__auto___48772]));

var G__48773 = (i__46689__auto___48772 + (1));
i__46689__auto___48772 = G__48773;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq48770){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48770));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48775 = arguments.length;
var i__46689__auto___48776 = (0);
while(true){
if((i__46689__auto___48776 < len__46688__auto___48775)){
args__46695__auto__.push((arguments[i__46689__auto___48776]));

var G__48777 = (i__46689__auto___48776 + (1));
i__46689__auto___48776 = G__48777;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq48774){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48774));
});

var g_QMARK__48778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_48779 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__48778){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__48778))
,null));
var mkg_48780 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__48778,g_48779){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__48778,g_48779))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__48778,g_48779,mkg_48780){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__48778).call(null,x);
});})(g_QMARK__48778,g_48779,mkg_48780))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__48778,g_48779,mkg_48780){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_48780).call(null,gfn);
});})(g_QMARK__48778,g_48779,mkg_48780))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__48778,g_48779,mkg_48780){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_48779).call(null,generator);
});})(g_QMARK__48778,g_48779,mkg_48780))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__46772__auto___48799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__46772__auto___48799){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48800 = arguments.length;
var i__46689__auto___48801 = (0);
while(true){
if((i__46689__auto___48801 < len__46688__auto___48800)){
args__46695__auto__.push((arguments[i__46689__auto___48801]));

var G__48802 = (i__46689__auto___48801 + (1));
i__46689__auto___48801 = G__48802;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48799))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48799),args);
});})(g__46772__auto___48799))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__46772__auto___48799){
return (function (seq48781){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48781));
});})(g__46772__auto___48799))
;


var g__46772__auto___48803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__46772__auto___48803){
return (function cljs$spec$impl$gen$list(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48804 = arguments.length;
var i__46689__auto___48805 = (0);
while(true){
if((i__46689__auto___48805 < len__46688__auto___48804)){
args__46695__auto__.push((arguments[i__46689__auto___48805]));

var G__48806 = (i__46689__auto___48805 + (1));
i__46689__auto___48805 = G__48806;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48803))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48803){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48803),args);
});})(g__46772__auto___48803))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__46772__auto___48803){
return (function (seq48782){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48782));
});})(g__46772__auto___48803))
;


var g__46772__auto___48807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__46772__auto___48807){
return (function cljs$spec$impl$gen$map(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48808 = arguments.length;
var i__46689__auto___48809 = (0);
while(true){
if((i__46689__auto___48809 < len__46688__auto___48808)){
args__46695__auto__.push((arguments[i__46689__auto___48809]));

var G__48810 = (i__46689__auto___48809 + (1));
i__46689__auto___48809 = G__48810;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48807))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48807){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48807),args);
});})(g__46772__auto___48807))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__46772__auto___48807){
return (function (seq48783){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48783));
});})(g__46772__auto___48807))
;


var g__46772__auto___48811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__46772__auto___48811){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48812 = arguments.length;
var i__46689__auto___48813 = (0);
while(true){
if((i__46689__auto___48813 < len__46688__auto___48812)){
args__46695__auto__.push((arguments[i__46689__auto___48813]));

var G__48814 = (i__46689__auto___48813 + (1));
i__46689__auto___48813 = G__48814;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48811))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48811){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48811),args);
});})(g__46772__auto___48811))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__46772__auto___48811){
return (function (seq48784){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48784));
});})(g__46772__auto___48811))
;


var g__46772__auto___48815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__46772__auto___48815){
return (function cljs$spec$impl$gen$set(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48816 = arguments.length;
var i__46689__auto___48817 = (0);
while(true){
if((i__46689__auto___48817 < len__46688__auto___48816)){
args__46695__auto__.push((arguments[i__46689__auto___48817]));

var G__48818 = (i__46689__auto___48817 + (1));
i__46689__auto___48817 = G__48818;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48815))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48815){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48815),args);
});})(g__46772__auto___48815))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__46772__auto___48815){
return (function (seq48785){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48785));
});})(g__46772__auto___48815))
;


var g__46772__auto___48819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__46772__auto___48819){
return (function cljs$spec$impl$gen$vector(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48820 = arguments.length;
var i__46689__auto___48821 = (0);
while(true){
if((i__46689__auto___48821 < len__46688__auto___48820)){
args__46695__auto__.push((arguments[i__46689__auto___48821]));

var G__48822 = (i__46689__auto___48821 + (1));
i__46689__auto___48821 = G__48822;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48819))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48819),args);
});})(g__46772__auto___48819))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__46772__auto___48819){
return (function (seq48786){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48786));
});})(g__46772__auto___48819))
;


var g__46772__auto___48823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__46772__auto___48823){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48824 = arguments.length;
var i__46689__auto___48825 = (0);
while(true){
if((i__46689__auto___48825 < len__46688__auto___48824)){
args__46695__auto__.push((arguments[i__46689__auto___48825]));

var G__48826 = (i__46689__auto___48825 + (1));
i__46689__auto___48825 = G__48826;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48823))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48823),args);
});})(g__46772__auto___48823))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__46772__auto___48823){
return (function (seq48787){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48787));
});})(g__46772__auto___48823))
;


var g__46772__auto___48827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__46772__auto___48827){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48828 = arguments.length;
var i__46689__auto___48829 = (0);
while(true){
if((i__46689__auto___48829 < len__46688__auto___48828)){
args__46695__auto__.push((arguments[i__46689__auto___48829]));

var G__48830 = (i__46689__auto___48829 + (1));
i__46689__auto___48829 = G__48830;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48827))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48827),args);
});})(g__46772__auto___48827))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__46772__auto___48827){
return (function (seq48788){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48788));
});})(g__46772__auto___48827))
;


var g__46772__auto___48831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__46772__auto___48831){
return (function cljs$spec$impl$gen$elements(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48832 = arguments.length;
var i__46689__auto___48833 = (0);
while(true){
if((i__46689__auto___48833 < len__46688__auto___48832)){
args__46695__auto__.push((arguments[i__46689__auto___48833]));

var G__48834 = (i__46689__auto___48833 + (1));
i__46689__auto___48833 = G__48834;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48831))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48831),args);
});})(g__46772__auto___48831))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__46772__auto___48831){
return (function (seq48789){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48789));
});})(g__46772__auto___48831))
;


var g__46772__auto___48835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__46772__auto___48835){
return (function cljs$spec$impl$gen$bind(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48836 = arguments.length;
var i__46689__auto___48837 = (0);
while(true){
if((i__46689__auto___48837 < len__46688__auto___48836)){
args__46695__auto__.push((arguments[i__46689__auto___48837]));

var G__48838 = (i__46689__auto___48837 + (1));
i__46689__auto___48837 = G__48838;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48835))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48835),args);
});})(g__46772__auto___48835))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__46772__auto___48835){
return (function (seq48790){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48790));
});})(g__46772__auto___48835))
;


var g__46772__auto___48839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__46772__auto___48839){
return (function cljs$spec$impl$gen$choose(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48840 = arguments.length;
var i__46689__auto___48841 = (0);
while(true){
if((i__46689__auto___48841 < len__46688__auto___48840)){
args__46695__auto__.push((arguments[i__46689__auto___48841]));

var G__48842 = (i__46689__auto___48841 + (1));
i__46689__auto___48841 = G__48842;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48839))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48839),args);
});})(g__46772__auto___48839))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__46772__auto___48839){
return (function (seq48791){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48791));
});})(g__46772__auto___48839))
;


var g__46772__auto___48843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__46772__auto___48843){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48844 = arguments.length;
var i__46689__auto___48845 = (0);
while(true){
if((i__46689__auto___48845 < len__46688__auto___48844)){
args__46695__auto__.push((arguments[i__46689__auto___48845]));

var G__48846 = (i__46689__auto___48845 + (1));
i__46689__auto___48845 = G__48846;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48843))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48843),args);
});})(g__46772__auto___48843))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__46772__auto___48843){
return (function (seq48792){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48792));
});})(g__46772__auto___48843))
;


var g__46772__auto___48847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__46772__auto___48847){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48848 = arguments.length;
var i__46689__auto___48849 = (0);
while(true){
if((i__46689__auto___48849 < len__46688__auto___48848)){
args__46695__auto__.push((arguments[i__46689__auto___48849]));

var G__48850 = (i__46689__auto___48849 + (1));
i__46689__auto___48849 = G__48850;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48847))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48847),args);
});})(g__46772__auto___48847))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__46772__auto___48847){
return (function (seq48793){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48793));
});})(g__46772__auto___48847))
;


var g__46772__auto___48851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__46772__auto___48851){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48852 = arguments.length;
var i__46689__auto___48853 = (0);
while(true){
if((i__46689__auto___48853 < len__46688__auto___48852)){
args__46695__auto__.push((arguments[i__46689__auto___48853]));

var G__48854 = (i__46689__auto___48853 + (1));
i__46689__auto___48853 = G__48854;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48851))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48851),args);
});})(g__46772__auto___48851))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__46772__auto___48851){
return (function (seq48794){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48794));
});})(g__46772__auto___48851))
;


var g__46772__auto___48855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__46772__auto___48855){
return (function cljs$spec$impl$gen$sample(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48856 = arguments.length;
var i__46689__auto___48857 = (0);
while(true){
if((i__46689__auto___48857 < len__46688__auto___48856)){
args__46695__auto__.push((arguments[i__46689__auto___48857]));

var G__48858 = (i__46689__auto___48857 + (1));
i__46689__auto___48857 = G__48858;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48855))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48855),args);
});})(g__46772__auto___48855))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__46772__auto___48855){
return (function (seq48795){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48795));
});})(g__46772__auto___48855))
;


var g__46772__auto___48859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__46772__auto___48859){
return (function cljs$spec$impl$gen$return(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48860 = arguments.length;
var i__46689__auto___48861 = (0);
while(true){
if((i__46689__auto___48861 < len__46688__auto___48860)){
args__46695__auto__.push((arguments[i__46689__auto___48861]));

var G__48862 = (i__46689__auto___48861 + (1));
i__46689__auto___48861 = G__48862;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48859))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48859),args);
});})(g__46772__auto___48859))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__46772__auto___48859){
return (function (seq48796){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48796));
});})(g__46772__auto___48859))
;


var g__46772__auto___48863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__46772__auto___48863){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48864 = arguments.length;
var i__46689__auto___48865 = (0);
while(true){
if((i__46689__auto___48865 < len__46688__auto___48864)){
args__46695__auto__.push((arguments[i__46689__auto___48865]));

var G__48866 = (i__46689__auto___48865 + (1));
i__46689__auto___48865 = G__48866;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48863))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48863),args);
});})(g__46772__auto___48863))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__46772__auto___48863){
return (function (seq48797){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48797));
});})(g__46772__auto___48863))
;


var g__46772__auto___48867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__46772__auto___48867){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48868 = arguments.length;
var i__46689__auto___48869 = (0);
while(true){
if((i__46689__auto___48869 < len__46688__auto___48868)){
args__46695__auto__.push((arguments[i__46689__auto___48869]));

var G__48870 = (i__46689__auto___48869 + (1));
i__46689__auto___48869 = G__48870;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46772__auto___48867))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46772__auto___48867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46772__auto___48867),args);
});})(g__46772__auto___48867))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__46772__auto___48867){
return (function (seq48798){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48798));
});})(g__46772__auto___48867))
;

var g__46785__auto___48892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__46785__auto___48892){
return (function cljs$spec$impl$gen$any(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48893 = arguments.length;
var i__46689__auto___48894 = (0);
while(true){
if((i__46689__auto___48894 < len__46688__auto___48893)){
args__46695__auto__.push((arguments[i__46689__auto___48894]));

var G__48895 = (i__46689__auto___48894 + (1));
i__46689__auto___48894 = G__48895;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48892))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48892){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48892);
});})(g__46785__auto___48892))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__46785__auto___48892){
return (function (seq48871){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48871));
});})(g__46785__auto___48892))
;


var g__46785__auto___48896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__46785__auto___48896){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48897 = arguments.length;
var i__46689__auto___48898 = (0);
while(true){
if((i__46689__auto___48898 < len__46688__auto___48897)){
args__46695__auto__.push((arguments[i__46689__auto___48898]));

var G__48899 = (i__46689__auto___48898 + (1));
i__46689__auto___48898 = G__48899;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48896))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48896){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48896);
});})(g__46785__auto___48896))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__46785__auto___48896){
return (function (seq48872){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48872));
});})(g__46785__auto___48896))
;


var g__46785__auto___48900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__46785__auto___48900){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48901 = arguments.length;
var i__46689__auto___48902 = (0);
while(true){
if((i__46689__auto___48902 < len__46688__auto___48901)){
args__46695__auto__.push((arguments[i__46689__auto___48902]));

var G__48903 = (i__46689__auto___48902 + (1));
i__46689__auto___48902 = G__48903;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48900))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48900){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48900);
});})(g__46785__auto___48900))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__46785__auto___48900){
return (function (seq48873){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48873));
});})(g__46785__auto___48900))
;


var g__46785__auto___48904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__46785__auto___48904){
return (function cljs$spec$impl$gen$char(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48905 = arguments.length;
var i__46689__auto___48906 = (0);
while(true){
if((i__46689__auto___48906 < len__46688__auto___48905)){
args__46695__auto__.push((arguments[i__46689__auto___48906]));

var G__48907 = (i__46689__auto___48906 + (1));
i__46689__auto___48906 = G__48907;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48904))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48904){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48904);
});})(g__46785__auto___48904))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__46785__auto___48904){
return (function (seq48874){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48874));
});})(g__46785__auto___48904))
;


var g__46785__auto___48908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__46785__auto___48908){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48909 = arguments.length;
var i__46689__auto___48910 = (0);
while(true){
if((i__46689__auto___48910 < len__46688__auto___48909)){
args__46695__auto__.push((arguments[i__46689__auto___48910]));

var G__48911 = (i__46689__auto___48910 + (1));
i__46689__auto___48910 = G__48911;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48908))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48908){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48908);
});})(g__46785__auto___48908))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__46785__auto___48908){
return (function (seq48875){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48875));
});})(g__46785__auto___48908))
;


var g__46785__auto___48912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__46785__auto___48912){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48913 = arguments.length;
var i__46689__auto___48914 = (0);
while(true){
if((i__46689__auto___48914 < len__46688__auto___48913)){
args__46695__auto__.push((arguments[i__46689__auto___48914]));

var G__48915 = (i__46689__auto___48914 + (1));
i__46689__auto___48914 = G__48915;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48912))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48912){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48912);
});})(g__46785__auto___48912))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__46785__auto___48912){
return (function (seq48876){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48876));
});})(g__46785__auto___48912))
;


var g__46785__auto___48916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__46785__auto___48916){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48917 = arguments.length;
var i__46689__auto___48918 = (0);
while(true){
if((i__46689__auto___48918 < len__46688__auto___48917)){
args__46695__auto__.push((arguments[i__46689__auto___48918]));

var G__48919 = (i__46689__auto___48918 + (1));
i__46689__auto___48918 = G__48919;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48916))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48916){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48916);
});})(g__46785__auto___48916))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__46785__auto___48916){
return (function (seq48877){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48877));
});})(g__46785__auto___48916))
;


var g__46785__auto___48920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__46785__auto___48920){
return (function cljs$spec$impl$gen$double(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48921 = arguments.length;
var i__46689__auto___48922 = (0);
while(true){
if((i__46689__auto___48922 < len__46688__auto___48921)){
args__46695__auto__.push((arguments[i__46689__auto___48922]));

var G__48923 = (i__46689__auto___48922 + (1));
i__46689__auto___48922 = G__48923;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48920))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48920){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48920);
});})(g__46785__auto___48920))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__46785__auto___48920){
return (function (seq48878){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48878));
});})(g__46785__auto___48920))
;


var g__46785__auto___48924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__46785__auto___48924){
return (function cljs$spec$impl$gen$int(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48925 = arguments.length;
var i__46689__auto___48926 = (0);
while(true){
if((i__46689__auto___48926 < len__46688__auto___48925)){
args__46695__auto__.push((arguments[i__46689__auto___48926]));

var G__48927 = (i__46689__auto___48926 + (1));
i__46689__auto___48926 = G__48927;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48924))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48924){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48924);
});})(g__46785__auto___48924))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__46785__auto___48924){
return (function (seq48879){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48879));
});})(g__46785__auto___48924))
;


var g__46785__auto___48928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__46785__auto___48928){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48929 = arguments.length;
var i__46689__auto___48930 = (0);
while(true){
if((i__46689__auto___48930 < len__46688__auto___48929)){
args__46695__auto__.push((arguments[i__46689__auto___48930]));

var G__48931 = (i__46689__auto___48930 + (1));
i__46689__auto___48930 = G__48931;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48928))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48928){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48928);
});})(g__46785__auto___48928))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__46785__auto___48928){
return (function (seq48880){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48880));
});})(g__46785__auto___48928))
;


var g__46785__auto___48932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__46785__auto___48932){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48933 = arguments.length;
var i__46689__auto___48934 = (0);
while(true){
if((i__46689__auto___48934 < len__46688__auto___48933)){
args__46695__auto__.push((arguments[i__46689__auto___48934]));

var G__48935 = (i__46689__auto___48934 + (1));
i__46689__auto___48934 = G__48935;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48932))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48932){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48932);
});})(g__46785__auto___48932))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__46785__auto___48932){
return (function (seq48881){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48881));
});})(g__46785__auto___48932))
;


var g__46785__auto___48936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__46785__auto___48936){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48937 = arguments.length;
var i__46689__auto___48938 = (0);
while(true){
if((i__46689__auto___48938 < len__46688__auto___48937)){
args__46695__auto__.push((arguments[i__46689__auto___48938]));

var G__48939 = (i__46689__auto___48938 + (1));
i__46689__auto___48938 = G__48939;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48936))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48936){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48936);
});})(g__46785__auto___48936))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__46785__auto___48936){
return (function (seq48882){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48882));
});})(g__46785__auto___48936))
;


var g__46785__auto___48940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__46785__auto___48940){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48941 = arguments.length;
var i__46689__auto___48942 = (0);
while(true){
if((i__46689__auto___48942 < len__46688__auto___48941)){
args__46695__auto__.push((arguments[i__46689__auto___48942]));

var G__48943 = (i__46689__auto___48942 + (1));
i__46689__auto___48942 = G__48943;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48940))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48940){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48940);
});})(g__46785__auto___48940))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__46785__auto___48940){
return (function (seq48883){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48883));
});})(g__46785__auto___48940))
;


var g__46785__auto___48944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__46785__auto___48944){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48945 = arguments.length;
var i__46689__auto___48946 = (0);
while(true){
if((i__46689__auto___48946 < len__46688__auto___48945)){
args__46695__auto__.push((arguments[i__46689__auto___48946]));

var G__48947 = (i__46689__auto___48946 + (1));
i__46689__auto___48946 = G__48947;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48944))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48944){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48944);
});})(g__46785__auto___48944))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__46785__auto___48944){
return (function (seq48884){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48884));
});})(g__46785__auto___48944))
;


var g__46785__auto___48948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__46785__auto___48948){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48949 = arguments.length;
var i__46689__auto___48950 = (0);
while(true){
if((i__46689__auto___48950 < len__46688__auto___48949)){
args__46695__auto__.push((arguments[i__46689__auto___48950]));

var G__48951 = (i__46689__auto___48950 + (1));
i__46689__auto___48950 = G__48951;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48948))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48948){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48948);
});})(g__46785__auto___48948))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__46785__auto___48948){
return (function (seq48885){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48885));
});})(g__46785__auto___48948))
;


var g__46785__auto___48952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__46785__auto___48952){
return (function cljs$spec$impl$gen$string(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48953 = arguments.length;
var i__46689__auto___48954 = (0);
while(true){
if((i__46689__auto___48954 < len__46688__auto___48953)){
args__46695__auto__.push((arguments[i__46689__auto___48954]));

var G__48955 = (i__46689__auto___48954 + (1));
i__46689__auto___48954 = G__48955;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48952))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48952){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48952);
});})(g__46785__auto___48952))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__46785__auto___48952){
return (function (seq48886){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48886));
});})(g__46785__auto___48952))
;


var g__46785__auto___48956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__46785__auto___48956){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48957 = arguments.length;
var i__46689__auto___48958 = (0);
while(true){
if((i__46689__auto___48958 < len__46688__auto___48957)){
args__46695__auto__.push((arguments[i__46689__auto___48958]));

var G__48959 = (i__46689__auto___48958 + (1));
i__46689__auto___48958 = G__48959;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48956))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48956){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48956);
});})(g__46785__auto___48956))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__46785__auto___48956){
return (function (seq48887){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48887));
});})(g__46785__auto___48956))
;


var g__46785__auto___48960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__46785__auto___48960){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48961 = arguments.length;
var i__46689__auto___48962 = (0);
while(true){
if((i__46689__auto___48962 < len__46688__auto___48961)){
args__46695__auto__.push((arguments[i__46689__auto___48962]));

var G__48963 = (i__46689__auto___48962 + (1));
i__46689__auto___48962 = G__48963;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48960))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48960){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48960);
});})(g__46785__auto___48960))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__46785__auto___48960){
return (function (seq48888){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48888));
});})(g__46785__auto___48960))
;


var g__46785__auto___48964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__46785__auto___48964){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48965 = arguments.length;
var i__46689__auto___48966 = (0);
while(true){
if((i__46689__auto___48966 < len__46688__auto___48965)){
args__46695__auto__.push((arguments[i__46689__auto___48966]));

var G__48967 = (i__46689__auto___48966 + (1));
i__46689__auto___48966 = G__48967;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48964))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48964){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48964);
});})(g__46785__auto___48964))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__46785__auto___48964){
return (function (seq48889){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48889));
});})(g__46785__auto___48964))
;


var g__46785__auto___48968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__46785__auto___48968){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48969 = arguments.length;
var i__46689__auto___48970 = (0);
while(true){
if((i__46689__auto___48970 < len__46688__auto___48969)){
args__46695__auto__.push((arguments[i__46689__auto___48970]));

var G__48971 = (i__46689__auto___48970 + (1));
i__46689__auto___48970 = G__48971;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48968))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48968){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48968);
});})(g__46785__auto___48968))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__46785__auto___48968){
return (function (seq48890){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48890));
});})(g__46785__auto___48968))
;


var g__46785__auto___48972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__46785__auto___48972){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48973 = arguments.length;
var i__46689__auto___48974 = (0);
while(true){
if((i__46689__auto___48974 < len__46688__auto___48973)){
args__46695__auto__.push((arguments[i__46689__auto___48974]));

var G__48975 = (i__46689__auto___48974 + (1));
i__46689__auto___48974 = G__48975;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});})(g__46785__auto___48972))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46785__auto___48972){
return (function (args){
return cljs.core.deref.call(null,g__46785__auto___48972);
});})(g__46785__auto___48972))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__46785__auto___48972){
return (function (seq48891){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48891));
});})(g__46785__auto___48972))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48978 = arguments.length;
var i__46689__auto___48979 = (0);
while(true){
if((i__46689__auto___48979 < len__46688__auto___48978)){
args__46695__auto__.push((arguments[i__46689__auto___48979]));

var G__48980 = (i__46689__auto___48979 + (1));
i__46689__auto___48979 = G__48980;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((0) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__46696__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__48976_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__48976_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq48977){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48977));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__48981_SHARP_){
return (new Date(p1__48981_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map
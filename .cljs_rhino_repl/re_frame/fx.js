// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__48980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48981 = null;
var count__48982 = (0);
var i__48983 = (0);
while(true){
if((i__48983 < count__48982)){
var vec__48984 = cljs.core._nth.call(null,chunk__48981,i__48983);
var effect_k = cljs.core.nth.call(null,vec__48984,(0),null);
var value = cljs.core.nth.call(null,vec__48984,(1),null);
var temp__6501__auto___48990 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6501__auto___48990)){
var effect_fn_48991 = temp__6501__auto___48990;
effect_fn_48991.call(null,value);
} else {
}

var G__48992 = seq__48980;
var G__48993 = chunk__48981;
var G__48994 = count__48982;
var G__48995 = (i__48983 + (1));
seq__48980 = G__48992;
chunk__48981 = G__48993;
count__48982 = G__48994;
i__48983 = G__48995;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__48980);
if(temp__6503__auto__){
var seq__48980__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48980__$1)){
var c__46378__auto__ = cljs.core.chunk_first.call(null,seq__48980__$1);
var G__48996 = cljs.core.chunk_rest.call(null,seq__48980__$1);
var G__48997 = c__46378__auto__;
var G__48998 = cljs.core.count.call(null,c__46378__auto__);
var G__48999 = (0);
seq__48980 = G__48996;
chunk__48981 = G__48997;
count__48982 = G__48998;
i__48983 = G__48999;
continue;
} else {
var vec__48987 = cljs.core.first.call(null,seq__48980__$1);
var effect_k = cljs.core.nth.call(null,vec__48987,(0),null);
var value = cljs.core.nth.call(null,vec__48987,(1),null);
var temp__6501__auto___49000 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6501__auto___49000)){
var effect_fn_49001 = temp__6501__auto___49000;
effect_fn_49001.call(null,value);
} else {
}

var G__49002 = cljs.core.next.call(null,seq__48980__$1);
var G__49003 = null;
var G__49004 = (0);
var G__49005 = (0);
seq__48980 = G__49002;
chunk__48981 = G__49003;
count__48982 = G__49004;
i__48983 = G__49005;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49006 = cljs.core.seq.call(null,value);
var chunk__49007 = null;
var count__49008 = (0);
var i__49009 = (0);
while(true){
if((i__49009 < count__49008)){
var map__49010 = cljs.core._nth.call(null,chunk__49007,i__49009);
var map__49010__$1 = ((((!((map__49010 == null)))?((((map__49010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49010):map__49010);
var effect = map__49010__$1;
var ms = cljs.core.get.call(null,map__49010__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49010__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49006,chunk__49007,count__49008,i__49009,map__49010,map__49010__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49006,chunk__49007,count__49008,i__49009,map__49010,map__49010__$1,effect,ms,dispatch))
,ms);
}

var G__49014 = seq__49006;
var G__49015 = chunk__49007;
var G__49016 = count__49008;
var G__49017 = (i__49009 + (1));
seq__49006 = G__49014;
chunk__49007 = G__49015;
count__49008 = G__49016;
i__49009 = G__49017;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__49006);
if(temp__6503__auto__){
var seq__49006__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49006__$1)){
var c__46378__auto__ = cljs.core.chunk_first.call(null,seq__49006__$1);
var G__49018 = cljs.core.chunk_rest.call(null,seq__49006__$1);
var G__49019 = c__46378__auto__;
var G__49020 = cljs.core.count.call(null,c__46378__auto__);
var G__49021 = (0);
seq__49006 = G__49018;
chunk__49007 = G__49019;
count__49008 = G__49020;
i__49009 = G__49021;
continue;
} else {
var map__49012 = cljs.core.first.call(null,seq__49006__$1);
var map__49012__$1 = ((((!((map__49012 == null)))?((((map__49012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49012):map__49012);
var effect = map__49012__$1;
var ms = cljs.core.get.call(null,map__49012__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49012__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49006,chunk__49007,count__49008,i__49009,map__49012,map__49012__$1,effect,ms,dispatch,seq__49006__$1,temp__6503__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49006,chunk__49007,count__49008,i__49009,map__49012,map__49012__$1,effect,ms,dispatch,seq__49006__$1,temp__6503__auto__))
,ms);
}

var G__49022 = cljs.core.next.call(null,seq__49006__$1);
var G__49023 = null;
var G__49024 = (0);
var G__49025 = (0);
seq__49006 = G__49022;
chunk__49007 = G__49023;
count__49008 = G__49024;
i__49009 = G__49025;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__49026 = cljs.core.seq.call(null,value);
var chunk__49027 = null;
var count__49028 = (0);
var i__49029 = (0);
while(true){
if((i__49029 < count__49028)){
var event = cljs.core._nth.call(null,chunk__49027,i__49029);
re_frame.router.dispatch.call(null,event);

var G__49030 = seq__49026;
var G__49031 = chunk__49027;
var G__49032 = count__49028;
var G__49033 = (i__49029 + (1));
seq__49026 = G__49030;
chunk__49027 = G__49031;
count__49028 = G__49032;
i__49029 = G__49033;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__49026);
if(temp__6503__auto__){
var seq__49026__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49026__$1)){
var c__46378__auto__ = cljs.core.chunk_first.call(null,seq__49026__$1);
var G__49034 = cljs.core.chunk_rest.call(null,seq__49026__$1);
var G__49035 = c__46378__auto__;
var G__49036 = cljs.core.count.call(null,c__46378__auto__);
var G__49037 = (0);
seq__49026 = G__49034;
chunk__49027 = G__49035;
count__49028 = G__49036;
i__49029 = G__49037;
continue;
} else {
var event = cljs.core.first.call(null,seq__49026__$1);
re_frame.router.dispatch.call(null,event);

var G__49038 = cljs.core.next.call(null,seq__49026__$1);
var G__49039 = null;
var G__49040 = (0);
var G__49041 = (0);
seq__49026 = G__49038;
chunk__49027 = G__49039;
count__49028 = G__49040;
i__49029 = G__49041;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__49042 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__49043 = null;
var count__49044 = (0);
var i__49045 = (0);
while(true){
if((i__49045 < count__49044)){
var event = cljs.core._nth.call(null,chunk__49043,i__49045);
clear_event.call(null,event);

var G__49046 = seq__49042;
var G__49047 = chunk__49043;
var G__49048 = count__49044;
var G__49049 = (i__49045 + (1));
seq__49042 = G__49046;
chunk__49043 = G__49047;
count__49044 = G__49048;
i__49045 = G__49049;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__49042);
if(temp__6503__auto__){
var seq__49042__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49042__$1)){
var c__46378__auto__ = cljs.core.chunk_first.call(null,seq__49042__$1);
var G__49050 = cljs.core.chunk_rest.call(null,seq__49042__$1);
var G__49051 = c__46378__auto__;
var G__49052 = cljs.core.count.call(null,c__46378__auto__);
var G__49053 = (0);
seq__49042 = G__49050;
chunk__49043 = G__49051;
count__49044 = G__49052;
i__49045 = G__49053;
continue;
} else {
var event = cljs.core.first.call(null,seq__49042__$1);
clear_event.call(null,event);

var G__49054 = cljs.core.next.call(null,seq__49042__$1);
var G__49055 = null;
var G__49056 = (0);
var G__49057 = (0);
seq__49042 = G__49054;
chunk__49043 = G__49055;
count__49044 = G__49056;
i__49045 = G__49057;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map
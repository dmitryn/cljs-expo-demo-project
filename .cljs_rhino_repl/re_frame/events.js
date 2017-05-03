// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__49060_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__49060_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__6503__auto___49061 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6503__auto___49061)){
var not_i_49062 = temp__6503__auto___49061;
if(cljs.core.fn_QMARK_.call(null,not_i_49062)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_49062);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_49062);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__6501__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__6501__auto__)){
var interceptors = temp__6501__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_49077 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_49078 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__47552__auto___49091 = re_frame.interop.now.call(null);
var duration__47553__auto___49092 = (end__47552__auto___49091 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__49079_49093 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__49080_49094 = null;
var count__49081_49095 = (0);
var i__49082_49096 = (0);
while(true){
if((i__49082_49096 < count__49081_49095)){
var vec__49083_49097 = cljs.core._nth.call(null,chunk__49080_49094,i__49082_49096);
var k__47554__auto___49098 = cljs.core.nth.call(null,vec__49083_49097,(0),null);
var cb__47555__auto___49099 = cljs.core.nth.call(null,vec__49083_49097,(1),null);
try{cb__47555__auto___49099.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___49092,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49086){if((e49086 instanceof java.lang.Exception)){
var e__47556__auto___49100 = e49086;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___49098,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___49100);
} else {
throw e49086;

}
}
var G__49101 = seq__49079_49093;
var G__49102 = chunk__49080_49094;
var G__49103 = count__49081_49095;
var G__49104 = (i__49082_49096 + (1));
seq__49079_49093 = G__49101;
chunk__49080_49094 = G__49102;
count__49081_49095 = G__49103;
i__49082_49096 = G__49104;
continue;
} else {
var temp__6503__auto___49105 = cljs.core.seq.call(null,seq__49079_49093);
if(temp__6503__auto___49105){
var seq__49079_49106__$1 = temp__6503__auto___49105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49079_49106__$1)){
var c__46378__auto___49107 = cljs.core.chunk_first.call(null,seq__49079_49106__$1);
var G__49108 = cljs.core.chunk_rest.call(null,seq__49079_49106__$1);
var G__49109 = c__46378__auto___49107;
var G__49110 = cljs.core.count.call(null,c__46378__auto___49107);
var G__49111 = (0);
seq__49079_49093 = G__49108;
chunk__49080_49094 = G__49109;
count__49081_49095 = G__49110;
i__49082_49096 = G__49111;
continue;
} else {
var vec__49087_49112 = cljs.core.first.call(null,seq__49079_49106__$1);
var k__47554__auto___49113 = cljs.core.nth.call(null,vec__49087_49112,(0),null);
var cb__47555__auto___49114 = cljs.core.nth.call(null,vec__49087_49112,(1),null);
try{cb__47555__auto___49114.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___49092,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49090){if((e49090 instanceof java.lang.Exception)){
var e__47556__auto___49115 = e49090;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___49113,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___49115);
} else {
throw e49090;

}
}
var G__49116 = cljs.core.next.call(null,seq__49079_49106__$1);
var G__49117 = null;
var G__49118 = (0);
var G__49119 = (0);
seq__49079_49093 = G__49116;
chunk__49080_49094 = G__49117;
count__49081_49095 = G__49118;
i__49082_49096 = G__49119;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_49078;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_49077;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map
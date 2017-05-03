// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__48452_48462 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__48453_48463 = null;
var count__48454_48464 = (0);
var i__48455_48465 = (0);
while(true){
if((i__48455_48465 < count__48454_48464)){
var vec__48456_48466 = cljs.core._nth.call(null,chunk__48453_48463,i__48455_48465);
var k_48467 = cljs.core.nth.call(null,vec__48456_48466,(0),null);
var rxn_48468 = cljs.core.nth.call(null,vec__48456_48466,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_48468);

var G__48469 = seq__48452_48462;
var G__48470 = chunk__48453_48463;
var G__48471 = count__48454_48464;
var G__48472 = (i__48455_48465 + (1));
seq__48452_48462 = G__48469;
chunk__48453_48463 = G__48470;
count__48454_48464 = G__48471;
i__48455_48465 = G__48472;
continue;
} else {
var temp__6503__auto___48473 = cljs.core.seq.call(null,seq__48452_48462);
if(temp__6503__auto___48473){
var seq__48452_48474__$1 = temp__6503__auto___48473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48452_48474__$1)){
var c__46378__auto___48475 = cljs.core.chunk_first.call(null,seq__48452_48474__$1);
var G__48476 = cljs.core.chunk_rest.call(null,seq__48452_48474__$1);
var G__48477 = c__46378__auto___48475;
var G__48478 = cljs.core.count.call(null,c__46378__auto___48475);
var G__48479 = (0);
seq__48452_48462 = G__48476;
chunk__48453_48463 = G__48477;
count__48454_48464 = G__48478;
i__48455_48465 = G__48479;
continue;
} else {
var vec__48459_48480 = cljs.core.first.call(null,seq__48452_48474__$1);
var k_48481 = cljs.core.nth.call(null,vec__48459_48480,(0),null);
var rxn_48482 = cljs.core.nth.call(null,vec__48459_48480,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_48482);

var G__48483 = cljs.core.next.call(null,seq__48452_48474__$1);
var G__48484 = null;
var G__48485 = (0);
var G__48486 = (0);
seq__48452_48462 = G__48483;
chunk__48453_48463 = G__48484;
count__48454_48464 = G__48485;
i__48455_48465 = G__48486;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_48500 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__47552__auto___48513 = re_frame.interop.now.call(null);
var duration__47553__auto___48514 = (end__47552__auto___48513 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__48501_48515 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__48502_48516 = null;
var count__48503_48517 = (0);
var i__48504_48518 = (0);
while(true){
if((i__48504_48518 < count__48503_48517)){
var vec__48505_48519 = cljs.core._nth.call(null,chunk__48502_48516,i__48504_48518);
var k__47554__auto___48520 = cljs.core.nth.call(null,vec__48505_48519,(0),null);
var cb__47555__auto___48521 = cljs.core.nth.call(null,vec__48505_48519,(1),null);
try{cb__47555__auto___48521.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48514,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48508){if((e48508 instanceof java.lang.Exception)){
var e__47556__auto___48522 = e48508;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48520,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48522);
} else {
throw e48508;

}
}
var G__48523 = seq__48501_48515;
var G__48524 = chunk__48502_48516;
var G__48525 = count__48503_48517;
var G__48526 = (i__48504_48518 + (1));
seq__48501_48515 = G__48523;
chunk__48502_48516 = G__48524;
count__48503_48517 = G__48525;
i__48504_48518 = G__48526;
continue;
} else {
var temp__6503__auto___48527 = cljs.core.seq.call(null,seq__48501_48515);
if(temp__6503__auto___48527){
var seq__48501_48528__$1 = temp__6503__auto___48527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48501_48528__$1)){
var c__46378__auto___48529 = cljs.core.chunk_first.call(null,seq__48501_48528__$1);
var G__48530 = cljs.core.chunk_rest.call(null,seq__48501_48528__$1);
var G__48531 = c__46378__auto___48529;
var G__48532 = cljs.core.count.call(null,c__46378__auto___48529);
var G__48533 = (0);
seq__48501_48515 = G__48530;
chunk__48502_48516 = G__48531;
count__48503_48517 = G__48532;
i__48504_48518 = G__48533;
continue;
} else {
var vec__48509_48534 = cljs.core.first.call(null,seq__48501_48528__$1);
var k__47554__auto___48535 = cljs.core.nth.call(null,vec__48509_48534,(0),null);
var cb__47555__auto___48536 = cljs.core.nth.call(null,vec__48509_48534,(1),null);
try{cb__47555__auto___48536.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48514,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48512){if((e48512 instanceof java.lang.Exception)){
var e__47556__auto___48537 = e48512;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48535,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48537);
} else {
throw e48512;

}
}
var G__48538 = cljs.core.next.call(null,seq__48501_48528__$1);
var G__48539 = null;
var G__48540 = (0);
var G__48541 = (0);
seq__48501_48515 = G__48538;
chunk__48502_48516 = G__48539;
count__48503_48517 = G__48540;
i__48504_48518 = G__48541;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_48500;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48542 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48542;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args48543 = [];
var len__46688__auto___48546 = arguments.length;
var i__46689__auto___48547 = (0);
while(true){
if((i__46689__auto___48547 < len__46688__auto___48546)){
args48543.push((arguments[i__46689__auto___48547]));

var G__48548 = (i__46689__auto___48547 + (1));
i__46689__auto___48547 = G__48548;
continue;
} else {
}
break;
}

var G__48545 = args48543.length;
switch (G__48545) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48543.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args48550 = [];
var len__46688__auto___48579 = arguments.length;
var i__46689__auto___48580 = (0);
while(true){
if((i__46689__auto___48580 < len__46688__auto___48579)){
args48550.push((arguments[i__46689__auto___48580]));

var G__48581 = (i__46689__auto___48580 + (1));
i__46689__auto___48580 = G__48581;
continue;
} else {
}
break;
}

var G__48552 = args48550.length;
switch (G__48552) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48550.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_48553 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__6501__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__6501__auto__)){
var cached = temp__6501__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48583 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48583;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48584 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48584;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48585 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48585;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__47552__auto___48586 = re_frame.interop.now.call(null);
var duration__47553__auto___48587 = (end__47552__auto___48586 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__48554_48588 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__48555_48589 = null;
var count__48556_48590 = (0);
var i__48557_48591 = (0);
while(true){
if((i__48557_48591 < count__48556_48590)){
var vec__48558_48592 = cljs.core._nth.call(null,chunk__48555_48589,i__48557_48591);
var k__47554__auto___48593 = cljs.core.nth.call(null,vec__48558_48592,(0),null);
var cb__47555__auto___48594 = cljs.core.nth.call(null,vec__48558_48592,(1),null);
try{cb__47555__auto___48594.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48587,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48561){if((e48561 instanceof java.lang.Exception)){
var e__47556__auto___48595 = e48561;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48593,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48595);
} else {
throw e48561;

}
}
var G__48596 = seq__48554_48588;
var G__48597 = chunk__48555_48589;
var G__48598 = count__48556_48590;
var G__48599 = (i__48557_48591 + (1));
seq__48554_48588 = G__48596;
chunk__48555_48589 = G__48597;
count__48556_48590 = G__48598;
i__48557_48591 = G__48599;
continue;
} else {
var temp__6503__auto___48600 = cljs.core.seq.call(null,seq__48554_48588);
if(temp__6503__auto___48600){
var seq__48554_48601__$1 = temp__6503__auto___48600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48554_48601__$1)){
var c__46378__auto___48602 = cljs.core.chunk_first.call(null,seq__48554_48601__$1);
var G__48603 = cljs.core.chunk_rest.call(null,seq__48554_48601__$1);
var G__48604 = c__46378__auto___48602;
var G__48605 = cljs.core.count.call(null,c__46378__auto___48602);
var G__48606 = (0);
seq__48554_48588 = G__48603;
chunk__48555_48589 = G__48604;
count__48556_48590 = G__48605;
i__48557_48591 = G__48606;
continue;
} else {
var vec__48562_48607 = cljs.core.first.call(null,seq__48554_48601__$1);
var k__47554__auto___48608 = cljs.core.nth.call(null,vec__48562_48607,(0),null);
var cb__47555__auto___48609 = cljs.core.nth.call(null,vec__48562_48607,(1),null);
try{cb__47555__auto___48609.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48587,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48565){if((e48565 instanceof java.lang.Exception)){
var e__47556__auto___48610 = e48565;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48608,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48610);
} else {
throw e48565;

}
}
var G__48611 = cljs.core.next.call(null,seq__48554_48601__$1);
var G__48612 = null;
var G__48613 = (0);
var G__48614 = (0);
seq__48554_48588 = G__48611;
chunk__48555_48589 = G__48612;
count__48556_48590 = G__48613;
i__48557_48591 = G__48614;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_48553;
}} else {
var temp__6501__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__6501__auto__)){
var cached = temp__6501__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48615 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48615;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48616 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48616;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48617 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48617;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_48566 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__6501__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__6501__auto__)){
var cached = temp__6501__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48618 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48618;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48619 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48619;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6503__auto___48620 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6503__auto___48620)){
var not_reactive_48621 = temp__6503__auto___48620;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_48621);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48622 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48622;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__6501__auto__,_STAR_current_trace_STAR_48566){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__6501__auto__,_STAR_current_trace_STAR_48566))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__6501__auto__,_STAR_current_trace_STAR_48566){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__6501__auto__,_STAR_current_trace_STAR_48566))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__6501__auto__,_STAR_current_trace_STAR_48566){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__6501__auto__,_STAR_current_trace_STAR_48566))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__47552__auto___48623 = re_frame.interop.now.call(null);
var duration__47553__auto___48624 = (end__47552__auto___48623 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__48567_48625 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__48568_48626 = null;
var count__48569_48627 = (0);
var i__48570_48628 = (0);
while(true){
if((i__48570_48628 < count__48569_48627)){
var vec__48571_48629 = cljs.core._nth.call(null,chunk__48568_48626,i__48570_48628);
var k__47554__auto___48630 = cljs.core.nth.call(null,vec__48571_48629,(0),null);
var cb__47555__auto___48631 = cljs.core.nth.call(null,vec__48571_48629,(1),null);
try{cb__47555__auto___48631.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48624,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48574){if((e48574 instanceof java.lang.Exception)){
var e__47556__auto___48632 = e48574;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48630,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48632);
} else {
throw e48574;

}
}
var G__48633 = seq__48567_48625;
var G__48634 = chunk__48568_48626;
var G__48635 = count__48569_48627;
var G__48636 = (i__48570_48628 + (1));
seq__48567_48625 = G__48633;
chunk__48568_48626 = G__48634;
count__48569_48627 = G__48635;
i__48570_48628 = G__48636;
continue;
} else {
var temp__6503__auto___48637 = cljs.core.seq.call(null,seq__48567_48625);
if(temp__6503__auto___48637){
var seq__48567_48638__$1 = temp__6503__auto___48637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48567_48638__$1)){
var c__46378__auto___48639 = cljs.core.chunk_first.call(null,seq__48567_48638__$1);
var G__48640 = cljs.core.chunk_rest.call(null,seq__48567_48638__$1);
var G__48641 = c__46378__auto___48639;
var G__48642 = cljs.core.count.call(null,c__46378__auto___48639);
var G__48643 = (0);
seq__48567_48625 = G__48640;
chunk__48568_48626 = G__48641;
count__48569_48627 = G__48642;
i__48570_48628 = G__48643;
continue;
} else {
var vec__48575_48644 = cljs.core.first.call(null,seq__48567_48638__$1);
var k__47554__auto___48645 = cljs.core.nth.call(null,vec__48575_48644,(0),null);
var cb__47555__auto___48646 = cljs.core.nth.call(null,vec__48575_48644,(1),null);
try{cb__47555__auto___48646.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48624,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48578){if((e48578 instanceof java.lang.Exception)){
var e__47556__auto___48647 = e48578;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48645,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48647);
} else {
throw e48578;

}
}
var G__48648 = cljs.core.next.call(null,seq__48567_48638__$1);
var G__48649 = null;
var G__48650 = (0);
var G__48651 = (0);
seq__48567_48625 = G__48648;
chunk__48568_48626 = G__48649;
count__48569_48627 = G__48650;
i__48570_48628 = G__48651;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_48566;
}} else {
var temp__6501__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__6501__auto__)){
var cached = temp__6501__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48652 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48652;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48653 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48653;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6503__auto___48654 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6503__auto___48654)){
var not_reactive_48655 = temp__6503__auto___48654;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_48655);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48656 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48656;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__6501__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__6501__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__6501__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__6501__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__6501__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__6501__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__48661){
var vec__48662 = p__48661;
var k = cljs.core.nth.call(null,vec__48662,(0),null);
var v = cljs.core.nth.call(null,vec__48662,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__47569__auto___48665 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__47569__auto___48665;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__46695__auto__ = [];
var len__46688__auto___48721 = arguments.length;
var i__46689__auto___48722 = (0);
while(true){
if((i__46689__auto___48722 < len__46688__auto___48721)){
args__46695__auto__.push((arguments[i__46689__auto___48722]));

var G__48723 = (i__46689__auto___48722 + (1));
i__46689__auto___48722 = G__48723;
continue;
} else {
}
break;
}

var argseq__46696__auto__ = ((((1) < args__46695__auto__.length))?(new cljs.core.IndexedSeq(args__46695__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__46696__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str("re-frame: reg-sub for "),cljs.core.str(query_id),cljs.core.str(", ")].join('');
var inputs_fn = (function (){var G__48668 = cljs.core.count.call(null,input_args);
switch (G__48668) {
case (0):
return ((function (G__48668,computation_fn,input_args,err_header){
return (function() {
var G__48725 = null;
var G__48725__1 = (function (_){
return re_frame.db.app_db;
});
var G__48725__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__48725 = function(_,___$1){
switch(arguments.length){
case 1:
return G__48725__1.call(this,_);
case 2:
return G__48725__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48725.cljs$core$IFn$_invoke$arity$1 = G__48725__1;
G__48725.cljs$core$IFn$_invoke$arity$2 = G__48725__2;
return G__48725;
})()
;})(G__48668,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
return ((function (G__48668,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__48668,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__48668,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__48668,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_48695 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__47552__auto___48726 = re_frame.interop.now.call(null);
var duration__47553__auto___48727 = (end__47552__auto___48726 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__48696_48728 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__48697_48729 = null;
var count__48698_48730 = (0);
var i__48699_48731 = (0);
while(true){
if((i__48699_48731 < count__48698_48730)){
var vec__48700_48732 = cljs.core._nth.call(null,chunk__48697_48729,i__48699_48731);
var k__47554__auto___48733 = cljs.core.nth.call(null,vec__48700_48732,(0),null);
var cb__47555__auto___48734 = cljs.core.nth.call(null,vec__48700_48732,(1),null);
try{cb__47555__auto___48734.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48727,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48703){if((e48703 instanceof java.lang.Exception)){
var e__47556__auto___48735 = e48703;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48733,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48735);
} else {
throw e48703;

}
}
var G__48736 = seq__48696_48728;
var G__48737 = chunk__48697_48729;
var G__48738 = count__48698_48730;
var G__48739 = (i__48699_48731 + (1));
seq__48696_48728 = G__48736;
chunk__48697_48729 = G__48737;
count__48698_48730 = G__48738;
i__48699_48731 = G__48739;
continue;
} else {
var temp__6503__auto___48740 = cljs.core.seq.call(null,seq__48696_48728);
if(temp__6503__auto___48740){
var seq__48696_48741__$1 = temp__6503__auto___48740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48696_48741__$1)){
var c__46378__auto___48742 = cljs.core.chunk_first.call(null,seq__48696_48741__$1);
var G__48743 = cljs.core.chunk_rest.call(null,seq__48696_48741__$1);
var G__48744 = c__46378__auto___48742;
var G__48745 = cljs.core.count.call(null,c__46378__auto___48742);
var G__48746 = (0);
seq__48696_48728 = G__48743;
chunk__48697_48729 = G__48744;
count__48698_48730 = G__48745;
i__48699_48731 = G__48746;
continue;
} else {
var vec__48704_48747 = cljs.core.first.call(null,seq__48696_48741__$1);
var k__47554__auto___48748 = cljs.core.nth.call(null,vec__48704_48747,(0),null);
var cb__47555__auto___48749 = cljs.core.nth.call(null,vec__48704_48747,(1),null);
try{cb__47555__auto___48749.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48727,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48707){if((e48707 instanceof java.lang.Exception)){
var e__47556__auto___48750 = e48707;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48748,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48750);
} else {
throw e48707;

}
}
var G__48751 = cljs.core.next.call(null,seq__48696_48741__$1);
var G__48752 = null;
var G__48753 = (0);
var G__48754 = (0);
seq__48696_48728 = G__48751;
chunk__48697_48729 = G__48752;
count__48698_48730 = G__48753;
i__48699_48731 = G__48754;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_48695;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_48708 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__47552__auto___48755 = re_frame.interop.now.call(null);
var duration__47553__auto___48756 = (end__47552__auto___48755 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__48709_48757 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__48710_48758 = null;
var count__48711_48759 = (0);
var i__48712_48760 = (0);
while(true){
if((i__48712_48760 < count__48711_48759)){
var vec__48713_48761 = cljs.core._nth.call(null,chunk__48710_48758,i__48712_48760);
var k__47554__auto___48762 = cljs.core.nth.call(null,vec__48713_48761,(0),null);
var cb__47555__auto___48763 = cljs.core.nth.call(null,vec__48713_48761,(1),null);
try{cb__47555__auto___48763.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48756,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48716){if((e48716 instanceof java.lang.Exception)){
var e__47556__auto___48764 = e48716;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48762,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48764);
} else {
throw e48716;

}
}
var G__48765 = seq__48709_48757;
var G__48766 = chunk__48710_48758;
var G__48767 = count__48711_48759;
var G__48768 = (i__48712_48760 + (1));
seq__48709_48757 = G__48765;
chunk__48710_48758 = G__48766;
count__48711_48759 = G__48767;
i__48712_48760 = G__48768;
continue;
} else {
var temp__6503__auto___48769 = cljs.core.seq.call(null,seq__48709_48757);
if(temp__6503__auto___48769){
var seq__48709_48770__$1 = temp__6503__auto___48769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48709_48770__$1)){
var c__46378__auto___48771 = cljs.core.chunk_first.call(null,seq__48709_48770__$1);
var G__48772 = cljs.core.chunk_rest.call(null,seq__48709_48770__$1);
var G__48773 = c__46378__auto___48771;
var G__48774 = cljs.core.count.call(null,c__46378__auto___48771);
var G__48775 = (0);
seq__48709_48757 = G__48772;
chunk__48710_48758 = G__48773;
count__48711_48759 = G__48774;
i__48712_48760 = G__48775;
continue;
} else {
var vec__48717_48776 = cljs.core.first.call(null,seq__48709_48770__$1);
var k__47554__auto___48777 = cljs.core.nth.call(null,vec__48717_48776,(0),null);
var cb__47555__auto___48778 = cljs.core.nth.call(null,vec__48717_48776,(1),null);
try{cb__47555__auto___48778.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47553__auto___48756,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48720){if((e48720 instanceof java.lang.Exception)){
var e__47556__auto___48779 = e48720;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47554__auto___48777,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47556__auto___48779);
} else {
throw e48720;

}
}
var G__48780 = cljs.core.next.call(null,seq__48709_48770__$1);
var G__48781 = null;
var G__48782 = (0);
var G__48783 = (0);
seq__48709_48757 = G__48780;
chunk__48710_48758 = G__48781;
count__48711_48759 = G__48782;
i__48712_48760 = G__48783;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_48708;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq48666){
var G__48667 = cljs.core.first.call(null,seq48666);
var seq48666__$1 = cljs.core.next.call(null,seq48666);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__48667,seq48666__$1);
});


//# sourceMappingURL=subs.js.map
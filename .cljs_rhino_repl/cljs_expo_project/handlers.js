// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_expo_project.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.spec');
goog.require('cljs_expo_project.db');
/**
 * Throw an exception if db doesn't have a valid spec.
 */
cljs_expo_project.handlers.check_and_throw = (function cljs_expo_project$handlers$check_and_throw(spec,db){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,db))){
return null;
} else {
var explain_data = cljs.spec.explain_data.call(null,spec,db);
throw cljs.core.ex_info.call(null,[cljs.core.str("Spec check failed: "),cljs.core.str(explain_data)].join(''),explain_data);
}
});
cljs_expo_project.handlers.validate_spec = (cljs.core.truth_(goog.DEBUG)?re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"validate-spec","validate-spec",-202873800),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
cljs_expo_project.handlers.check_and_throw.call(null,new cljs.core.Keyword("cljs-expo-project.db","app-db","cljs-expo-project.db/app-db",220088449),db);

return context;
})):re_frame.core.__GT_interceptor);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_expo_project.handlers.validate_spec], null),(function (_,___$1){
return cljs_expo_project.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-greeting","set-greeting",-653540063),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_expo_project.handlers.validate_spec], null),(function (db,p__49176){
var vec__49177 = p__49176;
var _ = cljs.core.nth.call(null,vec__49177,(0),null);
var value = cljs.core.nth.call(null,vec__49177,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"greeting","greeting",462222107),value);
}));

//# sourceMappingURL=handlers.js.map
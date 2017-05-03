// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47785){
var map__47810 = p__47785;
var map__47810__$1 = ((((!((map__47810 == null)))?((((map__47810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47810):map__47810);
var m = map__47810__$1;
var n = cljs.core.get.call(null,map__47810__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47810__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47812_47834 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47813_47835 = null;
var count__47814_47836 = (0);
var i__47815_47837 = (0);
while(true){
if((i__47815_47837 < count__47814_47836)){
var f_47838 = cljs.core._nth.call(null,chunk__47813_47835,i__47815_47837);
cljs.core.println.call(null,"  ",f_47838);

var G__47839 = seq__47812_47834;
var G__47840 = chunk__47813_47835;
var G__47841 = count__47814_47836;
var G__47842 = (i__47815_47837 + (1));
seq__47812_47834 = G__47839;
chunk__47813_47835 = G__47840;
count__47814_47836 = G__47841;
i__47815_47837 = G__47842;
continue;
} else {
var temp__6503__auto___47843 = cljs.core.seq.call(null,seq__47812_47834);
if(temp__6503__auto___47843){
var seq__47812_47844__$1 = temp__6503__auto___47843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47812_47844__$1)){
var c__46378__auto___47845 = cljs.core.chunk_first.call(null,seq__47812_47844__$1);
var G__47846 = cljs.core.chunk_rest.call(null,seq__47812_47844__$1);
var G__47847 = c__46378__auto___47845;
var G__47848 = cljs.core.count.call(null,c__46378__auto___47845);
var G__47849 = (0);
seq__47812_47834 = G__47846;
chunk__47813_47835 = G__47847;
count__47814_47836 = G__47848;
i__47815_47837 = G__47849;
continue;
} else {
var f_47850 = cljs.core.first.call(null,seq__47812_47844__$1);
cljs.core.println.call(null,"  ",f_47850);

var G__47851 = cljs.core.next.call(null,seq__47812_47844__$1);
var G__47852 = null;
var G__47853 = (0);
var G__47854 = (0);
seq__47812_47834 = G__47851;
chunk__47813_47835 = G__47852;
count__47814_47836 = G__47853;
i__47815_47837 = G__47854;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47855 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__45472__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__45472__auto__)){
return or__45472__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47855);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47855)))?cljs.core.second.call(null,arglists_47855):arglists_47855));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47816_47856 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47817_47857 = null;
var count__47818_47858 = (0);
var i__47819_47859 = (0);
while(true){
if((i__47819_47859 < count__47818_47858)){
var vec__47820_47860 = cljs.core._nth.call(null,chunk__47817_47857,i__47819_47859);
var name_47861 = cljs.core.nth.call(null,vec__47820_47860,(0),null);
var map__47823_47862 = cljs.core.nth.call(null,vec__47820_47860,(1),null);
var map__47823_47863__$1 = ((((!((map__47823_47862 == null)))?((((map__47823_47862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47823_47862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47823_47862):map__47823_47862);
var doc_47864 = cljs.core.get.call(null,map__47823_47863__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47865 = cljs.core.get.call(null,map__47823_47863__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47861);

cljs.core.println.call(null," ",arglists_47865);

if(cljs.core.truth_(doc_47864)){
cljs.core.println.call(null," ",doc_47864);
} else {
}

var G__47866 = seq__47816_47856;
var G__47867 = chunk__47817_47857;
var G__47868 = count__47818_47858;
var G__47869 = (i__47819_47859 + (1));
seq__47816_47856 = G__47866;
chunk__47817_47857 = G__47867;
count__47818_47858 = G__47868;
i__47819_47859 = G__47869;
continue;
} else {
var temp__6503__auto___47870 = cljs.core.seq.call(null,seq__47816_47856);
if(temp__6503__auto___47870){
var seq__47816_47871__$1 = temp__6503__auto___47870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47816_47871__$1)){
var c__46378__auto___47872 = cljs.core.chunk_first.call(null,seq__47816_47871__$1);
var G__47873 = cljs.core.chunk_rest.call(null,seq__47816_47871__$1);
var G__47874 = c__46378__auto___47872;
var G__47875 = cljs.core.count.call(null,c__46378__auto___47872);
var G__47876 = (0);
seq__47816_47856 = G__47873;
chunk__47817_47857 = G__47874;
count__47818_47858 = G__47875;
i__47819_47859 = G__47876;
continue;
} else {
var vec__47825_47877 = cljs.core.first.call(null,seq__47816_47871__$1);
var name_47878 = cljs.core.nth.call(null,vec__47825_47877,(0),null);
var map__47828_47879 = cljs.core.nth.call(null,vec__47825_47877,(1),null);
var map__47828_47880__$1 = ((((!((map__47828_47879 == null)))?((((map__47828_47879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47828_47879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47828_47879):map__47828_47879);
var doc_47881 = cljs.core.get.call(null,map__47828_47880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47882 = cljs.core.get.call(null,map__47828_47880__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47878);

cljs.core.println.call(null," ",arglists_47882);

if(cljs.core.truth_(doc_47881)){
cljs.core.println.call(null," ",doc_47881);
} else {
}

var G__47883 = cljs.core.next.call(null,seq__47816_47871__$1);
var G__47884 = null;
var G__47885 = (0);
var G__47886 = (0);
seq__47816_47856 = G__47883;
chunk__47817_47857 = G__47884;
count__47818_47858 = G__47885;
i__47819_47859 = G__47886;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__47830 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47831 = null;
var count__47832 = (0);
var i__47833 = (0);
while(true){
if((i__47833 < count__47832)){
var role = cljs.core._nth.call(null,chunk__47831,i__47833);
var temp__6503__auto___47887__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___47887__$1)){
var spec_47888 = temp__6503__auto___47887__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47888));
} else {
}

var G__47889 = seq__47830;
var G__47890 = chunk__47831;
var G__47891 = count__47832;
var G__47892 = (i__47833 + (1));
seq__47830 = G__47889;
chunk__47831 = G__47890;
count__47832 = G__47891;
i__47833 = G__47892;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__47830);
if(temp__6503__auto____$1){
var seq__47830__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47830__$1)){
var c__46378__auto__ = cljs.core.chunk_first.call(null,seq__47830__$1);
var G__47893 = cljs.core.chunk_rest.call(null,seq__47830__$1);
var G__47894 = c__46378__auto__;
var G__47895 = cljs.core.count.call(null,c__46378__auto__);
var G__47896 = (0);
seq__47830 = G__47893;
chunk__47831 = G__47894;
count__47832 = G__47895;
i__47833 = G__47896;
continue;
} else {
var role = cljs.core.first.call(null,seq__47830__$1);
var temp__6503__auto___47897__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___47897__$2)){
var spec_47898 = temp__6503__auto___47897__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47898));
} else {
}

var G__47899 = cljs.core.next.call(null,seq__47830__$1);
var G__47900 = null;
var G__47901 = (0);
var G__47902 = (0);
seq__47830 = G__47899;
chunk__47831 = G__47900;
count__47832 = G__47901;
i__47833 = G__47902;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
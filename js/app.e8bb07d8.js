(function(e){function a(a){for(var o,n,i=a[0],u=a[1],d=a[2],s=0,c=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&c.push(r[n][0]),r[n]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(a);while(c.length)c.shift()();return l.push.apply(l,d||[]),t()}function t(){for(var e,a=0;a<l.length;a++){for(var t=l[a],o=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(o=!1)}o&&(l.splice(a--,1),e=n(n.s=t[0]))}return e}var o={},r={app:0},l=[];function n(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=o,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)n.d(t,o,function(a){return e[a]}.bind(null,o));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/vue_search_test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=a,i=i.slice();for(var d=0;d<i.length;d++)a(i[d]);var p=u;l.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"2a04":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23");Object(o["k"])("data-v-d3f2270e");var r={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"panel panel-default"},n={class:"panel-heading"},i=Object(o["e"])("div",{class:"panel-body"},[Object(o["e"])("p")],-1);function u(e,a,t,u,d,p){var s=Object(o["m"])("search-bar");return Object(o["i"])(),Object(o["d"])("div",null,[Object(o["e"])("div",r,[Object(o["f"])(s,{class:"my-2 my-lg-0",language:d.language},null,8,["language"])]),Object(o["e"])("div",l,[Object(o["e"])("div",n,[Object(o["f"])(s,{language:d.language},null,8,["language"])]),i])])}Object(o["j"])();t("ac1f"),t("841c");var d={class:"search-bar"},p={class:"input-group"},s={class:"input-group-append"},c={key:0,class:"row search-results-row"};function m(e,a,t,r,l,n){var i=Object(o["m"])("autosuggest");return Object(o["i"])(),Object(o["d"])("div",d,[Object(o["e"])("div",p,[Object(o["p"])(Object(o["e"])("input",{type:"text",ref:"inputSearchBar",class:"form-control input-search","onUpdate:modelValue":a[0]||(a[0]=function(e){return l.search_keyword=e}),onKeyup:a[1]||(a[1]=function(){return n.getSuggestions&&n.getSuggestions.apply(n,arguments)})},null,544),[[o["o"],l.search_keyword]]),Object(o["e"])("div",s,[Object(o["e"])("button",{type:"button",class:"btn btn-primary input-group-text",onClick:a[2]||(a[2]=function(){return n.search&&n.search.apply(n,arguments)})},Object(o["n"])(l.texts.search),1)])]),Object(o["f"])(i,{ref:"Autosuggest",language:t.language,"calculated-width":l.inputSearchWidth},null,8,["language","calculated-width"]),l.results?(Object(o["i"])(),Object(o["d"])("div",c)):Object(o["c"])("",!0)])}t("4de4"),t("07ac"),t("b0c0"),t("caad"),t("2532"),t("4e82");function g(e,a,t,r,l,n){return l.suggestions.length?(Object(o["i"])(),Object(o["d"])("div",{key:0,class:"autosuggest",style:Object(o["h"])(l.dynamicStyle)},[Object(o["e"])("span",{class:Object(o["g"])(["autosuggest-prompt",{small:t.calculatedWidth<300}])},Object(o["n"])(l.texts.prompt),3),(Object(o["i"])(!0),Object(o["d"])(o["a"],null,Object(o["l"])(l.suggestions,(function(e){return Object(o["i"])(),Object(o["d"])("span",{key:e,class:"autosuggest-word",onClick:a[0]||(a[0]=function(){return n.addToSearchBar&&n.addToSearchBar.apply(n,arguments)}),onMouseenter:a[1]||(a[1]=function(){return n.decreaseOpacity&&n.decreaseOpacity.apply(n,arguments)}),onMouseleave:a[2]||(a[2]=function(){return n.resetOpacity&&n.resetOpacity.apply(n,arguments)})},Object(o["n"])(e),33)})),128))],4)):Object(o["c"])("",!0)}var f=t("b85c"),y=(t("d81d"),t("2ca0"),{texts:{en:{prompt:"Did you mean: "},hu:{prompt:"Erre gondoltál?"}}}),h={name:"SearchAutosuggest",el:".autosuggest",data:function(){return{dynamicStyle:"",texts:y.texts[this.language],keywords:[],suggestions:[]}},props:["language","calculatedWidth"],watch:{calculatedWidth:function(){this.dynamicStyle+="width: "+this.calculatedWidth+"px;"}},mounted:function(){this.keywords=t("756b")("./keywords_"+this.language+".json")},methods:{getSuggestions:function(e){this.suggestions=[];var a=[];if(e.length>1){var t,o=Object(f["a"])(this.keywords);try{for(o.s();!(t=o.n()).done;){var r=t.value;r.toLowerCase().startsWith(e.toLowerCase())?a[a.length]={word:r,priority:1+r.length}:r.toLowerCase().includes(e.toLowerCase())&&(a[a.length]={word:r,priority:200+r.length})}}catch(l){o.e(l)}finally{o.f()}a.length>0&&(a.sort((function(e,a){return e.priority===a.priority?0:e.priority<a.priority?-1:1})),this.suggestions=a.map((function(e){return e.word})))}},addToSearchBar:function(e){var a=e.target.textContent;this.$parent.search_keyword=a,this.$parent.$refs.inputSearchBar.value=a,this.suggestions=[]},decreaseOpacity:function(e){e.target.style.background="#007bffcc"},resetOpacity:function(e){e.target.style.background="#007bff73"}}};t("9c8d");h.render=g;var k=h,b={texts:{en:{"search-placeholder":"Search product name",search:"Search"},hu:{"search-placeholder":"Terméknév vagy tulajdonság",search:"Keresés"}}},x={name:"SearchBar",components:{Autosuggest:k},data:function(){return{products:t("89a8"),texts:b.texts[this.language],results:[],search_keyword:"",autosuggest_keywords:[],sort:1,inputSearchWidth:0}},mounted:function(){this.inputSearchWidth=this.$refs.inputSearchBar.offsetWidth},props:["language"],methods:{search:function(){this.getSuggestions(this.search_keyword)},getSearchResults:function(){var e=this.search_keyword;return Object.values(this.products).filter((function(a){var t=a.name;return!("-"===t||""===t||!t.toUpperCase().includes(e.toUpperCase()))}))},sortByRelevance:function(e){var a=this.search_keyword.toUpperCase();return e.sort((function(e,t){var o=e.name.toUpperCase().indexOf(a),r=t.name.toUpperCase().indexOf(a);return o-r}))},getSuggestions:function(){return this.$refs.Autosuggest.getSuggestions(this.search_keyword,this.language)}}};t("6430");x.render=m;var O=x,j={name:"App",components:{SearchBar:O},data:function(){return{language:"en"}}};t("8fe3");j.render=u,j.__scopeId="data-v-d3f2270e";var v=j;Object(o["b"])(v).mount("#app")},5717:function(e,a,t){},6430:function(e,a,t){"use strict";t("d9ee")},"756b":function(e,a,t){var o={"./keywords_en.json":"b30a","./keywords_hu.json":"97bd"};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(o,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=l,e.exports=r,r.id="756b"},"89a8":function(e){e.exports=JSON.parse('[{"product_id":"38700","model":"kanlux-25054","quantity":"0","image":"product/kanlux/kanlux-25054-lampa.jpg","name":"KANLUX 25054 | Mowion Kanlux"},{"product_id":"71737","model":"endon-90295","quantity":"0","image":"product/endon/endon-90295-lampa.jpg","name":"ENDON 90295 | Calla-EN Endon"},{"product_id":"51225","model":"rabalux-5664","quantity":"0","image":"product/rabalux/rabalux-5664-lampa.jpg","name":"RABALUX 5664 | Hilary Rabalux fali, mennyezeti lámpa 4x LED 1600lm 4000K króm, opál, kristály hatás"},{"product_id":"42387","model":"brilliant-g61710-13","quantity":"0","image":"product/brilliant/brilliant-g61710-13-lampa.jpg","name":"BRILLIANT G61710/13 | Remote Brilliant"},{"product_id":"68438","model":"eglo-39586","quantity":"0","image":"product/eglo/eglo-39586-lampa.jpg","name":"EGLO 39586 | Albariza Eglo fali, mennyezeti lámpa szabályozható fényerő 3x LED 1950lm 3000K fehér, króm"},{"product_id":"37010","model":"rabalux-5903","quantity":"0","image":"product/rabalux/rabalux-5903-lampa.jpg","name":"RABALUX 5903 | Mac Rabalux spot lámpa két kapcsoló elforgatható alkatrészek 2x GU10 fekete, bükk"},{"product_id":"49276","model":"elstead-ls162","quantity":"0","image":"product/elstead/elstead-ls162-lampa.jpg","name":"ELSTEAD LS162 | Clip-Shades Elstead ernyő lámpabúra kézzel készült elefántcsont"},{"product_id":"69579","model":"lucide-79182-18-31","quantity":"0","image":"product/lucide/lucide-79182-18-31-lampa.jpg","name":"LUCIDE 79182/18/31 | Nuria Lucide"},{"product_id":"67088","model":"maxlight-p0206d","quantity":"0","image":"product/maxlight/maxlight-p0206d-lampa.jpg","name":"MAXLIGHT P0206D | Organic Maxlight"},{"product_id":"33770","model":"norlys-7665al","quantity":"0","image":"product/norlys/norlys-7665al-lampa.jpg","name":"NORLYS 7665AL | Norlys adapter alkatrész 1x E27 IP65 alumínium"},{"product_id":"72850","model":"trio-802400224","quantity":"0","image":"product/trio/trio-802400224-lampa.jpg","name":"TRIO 802400224 | Marley-TR Trio spot lámpa 2x GU10 rozsdaszín"},{"product_id":"74982","model":"trio-r30971032","quantity":"0","image":"product/trio/trio-r30971032-lampa.jpg","name":"TRIO R30971032 | Cage-TR Trio"},{"product_id":"5419","model":"eglo-97485","quantity":"0","image":"product/eglo/eglo-97485-lampa.jpg","name":"EGLO 97485 | EGLO-Connect-Caldiero Eglo álló okos világítás 96,5cm szabályozható fényerő 1x E27 806lm 3000K IP44 króm, fehér"},{"product_id":"79661","model":"redo-9126","quantity":"0","image":"product/redo/redo-9126-lampa.jpg","name":"REDO 9126 | Giorgio Redo álló lámpa 65,1cm 1x LED 552lm 3000K IP65 matt fehér, áttetsző"},{"product_id":"43494","model":"nowodvorski-9000","quantity":"0","image":"product/nowodvorski/nowodvorski-9000-lampa.jpg","name":"NOWODVORSKI 9000 | Profile Nowodvorski rendszerelem lámpa elforgatható alkatrészek 1x LED 864lm 3000K fehér"},{"product_id":"76598","model":"ideal-lux-116457","quantity":"0","image":"product/ideal_lux/ideal-lux-116457-lampa.jpg","name":"IDEAL LUX 116457 | Mr-Jack Ideal Lux függeszték lámpa - MR JACK SP1 SMALL CROMO - 1x GU10 400lm 3000K króm"},{"product_id":"75579","model":"viokef-4235000","quantity":"0","image":"product/viokef/viokef-4235000-lampa.jpg","name":"VIOKEF 4235000 | Emma-VI Viokef"},{"product_id":"14456","model":"nowodvorski-9543","quantity":"0","image":"product/nowodvorski/nowodvorski-9543-lampa.jpg","name":"NOWODVORSKI 9543 | SoftN Nowodvorski függeszték lámpa 1x G13 / T8 2000lm 3000K grafit"},{"product_id":"72225","model":"trio-r30256030","quantity":"0","image":"product/trio/trio-r30256030-lampa.jpg","name":"TRIO R30256030 | Wood-TR Trio függeszték lámpa 1x E27 fekete, natúr"},{"product_id":"51777","model":"azzardo-0113","quantity":"0","image":"product/azzardo/azzardo-0113-lampa.jpg","name":"AZZARDO 0113 | Pancake Azzardo fali lámpa 2x G9 narancs, fehér"},{"product_id":"78437","model":"ideal-lux-233772","quantity":"0","image":"product/ideal_lux/ideal-lux-233772-lampa.jpg","name":"IDEAL LUX 233772 | Sky-IL Ideal Lux"},{"product_id":"62047","model":"nowodvorski-8498","quantity":"0","image":"product/nowodvorski/nowodvorski-8498-lampa.jpg","name":"NOWODVORSKI 8498 | Nowodvorski-Cameleon-Cone Nowodvorski ernyő lámpabúra rózsaszín"},{"product_id":"72290","model":"trio-r40053007","quantity":"0","image":"product/trio/trio-r40053007-lampa.jpg","name":"TRIO R40053007 | Bastia-TR Trio álló lámpa 150cm taposókapcsoló 3x GU10 matt nikkel"},{"product_id":"48843","model":"elstead-qz-madison-manor1-is","quantity":"0","image":"product/elstead/elstead-qz-madison-manor1-is-lampa.jpg","name":"ELSTEAD QZ-MADISON-MANOR1-IS | Madison-Manor Elstead falikar lámpa 1x G9 320lm 3000K ezüst, fehér, átlátszó"},{"product_id":"10394","model":"globo-41585-12","quantity":"0","image":"product/globo/globo-41585-12-lampa.jpg","name":"GLOBO 41585-12 | Sparkle-Star Globo mennyezeti lámpa 1x LED 850lm 4000K fehér, csiszolt alumínium, csillogó"},{"product_id":"2101","model":"eglo-13551","quantity":"0","image":"product/eglo/eglo-13551-lampa.jpg","name":"EGLO 13551 | Cabo Eglo mennyezeti lámpa 6x GU10 3000K króm, fehér, átlátszó"},{"product_id":"47249","model":"viokef-4205801","quantity":"0","image":"product/viokef/viokef-4205801-lampa.jpg","name":"VIOKEF 4205801 | Hemi Viokef falikar lámpa elforgatható alkatrészek 1x LED 540lm 3000K fekete"},{"product_id":"17772","model":"jupiter-1426-ht-6","quantity":"0","image":"product/jupiter/jupiter-1426-ht-6-lampa.jpg","name":"JUPITER 1426 HT 6 | Hilton Jupiter csillár lámpa 6x E27 króm, fehér, átlátszó"},{"product_id":"83207","model":"faneurope-i-boing-ap-bco","quantity":"0","image":"product/faneurope/faneurope-i-boing-ap-bco-lampa.jpg","name":"FANEUROPE I-BOING-AP BCO | Boing Faneurope"},{"product_id":"77156","model":"ideal-lux-030784","quantity":"0","image":"product/ideal_lux/ideal-lux-030784-lampa.jpg","name":"IDEAL LUX 030784 | Neve Ideal Lux mennyezeti lámpa - NEVE PL15 CROMO - 15x G9 4500lm 3000K króm, átlátszó"},{"product_id":"42507","model":"brilliant-93688-06","quantity":"0","image":"product/brilliant/brilliant-93688-06-lampa.jpg","name":"BRILLIANT 93688/06 | Onelia Brilliant mennyezeti lámpa 1x E27 fekete"},{"product_id":"22876","model":"wofi-931501066385","quantity":"0","image":"product/wofi/wofi-931501066385-lampa.jpg","name":"WOFI 931501066385 | Focus Wofi mennyezeti lámpa kerek impulzus kapcsoló szabályozható fényerő 1x LED 1480lm 3000 &lt;-&gt; 6500K fehér, króm, kristály hatás"},{"product_id":"57008","model":"nova-luce-9420851","quantity":"0","image":"product/nova_luce/nova-luce-9420851-lampa.jpg","name":"NOVA LUCE 9420851 | Virgo-NL Nova Luce"},{"product_id":"79816","model":"redo-9965","quantity":"0","image":"product/redo/redo-9965-lampa.jpg","name":"REDO 9965 | Baloo-RD Redo dekor lámpa 1x E27 IP65 opál"},{"product_id":"38402","model":"kanlux-25264","quantity":"0","image":"product/kanlux/kanlux-25264-lampa.jpg","name":"KANLUX 25264 | Mowion Kanlux"},{"product_id":"38018","model":"rabalux-2666","quantity":"0","image":"product/rabalux/rabalux-2666-lampa.jpg","name":"RABALUX 2666 | Lois Rabalux fali, mennyezeti LED panel négyzet 1x LED 2500lm 4000K matt fehér, fehér"},{"product_id":"16795","model":"maxlight-c0068","quantity":"0","image":"product/maxlight/maxlight-c0068-lampa.jpg","name":"MAXLIGHT C0068 | Basic-Round Maxlight mennyezeti lámpa elforgatható fényforrás 1x GU10 fekete"},{"product_id":"60485","model":"chiaro-802021802","quantity":"0","image":"product/chiaro/chiaro-802021802-lampa.jpg","name":"CHIARO 802021802 | Corso-MW Chiaro fali lámpa 2x E14 860lm IP44 antikolt réz, átlátszó"},{"product_id":"5009","model":"eglo-49761","quantity":"0","image":"product/eglo/eglo-49761-lampa.jpg","name":"EGLO 49761 | Embleton Eglo függeszték lámpa 1x E27 fekete"},{"product_id":"22024","model":"wofi-9796-04-64-0000","quantity":"0","image":"product/wofi/wofi-9796-04-64-0000-lampa.jpg","name":"WOFI 9796.04.64.0000 | CameronW Wofi fali, mennyezeti lámpa elforgatható fényforrás 4x LED 1720lm 3000K matt nikkel, fehér"},{"product_id":"49631","model":"elstead-kl-imahn1","quantity":"0","image":"product/elstead/elstead-kl-imahn1-lampa.jpg","name":"ELSTEAD KL-IMAHN1 | Imahn Elstead fali lámpa 1x E27 fekete, sárgaréz"},{"product_id":"62457","model":"kanlux-28026","quantity":"0","image":"product/kanlux/kanlux-28026-lampa.jpg","name":"KANLUX 28026 | Kanlux LED tápegység 40W 1050mA téglalap fehér"},{"product_id":"800","model":"kanlux-2162","quantity":"3","image":"product/kanlux/kanlux-2162-lampa.jpg","name":"KANLUX 2162 | E27 Kanlux foglalat D tartóval felszerelve"},{"product_id":"78259","model":"ideal-lux-256436","quantity":"0","image":"product/ideal_lux/ideal-lux-256436-lampa.jpg","name":"IDEAL LUX 256436 | Tristan-IL Ideal Lux"},{"product_id":"7426","model":"globo-32113","quantity":"0","image":"product/globo/globo-32113-lampa.jpg","name":"GLOBO 32113 | Vranos Globo mennyezeti lámpa 3x E27 IP44 alumínium, opál"},{"product_id":"65396","model":"globo-41562-24w","quantity":"0","image":"product/globo/globo-41562-24w-lampa.jpg","name":"GLOBO 41562-24W | Sapana Globo"},{"product_id":"84852","model":"faneurope-led-prodigy-solar","quantity":"0","image":"product/faneurope/faneurope-led-prodigy-solar-lampa.jpg","name":"FANEUROPE LED-PRODIGY-SOLAR | Prodigy Faneurope"},{"product_id":"42364","model":"brilliant-g17470-13","quantity":"0","image":"product/brilliant/brilliant-g17470-13-lampa.jpg","name":"BRILLIANT G17470/13 | Perfect Brilliant"},{"product_id":"81311","model":"smarter-01-1522","quantity":"0","image":"product/smarter/smarter-01-1522-lampa.jpg","name":"SMARTER 01-1522 | Inbo Smarter"},{"product_id":"76091","model":"elstead-kl-calla-p-m","quantity":"0","image":"product/elstead/elstead-kl-calla-p-m-lampa.jpg","name":"ELSTEAD KL-CALLA-P-M | Calla-EL Elstead"}]')},"8fe3":function(e,a,t){"use strict";t("2a04")},"97bd":function(e){e.exports=JSON.parse('["fali","mennyezeti","lámpa","króm","opál","kristály","hatás","Remote","Brilliant","szabályozható","fényerő","fehér","Rabalux","két","kapcsoló","elforgatható","alkatrészek","fekete","bükk","ernyő","lámpabúra","kézzel","készült","elefántcsont","Nuria","Lucide","alumínium","spot","rozsdaszín","álló","okos","világítás","965cm","3000K","LED","áttetsző","rendszerelem","Mr-Jack","Ideal","függeszték","SP1","SMALL","CROMO","GU10","400lm","grafit","natúr","2x","narancs","Sky-IL","rózsaszín","taposókapcsoló","3x","nikkel","Madison-Manor","Elstead","falikar","1x","320lm","ezüst","átlátszó","Sparkle-Star","850lm","4000K","csiszolt","alumínium","csillogó","Eglo","Hilton","Jupiter","csillár","E27","Boing","Faneurope","Neve","PL15","15x","4500lm","Onelia","kerek","impulzus","Virgo-NL","Nova","Luce","Redo","dekor","IP65","Mowion","Kanlux","négyzet","matt","Maxlight","fényforrás","IP44","antikolt","réz","CameronW","4x","1720lm","nikkel","Imahn","sárgaréz","tápegység","téglalap","foglalat","tartóval","felszerelve","Tristan-IL","Sapana","Prodigy","Perfect","Inbo","Smarter","Calla-EL","source","Corso-MW","Chiaro","E14","860lm","antique","copper","Embleton","power","supply","40W","1050mA","rectangle","socket","holder","Vranos","Globo","aluminum"]')},"9c8d":function(e,a,t){"use strict";t("5717")},b30a:function(e){e.exports=JSON.parse('["Mowion","Kanlux","Calla-EN","Endon","Hilary","Rabalux","wall","or","ceiling","lamp","4x","LED","1600lm","4000K","chrome","opal","crystal","effect","Albariza","Eglo","dimmable","3x","1950lm","3000K","white","Mac","spot","with","two","switches","swivel","parts","2x","GU10","black","beech","Clip-Shades","Elstead","umbrella","lampshade","handmade","ivory","Organic","Maxlight","Norlys","adapter","1x","E27","IP65","Marley-TR","Trio","rust","Cage-TR","EGLO-Connect-Caldiero","standing","smart","lighting","96.5cm","806lm","IP44","Giorgio","Redo","floor","651cm","552lm","matt","transparent","Profile","Nowodvorski","system","component","864lm","Emma-VI","Viokef","SoftN","pendant","G13","T8","2000lm","graphite","Wood-TR","natural","Pancake","Azzardo","G9","orange","Nowodvorski-Cameleon-Cone","pink","Bastia-TR","150cm","pedestrian","nickel","Cabo","6x","Hemi","rotatable","540lm","Focus","Wofi","round","pulse","1480lm","&","lt;","gt;","6500K","Baloo-RD","decor","Lois","panel","square","2500lm","Basic-Round","source","Corso-MW","Chiaro","E14","860lm","antique","copper","Embleton","power","supply","40W","1050mA","rectangle","socket","holder","Vranos","Globo","aluminum"]')},d9ee:function(e,a,t){}});
//# sourceMappingURL=app.e8bb07d8.js.map
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-gherkin')) {
goog.provide('lt.plugins.lt_gherkin');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.watches');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_gherkin.gherkin = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-gherkin","gherkin-lang","lt.plugins.lt-gherkin/gherkin-lang",3635357256));
lt.plugins.lt_gherkin.line_classifiers = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",1122296761),/^(機能|功能|フィーチャ|기능|โครงหลัก|ความสามารถ|ความต้องการทางธุรกิจ|ಹೆಚ್ಚಳ|గుణము|ਮੁਹਾਂਦਰਾ|ਨਕਸ਼ ਨੁਹਾਰ|ਖਾਸੀਅਤ|रूप लेख|وِیژگی|خاصية|תכונה|Функціонал|Функция|Функционалност|Функционал|Үзенчәлеклелек|Свойство|Особина|Мөмкинлек|Могућност|Λειτουργία|Δυνατότητα|Właściwość|Vlastnosť|Trajto|Tính năng|Savybė|Pretty much|Požiadavka|Požadavek|Potrzeba biznesowa|Özellik|Osobina|Ominaisuus|Omadus|OH HAI|Mogućnost|Mogucnost|Jellemző|Hwæt|Hwaet|Funzionalità|Funktionalitéit|Funktionalität|Funkcja|Funkcionalnost|Funkcionalitāte|Funkcia|Fungsi|Functionaliteit|Funcționalitate|Funcţionalitate|Functionalitate|Funcionalitat|Funcionalidade|Fonctionnalité|Fitur|Fīča|Feature|Eiginleiki|Egenskap|Egenskab|Característica|Caracteristica|Business Need|Aspekt|Arwedd|Ahoy matey!|Ability):/,new cljs.core.Keyword(null,"indent","indent",4124632094),0,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",1122296761),/^(背景|배경|แนวคิด|ಹಿನ್ನೆಲೆ|నేపథ్యం|ਪਿਛੋਕੜ|पृष्ठभूमि|زمینه|الخلفية|רקע|Тарих|Предыстория|Предистория|Позадина|Передумова|Основа|Контекст|Кереш|Υπόβαθρο|Założenia|Yo\-ho\-ho|Tausta|Taust|Situācija|Rerefons|Pozadina|Pozadie|Pozadí|Osnova|Latar Belakang|Kontext|Konteksts|Kontekstas|Kontekst|Háttér|Hannergrond|Grundlage|Geçmiş|Fundo|Fono|First off|Dis is what went down|Dasar|Contexto|Contexte|Context|Contesto|Cenário de Fundo|Cenario de Fundo|Cefndir|Bối cảnh|Bakgrunnur|Bakgrunn|Bakgrund|Baggrund|Background|B4|Antecedents|Antecedentes|Ær|Aer|Achtergrond):/,new cljs.core.Keyword(null,"indent","indent",4124632094),2,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",1122296761),/^(場景大綱|场景大纲|劇本大綱|剧本大纲|テンプレ|シナリオテンプレート|シナリオテンプレ|シナリオアウトライン|시나리오 개요|สรุปเหตุการณ์|โครงสร้างของเหตุการณ์|ವಿವರಣೆ|కథనం|ਪਟਕਥਾ ਰੂਪ ਰੇਖਾ|ਪਟਕਥਾ ਢਾਂਚਾ|परिदृश्य रूपरेखा|سيناريو مخطط|الگوی سناریو|תבנית תרחיש|Сценарийның төзелеше|Сценарий структураси|Структура сценарію|Структура сценария|Структура сценарија|Скица|Рамка на сценарий|Концепт|Περιγραφή Σεναρίου|Wharrimean is|Template Situai|Template Senario|Template Keadaan|Tapausaihio|Szenariogrundriss|Szablon scenariusza|Swa hwær swa|Swa hwaer swa|Struktura scenarija|Structură scenariu|Structura scenariu|Skica|Skenario konsep|Shiver me timbers|Senaryo taslağı|Schema dello scenario|Scenariomall|Scenariomal|Scenario Template|Scenario Outline|Scenario Amlinellol|Scenārijs pēc parauga|Scenarijaus šablonas|Reckon it's like|Raamstsenaarium|Plang vum Szenario|Plan du Scénario|Plan du scénario|Osnova scénáře|Osnova Scenára|Náčrt Scenáru|Náčrt Scénáře|Náčrt Scenára|MISHUN SRSLY|Menggariskan Senario|Lýsing Dæma|Lýsing Atburðarásar|Konturo de la scenaro|Koncept|Khung tình huống|Khung kịch bản|Forgatókönyv vázlat|Esquema do Cenário|Esquema do Cenario|Esquema del escenario|Esquema de l'escenari|Esbozo do escenario|Delineação do Cenário|Delineacao do Cenario|All y'all|Abstrakt Scenario|Abstract Scenario):/,new cljs.core.Keyword(null,"indent","indent",4124632094),2,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",1122296761),/^(例子|例|サンプル|예|ชุดของเหตุการณ์|ชุดของตัวอย่าง|ಉದಾಹರಣೆಗಳು|ఉదాహరణలు|ਉਦਾਹਰਨਾਂ|उदाहरण|نمونه ها|امثلة|דוגמאות|Үрнәкләр|Сценарији|Примеры|Примери|Приклади|Мисоллар|Мисаллар|Σενάρια|Παραδείγματα|You'll wanna|Voorbeelden|Variantai|Tapaukset|Se þe|Se the|Se ðe|Scenarios|Scenariji|Scenarijai|Przykłady|Primjeri|Primeri|Příklady|Príklady|Piemēri|Példák|Pavyzdžiai|Paraugs|Örnekler|Juhtumid|Exemplos|Exemples|Exemple|Exempel|EXAMPLZ|Examples|Esempi|Enghreifftiau|Ekzemploj|Eksempler|Ejemplos|Dữ liệu|Dead men tell no tales|Dæmi|Contoh|Cenários|Cenarios|Beispiller|Beispiele|Atburðarásir):/,new cljs.core.Keyword(null,"indent","indent",4124632094),2,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",1122296761),/^(場景|场景|劇本|剧本|シナリオ|시나리오|เหตุการณ์|ಕಥಾಸಾರಾಂಶ|సన్నివేశం|ਪਟਕਥਾ|परिदृश्य|سيناريو|سناریو|תרחיש|Сценарій|Сценарио|Сценарий|Пример|Σενάριο|Tình huống|The thing of it is|Tapaus|Szenario|Swa|Stsenaarium|Skenario|Situai|Senaryo|Senario|Scenaro|Scenariusz|Scenariu|Scénario|Scenario|Scenarijus|Scenārijs|Scenarij|Scenarie|Scénář|Scenár|Primer|MISHUN|Kịch bản|Keadaan|Heave to|Forgatókönyv|Escenario|Escenari|Cenário|Cenario|Awww, look mate|Atburðarás):/,new cljs.core.Keyword(null,"indent","indent",4124632094),2,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",1122296761),/^(那麼|那么|而且|當|当|并且|同時|同时|前提|假设|假設|假定|假如|但是|但し|並且|もし|ならば|ただし|しかし|かつ|하지만|조건|먼저|만일|만약|단|그리고|그러면|และ |เมื่อ |แต่ |ดังนั้น |กำหนดให้ |ಸ್ಥಿತಿಯನ್ನು |ಮತ್ತು |ನೀಡಿದ |ನಂತರ |ಆದರೆ |మరియు |చెప్పబడినది |కాని |ఈ పరిస్థితిలో |అప్పుడు |ਪਰ |ਤਦ |ਜੇਕਰ |ਜਿਵੇਂ ਕਿ |ਜਦੋਂ |ਅਤੇ |यदि |परन्तु |पर |तब |तदा |तथा |जब |चूंकि |किन्तु |कदा |और |अगर |و |هنگامی |متى |لكن |عندما |ثم |بفرض |با فرض |اما |اذاً |آنگاه |כאשר |וגם |בהינתן |אזי |אז |אבל |Якщо |Һәм |Унда |Тоді |Тогда |То |Также |Та |Пусть |Припустимо, що |Припустимо |Онда |Но |Нехай |Нәтиҗәдә |Лекин |Ләкин |Коли |Когда |Когато |Када |Кад |К тому же |І |И |Задато |Задати |Задате |Если |Допустим |Дано |Дадено |Вә |Ва |Бирок |Әмма |Әйтик |Әгәр |Аммо |Али |Але |Агар |А також |А |Τότε |Όταν |Και |Δεδομένου |Αλλά |Þurh |Þegar |Þa þe |Þá |Þa |Zatati |Zakładając |Zadato |Zadate |Zadano |Zadani |Zadan |Za předpokladu |Za predpokladu |Youse know when youse got |Youse know like when |Yna |Yeah nah |Y'know |Y |Wun |Wtedy |When y'all |When |Wenn |WEN |wann |Ve |Và |Und |Un |ugeholl |Too right |Thurh |Thì |Then y'all |Then |Tha the |Tha |Tetapi |Tapi |Tak |Tada |Tad |Stel |Soit |Siis |Și |Şi |Si |Sed |Se |Så |Quando |Quand |Quan |Pryd |Potom |Pokud |Pokiaľ |Però |Pero |Pak |Oraz |Onda |Ond |Oletetaan |Og |Och |O zaman |Niin |Nhưng |När |Når |Mutta |Men |Mas |Maka |Majd |Mając |Mais |Maar |mä |Ma |Lorsque |Lorsqu'|Logo |Let go and haul |Kun |Kuid |Kui |Kiedy |Khi |Ketika |Kemudian |Keď |Když |Kaj |Kai |Kada |Kad |Jeżeli |Jeśli |Ja |It's just unbelievable |Ir |I CAN HAZ |I |Ha |Givun |Givet |Given y'all |Given |Gitt |Gegeven |Gegeben seien |Gegeben sei |Gdy |Gangway! |Fakat |Étant donnés |Etant donnés |Étant données |Etant données |Étant donnée |Etant donnée |Étant donné |Etant donné |Et |És |Entonces |Entón |Então |Entao |En |Eğer ki |Ef |Eeldades |E |Ðurh |Duota |Dun |Donitaĵo |Donat |Donada |Do |Diyelim ki |Diberi |Dengan |Den youse gotta |DEN |De |Dato |Dați fiind |Daţi fiind |Dati fiind |Dati |Date fiind |Date |Data |Dat fiind |Dar |Dann |dann |Dan |Dados |Dado |Dadas |Dada |Ða ðe |Ða |Cuando |Cho |Cando |Când |Cand |Cal |But y'all |But at the end of the day I reckon |BUT |But |Buh |Blimey! |Biết |Bet |Bagi |Aye |awer |Avast! |Atunci |Atesa |Atès |Apabila |Anrhegedig a |Angenommen |And y'all |And |AN |An |an |Amikor |Amennyiben |Ama |Als |Alors |Allora |Ali |Aleshores |Ale |Akkor |Ak |Adott |Ac |Aber |A zároveň |A tiež |A taktiež |A také |A |a |7 |\* )/,new cljs.core.Keyword(null,"indent","indent",4124632094),4,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",1122296761),/\|\s*/,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",1122296761),/@\S+/,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",1122296761),/^\s+#\S+/,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",1122296761),/.*/,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",4427493795),false], null)], null)], null);
lt.plugins.lt_gherkin.join_table_cells = (function join_table_cells(max_chars_by_column,row){var padded_row = cljs.core.map_indexed.call(null,(function (idx,cell){return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cell,cljs.core.repeat.call(null,(cljs.core.nth.call(null,max_chars_by_column,idx) - cljs.core.count.call(null,cell))," ")));
}),row);return [cljs.core.str("| "),cljs.core.str(clojure.string.join.call(null," | ",padded_row)),cljs.core.str(" |")].join('');
});
lt.plugins.lt_gherkin.format_table = (function format_table(table_rows,indent){var column_cnt = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,table_rows));var max_chars_by_column = cljs.core.map.call(null,((function (column_cnt){
return (function (col){return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (column_cnt){
return (function (p1__9758_SHARP_){return cljs.core.count.call(null,cljs.core.get.call(null,p1__9758_SHARP_,col,""));
});})(column_cnt))
,table_rows));
});})(column_cnt))
,cljs.core.range.call(null,0,column_cnt));return clojure.string.join.call(null,"\n",cljs.core.map.call(null,cljs.core.comp.call(null,((function (column_cnt,max_chars_by_column){
return (function (row){return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,indent," "),row));
});})(column_cnt,max_chars_by_column))
,cljs.core.partial.call(null,lt.plugins.lt_gherkin.join_table_cells,max_chars_by_column)),table_rows));
});
lt.plugins.lt_gherkin.format_line = (function format_line(indent,p__9759,current_line){var map__9761 = p__9759;var map__9761__$1 = ((cljs.core.seq_QMARK_.call(null,map__9761))?cljs.core.apply.call(null,cljs.core.hash_map,map__9761):map__9761);var state = map__9761__$1;var current_table = cljs.core.get.call(null,map__9761__$1,new cljs.core.Keyword(null,"current-table","current-table",2168799724));var last_indent = cljs.core.get.call(null,map__9761__$1,new cljs.core.Keyword(null,"last-indent","last-indent",1332135733));var table_QMARK_ = cljs.core.get.call(null,map__9761__$1,new cljs.core.Keyword(null,"table?","table?",4427493795));var formatted_table = (((cljs.core.not.call(null,table_QMARK_)) && (cljs.core.seq.call(null,current_table)))?lt.plugins.lt_gherkin.format_table.call(null,current_table,last_indent):null);var current_line_str = (cljs.core.truth_(table_QMARK_)?null:cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,indent," "),current_line)));if(cljs.core.truth_(table_QMARK_))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-table","current-table",2168799724),cljs.core.conj.call(null,current_table,cljs.core.mapv.call(null,clojure.string.trim,cljs.core.rest.call(null,clojure.string.split.call(null,current_line,/\|/)))))], null);
} else
{if(cljs.core.truth_(formatted_table))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(formatted_table),cljs.core.str("\n"),cljs.core.str(current_line_str)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-table","current-table",2168799724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"last-indent","last-indent",1332135733),indent)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_line_str,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-indent","last-indent",1332135733),indent)], null);
} else
{return null;
}
}
}
});
lt.plugins.lt_gherkin.format_gherkin = (function format_gherkin(src){var all_lines = cljs.core.map.call(null,clojure.string.trim,clojure.string.split_lines.call(null,src));var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-indent","last-indent",1332135733),0,new cljs.core.Keyword(null,"current-table","current-table",2168799724),cljs.core.PersistentVector.EMPTY], null);var lines = all_lines;var formatted_gherkin = null;while(true){
var temp__4090__auto__ = cljs.core.first.call(null,lines);if(cljs.core.truth_(temp__4090__auto__))
{var current_line = temp__4090__auto__;var map__9767 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (state,lines,formatted_gherkin,current_line,temp__4090__auto__,all_lines){
return (function (p__9769){var map__9770 = p__9769;var map__9770__$1 = ((cljs.core.seq_QMARK_.call(null,map__9770))?cljs.core.apply.call(null,cljs.core.hash_map,map__9770):map__9770);var regex = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"regex","regex",1122296761));return cljs.core.re_find.call(null,regex,current_line);
});})(state,lines,formatted_gherkin,current_line,temp__4090__auto__,all_lines))
,lt.plugins.lt_gherkin.line_classifiers));var map__9767__$1 = ((cljs.core.seq_QMARK_.call(null,map__9767))?cljs.core.apply.call(null,cljs.core.hash_map,map__9767):map__9767);var indent = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"indent","indent",4124632094));var state_delta = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"state","state",1123661827));var vec__9768 = lt.plugins.lt_gherkin.format_line.call(null,(function (){var or__7200__auto__ = indent;if(cljs.core.truth_(or__7200__auto__))
{return or__7200__auto__;
} else
{return new cljs.core.Keyword(null,"last-indent","last-indent",1332135733).cljs$core$IFn$_invoke$arity$1(state);
}
})(),cljs.core.merge.call(null,state,state_delta),current_line);var formatted_line = cljs.core.nth.call(null,vec__9768,0,null);var state_delta__$1 = cljs.core.nth.call(null,vec__9768,1,null);{
var G__9772 = cljs.core.merge.call(null,state,state_delta__$1);
var G__9773 = cljs.core.rest.call(null,lines);
var G__9774 = (cljs.core.truth_(formatted_line)?clojure.string.join.call(null,"\n",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [formatted_gherkin,formatted_line], null))):formatted_gherkin);
state = G__9772;
lines = G__9773;
formatted_gherkin = G__9774;
continue;
}
} else
{var vec__9771 = lt.plugins.lt_gherkin.format_line.call(null,new cljs.core.Keyword(null,"last-indent","last-indent",1332135733).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"table?","table?",4427493795),false),"");var formatted_line = cljs.core.nth.call(null,vec__9771,0,null);return clojure.string.join.call(null,"\n",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [formatted_gherkin,formatted_line], null)));
}
break;
}
});
lt.plugins.lt_gherkin.format_gherkin_editor = (function format_gherkin_editor(ed){return lt.objs.editor.set_val.call(null,ed,lt.plugins.lt_gherkin.format_gherkin.call(null,lt.objs.editor.__GT_val.call(null,ed)));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-gherkin","gherkin.do.format.editor","lt.plugins.lt-gherkin/gherkin.do.format.editor",2365029372),new cljs.core.Keyword(null,"desc","desc",1016984067),"Gherkin: format gherkin file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.lt_gherkin.format_gherkin_editor.call(null,ed);
} else
{return null;
}
})], null));
}

//# sourceMappingURL=gherkin_compiled.js.map
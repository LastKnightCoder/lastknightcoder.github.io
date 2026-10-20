import{h as qt,u as Vt,al as te,am as ee,c as ie,l as se,a as at,z as yt,au as re,av as ae,aw as ne,G as oe,ax as le,ay as ce,q as pt,az as de,aA as It,aB as Ft,aC as ue,aD as he,aE as fe,aF as ye,aG as me,aH as ke,aI as pe,aJ as Wt,aK as Pt,aL as zt,aM as Bt,aN as Ot,aO as ge,i as be,ao as xe,X as Te,P as ve}from"./mermaid.core-5DJZHZ4D-BqIzS2qq.js";import{q as ct,ad as we,Y as _t}from"./index-IugHpN8w.js";var _e=_t((t,r)=>{(function(a,n){typeof t=="object"&&typeof r<"u"?r.exports=n():typeof define=="function"&&define.amd?define(n):(a=typeof globalThis<"u"?globalThis:a||self).dayjs_plugin_isoWeek=n()})(t,function(){var a="day";return function(n,o,d){var h=function($){return $.add(4-$.isoWeekday(),a)},v=o.prototype;v.isoWeekYear=function(){return h(this).year()},v.isoWeek=function($){if(!this.$utils().u($))return this.add(7*($-this.isoWeek()),a);var x,E,I,B,P=h(this),S=(x=this.isoWeekYear(),E=this.$u,I=(E?d.utc:d)().year(x).startOf("year"),B=4-I.isoWeekday(),I.isoWeekday()>4&&(B+=7),I.add(B,a));return P.diff(S,"week")+1},v.isoWeekday=function($){return this.$utils().u($)?this.day()||7:this.day(this.day()%7?$:$-7)};var Y=v.startOf;v.startOf=function($,x){var E=this.$utils(),I=!!E.u(x)||x;return E.p($)==="isoweek"?I?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)($,x)}}})}),$e=_t((t,r)=>{(function(a,n){typeof t=="object"&&typeof r<"u"?r.exports=n():typeof define=="function"&&define.amd?define(n):(a=typeof globalThis<"u"?globalThis:a||self).dayjs_plugin_customParseFormat=n()})(t,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,o=/\d/,d=/\d\d/,h=/\d\d?/,v=/\d*[^-_:/,()\s\d]+/,Y={},$=function(k){return(k=+k)+(k>68?1900:2e3)},x=function(k){return function(D){this[k]=+D}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(k){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var A=D.match(/([+-]|\d\d)/g),L=60*A[1]+(+A[2]||0);return L===0?0:A[0]==="+"?-L:L}(k)}],I=function(k){var D=Y[k];return D&&(D.indexOf?D:D.s.concat(D.f))},B=function(k,D){var A,L=Y.meridiem;if(L){for(var H=1;H<=24;H+=1)if(k.indexOf(L(H,0,D))>-1){A=H>12;break}}else A=k===(D?"pm":"PM");return A},P={A:[v,function(k){this.afternoon=B(k,!1)}],a:[v,function(k){this.afternoon=B(k,!0)}],Q:[o,function(k){this.month=3*(k-1)+1}],S:[o,function(k){this.milliseconds=100*+k}],SS:[d,function(k){this.milliseconds=10*+k}],SSS:[/\d{3}/,function(k){this.milliseconds=+k}],s:[h,x("seconds")],ss:[h,x("seconds")],m:[h,x("minutes")],mm:[h,x("minutes")],H:[h,x("hours")],h:[h,x("hours")],HH:[h,x("hours")],hh:[h,x("hours")],D:[h,x("day")],DD:[d,x("day")],Do:[v,function(k){var D=Y.ordinal,A=k.match(/\d+/);if(this.day=A[0],D)for(var L=1;L<=31;L+=1)D(L).replace(/\[|\]/g,"")===k&&(this.day=L)}],w:[h,x("week")],ww:[d,x("week")],M:[h,x("month")],MM:[d,x("month")],MMM:[v,function(k){var D=I("months"),A=(I("monthsShort")||D.map(function(L){return L.slice(0,3)})).indexOf(k)+1;if(A<1)throw new Error;this.month=A%12||A}],MMMM:[v,function(k){var D=I("months").indexOf(k)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,x("year")],YY:[d,function(k){this.year=$(k)}],YYYY:[/\d{4}/,x("year")],Z:E,ZZ:E};function S(k){var D,A;D=k,A=Y&&Y.formats;for(var L=(k=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(p,y,s){var c=s&&s.toUpperCase();return y||A[s]||a[s]||A[c].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(l,u,i){return u||i.slice(1)})})).match(n),H=L.length,j=0;j<H;j+=1){var R=L[j],U=P[R],f=U&&U[0],g=U&&U[1];L[j]=g?{regex:f,parser:g}:R.replace(/^\[|\]$/g,"")}return function(p){for(var y={},s=0,c=0;s<H;s+=1){var l=L[s];if(typeof l=="string")c+=l.length;else{var u=l.regex,i=l.parser,C=p.slice(c),e=u.exec(C)[0];i.call(y,e),p=p.replace(e,"")}}return function(m){var _=m.afternoon;if(_!==void 0){var w=m.hours;_?w<12&&(m.hours+=12):w===12&&(m.hours=0),delete m.afternoon}}(y),y}}return function(k,D,A){A.p.customParseFormat=!0,k&&k.parseTwoDigitYear&&($=k.parseTwoDigitYear);var L=D.prototype,H=L.parse;L.parse=function(j){var R=j.date,U=j.utc,f=j.args;this.$u=U;var g=f[1];if(typeof g=="string"){var p=f[2]===!0,y=f[3]===!0,s=p||y,c=f[2];y&&(c=f[2]),Y=this.$locale(),!p&&c&&(Y=A.Ls[c]),this.$d=function(C,e,m,_){try{if(["x","X"].indexOf(e)>-1)return new Date((e==="X"?1e3:1)*C);var w=S(e)(C),T=w.year,M=w.month,b=w.day,X=w.hours,tt=w.minutes,lt=w.seconds,bt=w.milliseconds,ft=w.zone,W=w.week,G=new Date,z=b||(T||M?1:G.getDate()),et=T||G.getFullYear(),Q=0;T&&!M||(Q=M>0?M-1:G.getMonth());var J,N=X||0,rt=tt||0,V=lt||0,it=bt||0;return ft?new Date(Date.UTC(et,Q,z,N,rt,V,it+60*ft.offset*1e3)):m?new Date(Date.UTC(et,Q,z,N,rt,V,it)):(J=new Date(et,Q,z,N,rt,V,it),W&&(J=_(J).week(W).toDate()),J)}catch{return new Date("")}}(R,g,U,A),this.init(),c&&c!==!0&&(this.$L=this.locale(c).$L),s&&R!=this.format(g)&&(this.$d=new Date("")),Y={}}else if(g instanceof Array)for(var l=g.length,u=1;u<=l;u+=1){f[1]=g[u-1];var i=A.apply(this,f);if(i.isValid()){this.$d=i.$d,this.$L=i.$L,this.init();break}u===l&&(this.$d=new Date(""))}else H.call(this,j)}}})}),De=_t((t,r)=>{(function(a,n){typeof t=="object"&&typeof r<"u"?r.exports=n():typeof define=="function"&&define.amd?define(n):(a=typeof globalThis<"u"?globalThis:a||self).dayjs_plugin_advancedFormat=n()})(t,function(){return function(a,n){var o=n.prototype,d=o.format;o.format=function(h){var v=this,Y=this.$locale();if(!this.isValid())return d.bind(this)(h);var $=this.$utils(),x=(h||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(E){switch(E){case"Q":return Math.ceil((v.$M+1)/3);case"Do":return Y.ordinal(v.$D);case"gggg":return v.weekYear();case"GGGG":return v.isoWeekYear();case"wo":return Y.ordinal(v.week(),"W");case"w":case"ww":return $.s(v.week(),E==="w"?1:2,"0");case"W":case"WW":return $.s(v.isoWeek(),E==="W"?1:2,"0");case"k":case"kk":return $.s(String(v.$H===0?24:v.$H),E==="k"?1:2,"0");case"X":return Math.floor(v.$d.getTime()/1e3);case"x":return v.$d.getTime();case"z":return"["+v.offsetName()+"]";case"zzz":return"["+v.offsetName("long")+"]";default:return E}});return d.bind(this)(x)}}})}),Ce=ct(Te(),1),O=ct(we(),1),Se=ct(_e(),1),Ee=ct($e(),1),Ae=ct(De(),1),xt=function(){var t=function(y,s,c,l){for(c=c||{},l=y.length;l--;c[y[l]]=s);return c},r=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],a=[1,25],n=[1,26],o=[1,27],d=[1,28],h=[1,29],v=[1,30],Y=[1,31],$=[1,9],x=[1,10],E=[1,11],I=[1,12],B=[1,13],P=[1,14],S=[1,15],k=[1,16],D=[1,18],A=[1,19],L=[1,20],H=[1,21],j=[1,22],R=[1,24],U=[1,32],f={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(y,s,c,l,u,i,C){var e=i.length-1;switch(u){case 1:return i[e-1];case 2:this.$=[];break;case 3:i[e-1].push(i[e]),this.$=i[e-1];break;case 4:case 5:this.$=i[e];break;case 6:case 7:this.$=[];break;case 8:l.setWeekday("monday");break;case 9:l.setWeekday("tuesday");break;case 10:l.setWeekday("wednesday");break;case 11:l.setWeekday("thursday");break;case 12:l.setWeekday("friday");break;case 13:l.setWeekday("saturday");break;case 14:l.setWeekday("sunday");break;case 15:l.setDateFormat(i[e].substr(11)),this.$=i[e].substr(11);break;case 16:l.enableInclusiveEndDates(),this.$=i[e].substr(18);break;case 17:l.TopAxis(),this.$=i[e].substr(8);break;case 18:l.setAxisFormat(i[e].substr(11)),this.$=i[e].substr(11);break;case 19:l.setTickInterval(i[e].substr(13)),this.$=i[e].substr(13);break;case 20:l.setExcludes(i[e].substr(9)),this.$=i[e].substr(9);break;case 21:l.setIncludes(i[e].substr(9)),this.$=i[e].substr(9);break;case 22:l.setTodayMarker(i[e].substr(12)),this.$=i[e].substr(12);break;case 24:l.setDiagramTitle(i[e].substr(6)),this.$=i[e].substr(6);break;case 25:this.$=i[e].trim(),l.setAccTitle(this.$);break;case 26:case 27:this.$=i[e].trim(),l.setAccDescription(this.$);break;case 28:l.addSection(i[e].substr(8)),this.$=i[e].substr(8);break;case 30:l.addTask(i[e-1],i[e]),this.$="task";break;case 31:this.$=i[e-1],l.setClickEvent(i[e-1],i[e],null);break;case 32:this.$=i[e-2],l.setClickEvent(i[e-2],i[e-1],i[e]);break;case 33:this.$=i[e-2],l.setClickEvent(i[e-2],i[e-1],null),l.setLink(i[e-2],i[e]);break;case 34:this.$=i[e-3],l.setClickEvent(i[e-3],i[e-2],i[e-1]),l.setLink(i[e-3],i[e]);break;case 35:this.$=i[e-2],l.setClickEvent(i[e-2],i[e],null),l.setLink(i[e-2],i[e-1]);break;case 36:this.$=i[e-3],l.setClickEvent(i[e-3],i[e-1],i[e]),l.setLink(i[e-3],i[e-2]);break;case 37:this.$=i[e-1],l.setLink(i[e-1],i[e]);break;case 38:case 44:this.$=i[e-1]+" "+i[e];break;case 39:case 40:case 42:this.$=i[e-2]+" "+i[e-1]+" "+i[e];break;case 41:case 43:this.$=i[e-3]+" "+i[e-2]+" "+i[e-1]+" "+i[e];break}},table:[{3:1,4:[1,2]},{1:[3]},t(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:a,13:n,14:o,15:d,16:h,17:v,18:Y,19:$,20:x,21:E,22:I,23:B,24:P,25:S,26:k,27:D,28:A,30:L,32:H,33:j,34:23,35:R,37:U},t(r,[2,7],{1:[2,1]}),t(r,[2,3]),{9:33,11:17,12:a,13:n,14:o,15:d,16:h,17:v,18:Y,19:$,20:x,21:E,22:I,23:B,24:P,25:S,26:k,27:D,28:A,30:L,32:H,33:j,34:23,35:R,37:U},t(r,[2,5]),t(r,[2,6]),t(r,[2,15]),t(r,[2,16]),t(r,[2,17]),t(r,[2,18]),t(r,[2,19]),t(r,[2,20]),t(r,[2,21]),t(r,[2,22]),t(r,[2,23]),t(r,[2,24]),{29:[1,34]},{31:[1,35]},t(r,[2,27]),t(r,[2,28]),t(r,[2,29]),{36:[1,36]},t(r,[2,8]),t(r,[2,9]),t(r,[2,10]),t(r,[2,11]),t(r,[2,12]),t(r,[2,13]),t(r,[2,14]),{38:[1,37],40:[1,38]},t(r,[2,4]),t(r,[2,25]),t(r,[2,26]),t(r,[2,30]),t(r,[2,31],{39:[1,39],40:[1,40]}),t(r,[2,37],{38:[1,41]}),t(r,[2,32],{40:[1,42]}),t(r,[2,33]),t(r,[2,35],{39:[1,43]}),t(r,[2,34]),t(r,[2,36])],defaultActions:{},parseError:function(y,s){if(s.recoverable)this.trace(y);else{var c=new Error(y);throw c.hash=s,c}},parse:function(y){var s=this,c=[0],l=[],u=[null],i=[],C=this.table,e="",m=0,_=0,w=2,T=1,M=i.slice.call(arguments,1),b=Object.create(this.lexer),X={yy:{}};for(var tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,tt)&&(X.yy[tt]=this.yy[tt]);b.setInput(y,X.yy),X.yy.lexer=b,X.yy.parser=this,typeof b.yylloc>"u"&&(b.yylloc={});var lt=b.yylloc;i.push(lt);var bt=b.options&&b.options.ranges;typeof X.yy.parseError=="function"?this.parseError=X.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ft(){var Z;return Z=l.pop()||b.lex()||T,typeof Z!="number"&&(Z instanceof Array&&(l=Z,Z=l.pop()),Z=s.symbols_[Z]||Z),Z}for(var W,G,z,et,Q={},J,N,rt,V;;){if(G=c[c.length-1],this.defaultActions[G]?z=this.defaultActions[G]:((W===null||typeof W>"u")&&(W=ft()),z=C[G]&&C[G][W]),typeof z>"u"||!z.length||!z[0]){var it="";V=[];for(J in C[G])this.terminals_[J]&&J>w&&V.push("'"+this.terminals_[J]+"'");b.showPosition?it="Parse error on line "+(m+1)+`:
`+b.showPosition()+`
Expecting `+V.join(", ")+", got '"+(this.terminals_[W]||W)+"'":it="Parse error on line "+(m+1)+": Unexpected "+(W==T?"end of input":"'"+(this.terminals_[W]||W)+"'"),this.parseError(it,{text:b.match,token:this.terminals_[W]||W,line:b.yylineno,loc:lt,expected:V})}if(z[0]instanceof Array&&z.length>1)throw new Error("Parse Error: multiple actions possible at state: "+G+", token: "+W);switch(z[0]){case 1:c.push(W),u.push(b.yytext),i.push(b.yylloc),c.push(z[1]),W=null,_=b.yyleng,e=b.yytext,m=b.yylineno,lt=b.yylloc;break;case 2:if(N=this.productions_[z[1]][1],Q.$=u[u.length-N],Q._$={first_line:i[i.length-(N||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(N||1)].first_column,last_column:i[i.length-1].last_column},bt&&(Q._$.range=[i[i.length-(N||1)].range[0],i[i.length-1].range[1]]),et=this.performAction.apply(Q,[e,_,m,X.yy,z[1],u,i].concat(M)),typeof et<"u")return et;N&&(c=c.slice(0,-1*N*2),u=u.slice(0,-1*N),i=i.slice(0,-1*N)),c.push(this.productions_[z[1]][0]),u.push(Q.$),i.push(Q._$),rt=C[c[c.length-2]][c[c.length-1]],c.push(rt);break;case 3:return!0}}return!0}},g=function(){var y={EOF:1,parseError:function(s,c){if(this.yy.parser)this.yy.parser.parseError(s,c);else throw new Error(s)},setInput:function(s,c){return this.yy=c||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var c=s.match(/(?:\r\n?|\n).*/g);return c?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var c=s.length,l=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-c),this.offset-=c;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===u.length?this.yylloc.first_column:0)+u[u.length-l.length].length-l[0].length:this.yylloc.first_column-c},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-c]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),c=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+c+"^"},test_match:function(s,c){var l,u,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),u=s[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],l=this.performAction.call(this,this.yy,this,c,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var C in i)this[C]=i[C];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,c,l,u;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),C=0;C<i.length;C++)if(l=this._input.match(this.rules[i[C]]),l&&(!c||l[0].length>c[0].length)){if(c=l,u=C,this.options.backtrack_lexer){if(s=this.test_match(l,i[C]),s!==!1)return s;if(this._backtrack){c=!1;continue}else return!1}else if(!this.options.flex)break}return c?(s=this.test_match(c,i[u]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return s||this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},pushState:function(s){this.begin(s)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(s,c,l,u){switch(l){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 40;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 21:this.popState();break;case 22:return 39;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}};return y}();f.lexer=g;function p(){this.yy={}}return p.prototype=f,f.Parser=p,new p}();xt.parser=xt;var Me=xt;O.default.extend(Se.default);O.default.extend(Ee.default);O.default.extend(Ae.default);var K="",$t="",Dt,Ct="",dt=[],ut=[],St={},Et=[],gt=[],ot="",At="",Nt=["active","done","crit","milestone"],Mt=[],ht=!1,Yt=!1,Lt="sunday",Tt=0,Ye=function(){Et=[],gt=[],ot="",Mt=[],mt=0,wt=void 0,kt=void 0,F=[],K="",$t="",At="",Dt=void 0,Ct="",dt=[],ut=[],ht=!1,Yt=!1,Tt=0,St={},xe(),Lt="sunday"},Le=function(t){$t=t},Ie=function(){return $t},Fe=function(t){Dt=t},We=function(){return Dt},Pe=function(t){Ct=t},ze=function(){return Ct},Be=function(t){K=t},Oe=function(){ht=!0},He=function(){return ht},je=function(){Yt=!0},Ne=function(){return Yt},Ue=function(t){At=t},Xe=function(){return At},Ge=function(){return K},Qe=function(t){dt=t.toLowerCase().split(/[\s,]+/)},Re=function(){return dt},Ke=function(t){ut=t.toLowerCase().split(/[\s,]+/)},Je=function(){return ut},Ze=function(){return St},qe=function(t){ot=t,Et.push(t)},Ve=function(){return Et},ti=function(){let t=Ht(),r=10,a=0;for(;!t&&a<r;)t=Ht(),a++;return gt=F,gt},Ut=function(t,r,a,n){return n.includes(t.format(r.trim()))?!1:t.isoWeekday()>=6&&a.includes("weekends")||a.includes(t.format("dddd").toLowerCase())?!0:a.includes(t.format(r.trim()))},ei=function(t){Lt=t},ii=function(){return Lt},Xt=function(t,r,a,n){if(!a.length||t.manualEndTime)return;let o;t.startTime instanceof Date?o=(0,O.default)(t.startTime):o=(0,O.default)(t.startTime,r,!0),o=o.add(1,"d");let d;t.endTime instanceof Date?d=(0,O.default)(t.endTime):d=(0,O.default)(t.endTime,r,!0);let[h,v]=si(o,d,r,a,n);t.endTime=h.toDate(),t.renderEndTime=v},si=function(t,r,a,n,o){let d=!1,h=null,v=r.add(1e4,"d");for(;t<=r;){if(d||(h=r.toDate()),d=Ut(t,a,n,o),d&&(r=r.add(1,"d"),r>v))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[r,h]},vt=function(t,r,a){a=a.trim();let n=/^after\s+(?<ids>[\d\w- ]+)/.exec(a);if(n!==null){let d=null;for(let v of n.groups.ids.split(" ")){let Y=st(v);Y!==void 0&&(!d||Y.endTime>d.endTime)&&(d=Y)}if(d)return d.endTime;let h=new Date;return h.setHours(0,0,0,0),h}let o=(0,O.default)(a,r.trim(),!0);if(o.isValid())return o.toDate();{pt.debug("Invalid date:"+a),pt.debug("With date format:"+r.trim());let d=new Date(a);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+a);return d}},Gt=function(t){let r=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return r!==null?[Number.parseFloat(r[1]),r[2]]:[NaN,"ms"]},Qt=function(t,r,a,n=!1){a=a.trim();let o=/^until\s+(?<ids>[\d\w- ]+)/.exec(a);if(o!==null){let $=null;for(let E of o.groups.ids.split(" ")){let I=st(E);I!==void 0&&(!$||I.startTime<$.startTime)&&($=I)}if($)return $.startTime;let x=new Date;return x.setHours(0,0,0,0),x}let d=(0,O.default)(a,r.trim(),!0);if(d.isValid())return n&&(d=d.add(1,"d")),d.toDate();let h=(0,O.default)(t),[v,Y]=Gt(a);if(!Number.isNaN(v)){let $=h.add(v,Y);$.isValid()&&(h=$)}return h.toDate()},mt=0,nt=function(t){return t===void 0?(mt=mt+1,"task"+mt):t},ri=function(t,r){let a;r.substr(0,1)===":"?a=r.substr(1,r.length):a=r;let n=a.split(","),o={};Zt(n,o,Nt);for(let h=0;h<n.length;h++)n[h]=n[h].trim();let d="";switch(n.length){case 1:o.id=nt(),o.startTime=t.endTime,d=n[0];break;case 2:o.id=nt(),o.startTime=vt(void 0,K,n[0]),d=n[1];break;case 3:o.id=nt(n[0]),o.startTime=vt(void 0,K,n[1]),d=n[2];break}return d&&(o.endTime=Qt(o.startTime,K,d,ht),o.manualEndTime=(0,O.default)(d,"YYYY-MM-DD",!0).isValid(),Xt(o,K,ut,dt)),o},ai=function(t,r){let a;r.substr(0,1)===":"?a=r.substr(1,r.length):a=r;let n=a.split(","),o={};Zt(n,o,Nt);for(let d=0;d<n.length;d++)n[d]=n[d].trim();switch(n.length){case 1:o.id=nt(),o.startTime={type:"prevTaskEnd",id:t},o.endTime={data:n[0]};break;case 2:o.id=nt(),o.startTime={type:"getStartDate",startData:n[0]},o.endTime={data:n[1]};break;case 3:o.id=nt(n[0]),o.startTime={type:"getStartDate",startData:n[1]},o.endTime={data:n[2]};break}return o},wt,kt,F=[],Rt={},ni=function(t,r){let a={section:ot,type:ot,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:r},task:t,classes:[]},n=ai(kt,r);a.raw.startTime=n.startTime,a.raw.endTime=n.endTime,a.id=n.id,a.prevTaskId=kt,a.active=n.active,a.done=n.done,a.crit=n.crit,a.milestone=n.milestone,a.order=Tt,Tt++;let o=F.push(a);kt=a.id,Rt[a.id]=o-1},st=function(t){let r=Rt[t];return F[r]},oi=function(t,r){let a={section:ot,type:ot,description:t,task:t,classes:[]},n=ri(wt,r);a.startTime=n.startTime,a.endTime=n.endTime,a.id=n.id,a.active=n.active,a.done=n.done,a.crit=n.crit,a.milestone=n.milestone,wt=a,gt.push(a)},Ht=function(){let t=function(a){let n=F[a],o="";switch(F[a].raw.startTime.type){case"prevTaskEnd":{let d=st(n.prevTaskId);n.startTime=d.endTime;break}case"getStartDate":o=vt(void 0,K,F[a].raw.startTime.startData),o&&(F[a].startTime=o);break}return F[a].startTime&&(F[a].endTime=Qt(F[a].startTime,K,F[a].raw.endTime.data,ht),F[a].endTime&&(F[a].processed=!0,F[a].manualEndTime=(0,O.default)(F[a].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Xt(F[a],K,ut,dt))),F[a].processed},r=!0;for(let[a,n]of F.entries())t(a),r=r&&n.processed;return r},li=function(t,r){let a=r;at().securityLevel!=="loose"&&(a=(0,Ce.sanitizeUrl)(r)),t.split(",").forEach(function(n){st(n)!==void 0&&(Jt(n,()=>{window.open(a,"_self")}),St[n]=a)}),Kt(t,"clickable")},Kt=function(t,r){t.split(",").forEach(function(a){let n=st(a);n!==void 0&&n.classes.push(r)})},ci=function(t,r,a){if(at().securityLevel!=="loose"||r===void 0)return;let n=[];if(typeof a=="string"){n=a.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let o=0;o<n.length;o++){let d=n[o].trim();d.charAt(0)==='"'&&d.charAt(d.length-1)==='"'&&(d=d.substr(1,d.length-2)),n[o]=d}}n.length===0&&n.push(t),st(t)!==void 0&&Jt(t,()=>{ve.runFunc(r,...n)})},Jt=function(t,r){Mt.push(function(){let a=document.querySelector(`[id="${t}"]`);a!==null&&a.addEventListener("click",function(){r()})},function(){let a=document.querySelector(`[id="${t}-text"]`);a!==null&&a.addEventListener("click",function(){r()})})},di=function(t,r,a){t.split(",").forEach(function(n){ci(n,r,a)}),Kt(t,"clickable")},ui=function(t){Mt.forEach(function(r){r(t)})},hi={getConfig:()=>at().gantt,clear:Ye,setDateFormat:Be,getDateFormat:Ge,enableInclusiveEndDates:Oe,endDatesAreInclusive:He,enableTopAxis:je,topAxisEnabled:Ne,setAxisFormat:Le,getAxisFormat:Ie,setTickInterval:Fe,getTickInterval:We,setTodayMarker:Pe,getTodayMarker:ze,setAccTitle:se,getAccTitle:ie,setDiagramTitle:ee,getDiagramTitle:te,setDisplayMode:Ue,getDisplayMode:Xe,setAccDescription:Vt,getAccDescription:qt,addSection:qe,getSections:Ve,getTasks:ti,addTask:ni,findTaskById:st,addTaskOrg:oi,setIncludes:Qe,getIncludes:Re,setExcludes:Ke,getExcludes:Je,setClickEvent:di,setLink:li,getLinks:Ze,bindFunctions:ui,parseDuration:Gt,isInvalidDate:Ut,setWeekday:ei,getWeekday:ii};function Zt(t,r,a){let n=!0;for(;n;)n=!1,a.forEach(function(o){let d="^\\s*"+o+"\\s*$",h=new RegExp(d);t[0].match(h)&&(r[o]=!0,t.shift(1),n=!0)})}var fi=function(){pt.debug("Something is calling, setConf, remove the call")},jt={monday:pe,tuesday:ke,wednesday:me,thursday:ye,friday:fe,saturday:he,sunday:ue},yi=(t,r)=>{let a=[...t].map(()=>-1/0),n=[...t].sort((d,h)=>d.startTime-h.startTime||d.order-h.order),o=0;for(let d of n)for(let h=0;h<a.length;h++)if(d.startTime>=a[h]){a[h]=d.endTime,d.order=h+r,h>o&&(o=h);break}return o},q,mi=function(t,r,a,n){let o=at().gantt,d=at().securityLevel,h;d==="sandbox"&&(h=yt("#i"+r));let v=d==="sandbox"?yt(h.nodes()[0].contentDocument.body):yt("body"),Y=d==="sandbox"?h.nodes()[0].contentDocument:document,$=Y.getElementById(r);q=$.parentElement.offsetWidth,q===void 0&&(q=1200),o.useWidth!==void 0&&(q=o.useWidth);let x=n.db.getTasks(),E=[];for(let f of x)E.push(f.type);E=U(E);let I={},B=2*o.topPadding;if(n.db.getDisplayMode()==="compact"||o.displayMode==="compact"){let f={};for(let p of x)f[p.section]===void 0?f[p.section]=[p]:f[p.section].push(p);let g=0;for(let p of Object.keys(f)){let y=yi(f[p],g)+1;g+=y,B+=y*(o.barHeight+o.barGap),I[p]=y}}else{B+=x.length*(o.barHeight+o.barGap);for(let f of E)I[f]=x.filter(g=>g.type===f).length}$.setAttribute("viewBox","0 0 "+q+" "+B);let P=v.select(`[id="${r}"]`),S=re().domain([ae(x,function(f){return f.startTime}),ne(x,function(f){return f.endTime})]).rangeRound([0,q-o.leftPadding-o.rightPadding]);function k(f,g){let p=f.startTime,y=g.startTime,s=0;return p>y?s=1:p<y&&(s=-1),s}x.sort(k),D(x,q,B),oe(P,B,q,o.useMaxWidth),P.append("text").text(n.db.getDiagramTitle()).attr("x",q/2).attr("y",o.titleTopMargin).attr("class","titleText");function D(f,g,p){let y=o.barHeight,s=y+o.barGap,c=o.topPadding,l=o.leftPadding,u=le().domain([0,E.length]).range(["#00B9FA","#F95002"]).interpolate(ce);L(s,c,l,g,p,f,n.db.getExcludes(),n.db.getIncludes()),H(l,c,g,p),A(f,s,c,l,y,u,g),j(s,c),R(l,c,g,p)}function A(f,g,p,y,s,c,l){let u=[...new Set(f.map(e=>e.order))].map(e=>f.find(m=>m.order===e));P.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(e,m){return m=e.order,m*g+p-2}).attr("width",function(){return l-o.rightPadding/2}).attr("height",g).attr("class",function(e){for(let[m,_]of E.entries())if(e.type===_)return"section section"+m%o.numberSectionStyles;return"section section0"});let i=P.append("g").selectAll("rect").data(f).enter(),C=n.db.getLinks();if(i.append("rect").attr("id",function(e){return e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?S(e.startTime)+y+.5*(S(e.endTime)-S(e.startTime))-.5*s:S(e.startTime)+y}).attr("y",function(e,m){return m=e.order,m*g+p}).attr("width",function(e){return e.milestone?s:S(e.renderEndTime||e.endTime)-S(e.startTime)}).attr("height",s).attr("transform-origin",function(e,m){return m=e.order,(S(e.startTime)+y+.5*(S(e.endTime)-S(e.startTime))).toString()+"px "+(m*g+p+.5*s).toString()+"px"}).attr("class",function(e){let m="task",_="";e.classes.length>0&&(_=e.classes.join(" "));let w=0;for(let[M,b]of E.entries())e.type===b&&(w=M%o.numberSectionStyles);let T="";return e.active?e.crit?T+=" activeCrit":T=" active":e.done?e.crit?T=" doneCrit":T=" done":e.crit&&(T+=" crit"),T.length===0&&(T=" task"),e.milestone&&(T=" milestone "+T),T+=w,T+=" "+_,m+T}),i.append("text").attr("id",function(e){return e.id+"-text"}).text(function(e){return e.task}).attr("font-size",o.fontSize).attr("x",function(e){let m=S(e.startTime),_=S(e.renderEndTime||e.endTime);e.milestone&&(m+=.5*(S(e.endTime)-S(e.startTime))-.5*s),e.milestone&&(_=m+s);let w=this.getBBox().width;return w>_-m?_+w+1.5*o.leftPadding>l?m+y-5:_+y+5:(_-m)/2+m+y}).attr("y",function(e,m){return m=e.order,m*g+o.barHeight/2+(o.fontSize/2-2)+p}).attr("text-height",s).attr("class",function(e){let m=S(e.startTime),_=S(e.endTime);e.milestone&&(_=m+s);let w=this.getBBox().width,T="";e.classes.length>0&&(T=e.classes.join(" "));let M=0;for(let[X,tt]of E.entries())e.type===tt&&(M=X%o.numberSectionStyles);let b="";return e.active&&(e.crit?b="activeCritText"+M:b="activeText"+M),e.done?e.crit?b=b+" doneCritText"+M:b=b+" doneText"+M:e.crit&&(b=b+" critText"+M),e.milestone&&(b+=" milestoneText"),w>_-m?_+w+1.5*o.leftPadding>l?T+" taskTextOutsideLeft taskTextOutside"+M+" "+b:T+" taskTextOutsideRight taskTextOutside"+M+" "+b+" width-"+w:T+" taskText taskText"+M+" "+b+" width-"+w}),at().securityLevel==="sandbox"){let e;e=yt("#i"+r);let m=e.nodes()[0].contentDocument;i.filter(function(_){return C[_.id]!==void 0}).each(function(_){var w=m.querySelector("#"+_.id),T=m.querySelector("#"+_.id+"-text");let M=w.parentNode;var b=m.createElement("a");b.setAttribute("xlink:href",C[_.id]),b.setAttribute("target","_top"),M.appendChild(b),b.appendChild(w),b.appendChild(T)})}}function L(f,g,p,y,s,c,l,u){if(l.length===0&&u.length===0)return;let i,C;for(let{startTime:T,endTime:M}of c)(i===void 0||T<i)&&(i=T),(C===void 0||M>C)&&(C=M);if(!i||!C)return;if((0,O.default)(C).diff((0,O.default)(i),"year")>5){pt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let e=n.db.getDateFormat(),m=[],_=null,w=(0,O.default)(i);for(;w.valueOf()<=C;)n.db.isInvalidDate(w,e,l,u)?_?_.end=w:_={start:w,end:w}:_&&(m.push(_),_=null),w=w.add(1,"d");P.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",function(T){return"exclude-"+T.start.format("YYYY-MM-DD")}).attr("x",function(T){return S(T.start)+p}).attr("y",o.gridLineStartPadding).attr("width",function(T){let M=T.end.add(1,"day");return S(M)-S(T.start)}).attr("height",s-g-o.gridLineStartPadding).attr("transform-origin",function(T,M){return(S(T.start)+p+.5*(S(T.end)-S(T.start))).toString()+"px "+(M*f+.5*s).toString()+"px"}).attr("class","exclude-range")}function H(f,g,p,y){let s=de(S).tickSize(-y+g+o.gridLineStartPadding).tickFormat(It(n.db.getAxisFormat()||o.axisFormat||"%Y-%m-%d")),c=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||o.tickInterval);if(c!==null){let l=c[1],u=c[2],i=n.db.getWeekday()||o.weekday;switch(u){case"millisecond":s.ticks(Ot.every(l));break;case"second":s.ticks(Bt.every(l));break;case"minute":s.ticks(zt.every(l));break;case"hour":s.ticks(Pt.every(l));break;case"day":s.ticks(Wt.every(l));break;case"week":s.ticks(jt[i].every(l));break;case"month":s.ticks(Ft.every(l));break}}if(P.append("g").attr("class","grid").attr("transform","translate("+f+", "+(y-50)+")").call(s).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||o.topAxis){let l=ge(S).tickSize(-y+g+o.gridLineStartPadding).tickFormat(It(n.db.getAxisFormat()||o.axisFormat||"%Y-%m-%d"));if(c!==null){let u=c[1],i=c[2],C=n.db.getWeekday()||o.weekday;switch(i){case"millisecond":l.ticks(Ot.every(u));break;case"second":l.ticks(Bt.every(u));break;case"minute":l.ticks(zt.every(u));break;case"hour":l.ticks(Pt.every(u));break;case"day":l.ticks(Wt.every(u));break;case"week":l.ticks(jt[C].every(u));break;case"month":l.ticks(Ft.every(u));break}}P.append("g").attr("class","grid").attr("transform","translate("+f+", "+g+")").call(l).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function j(f,g){let p=0,y=Object.keys(I).map(s=>[s,I[s]]);P.append("g").selectAll("text").data(y).enter().append(function(s){let c=s[0].split(be.lineBreakRegex),l=-(c.length-1)/2,u=Y.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",l+"em");for(let[i,C]of c.entries()){let e=Y.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),i>0&&e.setAttribute("dy","1em"),e.textContent=C,u.appendChild(e)}return u}).attr("x",10).attr("y",function(s,c){if(c>0)for(let l=0;l<c;l++)return p+=y[c-1][1],s[1]*f/2+p*f+g;else return s[1]*f/2+g}).attr("font-size",o.sectionFontSize).attr("class",function(s){for(let[c,l]of E.entries())if(s[0]===l)return"sectionTitle sectionTitle"+c%o.numberSectionStyles;return"sectionTitle"})}function R(f,g,p,y){let s=n.db.getTodayMarker();if(s==="off")return;let c=P.append("g").attr("class","today"),l=new Date,u=c.append("line");u.attr("x1",S(l)+f).attr("x2",S(l)+f).attr("y1",o.titleTopMargin).attr("y2",y-o.titleTopMargin).attr("class","today"),s!==""&&u.attr("style",s.replace(/,/g,";"))}function U(f){let g={},p=[];for(let y=0,s=f.length;y<s;++y)Object.prototype.hasOwnProperty.call(g,f[y])||(g[f[y]]=!0,p.push(f[y]));return p}},ki={setConf:fi,draw:mi},pi=t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,gi=pi,Ti={parser:Me,db:hi,renderer:ki,styles:gi};export{Ti as diagram};

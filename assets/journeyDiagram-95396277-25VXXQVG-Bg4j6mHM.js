import{h as yt,y as pt,x as ft,g as rt}from"./chunk-QUX43JGR-CkUmF4nT.js";import{h as dt,u as gt,c as mt,l as xt,n as kt,r as _t,a as A,z as q,G as bt,s as vt,aS as J,X as wt}from"./mermaid.core-HFEOZEMU-DTgnKn8A.js";import{q as st,ad as $t}from"./index-Vl4st24Z.js";st($t(),1);st(wt(),1);var G=function(){var t=function(d,i,a,c){for(a=a||{},c=d.length;c--;a[d[c]]=i);return a},e=[6,8,10,11,12,14,16,17,18],s=[1,9],l=[1,10],r=[1,11],o=[1,12],u=[1,13],y=[1,14],p={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:function(d,i,a,c,h,n,g){var x=n.length-1;switch(h){case 1:return n[x-1];case 2:this.$=[];break;case 3:n[x-1].push(n[x]),this.$=n[x-1];break;case 4:case 5:this.$=n[x];break;case 6:case 7:this.$=[];break;case 8:c.setDiagramTitle(n[x].substr(6)),this.$=n[x].substr(6);break;case 9:this.$=n[x].trim(),c.setAccTitle(this.$);break;case 10:case 11:this.$=n[x].trim(),c.setAccDescription(this.$);break;case 12:c.addSection(n[x].substr(8)),this.$=n[x].substr(8);break;case 13:c.addTask(n[x-1],n[x]),this.$="task";break}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:s,12:l,14:r,16:o,17:u,18:y},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:s,12:l,14:r,16:o,17:u,18:y},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:function(d,i){if(i.recoverable)this.trace(d);else{var a=new Error(d);throw a.hash=i,a}},parse:function(d){var i=this,a=[0],c=[],h=[null],n=[],g=this.table,x="",L=0,U=0,ot=2,K=1,ct=n.slice.call(arguments,1),k=Object.create(this.lexer),T={yy:{}};for(var z in this.yy)Object.prototype.hasOwnProperty.call(this.yy,z)&&(T.yy[z]=this.yy[z]);k.setInput(d,T.yy),T.yy.lexer=k,T.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var N=k.yylloc;n.push(N);var ht=k.options&&k.options.ranges;typeof T.yy.parseError=="function"?this.parseError=T.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ut(){var $;return $=c.pop()||k.lex()||K,typeof $!="number"&&($ instanceof Array&&(c=$,$=c.pop()),$=i.symbols_[$]||$),$}for(var _,S,b,R,I={},F,w,Z,O;;){if(S=a[a.length-1],this.defaultActions[S]?b=this.defaultActions[S]:((_===null||typeof _>"u")&&(_=ut()),b=g[S]&&g[S][_]),typeof b>"u"||!b.length||!b[0]){var B="";O=[];for(F in g[S])this.terminals_[F]&&F>ot&&O.push("'"+this.terminals_[F]+"'");k.showPosition?B="Parse error on line "+(L+1)+`:
`+k.showPosition()+`
Expecting `+O.join(", ")+", got '"+(this.terminals_[_]||_)+"'":B="Parse error on line "+(L+1)+": Unexpected "+(_==K?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(B,{text:k.match,token:this.terminals_[_]||_,line:k.yylineno,loc:N,expected:O})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+S+", token: "+_);switch(b[0]){case 1:a.push(_),h.push(k.yytext),n.push(k.yylloc),a.push(b[1]),_=null,U=k.yyleng,x=k.yytext,L=k.yylineno,N=k.yylloc;break;case 2:if(w=this.productions_[b[1]][1],I.$=h[h.length-w],I._$={first_line:n[n.length-(w||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(w||1)].first_column,last_column:n[n.length-1].last_column},ht&&(I._$.range=[n[n.length-(w||1)].range[0],n[n.length-1].range[1]]),R=this.performAction.apply(I,[x,U,L,T.yy,b[1],h,n].concat(ct)),typeof R<"u")return R;w&&(a=a.slice(0,-1*w*2),h=h.slice(0,-1*w),n=n.slice(0,-1*w)),a.push(this.productions_[b[1]][0]),h.push(I.$),n.push(I._$),Z=g[a[a.length-2]][a[a.length-1]],a.push(Z);break;case 3:return!0}}return!0}},m=function(){var d={EOF:1,parseError:function(i,a){if(this.yy.parser)this.yy.parser.parseError(i,a);else throw new Error(i)},setInput:function(i,a){return this.yy=a||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var a=i.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var a=i.length,c=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===h.length?this.yylloc.first_column:0)+h[h.length-c.length].length-c[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),a=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+a+"^"},test_match:function(i,a){var c,h,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),h=i[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],c=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var g in n)this[g]=n[g];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,a,c,h;this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),g=0;g<n.length;g++)if(c=this._input.match(this.rules[n[g]]),c&&(!a||c[0].length>a[0].length)){if(a=c,h=g,this.options.backtrack_lexer){if(i=this.test_match(c,n[g]),i!==!1)return i;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(i=this.test_match(a,n[h]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,a,c,h){switch(c){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return d}();p.lexer=m;function f(){this.yy={}}return f.prototype=p,p.Parser=f,new f}();G.parser=G;var Mt=G,C="",W=[],j=[],P=[],Tt=function(){W.length=0,j.length=0,C="",P.length=0,vt()},St=function(t){C=t,W.push(t)},Et=function(){return W},At=function(){let t=Q(),e=100,s=0;for(;!t&&s<e;)t=Q(),s++;return j.push(...P),j},It=function(){let t=[];return j.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},Ct=function(t,e){let s=e.substr(1).split(":"),l=0,r=[];s.length===1?(l=Number(s[0]),r=[]):(l=Number(s[0]),r=s[1].split(","));let o=r.map(y=>y.trim()),u={section:C,type:C,people:o,task:t,score:l};P.push(u)},jt=function(t){let e={section:C,type:C,description:t,task:t,classes:[]};j.push(e)},Q=function(){let t=function(s){return P[s].processed},e=!0;for(let[s,l]of P.entries())t(s),e=e&&l.processed;return e},Pt=function(){return It()},H={getConfig:()=>A().journey,clear:Tt,setDiagramTitle:_t,getDiagramTitle:kt,setAccTitle:xt,getAccTitle:mt,setAccDescription:gt,getAccDescription:dt,addSection:St,getSections:Et,getTasks:At,addTask:Ct,addTaskOrg:jt,getActors:Pt},Vt=t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,Lt=Vt,Y=function(t,e){return ft(t,e)},Ft=function(t,e){let s=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),l=t.append("g");l.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),l.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function r(y){let p=J().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function o(y){let p=J().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function u(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return e.score>3?r(l):e.score<3?o(l):u(l),s},at=function(t,e){let s=t.append("circle");return s.attr("cx",e.cx),s.attr("cy",e.cy),s.attr("class","actor-"+e.pos),s.attr("fill",e.fill),s.attr("stroke",e.stroke),s.attr("r",e.r),s.class!==void 0&&s.attr("class",s.class),e.title!==void 0&&s.append("title").text(e.title),s},nt=function(t,e){return pt(t,e)},Ot=function(t,e){function s(r,o,u,y,p){return r+","+o+" "+(r+u)+","+o+" "+(r+u)+","+(o+y-p)+" "+(r+u-p*1.2)+","+(o+y)+" "+r+","+(o+y)}let l=t.append("polygon");l.attr("points",s(e.x,e.y,50,20,7)),l.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,nt(t,e)},Dt=function(t,e,s){let l=t.append("g"),r=rt();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=s.width*e.taskCount+s.diagramMarginX*(e.taskCount-1),r.height=s.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,Y(l,r),lt(s)(e.text,l,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},s,e.colour)},tt=-1,zt=function(t,e,s){let l=e.x+s.width/2,r=t.append("g");tt++,r.append("line").attr("id","task"+tt).attr("x1",l).attr("y1",e.y).attr("x2",l).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Ft(r,{cx:l,cy:300+(5-e.score)*30,score:e.score});let o=rt();o.x=e.x,o.y=e.y,o.fill=e.fill,o.width=s.width,o.height=s.height,o.class="task task-type-"+e.num,o.rx=3,o.ry=3,Y(r,o);let u=e.x+14;e.people.forEach(y=>{let p=e.actors[y].color,m={cx:u,cy:e.y,r:7,fill:p,stroke:"#000",title:y,pos:e.actors[y].position};at(r,m),u+=10}),lt(s)(e.task,r,o.x,o.y,o.width,o.height,{class:"task"},s,e.colour)},Nt=function(t,e){yt(t,e)},lt=function(){function t(r,o,u,y,p,m,f,d){let i=o.append("text").attr("x",u+p/2).attr("y",y+m/2+5).style("font-color",d).style("text-anchor","middle").text(r);l(i,f)}function e(r,o,u,y,p,m,f,d,i){let{taskFontSize:a,taskFontFamily:c}=d,h=r.split(/<br\s*\/?>/gi);for(let n=0;n<h.length;n++){let g=n*a-a*(h.length-1)/2,x=o.append("text").attr("x",u+p/2).attr("y",y).attr("fill",i).style("text-anchor","middle").style("font-size",a).style("font-family",c);x.append("tspan").attr("x",u+p/2).attr("dy",g).text(h[n]),x.attr("y",y+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),l(x,f)}}function s(r,o,u,y,p,m,f,d){let i=o.append("switch"),a=i.append("foreignObject").attr("x",u).attr("y",y).attr("width",p).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");a.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(r),e(r,i,u,y,p,m,f,d),l(a,f)}function l(r,o){for(let u in o)u in o&&r.attr(u,o[u])}return function(r){return r.textPlacement==="fo"?s:r.textPlacement==="old"?t:e}}(),Rt=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},V={drawRect:Y,drawCircle:at,drawSection:Dt,drawText:nt,drawLabel:Ot,drawTask:zt,drawBackgroundRect:Nt,initGraphics:Rt},Bt=function(t){Object.keys(t).forEach(function(e){D[e]=t[e]})},M={};function qt(t){let e=A().journey,s=60;Object.keys(M).forEach(l=>{let r=M[l].color,o={cx:20,cy:s,r:7,fill:r,stroke:"#000",pos:M[l].position};V.drawCircle(t,o);let u={x:40,y:s+7,text:l,textMargin:e.boxTextMargin|5};V.drawText(t,u),s+=20})}var D=A().journey,E=D.leftMargin,Xt=function(t,e,s,l){let r=A().journey,o=A().securityLevel,u;o==="sandbox"&&(u=q("#i"+e));let y=o==="sandbox"?q(u.nodes()[0].contentDocument.body):q("body");v.init();let p=y.select("#"+e);V.initGraphics(p);let m=l.db.getTasks(),f=l.db.getDiagramTitle(),d=l.db.getActors();for(let g in M)delete M[g];let i=0;d.forEach(g=>{M[g]={color:r.actorColours[i%r.actorColours.length],position:i},i++}),qt(p),v.insert(0,0,E,Object.keys(M).length*50),Gt(p,m,0);let a=v.getBounds();f&&p.append("text").text(f).attr("x",E).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);let c=a.stopy-a.starty+2*r.diagramMarginY,h=E+a.stopx+2*r.diagramMarginX;bt(p,c,h,r.useMaxWidth),p.append("line").attr("x1",E).attr("y1",r.height*4).attr("x2",h-E-4).attr("y2",r.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let n=f?70:0;p.attr("viewBox",`${a.startx} -25 ${h} ${c+n}`),p.attr("preserveAspectRatio","xMinYMin meet"),p.attr("height",c+n+25)},v={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,s,l){t[e]===void 0?t[e]=s:t[e]=l(s,t[e])},updateBounds:function(t,e,s,l){let r=A().journey,o=this,u=0;function y(p){return function(m){u++;let f=o.sequenceItems.length-u+1;o.updateVal(m,"starty",e-f*r.boxMargin,Math.min),o.updateVal(m,"stopy",l+f*r.boxMargin,Math.max),o.updateVal(v.data,"startx",t-f*r.boxMargin,Math.min),o.updateVal(v.data,"stopx",s+f*r.boxMargin,Math.max),o.updateVal(m,"startx",t-f*r.boxMargin,Math.min),o.updateVal(m,"stopx",s+f*r.boxMargin,Math.max),o.updateVal(v.data,"starty",e-f*r.boxMargin,Math.min),o.updateVal(v.data,"stopy",l+f*r.boxMargin,Math.max)}}this.sequenceItems.forEach(y())},insert:function(t,e,s,l){let r=Math.min(t,s),o=Math.max(t,s),u=Math.min(e,l),y=Math.max(e,l);this.updateVal(v.data,"startx",r,Math.min),this.updateVal(v.data,"starty",u,Math.min),this.updateVal(v.data,"stopx",o,Math.max),this.updateVal(v.data,"stopy",y,Math.max),this.updateBounds(r,u,o,y)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},X=D.sectionFills,et=D.sectionColours,Gt=function(t,e,s){let l=A().journey,r="",o=l.height*2+l.diagramMarginY,u=s+o,y=0,p="#CCC",m="black",f=0;for(let[d,i]of e.entries()){if(r!==i.section){p=X[y%X.length],f=y%X.length,m=et[y%et.length];let c=0,h=i.section;for(let g=d;g<e.length&&e[g].section==h;g++)c=c+1;let n={x:d*l.taskMargin+d*l.width+E,y:50,text:i.section,fill:p,num:f,colour:m,taskCount:c};V.drawSection(t,n,l),r=i.section,y++}let a=i.people.reduce((c,h)=>(M[h]&&(c[h]=M[h]),c),{});i.x=d*l.taskMargin+d*l.width+E,i.y=u,i.width=l.diagramMarginX,i.height=l.diagramMarginY,i.colour=m,i.fill=p,i.num=f,i.actors=a,V.drawTask(t,i,l),v.insert(i.x,i.y,i.x+i.width+l.taskMargin,450)}},it={setConf:Bt,draw:Xt},Kt={parser:Mt,db:H,renderer:it,styles:Lt,init:t=>{it.setConf(t.journey),H.clear()}};export{Kt as diagram};

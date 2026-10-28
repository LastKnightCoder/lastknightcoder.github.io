import{N as G}from"./chunk-I5BQ2YUN-BHKTC6yg.js";import{i as O}from"./chunk-7EY6X3TV-CBzWIybm.js";import{q as u,a as v,z as _,o as Q,P as F,d as M,v as B,g as $,e as N,K as D,i as j,m as R,Q as V,j as K,k as U,T as W}from"./mermaid.core-5DJZHZ4D-zmIDhVCw.js";function ie(e,l){return!!e.children(l).length}function ne(e){return A(e.v)+":"+A(e.w)+":"+A(e.name)}var X=/:/g;function A(e){return e?String(e).replace(X,"\\:"):""}function J(e,l){l&&e.attr("style",l)}function se(e,l,d){l&&e.attr("class",l).attr("class",d+" "+e.attr("class"))}function de(e,l){var d=l.graph();if(U(d)){var a=d.transition;if(W(a))return a(e)}return e}function Y(e,l){var d=e.append("foreignObject").attr("width","100000"),a=d.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var s=l.label;switch(typeof s){case"function":a.insert(s);break;case"object":a.insert(function(){return s});break;default:a.html(s)}J(a,l.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var p=a.node().getBoundingClientRect();return d.attr("width",p.width).attr("height",p.height),d}var I={},Z=function(e){let l=Object.keys(e);for(let d of l)I[d]=e[d]},P=async function(e,l,d,a,s,p){let f=a.select(`[id="${d}"]`),i=Object.keys(e);for(let b of i){let r=e[b],y="default";r.classes.length>0&&(y=r.classes.join(" ")),y=y+" flowchart-label";let g=B(r.styles),t=r.text!==void 0?r.text:r.id,n;if(u.info("vertex",r,r.labelType),r.labelType==="markdown")u.info("vertex",r,r.labelType);else if(R(v().flowchart.htmlLabels))n=Y(f,{label:t}).node(),n.parentNode.removeChild(n);else{let k=s.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("style",g.labelStyle.replace("color:","fill:"));let T=t.split(j.lineBreakRegex);for(let C of T){let c=s.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),c.setAttribute("dy","1em"),c.setAttribute("x","1"),c.textContent=C,k.appendChild(c)}n=k}let w=0,o="";switch(r.type){case"round":w=5,o="rect";break;case"square":o="rect";break;case"diamond":o="question";break;case"hexagon":o="hexagon";break;case"odd":o="rect_left_inv_arrow";break;case"lean_right":o="lean_right";break;case"lean_left":o="lean_left";break;case"trapezoid":o="trapezoid";break;case"inv_trapezoid":o="inv_trapezoid";break;case"odd_right":o="rect_left_inv_arrow";break;case"circle":o="circle";break;case"ellipse":o="ellipse";break;case"stadium":o="stadium";break;case"subroutine":o="subroutine";break;case"cylinder":o="cylinder";break;case"group":o="rect";break;case"doublecircle":o="doublecircle";break;default:o="rect"}let S=await D(t,v());l.setNode(r.id,{labelStyle:g.labelStyle,shape:o,labelText:S,labelType:r.labelType,rx:w,ry:w,class:y,style:g.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:p.db.getTooltip(r.id)||"",domId:p.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:v().flowchart.padding}),u.info("setNode",{labelStyle:g.labelStyle,labelType:r.labelType,shape:o,labelText:S,rx:w,ry:w,class:y,style:g.style,id:r.id,domId:p.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:v().flowchart.padding})}},q=async function(e,l,d){u.info("abc78 edges = ",e);let a=0,s={},p,f;if(e.defaultStyle!==void 0){let i=B(e.defaultStyle);p=i.style,f=i.labelStyle}for(let i of e){a++;let b="L-"+i.start+"-"+i.end;s[b]===void 0?(s[b]=0,u.info("abc78 new entry",b,s[b])):(s[b]++,u.info("abc78 new entry",b,s[b]));let r=b+"-"+s[b];u.info("abc78 new link id to be used is",b,r,s[b]);let y="LS-"+i.start,g="LE-"+i.end,t={style:"",labelStyle:""};switch(t.minlen=i.length||1,i.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",i.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let n="",w="";switch(i.stroke){case"normal":n="fill:none;",p!==void 0&&(n=p),f!==void 0&&(w=f),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(i.style!==void 0){let o=B(i.style);n=o.style,w=o.labelStyle}t.style=t.style+=n,t.labelStyle=t.labelStyle+=w,i.interpolate!==void 0?t.curve=$(i.interpolate,N):e.defaultInterpolate!==void 0?t.curve=$(e.defaultInterpolate,N):t.curve=$(I.curve,N),i.text===void 0?i.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=i.labelType,t.label=await D(i.text.replace(j.lineBreakRegex,`
`),v()),i.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=r,t.classes="flowchart-link "+y+" "+g,l.setEdge(i.start,i.end,t,a)}},H=function(e,l){return l.db.getClasses()},ee=async function(e,l,d,a){u.info("Drawing flowchart");let s=a.db.getDirection();s===void 0&&(s="TD");let{securityLevel:p,flowchart:f}=v(),i=f.nodeSpacing||50,b=f.rankSpacing||50,r;p==="sandbox"&&(r=_("#i"+l));let y=p==="sandbox"?_(r.nodes()[0].contentDocument.body):_("body"),g=p==="sandbox"?r.nodes()[0].contentDocument:document,t=new O({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:i,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),n,w=a.db.getSubGraphs();u.info("Subgraphs - ",w);for(let c=w.length-1;c>=0;c--)n=w[c],u.info("Subgraph - ",n),a.db.addVertex(n.id,{text:n.title,type:n.labelType},"group",void 0,n.classes,n.dir);let o=a.db.getVertices(),S=a.db.getEdges();u.info("Edges",S);let k=0;for(k=w.length-1;k>=0;k--){n=w[k],Q("cluster").append("text");for(let c=0;c<n.nodes.length;c++)u.info("Setting up subgraphs",n.nodes[c],n.id),t.setParent(n.nodes[c],n.id)}await P(o,t,l,y,g,a),await q(S,t);let T=y.select(`[id="${l}"]`),C=y.select("#"+l+" g");if(await G(C,t,["point","circle","cross"],"flowchart",l),F.insertTitle(T,"flowchartTitleText",f.titleTopMargin,a.db.getDiagramTitle()),M(t,T,f.diagramPadding,f.useMaxWidth),a.db.indexNodes("subGraph"+k),!f.htmlLabels){let c=g.querySelectorAll('[id="'+l+'"] .edgeLabel .label');for(let x of c){let m=x.getBBox(),h=g.createElementNS("http://www.w3.org/2000/svg","rect");h.setAttribute("rx",0),h.setAttribute("ry",0),h.setAttribute("width",m.width),h.setAttribute("height",m.height),x.insertBefore(h,x.firstChild)}}Object.keys(o).forEach(function(c){let x=o[c];if(x.link){let m=_("#"+l+' [id="'+c+'"]');if(m){let h=g.createElementNS("http://www.w3.org/2000/svg","a");h.setAttributeNS("http://www.w3.org/2000/svg","class",x.classes.join(" ")),h.setAttributeNS("http://www.w3.org/2000/svg","href",x.link),h.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),p==="sandbox"?h.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):x.linkTarget&&h.setAttributeNS("http://www.w3.org/2000/svg","target",x.linkTarget);let E=m.insert(function(){return h},":first-child"),L=m.select(".label-container");L&&E.append(function(){return L.node()});let z=m.select(".label");z&&E.append(function(){return z.node()})}}})},ce={setConf:Z,addVertices:P,addEdges:q,getClasses:H,draw:ee},te=(e,l)=>{let d=K,a=d(e,"r"),s=d(e,"g"),p=d(e,"b");return V(a,s,p,l)},re=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${te(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,pe=re;export{J as W,Y as X,de as c,ce as g,se as i,ie as n,ne as s,pe as y};

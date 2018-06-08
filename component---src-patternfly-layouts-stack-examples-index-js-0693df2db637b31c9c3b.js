webpackJsonp([0x8f4a36ddae4c],{523:function(e,a){e.exports="<h2 id=overview>Overview</h2> <p>A stack layout is a layout that positions the children vertically. In a Stack layout there is one primary child, and one or more secondary children. The primary child will expand vertically to fill the container if needed.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-stack</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initiates the stack layout</td> </tr> <tr> <td><code>.pf-l-stack__primary</code></td> <td><code>&lt;div&gt;</code></td> <td>Specifies the primary child of the layout, which expands vertically when needed.</td> </tr> <tr> <td><code>.pf-l-stack__secondary</code></td> <td><code>&lt;div&gt;</code></td> <td>Specifies a secondary child of the layout, which accommodates its content. A stack can have one or more secondary children</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-stack</code></td> <td>Adds space between children</td> </tr> </tbody> </table> "},215:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.Docs=void 0;var o=t(4),n=r(o),i=t(11),l=r(i),s=t(12),d=r(s),c=t(485),p=r(c),u=t(484),f=r(u),m=t(523),h=r(m);t(618);var v=a.Docs=h.default;a.default=function(){var e=(0,p.default)(),a=(0,f.default)();return n.default.createElement(l.default,{docs:v,className:"is-layout-page"},n.default.createElement(d.default,{heading:"Stack Example"},e),n.default.createElement(d.default,{heading:"Stack Example with Gutter"},a))}},484:function(e,a,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,a,r,o,n){var i;return(null!=(i=e.invokePartial(t(55),a,{name:"stack-item",hash:{modifierClass:"pf-m-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(55),a,{name:"stack-item",hash:{modifierClass:"pf-m-primary"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(55),a,{name:"stack-item",hash:{modifierClass:"pf-m-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")},2:function(e,a,t,r,o){return"    secondary content\n"},4:function(e,a,t,r,o){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,a,r,o,n){var i;return null!=(i=e.invokePartial(t(174),a,{name:"stack",hash:{modifierClass:"pf-m-gutter"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},485:function(e,a,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,a,r,o,n){var i;return(null!=(i=e.invokePartial(t(55),a,{name:"stack-item",hash:{modifierClass:"pf-m-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(55),a,{name:"stack-item",hash:{modifierClass:"pf-m-primary"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(55),a,{name:"stack-item",hash:{modifierClass:"pf-m-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")},2:function(e,a,t,r,o){return"    secondary content\n"},4:function(e,a,t,r,o){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,a,r,o,n){var i;return null!=(i=e.invokePartial(t(174),a,{name:"stack",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},55:function(e,a,t){var r=t(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,a,t,r,o){var n,i;return'<div class="pf-l-stack__item '+e.escapeExpression((i=null!=(i=t.modifierClass||(null!=a?a.modifierClass:a))?i:t.helperMissing,"function"==typeof i?i.call(null!=a?a:e.nullContext||{},{name:"modifierClass",hash:{},data:o}):i))+'">\n'+(null!=(n=e.invokePartial(r["@partial-block"],a,{name:"@partial-block",data:o,indent:"  ",helpers:t,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},174:function(e,a,t){var r=t(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,a,t,r,o){var n,i;return'<div class="pf-l-stack '+e.escapeExpression((i=null!=(i=t.modifierClass||(null!=a?a.modifierClass:a))?i:t.helperMissing,"function"==typeof i?i.call(null!=a?a:e.nullContext||{},{name:"modifierClass",hash:{},data:o}):i))+'">\n'+(null!=(n=e.invokePartial(r["@partial-block"],a,{name:"@partial-block",data:o,indent:"  ",helpers:t,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},618:function(e,a){}});
//# sourceMappingURL=component---src-patternfly-layouts-stack-examples-index-js-0693df2db637b31c9c3b.js.map
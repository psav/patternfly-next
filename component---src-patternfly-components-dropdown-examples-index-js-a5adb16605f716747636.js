webpackJsonp([93835562911203],{509:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-haspopup=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates the button has a popup menu.</td> </tr> <tr> <td><code>aria-expanded=&quot;false&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates that the menu is hidden</td> </tr> <tr> <td><code>aria-expanded=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates that the menu is visible</td> </tr> <tr> <td><code>role=&quot;menu&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is a menu</td> </tr> <tr> <td><code>hidden=&quot;hidden&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is hidden so that it isn&#39;t visible in the UI and isn&#39;t accessed by assistive technologies</td> </tr> <tr> <td><code>aria-expanded=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is visible</td> </tr> <tr> <td><code>role=&quot;menuitem&quot;</code></td> <td><code>.pf-c-dropdown__menu-item</code></td> <td>Indicates that the menu item is a menu item</td> </tr> <tr> <td><code>role=&quot;separator&quot;</code></td> <td><code>.pf-c-dropdown__separator</code></td> <td>Indicates that the separator is a separator</td> </tr> <tr> <td><code>disabled=&quot;disabled&quot;</code></td> <td><code>button.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus</td> </tr> <tr> <td><code>aria-disabled=&quot;true&quot;</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a link element, indicates that it is unavailable</td> </tr> <tr> <td><code>tabindex=&quot;-1&quot;</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a link element, removes it from keyboard focus</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-dropdown</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines the parent wrapper of the dropdown.</td> </tr> <tr> <td><code>.pf-c-dropdown__toggle</code></td> <td><code>&lt;button&gt;</code></td> <td>Defines the dropdown toggle</td> </tr> <tr> <td><code>.pf-c-dropdown__menu</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines the parent wrapper of the menu items</td> </tr> <tr> <td><code>.pf-c-dropdown__menu-item</code></td> <td><code>&lt;a&gt;</code></td> <td>Defines a menu item that navigates to another page</td> </tr> <tr> <td><code>.pf-c-dropdown__menu-item</code></td> <td><code>&lt;button&gt;</code></td> <td>Defines a menu item that performs an action on the current page</td> </tr> <tr> <td><code>.pf-c-dropdown__separator</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines a separator within the menu</td> </tr> <tr> <td><code>.pf-m-expanded</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies for the expanded state</td> </tr> <tr> <td><code>.pf-m-ghost</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the toggle with no border or background</td> </tr> <tr> <td><code>.pf-m-no-arrow</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the toggle without the arrow</td> </tr> <tr> <td><code>.pf-m-dropup</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the menu above the toggle</td> </tr> <tr> <td><code>.pf-m-right-aligned</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the menu right-aligned with the toggle</td> </tr> <tr> <td><code>.pf-m-disabled</code></td> <td><code>.pf-c-dropdown__menu-item</code></td> <td>Modifies to display the menu item as disabled</td> </tr> </tbody> </table> "},23:function(e,t,d){var o=d(1);e.exports=(o.default||o).template({1:function(e,t,d,o,a){return" pf-m-expanded"},3:function(e,t,d,o,a){return"true"},5:function(e,t,d,o,a){return"false"},7:function(e,t,d,o,a){return'hidden="hidden"'},compiler:[7,">= 4.0.0"],main:function(e,t,d,o,a){var n,r,i=null!=t?t:e.nullContext||{},p=d.helperMissing,c="function",l=e.escapeExpression;return'<div class="pf-c-dropdown'+(null!=(n=d.if.call(i,null!=t?t["pf-c-dropdown--IsExpanded"]:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+" "+l((r=null!=(r=d["pf-c-dropdown--Modifier"]||(null!=t?t["pf-c-dropdown--Modifier"]:t))?r:p,typeof r===c?r.call(i,{name:"pf-c-dropdown--Modifier",hash:{},data:a}):r))+'">\n  <button id="'+l((r=null!=(r=d.id||(null!=t?t.id:t))?r:p,typeof r===c?r.call(i,{name:"id",hash:{},data:a}):r))+'" class="pf-c-dropdown__toggle" aria-haspopup="true" aria-expanded="'+(null!=(n=d.if.call(i,null!=t?t["pf-c-dropdown--IsExpanded"]:t,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.program(5,a,0),data:a}))?n:"")+'">\n'+(null!=(n=e.invokePartial(o["@partial-block"],t,{name:"@partial-block",data:a,indent:"    ",helpers:d,partials:o,decorators:e.decorators}))?n:"")+'  </button>\n  <div class="pf-c-dropdown__menu" role="menu" aria-labelledby="'+l((r=null!=(r=d.id||(null!=t?t.id:t))?r:p,typeof r===c?r.call(i,{name:"id",hash:{},data:a}):r))+'" '+(null!=(n=d.unless.call(i,null!=t?t["pf-c-dropdown--IsExpanded"]:t,{name:"unless",hash:{},fn:e.program(7,a,0),inverse:e.noop,data:a}))?n:"")+'>\n    <a class="pf-c-dropdown__menu-item" role="menuitem" href="#">Link</a>\n    <button class="pf-c-dropdown__menu-item" role="menuitem">Action</button>\n    <a class="pf-c-dropdown__menu-item pf-m-disabled" role="menuitem" aria-disabled="true" tabindex="-1" href="#">Disabled Link</a>\n    <button class="pf-c-dropdown__menu-item pf-m-disabled" role="menuitem" disabled="disabled">Disabled Action</button>\n    <div class="pf-c-dropdown__separator" role="separator"></div>\n    <a class="pf-c-dropdown__menu-item" role="menuitem" href="#">Separated Link</a>\n  </div>\n</div>\n'},usePartial:!0,useData:!0})},442:function(e,t,d){var o=d(1);e.exports=(o.default||o).template({1:function(e,t,d,o,a){return"Collapsed Dropdown"},compiler:[7,">= 4.0.0"],main:function(e,t,o,a,n){var r;return(null!=(r=e.invokePartial(d(23),t,{name:"dropdown",hash:{id:"dropdown-example-collapsed"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},443:function(e,t,d){var o=d(1);e.exports=(o.default||o).template({1:function(e,t,d,o,a){return"Dropup"},compiler:[7,">= 4.0.0"],main:function(e,t,o,a,n){var r;return(null!=(r=e.invokePartial(d(23),t,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-dropup",id:"dropdown-example-dropup-collapsed"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?r:"")+"\n"+(null!=(r=e.invokePartial(d(23),t,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-dropup","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-dropup-expanded"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},444:function(e,t,d){var o=d(1);e.exports=(o.default||o).template({1:function(e,t,d,o,a){return"Expanded Dropdown"},compiler:[7,">= 4.0.0"],main:function(e,t,o,a,n){var r;return(null!=(r=e.invokePartial(d(23),t,{name:"dropdown",hash:{"pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-expanded"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},445:function(e,t,d){var o=d(1);e.exports=(o.default||o).template({1:function(e,t,d,o,a){return"[Kebab]"},compiler:[7,">= 4.0.0"],main:function(e,t,o,a,n){var r;return(null!=(r=e.invokePartial(d(23),t,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-ghost pf-m-no-arrow pf-m-right-aligned","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-kebab"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},446:function(e,t,d){var o=d(1);e.exports=(o.default||o).template({1:function(e,t,d,o,a){return"[Kebab]"},compiler:[7,">= 4.0.0"],main:function(e,t,o,a,n){var r;return(null!=(r=e.invokePartial(d(23),t,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-ghost pf-m-no-arrow","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-kebab"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},447:function(e,t,d){var o=d(1);e.exports=(o.default||o).template({1:function(e,t,d,o,a){return"Right"},compiler:[7,">= 4.0.0"],main:function(e,t,o,a,n){var r;return(null!=(r=e.invokePartial(d(23),t,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-right-aligned","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-rightAligned"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},199:function(e,t,d){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var a=d(4),n=o(a),r=d(11),i=o(r),p=d(12),c=o(p),l=d(509),s=o(l),u=d(444),f=o(u),m=d(442),h=o(m),w=d(446),g=o(w),b=d(445),v=o(b),_=d(447),x=o(_),k=d(443),D=o(k);d(604);var q=t.Docs=s.default;t.default=function(){var e=(0,f.default)(),t=(0,h.default)(),d=(0,g.default)(),o=(0,v.default)(),a=(0,x.default)(),r=(0,D.default)(),p={height:"13em"};return n.default.createElement(i.default,{style:p,docs:q},n.default.createElement(c.default,{className:"is-expanded-dropdown",heading:"Dropdown Expanded"},e),n.default.createElement(c.default,{heading:"Dropdown Collapsed"},t),n.default.createElement(c.default,{className:"is-expanded-dropdown",heading:"Kebab"},d),n.default.createElement(c.default,{className:"is-expanded-dropdown is-right-aligned",heading:"Kebab Right Aligned"},o),n.default.createElement(c.default,{className:"is-expanded-dropdown is-right-aligned",heading:"Right Aligned"},a),n.default.createElement(c.default,{className:"is-expanded-dropup",heading:"Dropup"},r))}},604:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-components-dropdown-examples-index-js-a5adb16605f716747636.js.map
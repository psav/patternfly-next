(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{297:function(e,t,o){"use strict";o.r(t),o.d(t,"graphql",function(){return d}),o.d(t,"StaticQueryContext",function(){return u}),o.d(t,"StaticQuery",function(){return g});var a=o(0),n=o.n(a),l=o(4),p=o.n(l),s=o(277),m=o.n(s);o.d(t,"Link",function(){return m.a}),o.d(t,"withPrefix",function(){return s.withPrefix}),o.d(t,"navigate",function(){return s.navigate}),o.d(t,"push",function(){return s.push}),o.d(t,"replace",function(){return s.replace}),o.d(t,"navigateTo",function(){return s.navigateTo});var c=o(364),r=o.n(c);o.d(t,"PageRenderer",function(){return r.a});var i=o(43);o.d(t,"parsePath",function(){return i.a});var u=n.a.createContext({}),g=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:p.a.object,query:p.a.string.isRequired,render:p.a.func,children:p.a.func}},362:function(e,t,o){"use strict";o(28),o(69),o(379);var a=o(380),n=o(0),l=o.n(n),p=o(296),s=o.n(p),m=(o(388),o(297)),c=(o(392),function(e){var t,o=e.links,a=e.isHorizontal,n=void 0!==a&&a?"is-horizontal":"";return t=o?o.map(function(e){var t=e.path,o=e.text,a=e.className;return t.endsWith("-full/")?null:l.a.createElement("li",{className:"Navigation__item "+a,key:"navigation-"+t},l.a.createElement(m.Link,{className:"Navigation_link "+a,to:t},o))}):l.a.createElement("li",{className:"Navigation__item"},l.a.createElement("p",{className:"Navigation_not-found-message"},"None found")),l.a.createElement("div",{className:"Navigation "+n},l.a.createElement("ul",{className:"Navigation__items"},t))});o(393),o(317),o(394),o(395),t.a=function(e){var t=e.children;return l.a.createElement(m.StaticQuery,{query:"3611919162",render:function(e){var o=e.allSitePage.edges.reduce(function(e,t){var o=t.node.context.type||"page";if(e[o]||(e[o]=[]),null==t.node.context.name){var a=t.node.path.match(/\/([A-Za-z0-9_-]+)$/g)[0].substring(1);"docs"!==(a=a.replace(/-/g," "))&&(t.node.context.name=a)}return e[o].push({path:t.node.path,text:t.node.context.name,className:"is-"+o}),e},{});return l.a.createElement("div",{className:"layout"},l.a.createElement(s.a,null,l.a.createElement("title",null,"PF Next"),l.a.createElement("html",{lang:"en-US"})),l.a.createElement("header",{className:"layout__header"},l.a.createElement("h1",null,l.a.createElement(m.Link,{to:"/"},"PF Next")),l.a.createElement(c,{links:o.page,isHorizontal:!0})),l.a.createElement("main",{className:"layout__main"},l.a.createElement("div",{className:"layout__sidebar"},l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Components"),l.a.createElement(c,{links:o.component})),l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Layouts"),l.a.createElement(c,{links:o.layout})),l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Utilities"),l.a.createElement(c,{links:o.utility})),l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Demos"),l.a.createElement(c,{links:o.demo})),l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Upgrades"),l.a.createElement(c,{links:o.upgrade}))),l.a.createElement("div",{className:"layout__content"},t)),l.a.createElement("footer",{className:"layout__footer"}))},data:a})}},364:function(e,t,o){var a;e.exports=(a=o(391))&&a.default||a},380:function(e){e.exports={data:{allSitePage:{edges:[{node:{path:"/components/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/upgrades/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/demos/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/layouts/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/utilities/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/accessibility-guide",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/contribution",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/guidelines",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/icons",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/modifiers",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/upgrade-guide",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/components/AboutModalBox/examples/",context:{type:"component",category:"components",slug:"AboutModalBox",name:"AboutModalBox",title:"Aboutmodalbox"}}},{node:{path:"/components/Alert/examples/",context:{type:"component",category:"components",slug:"Alert",name:"Alert",title:"Alert"}}},{node:{path:"/components/AlertGroup/examples/",context:{type:"component",category:"components",slug:"AlertGroup",name:"AlertGroup",title:"Alertgroup"}}},{node:{path:"/components/Avatar/examples/",context:{type:"component",category:"components",slug:"Avatar",name:"Avatar",title:"Avatar"}}},{node:{path:"/components/Backdrop/examples/",context:{type:"component",category:"components",slug:"Backdrop",name:"Backdrop",title:"Backdrop"}}},{node:{path:"/components/BackgroundImage/examples/",context:{type:"component",category:"components",slug:"BackgroundImage",name:"BackgroundImage",title:"Backgroundimage"}}},{node:{path:"/components/Badge/examples/",context:{type:"component",category:"components",slug:"Badge",name:"Badge",title:"Badge"}}},{node:{path:"/components/Brand/examples/",context:{type:"component",category:"components",slug:"Brand",name:"Brand",title:"Brand"}}},{node:{path:"/components/Breadcrumb/examples/",context:{type:"component",category:"components",slug:"Breadcrumb",name:"Breadcrumb",title:"Breadcrumb"}}},{node:{path:"/components/Button/examples/",context:{type:"component",category:"components",slug:"Button",name:"Button",title:"Button"}}},{node:{path:"/components/Card/examples/",context:{type:"component",category:"components",slug:"Card",name:"Card",title:"Card"}}},{node:{path:"/components/Check/examples/",context:{type:"component",category:"components",slug:"Check",name:"Check",title:"Check"}}},{node:{path:"/components/Chip/examples/",context:{type:"component",category:"components",slug:"Chip",name:"Chip",title:"Chip"}}},{node:{path:"/components/ChipGroup/examples/",context:{type:"component",category:"components",slug:"ChipGroup",name:"ChipGroup",title:"Chipgroup"}}},{node:{path:"/components/Content/examples/",context:{type:"component",category:"components",slug:"Content",name:"Content",title:"Content"}}},{node:{path:"/components/DataList/examples/",context:{type:"component",category:"components",slug:"DataList",name:"DataList",title:"Datalist"}}},{node:{path:"/components/Dropdown/examples/",context:{type:"component",category:"components",slug:"Dropdown",name:"Dropdown",title:"Dropdown"}}},{node:{path:"/components/EmptyState/examples/",context:{type:"component",category:"components",slug:"EmptyState",name:"EmptyState",title:"Emptystate"}}},{node:{path:"/components/Form/examples/",context:{type:"component",category:"components",slug:"Form",name:"Form",title:"Form"}}},{node:{path:"/components/FormControl/examples/",context:{type:"component",category:"components",slug:"FormControl",name:"FormControl",title:"Formcontrol"}}},{node:{path:"/components/",context:{type:"category",category:"components",slug:"",name:"",title:""}}},{node:{path:"/components/InputGroup/examples/",context:{type:"component",category:"components",slug:"InputGroup",name:"InputGroup",title:"Inputgroup"}}},{node:{path:"/components/Label/examples/",context:{type:"component",category:"components",slug:"Label",name:"Label",title:"Label"}}},{node:{path:"/components/List/examples/",context:{type:"component",category:"components",slug:"List",name:"List",title:"List"}}},{node:{path:"/components/Login/examples/",context:{type:"component",category:"components",slug:"Login",name:"Login",title:"Login"}}},{node:{path:"/components/ModalBox/examples/",context:{type:"component",category:"components",slug:"ModalBox",name:"ModalBox",title:"Modalbox"}}},{node:{path:"/components/Nav/examples/",context:{type:"component",category:"components",slug:"Nav",name:"Nav",title:"Nav"}}},{node:{path:"/components/Page/examples/",context:{type:"component",category:"components",slug:"Page",name:"Page",title:"Page"}}},{node:{path:"/components/Popover/examples/",context:{type:"component",category:"components",slug:"Popover",name:"Popover",title:"Popover"}}},{node:{path:"/components/Progress/examples/",context:{type:"component",category:"components",slug:"Progress",name:"Progress",title:"Progress"}}},{node:{path:"/components/Switch/examples/",context:{type:"component",category:"components",slug:"Switch",name:"Switch",title:"Switch"}}},{node:{path:"/components/Table/examples/",context:{type:"component",category:"components",slug:"Table",name:"Table",title:"Table"}}},{node:{path:"/components/Tabs/examples/",context:{type:"component",category:"components",slug:"Tabs",name:"Tabs",title:"Tabs"}}},{node:{path:"/components/Title/examples/",context:{type:"component",category:"components",slug:"Title",name:"Title",title:"Title"}}},{node:{path:"/components/Tooltip/examples/",context:{type:"component",category:"components",slug:"Tooltip",name:"Tooltip",title:"Tooltip"}}},{node:{path:"/demos/AboutModal/examples/",context:{type:"demo",category:"demos",slug:"AboutModal",name:"AboutModal",title:"Aboutmodal"}}},{node:{path:"/demos/BasicForms/examples/",context:{type:"demo",category:"demos",slug:"BasicForms",name:"BasicForms",title:"Basicforms"}}},{node:{path:"/demos/Modal/examples/",context:{type:"demo",category:"demos",slug:"Modal",name:"Modal",title:"Modal"}}},{node:{path:"/demos/Page/examples/",context:{type:"demo",category:"demos",slug:"Page",name:"Page",title:"Page"}}},{node:{path:"/demos/Toolbar/examples/",context:{type:"demo",category:"demos",slug:"Toolbar",name:"Toolbar",title:"Toolbar"}}},{node:{path:"/layouts/Bullseye/examples/",context:{type:"layout",category:"layouts",slug:"Bullseye",name:"Bullseye",title:"Bullseye"}}},{node:{path:"/layouts/Gallery/examples/",context:{type:"layout",category:"layouts",slug:"Gallery",name:"Gallery",title:"Gallery"}}},{node:{path:"/layouts/Grid/examples/",context:{type:"layout",category:"layouts",slug:"Grid",name:"Grid",title:"Grid"}}},{node:{path:"/layouts/Level/examples/",context:{type:"layout",category:"layouts",slug:"Level",name:"Level",title:"Level"}}},{node:{path:"/layouts/Split/examples/",context:{type:"layout",category:"layouts",slug:"Split",name:"Split",title:"Split"}}},{node:{path:"/layouts/Stack/examples/",context:{type:"layout",category:"layouts",slug:"Stack",name:"Stack",title:"Stack"}}},{node:{path:"/layouts/Toolbar/examples/",context:{type:"layout",category:"layouts",slug:"Toolbar",name:"Toolbar",title:"Toolbar"}}},{node:{path:"/upgrade-examples/AlertUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"AlertUpgradeExamples",name:"AlertUpgradeExamples",title:"Alertupgradeexamples"}}},{node:{path:"/upgrade-examples/BadgeUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"BadgeUpgradeExamples",name:"BadgeUpgradeExamples",title:"Badgeupgradeexamples"}}},{node:{path:"/upgrade-examples/CardUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"CardUpgradeExamples",name:"CardUpgradeExamples",title:"Cardupgradeexamples"}}},{node:{path:"/upgrade-examples/LoginUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"LoginUpgradeExamples",name:"LoginUpgradeExamples",title:"Loginupgradeexamples"}}},{node:{path:"/upgrade-examples/ModalUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"ModalUpgradeExamples",name:"ModalUpgradeExamples",title:"Modalupgradeexamples"}}},{node:{path:"/upgrade-examples/PopoverUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"PopoverUpgradeExamples",name:"PopoverUpgradeExamples",title:"Popoverupgradeexamples"}}},{node:{path:"/utilities/Accessibility/examples/",context:{type:"utility",category:"utilities",slug:"Accessibility",name:"Accessibility",title:"Accessibility"}}},{node:{path:"/utilities/Alignment/examples/",context:{type:"utility",category:"utilities",slug:"Alignment",name:"Alignment",title:"Alignment"}}},{node:{path:"/utilities/BoxShadow/examples/",context:{type:"utility",category:"utilities",slug:"BoxShadow",name:"BoxShadow",title:"Boxshadow"}}},{node:{path:"/utilities/Display/examples/",context:{type:"utility",category:"utilities",slug:"Display",name:"Display",title:"Display"}}},{node:{path:"/utilities/Flex/examples/",context:{type:"utility",category:"utilities",slug:"Flex",name:"Flex",title:"Flex"}}},{node:{path:"/utilities/Sizing/examples/",context:{type:"utility",category:"utilities",slug:"Sizing",name:"Sizing",title:"Sizing"}}},{node:{path:"/utilities/Spacing/examples/",context:{type:"utility",category:"utilities",slug:"Spacing",name:"Spacing",title:"Spacing"}}},{node:{path:"/components/AboutModalBox/examples-full/",context:{type:"component",category:"components",slug:"AboutModalBox",name:"AboutModalBox",title:"Aboutmodalbox"}}},{node:{path:"/components/Alert/examples-full/",context:{type:"component",category:"components",slug:"Alert",name:"Alert",title:"Alert"}}},{node:{path:"/components/AlertGroup/examples-full/",context:{type:"component",category:"components",slug:"AlertGroup",name:"AlertGroup",title:"Alertgroup"}}},{node:{path:"/components/Avatar/examples-full/",context:{type:"component",category:"components",slug:"Avatar",name:"Avatar",title:"Avatar"}}},{node:{path:"/components/Backdrop/examples-full/",context:{type:"component",category:"components",slug:"Backdrop",name:"Backdrop",title:"Backdrop"}}},{node:{path:"/components/BackgroundImage/examples-full/",context:{type:"component",category:"components",slug:"BackgroundImage",name:"BackgroundImage",title:"Backgroundimage"}}},{node:{path:"/components/Badge/examples-full/",context:{type:"component",category:"components",slug:"Badge",name:"Badge",title:"Badge"}}},{node:{path:"/components/Brand/examples-full/",context:{type:"component",category:"components",slug:"Brand",name:"Brand",title:"Brand"}}},{node:{path:"/components/Breadcrumb/examples-full/",context:{type:"component",category:"components",slug:"Breadcrumb",name:"Breadcrumb",title:"Breadcrumb"}}},{node:{path:"/components/Button/examples-full/",context:{type:"component",category:"components",slug:"Button",name:"Button",title:"Button"}}},{node:{path:"/components/Card/examples-full/",context:{type:"component",category:"components",slug:"Card",name:"Card",title:"Card"}}},{node:{path:"/components/Check/examples-full/",context:{type:"component",category:"components",slug:"Check",name:"Check",title:"Check"}}},{node:{path:"/components/Chip/examples-full/",context:{type:"component",category:"components",slug:"Chip",name:"Chip",title:"Chip"}}},{node:{path:"/components/ChipGroup/examples-full/",context:{type:"component",category:"components",slug:"ChipGroup",name:"ChipGroup",title:"Chipgroup"}}},{node:{path:"/components/Content/examples-full/",context:{type:"component",category:"components",slug:"Content",name:"Content",title:"Content"}}},{node:{path:"/components/DataList/examples-full/",context:{type:"component",category:"components",slug:"DataList",name:"DataList",title:"Datalist"}}},{node:{path:"/components/Dropdown/examples-full/",context:{type:"component",category:"components",slug:"Dropdown",name:"Dropdown",title:"Dropdown"}}},{node:{path:"/components/EmptyState/examples-full/",context:{type:"component",category:"components",slug:"EmptyState",name:"EmptyState",title:"Emptystate"}}},{node:{path:"/components/Form/examples-full/",context:{type:"component",category:"components",slug:"Form",name:"Form",title:"Form"}}},{node:{path:"/components/FormControl/examples-full/",context:{type:"component",category:"components",slug:"FormControl",name:"FormControl",title:"Formcontrol"}}},{node:{path:"/components/InputGroup/examples-full/",context:{type:"component",category:"components",slug:"InputGroup",name:"InputGroup",title:"Inputgroup"}}},{node:{path:"/components/Label/examples-full/",context:{type:"component",category:"components",slug:"Label",name:"Label",title:"Label"}}},{node:{path:"/components/List/examples-full/",context:{type:"component",category:"components",slug:"List",name:"List",title:"List"}}},{node:{path:"/components/Login/examples-full/",context:{type:"component",category:"components",slug:"Login",name:"Login",title:"Login"}}},{node:{path:"/components/ModalBox/examples-full/",context:{type:"component",category:"components",slug:"ModalBox",name:"ModalBox",title:"Modalbox"}}},{node:{path:"/components/Nav/examples-full/",context:{type:"component",category:"components",slug:"Nav",name:"Nav",title:"Nav"}}},{node:{path:"/components/Page/examples-full/",context:{type:"component",category:"components",slug:"Page",name:"Page",title:"Page"}}},{node:{path:"/components/Popover/examples-full/",context:{type:"component",category:"components",slug:"Popover",name:"Popover",title:"Popover"}}},{node:{path:"/components/Progress/examples-full/",context:{type:"component",category:"components",slug:"Progress",name:"Progress",title:"Progress"}}},{node:{path:"/components/Switch/examples-full/",context:{type:"component",category:"components",slug:"Switch",name:"Switch",title:"Switch"}}},{node:{path:"/components/Table/examples-full/",context:{type:"component",category:"components",slug:"Table",name:"Table",title:"Table"}}},{node:{path:"/components/Tabs/examples-full/",context:{type:"component",category:"components",slug:"Tabs",name:"Tabs",title:"Tabs"}}},{node:{path:"/components/Title/examples-full/",context:{type:"component",category:"components",slug:"Title",name:"Title",title:"Title"}}},{node:{path:"/components/Tooltip/examples-full/",context:{type:"component",category:"components",slug:"Tooltip",name:"Tooltip",title:"Tooltip"}}},{node:{path:"/demos/AboutModal/examples-full/",context:{type:"demo",category:"demos",slug:"AboutModal",name:"AboutModal",title:"Aboutmodal"}}},{node:{path:"/demos/BasicForms/examples-full/",context:{type:"demo",category:"demos",slug:"BasicForms",name:"BasicForms",title:"Basicforms"}}},{node:{path:"/demos/Modal/examples-full/",context:{type:"demo",category:"demos",slug:"Modal",name:"Modal",title:"Modal"}}},{node:{path:"/demos/Page/examples-full/",context:{type:"demo",category:"demos",slug:"Page",name:"Page",title:"Page"}}},{node:{path:"/demos/Toolbar/examples-full/",context:{type:"demo",category:"demos",slug:"Toolbar",name:"Toolbar",title:"Toolbar"}}},{node:{path:"/layouts/Bullseye/examples-full/",context:{type:"layout",category:"layouts",slug:"Bullseye",name:"Bullseye",title:"Bullseye"}}},{node:{path:"/layouts/Gallery/examples-full/",context:{type:"layout",category:"layouts",slug:"Gallery",name:"Gallery",title:"Gallery"}}},{node:{path:"/layouts/Grid/examples-full/",context:{type:"layout",category:"layouts",slug:"Grid",name:"Grid",title:"Grid"}}},{node:{path:"/layouts/Level/examples-full/",context:{type:"layout",category:"layouts",slug:"Level",name:"Level",title:"Level"}}},{node:{path:"/layouts/Split/examples-full/",context:{type:"layout",category:"layouts",slug:"Split",name:"Split",title:"Split"}}},{node:{path:"/layouts/Stack/examples-full/",context:{type:"layout",category:"layouts",slug:"Stack",name:"Stack",title:"Stack"}}},{node:{path:"/layouts/Toolbar/examples-full/",context:{type:"layout",category:"layouts",slug:"Toolbar",name:"Toolbar",title:"Toolbar"}}},{node:{path:"/upgrade-examples/AlertUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"AlertUpgradeExamples",name:"AlertUpgradeExamples",title:"Alertupgradeexamples"}}},{node:{path:"/upgrade-examples/BadgeUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"BadgeUpgradeExamples",name:"BadgeUpgradeExamples",title:"Badgeupgradeexamples"}}},{node:{path:"/upgrade-examples/CardUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"CardUpgradeExamples",name:"CardUpgradeExamples",title:"Cardupgradeexamples"}}},{node:{path:"/upgrade-examples/LoginUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"LoginUpgradeExamples",name:"LoginUpgradeExamples",title:"Loginupgradeexamples"}}},{node:{path:"/upgrade-examples/ModalUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"ModalUpgradeExamples",name:"ModalUpgradeExamples",title:"Modalupgradeexamples"}}},{node:{path:"/upgrade-examples/PopoverUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"PopoverUpgradeExamples",name:"PopoverUpgradeExamples",title:"Popoverupgradeexamples"}}},{node:{path:"/utilities/Accessibility/examples-full/",context:{type:"utility",category:"utilities",slug:"Accessibility",name:"Accessibility",title:"Accessibility"}}},{node:{path:"/utilities/Alignment/examples-full/",context:{type:"utility",category:"utilities",slug:"Alignment",name:"Alignment",title:"Alignment"}}},{node:{path:"/utilities/BoxShadow/examples-full/",context:{type:"utility",category:"utilities",slug:"BoxShadow",name:"BoxShadow",title:"Boxshadow"}}},{node:{path:"/utilities/Display/examples-full/",context:{type:"utility",category:"utilities",slug:"Display",name:"Display",title:"Display"}}},{node:{path:"/utilities/Flex/examples-full/",context:{type:"utility",category:"utilities",slug:"Flex",name:"Flex",title:"Flex"}}},{node:{path:"/utilities/Sizing/examples-full/",context:{type:"utility",category:"utilities",slug:"Sizing",name:"Sizing",title:"Sizing"}}},{node:{path:"/utilities/Spacing/examples-full/",context:{type:"utility",category:"utilities",slug:"Spacing",name:"Spacing",title:"Spacing"}}},{node:{path:"/",context:{type:"page",category:"page",slug:"",name:"",title:""}}}]}}}},391:function(e,t,o){"use strict";o.r(t);o(30);var a=o(0),n=o.n(a),l=o(4),p=o.n(l),s=o(63),m=o(2),c=function(e){var t=e.location,o=m.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:o},o.json))};c.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},t.default=c},392:function(e,t,o){},394:function(e,t,o){},395:function(e,t,o){}}]);
//# sourceMappingURL=1-ef9a8d99aef867547485.js.map
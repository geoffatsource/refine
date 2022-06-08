"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28176],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32110:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"layout-wrapper",title:"<LayoutWrapper>"},l=void 0,s={unversionedId:"api-references/components/layout-wrapper",id:"version-2.xx.xx/api-references/components/layout-wrapper",isDocsHomePage:!1,title:"<LayoutWrapper>",description:"Overview",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/layout-wrapper.md",sourceDirName:"api-references/components",slug:"/api-references/components/layout-wrapper",permalink:"/docs/2.xx.xx/api-references/components/layout-wrapper",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/layout-wrapper.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1654671894,formattedLastUpdatedAt:"6/8/2022",frontMatter:{id:"layout-wrapper",title:"<LayoutWrapper>"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"<Refine>",permalink:"/docs/2.xx.xx/api-references/components/refine-config"},next:{title:"<FilterDropdown>",permalink:"/docs/2.xx.xx/api-references/components/filter-dropdown"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," wraps its contents in ",(0,o.kt)("strong",{parentName:"p"},"refine's")," layout with all customizations made in ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component. It is the default layout used in resource pages. It can be used in ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/guides-and-concepts/custom-pages"},"custom pages")," to use global layout."),(0,o.kt)("p",null,"This component accepts layout customizations to further customize the layout parameters (",(0,o.kt)("inlineCode",{parentName:"p"},"Title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Sider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Footer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OffLayoutArea"),") defined in ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," can be used inside custom pages to use global layout with all its customizations."),(0,o.kt)("p",null,"An example use in a custom page may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'// highlight-next-line\nimport { Refine, Authenticated, LayoutWrapper } from "@pankod/refine";\n\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\n// highlight-start\nconst AuthenticatedPostReview = () => {\n    return (\n        <Authenticated>\n            <LayoutWrapper Sider={() => <></>}>\n                <PostReview />\n            </LayoutWrapper>\n        </Authenticated>\n    );\n};\n// highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            // highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    {\n                        exact: true,\n                        component: AuthenticatedPostReview,\n                        path: "/authenticated-page",\n                    },\n                ] as typeof routerProvider.routes,\n            }}\n            // highlight-end\n            dataProvider={dataProvider(API_URL)}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"In this example, we hide the left sider only for this page. The rest should look same as resource pages."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dashboard"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Layout"),(0,o.kt)("td",{parentName:"tr",align:null},"Outer component that renders other components"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sider"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/components/refine-config#sider"},"Custom sider to use")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Header"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/components/refine-config#header"},"Custom header to use")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Title"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/components/refine-config#title"},"Custom title to use")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Footer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/components/refine-config#footer"},"Custom footer to use")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OffLayoutArea"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/components/refine-config#offlayoutarea"},"Custom off layout area to use")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,o.kt)("td",{parentName:"tr",align:null},"*")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,o.kt)("strong",{parentName:"p"},"<",(0,o.kt)("a",{parentName:"strong",href:"/docs/2.xx.xx/api-references/components/refine-config"},"Refine"),">")," component.")))}d.isMDXComponent=!0}}]);
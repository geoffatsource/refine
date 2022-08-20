"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={id:"usePublish",title:"usePublish"},s=void 0,a={unversionedId:"api-references/hooks/live/usePublish",id:"version-2.xx.xx/api-references/hooks/live/usePublish",title:"usePublish",description:"If you need to publish a custom events refine provides the usePublish hook for it, It returns the publish method from liveProvider under the hood.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/live/usePublish.md",sourceDirName:"api-references/hooks/live",slug:"/api-references/hooks/live/usePublish",permalink:"/docs/2.xx.xx/api-references/hooks/live/usePublish",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/live/usePublish.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1638958338,formattedLastUpdatedAt:"Dec 8, 2021",frontMatter:{id:"usePublish",title:"usePublish"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useSubscription",permalink:"/docs/2.xx.xx/api-references/hooks/live/useSubscription"},next:{title:"useForm",permalink:"/docs/2.xx.xx/api-references/hooks/form/useForm"}},u={},p=[{value:"Usage",id:"usage",level:2}],l={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to publish a custom events ",(0,o.kt)("strong",{parentName:"p"},"refine")," provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"usePublish")," hook for it, It returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/live-provider#publish"},(0,o.kt)("inlineCode",{parentName:"a"},"liveProvider"))," under the hood."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,o.kt)("inlineCode",{parentName:"p"},"liveProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method is provided.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { usePublish } from "@pankod/refine";\n\nconst publish = usePublish();\n\npublish({\n    channel: "custom-channel-name",\n    type: "custom-event-name",\n    payload: {\n        "custom-property": "custom-property-value",\n    },\n    date: new Date(),\n});\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can subscribe to event with ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/live/useSubscription"},(0,o.kt)("inlineCode",{parentName:"a"},"useSubscription")),".")))}c.isMDXComponent=!0}}]);
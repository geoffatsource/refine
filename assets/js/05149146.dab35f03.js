"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34418],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(a),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||o;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},27945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"useLog",title:"useLog"},l=void 0,i={unversionedId:"core/hooks/audit-log/useLog",id:"core/hooks/audit-log/useLog",title:"useLog",description:"Overview",source:"@site/docs/core/hooks/audit-log/useLog.md",sourceDirName:"core/hooks/audit-log",slug:"/core/hooks/audit-log/useLog",permalink:"/docs/core/hooks/audit-log/useLog",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/audit-log/useLog.md",tags:[],version:"current",lastUpdatedBy:"Y\u0131ld\u0131ray \xdcnl\xfc",lastUpdatedAt:1657099096,formattedLastUpdatedAt:"Jul 6, 2022",frontMatter:{id:"useLog",title:"useLog"},sidebar:"someSidebar",previous:{title:"usePermissions",permalink:"/docs/core/hooks/auth/usePermissions"},next:{title:"useLogList",permalink:"/docs/core/hooks/audit-log/useLogList"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"<code>log</code>",id:"log",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"<code>rename</code>",id:"rename",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"Return value",id:"return-value-1",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"If you need to create or update an audit log, ",(0,r.kt)("strong",{parentName:"p"},"refine")," provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLog")," hook for it. The hook returns two mutations called ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rename"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@pankod/refine-core";\n\nconst { log, rename } = useLog();\n')),(0,r.kt)("h2",{id:"log"},(0,r.kt)("inlineCode",{parentName:"h2"},"log")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"log")," is used to create an audit log event. The mutation uses ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/audit-log-provider#create"},(0,r.kt)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@pankod/refine-core";\n\nconst { log } = useLog();\nconst { mutate } = log;\n\nmutate({\n    resource: "posts",\n    action: "create",\n    author: {\n        username: "admin",\n    },\n    data: {\n        id: 1,\n        title: "New post",\n    },\n    meta: {\n        id: 1,\n    },\n});\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method is provided.")),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"required-block"},(0,r.kt)("div",null,"resource")," ",(0,r.kt)("div",{className:" required"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"required-block"},(0,r.kt)("div",null,"action")," ",(0,r.kt)("div",{className:" required"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"author"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"meta"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousData"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))))),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"{ data: TData},"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"TError,"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," { id: BaseKey; name: string; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," unknown>")))))),(0,r.kt)("h2",{id:"rename"},(0,r.kt)("inlineCode",{parentName:"h2"},"rename")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"log")," is used to update an audit log event. The mutation uses ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/audit-log-provider#update"},(0,r.kt)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@pankod/refine-core";\n\nconst { rename } = useLog();\nconst { mutate } = rename;\n\nmutate({\n    id: 1,\n    name: "Updated Name",\n});\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," method is provided.")),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id",(0,r.kt)("div",{className:" required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BaseKey"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name ",(0,r.kt)("div",{className:" required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h3",{id:"type-parameters-1"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h3",{id:"return-value-1"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"{ data: TData},"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"TError,"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," { id: BaseKey; name: string; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," unknown>")))))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can get audit logs with ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/audit-log/useLogList"},(0,r.kt)("inlineCode",{parentName:"a"},"useLogList")),".")))}m.isMDXComponent=!0}}]);
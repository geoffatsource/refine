"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),c=i,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={id:"usePermissions",title:"usePermissions",siderbar_label:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data"},a=void 0,s={unversionedId:"core/hooks/auth/usePermissions",id:"core/hooks/auth/usePermissions",title:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/docs/core/hooks/auth/usePermissions.md",sourceDirName:"core/hooks/auth",slug:"/core/hooks/auth/usePermissions",permalink:"/docs/core/hooks/auth/usePermissions",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/auth/usePermissions.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"usePermissions",title:"usePermissions",siderbar_label:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data"},sidebar:"someSidebar",previous:{title:"useLogout",permalink:"/docs/core/hooks/auth/useLogout"},next:{title:"useLog",permalink:"/docs/core/hooks/audit-log/useLog"}},l={},u=[{value:"Usage",id:"usage",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"usePermissions")," calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,i.kt)("p",null,"It returns the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,i.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isError"),". Data that is resolved from the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions")," will be returned as the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"usePermissions")," can be useful when you want to get user's permission's anywhere in your code."),(0,i.kt)("p",null,"Imagine that you want to allow only users with the admin role to see the create button in a list page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have a logic in ",(0,i.kt)("a",{parentName:"li",href:"/docs/core/providers/auth-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},"getPermissions")," method like below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AuthProvider } from "@pankod/refine-core";\n\nconst authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    getPermissions: () => {\n        return Promise.resolve(["admin"]);\n    },\n    // highlight-end\n  ...\n};\n')),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get permissions data in the list page with ",(0,i.kt)("inlineCode",{parentName:"li"},"usePermissions")," and check if the user has ",(0,i.kt)("inlineCode",{parentName:"li"},'"admin'),'" role.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post/list"',title:'"pages/post/list"'},'// highlight-next-line\nimport { usePermissions } from "@pankod/refine-core";\nimport { List } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { data: permissionsData } = usePermissions();\n\n    return <List canCreate={permissionsData?.includes("admin")}>...</List>;\n};\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/components/basic-views/list"},"Refer to the ",(0,i.kt)("inlineCode",{parentName:"a"},"<List>")," documentation for detailed usage. ","\u2192"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This hook can only be used if the ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}d.isMDXComponent=!0}}]);
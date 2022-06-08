"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78861],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35898:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authenttication."},l=void 0,u={unversionedId:"core/hooks/auth/useLogin",id:"core/hooks/auth/useLogin",isDocsHomePage:!1,title:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authenttication.",source:"@site/docs/core/hooks/auth/useLogin.md",sourceDirName:"core/hooks/auth",slug:"/core/hooks/auth/useLogin",permalink:"/docs/core/hooks/auth/useLogin",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/auth/useLogin.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1654671894,formattedLastUpdatedAt:"6/8/2022",frontMatter:{id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authenttication."},sidebar:"someSidebar",previous:{title:"useGetIdentity",permalink:"/docs/core/hooks/auth/useGetIdentity"},next:{title:"useLogout",permalink:"/docs/core/hooks/auth/useLogout"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Redirection after login",id:"redirection-after-login",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useLogin")," calls ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood.",(0,a.kt)("br",{parentName:"p"}),"\n","It authenticates the app if ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification. After successful authentication it redirects the app to root."),(0,a.kt)("p",null,"It returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,a.kt)("p",null,"Data that is resolved from ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," will be returned as the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Normally refine provides a default login page. If you prefer to use this default login page, there is no need to handle login flow manually.",(0,a.kt)("br",{parentName:"p"}),"\n","If we want to build a custom login page instead of default one that comes with refine, ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogin")," can be used like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customLoginPage"',title:'"pages/customLoginPage"'},'import { useLogin } from "@pankod/refine-core";\nimport { Form } from "@pankod/refine-antd";\n\ntype LoginVariables = {\n    username: string;\n    password: string;\n};\n\nexport const LoginPage = () => {\n    const { mutate: login } = useLogin<LoginVariables>();\n\n    const onSubmit = (values: LoginVariables) => {\n        login(values);\n    };\n\n    return <Form onFinish={onSubmit}>// rest of the login form</Form>;\n};\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogin")," can accept any kind of object for values since ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,a.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogin"),"."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: login } = useLogin<{ username: string; password: string }>();\n")))),(0,a.kt)("h2",{id:"redirection-after-login"},"Redirection after login"),(0,a.kt)("p",null,"We have 3 options for redirecting the app after login successfully ."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If promise returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," is resolved with nothing, app will be redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," route by default.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A custom url can be resolved from the promise returned from the ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},"authProvider"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    login: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,a.kt)("p",null,"A custom url can be given to mutate function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogin")," hook if you want to redirect yourself to a certain url."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@pankod/refine-core";\n\nconst { mutate: login } = useLogin();\n\nlogin({ redirectPath: "/custom-url" });\n')),(0,a.kt)("p",null,"Then, you can handle this url in your ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    login: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If promise returned from the ",(0,a.kt)("inlineCode",{parentName:"li"},"login")," method of the ",(0,a.kt)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    login: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This hook can only be used if ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}d.isMDXComponent=!0}}]);
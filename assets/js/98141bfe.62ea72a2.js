"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,f=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={id:"basics",title:"Learn the Basics"},o=void 0,p={unversionedId:"getting-started/basics",id:"getting-started/basics",title:"Learn the Basics",description:"This guide will help you learn and get information of basic refine concepts. To learn more about refine features, we recommend that you read the Overview and this guide before starting development.",source:"@site/docs/getting-started/learn-basics.md",sourceDirName:"getting-started",slug:"/getting-started/basics",permalink:"/docs/getting-started/basics",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/getting-started/learn-basics.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1658409409,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"basics",title:"Learn the Basics"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/getting-started/overview"},next:{title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool",permalink:"/docs/comparison"}},l={},s=[{value:"Getting Help",id:"getting-help",level:2},{value:"Refine Packages",id:"refine-packages",level:2},{value:"Refine 3rd Party Integration Examples",id:"refine-3rd-party-integration-examples",level:2},{value:"Complete Application Examples",id:"complete-application-examples",level:2},{value:"Become a Refine guest technical writer",id:"become-a-refine-guest-technical-writer",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"Next Steps",id:"next-steps",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide will help you learn and get information of basic ",(0,n.kt)("strong",{parentName:"p"},"refine")," concepts. To learn more about ",(0,n.kt)("strong",{parentName:"p"},"refine")," features, we recommend that you read the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/getting-started/overview/"},(0,n.kt)("inlineCode",{parentName:"a"},"Overview"))," and this guide before starting development."),(0,n.kt)("h2",{id:"getting-help"},"Getting Help"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," has a very friendly community, we are always happy to help you get started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/refine"},"Join the Discord Community")," \u2013 it is the easiest way to get help, all questions are usually answered in about 30 minutes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/discussions"},"GitHub Discussions")," \u2013 ask anything about the project or give feedback.")),(0,n.kt)("h2",{id:"refine-packages"},"Refine Packages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-core")," - collection of 20+ React hooks for State, Networking, Authentication, Authorization, i18n and Live/Realtime Management.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"UI Framework Packages:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-antd")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://ant.design/"},"Ant Design")," System UI Framework support. Includes +20 Table, Form, Select, Menu, Layout, Notification and CRUD components and hooks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-mui")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://mui.com/"},"Material UI")," Framework support. Includes DataGrid (Pro included), AutoComplete, Menu, Layout, Notification and CRUD components and hooks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-mantine")," - (Coming soon!) - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://mantine.dev/"},"Mantine")," support.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/core/providers/data-provider/"},"Data Provider")," Packages:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-simple-rest")," - a fully featured REST API Data Provider"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-graphql")," - a fully featured GraphQL Data Provider"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-nestjsx-crud")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nestjsx/crud"},"NestJs Crud")," Data Provider"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-strapi")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/strapi/strapi"},"Strapi")," Data Provider"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-strapi-v4")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html"},"Strapi-v4")," Data Provider"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-strapi-graphql")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/strapi/strapi/tree/master/packages/plugins/graphql"},"Strapi-GraphQL")," Data Provider"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-supabase")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase"},"Supabase")," Data Provider. Also supported Supabase Realtime feature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-hasura")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine"},"Hasura GraphQL")," Data Provider. Also supported GraphQL Subscriptions feature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-nhost")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nhost/nhost"},"Nhost")," Data Provider. Also supported GraphQL Subscriptions feature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-appwrite")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/appwrite/appwrite"},"Appwrite")," Data Provider. Also supported Appwrite Realtime feature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-airtable")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Airtable/airtable.js"},"Airtable")," Data Provider"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-altogic")," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/altogic/altogic-js"},"Altogic")," Data Provider")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/core/providers/router-provider/"},"Router Provider")," Packages")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-react-router-v6")," - Router Provider for ",(0,n.kt)("a",{parentName:"li",href:"https://reactrouter.com"},"React Router (v6)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-react-router")," - Router Provider for ",(0,n.kt)("a",{parentName:"li",href:"https://v5.reactrouter.com/"},"React Router (v5)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-nextjs-router")," - Router Provider for ",(0,n.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next/router#userouter"},"Next.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-react-location")," - Router Provider for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-location"},"React Location"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/core/providers/live-provider/"},"Live Provider")," Packages")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-ably")," - ",(0,n.kt)("a",{parentName:"li",href:"https://ably.com/"},"Ably")," Live/Realtime Provider")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Other Packages")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-kbar")," - ",(0,n.kt)("a",{parentName:"li",href:"https://kbar.vercel.app/"},"kbar")," integration for ",(0,n.kt)("inlineCode",{parentName:"li"},"command"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"crtrl"),"+",(0,n.kt)("inlineCode",{parentName:"li"},"k")," interface for your Refine App.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u2764\ufe0f Community Packages:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rturan29/refine-firebase"},(0,n.kt)("inlineCode",{parentName:"a"},"refine-firebase"))," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://firebase.google.com/"},"Firebase")," Data Provider by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rturan29"},"rturan29")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tspvivek/refine-directus"},(0,n.kt)("inlineCode",{parentName:"a"},"@tspvivek/refine-directus"))," - a fully featured ",(0,n.kt)("a",{parentName:"li",href:"https://directus.io/"},"Directus")," Data Provider by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tspvivek"},"tspvivek")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/miyavsu-limited/data-provider-customizer"},(0,n.kt)("inlineCode",{parentName:"a"},"data-provider-customizer"))," - Customize your data provider by mixing it with different data providers/data methods by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/miyavsu-limited"},"miyavsu-limited"))),(0,n.kt)("h2",{id:"refine-3rd-party-integration-examples"},"Refine 3rd Party Integration Examples"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/core/providers/i18n-provider/"},"i18n Provider"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React - ",(0,n.kt)("a",{parentName:"li",href:"https://react.i18next.com/"},"i18next")," - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/i18n/i18n-react/"},"Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/i18n/react/src/App.tsx#L17"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},"Next.js - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/isaachinman/next-i18next"},"next-i18next")," - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/i18n/i18n-nextjs/"},"Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/i18n/nextjs/pages/_app.tsx#L20"},"Source Code"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/api-references/providers/accessControl-provider/"},"Access Control Provider"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://casbin.org/"},"Casbin")," - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/access-control/casbin/"},"Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/accessControl/casbin/src/App.tsx#L27"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cerbos.dev/"},"Cerbos")," - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/access-control/cerbos/"},"Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/accessControl/cerbos/src/App.tsx#L37"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.permify.co/"},"Permify")," - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/access-control/permify/"},"Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Permify/permify-refine/blob/master/src/App.tsx#L43"},"Source Code"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/api-references/providers/auth-provider/"},"Auth Provider"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://auth0.com/"},"Auth0")," - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/auth-provider/auth0/"},"Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/authProvider/auth0/src/App.tsx#L23"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2"},"Google Auth")," - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/auth-provider/google-auth/"},"Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/authProvider/googleLogin/src/App.tsx#L23"},"Source Code"))),(0,n.kt)("h2",{id:"complete-application-examples"},"Complete Application Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gothinkster/realworld"},"RealWorld")," - Exemplary fullstack ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com"},"Medium.com")," Clone - ",(0,n.kt)("a",{parentName:"li",href:"http://refine.dev/docs/examples/real-world-refine-example/"},"Live Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/real-world-example/src"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},"We are going back to 1995! - Win95 Style Admin Panel - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/awesome-react-windows95-ui-with-refine/"},"Blog Post")," - ",(0,n.kt)("a",{parentName:"li",href:"https://win95.refine.dev"},"Live Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/blog/win95"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},"Invoice Generator App with Strapi & Refine & Ant Design - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-admin-invoice-genarator/"},"Blog Post")," - ",(0,n.kt)("a",{parentName:"li",href:"https://stackblitz.com/github/pankod/refine/tree/master/examples/blog/invoiceGenerator/?preset=node"},"Live Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/blog/invoiceGenerator/src"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},"Refeedback! - Feedback Admin Panel with Strapi & Refine & Ant Design - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/create-a-feedback-admin-panel-with-refine-and-strapi/"},"Blog Post")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/blog/refeedback"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},"E-mail Subscription Panel with Refine and Strapi & Ant Design - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/e-mail-subscription-panel-with-refine/"},"Blog Post")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/blog/mailSubscription"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},"Internal Issue Tracker With Refine and Supabase - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/customizable-issue-tracker-with-refine-and-supabase/"},"Blog Post")," - ",(0,n.kt)("a",{parentName:"li",href:"https://stackblitz.com/github/pankod/refine/tree/master/examples/blog/issueTracker/?preset=node"},"Live Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/blog/issueTracker"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},"Next.js E-commerce App with Strapi & Chakra UI & Refine - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui/"},"Blog Post")," - ",(0,n.kt)("a",{parentName:"li",href:"https://stackblitz.com/github/pankod/refine/tree/master/examples/blog/ecommerce/?preset=node"},"Live Example")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/blog/ecommerce"},"Source Code")),(0,n.kt)("li",{parentName:"ul"},"Multi-tenancy Example - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/guides-and-concepts/multi-tenancy/appwrite/"},"Appwrite Guide")," - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/guides-and-concepts/multi-tenancy/strapi-v4/"},"Strapi Guide"))),(0,n.kt)("h2",{id:"become-a-refine-guest-technical-writer"},"Become a Refine guest technical writer"),(0,n.kt)("p",null,"We are looking for guest technical writers to publish posts about React and front-end ecosystem technologies."),(0,n.kt)("p",null," The focus of these posts should be on React and front-end ecosystem technologies. "),(0,n.kt)("p",null," ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/blog/refine-writer-program/"},"If you are interested in writing for us, please check this post for detailed information ","\u2192")),(0,n.kt)("p",null," Thanks for considering being a part of our blog!"),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"You can find Refine's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/projects/1"},"Public Roadmap here!")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/comparison"},"Comparison | Refine vs React-Admin vs AdminBro vs Retool ","\u2192"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/tutorial"},"Create React App + Ant Design Tutorial ","\u2192"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/mui/tutorial"},"Create React App + Material UI Tutorial ","\u2192"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/core/tutorial"},"Next.js + Tailwind Tutorial ","\u2192"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/upload/multipart-upload"},"Check the Guides & Concept section to learn generic solutions to common problems ","\u2192"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/examples/tutorial/antd-tutorial"},"Check example section for code snippets ","\u2192")))))}u.isMDXComponent=!0}}]);
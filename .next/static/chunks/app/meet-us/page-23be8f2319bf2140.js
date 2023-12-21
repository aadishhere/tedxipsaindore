(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{2601:function(e,t,n){"use strict";var i,r;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(8960)},4127:function(e,t,n){Promise.resolve().then(n.t.bind(n,413,23)),Promise.resolve().then(n.t.bind(n,8326,23)),Promise.resolve().then(n.bind(n,1406)),Promise.resolve().then(n.bind(n,5535)),Promise.resolve().then(n.bind(n,2757)),Promise.resolve().then(n.bind(n,6608)),Promise.resolve().then(n.bind(n,8851)),Promise.resolve().then(n.bind(n,9878))},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return l}});let i=n(1024),r=n(7929),s=n(2637),o=n(413),a=i._(n(9950)),unstable_getImgProps=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=o.Image},8851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Navbar}});var i=n(7437),r=n(6691),s=n.n(r),o=n(2265);function Hamburger(e){return(0,i.jsxs)("div",{className:"flex h-[30px] w-[30px] cursor-pointer flex-col justify-around",children:[(0,i.jsx)("span",{className:"h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200  ease-in-out"+((null==e?void 0:e.close)?" close1":" open")}),!(null==e?void 0:e.close)&&(0,i.jsx)("span",{className:"h-[0.25rem] w-[2rem] rounded-sm bg-white"}),(0,i.jsx)("span",{className:"h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200 ease-in-out"+((null==e?void 0:e.close)?" close2":" open")})]})}let a=[{text:"Home",link:"#home"},{text:"Speakers",link:"#speakers"},{text:"About",link:"#about"},{text:"Talks",link:"/talks"},{text:"Sponsors",link:"/meet-us"},{text:"Contact",link:"#contact"}];var l=n(1396),c=n.n(l),u=n(9357);function Links(e){let{setClose:t}=e,[n,r]=(0,o.useState)("Home"),handleNav=e=>{t&&t(!1),r(e.target.innerText)};return(0,i.jsx)(i.Fragment,{children:a.map((e,t)=>(0,i.jsx)("li",{className:"nav_items font-semibold",onClick:handleNav,children:(0,i.jsx)(c(),{href:"".concat(null==e?void 0:e.link),style:{color:"".concat((null==e?void 0:e.text)===n?"var(--clr-redText)":"white")},children:null==e?void 0:e.text})},t))})}function HomeLink(){return(0,i.jsx)("li",{className:"nav_items",children:(0,i.jsxs)(c(),{href:"/",children:["GO TO ",(0,i.jsx)(u.Z,{children:"HOME"})]})})}function Navbar(e){let{home:t=!0}=e,[n,r]=(0,o.useState)(!1);return(0,i.jsxs)("nav",{className:"backdrop-saturate-180 border-b-1 sticky top-0 z-50 flex h-[75px] w-screen border-white border-opacity-100 bg-black/30 backdrop-blur-xl lg:px-9",children:[(0,i.jsxs)("div",{className:"absolute left-0 top-0 z-50 flex h-[75px] w-full flex-row items-center justify-between px-6 lg:justify-around",children:[(0,i.jsx)("span",{children:(0,i.jsx)(c(),{href:"/",children:(0,i.jsx)(s(),{src:"/logos/logo-small.webp",height:24,width:165,loading:"eager",alt:"TEDx GEC RIT logo, Kottayam"})})}),(0,i.jsx)("div",{className:"lg:hidden",onClick:()=>r(!n),children:(0,i.jsx)(Hamburger,{close:n})}),(0,i.jsx)("ul",{className:"hidden gap-12 lg:flex",children:t?(0,i.jsx)(Links,{}):(0,i.jsx)(HomeLink,{})}),(0,i.jsx)("div",{className:"hidden lg:block",children:(0,i.jsx)(GetTicketsButton,{})})]}),(0,i.jsxs)("div",{className:"sticky left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-12 bg-black duration-700 ease-in-out lg:hidden ".concat(n?"nav-close":"nav-open"),children:[(0,i.jsx)("ul",{className:"flex flex-col gap-12 text-center",children:t?(0,i.jsx)(Links,{setClose:r}):(0,i.jsx)(HomeLink,{})}),(0,i.jsx)(GetTicketsButton,{})]})]})}n(2601).env.NEXT_PUBLIC_YT_VIDEO_LINK;let GetTicketsButton=()=>(0,i.jsx)("button",{className:"pointer-events-none w-[165px] select-none rounded-[3px] bg-grey font-semibold text-white ",children:(0,i.jsx)(c(),{href:"https://yepdesk.com/tedxgecrit",className:"flex h-full w-full justify-center px-4 py-2 lg:py-1",target:"_blank",children:"Tickets sold out"})})},9878:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Sponsors}});var i=n(7437),r=n(2265),s=n(439);let Sponsor=class Sponsor{constructor(e,t,n,i,r=""){this.title=e,this.alt=t,this.website=n,this.image=i,this.description=r}};let o=[new Sponsor("Supporting Partner","GEC RIT, Kottayam","http://www.rit.ac.in/",{src:"/_next/static/media/rit.f135757c.webp",height:200,width:200,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAgAAkA4JaQAAudvAjpoAAD+9Bbui3sCWy6Gmqv0/3PgF4jeVzwoCtl8wdDwcOUS5l9mWjk8uoDs8DQgAAAA",blurWidth:8,blurHeight:8},"Nestled amidst the lush green landscapes of Kerala, Rajiv Gandhi Institute of Technology Kottayam (RIT) stands as a beacon of academic excellence and innovation. As one of the most distinguished Government engineering colleges in the state, with NBA accredited Undergraduate programs RIT has consistently earned a reputation for nurturing exceptional talent and intellectual curiosity."),new Sponsor("Credential Partner","CertifyMe","https://www.certifyme.online/",{src:"/_next/static/media/certify_me.0d120c61.webp",height:200,width:200,blurDataURL:"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAgAAkA4JaQAAuda+tmAAP79xp5xbb84P6lVVnCQab+sAAA=",blurWidth:8,blurHeight:8},"CertifyMe is a trusted digital credentialing SaaS platform used by 2000+ global brands and 1 million users in 144 countries. It automates the credentialing process with a user-friendly design, prioritizing scalability and customization for educational institutions, associations, and training providers. Our robust system streamlines credential issuance and tracking, enhancing the value of your credentials through innovation and excellence. We take pride in our unyielding commitment to innovation and excellence, continuously pushing the boundaries of digital credentialing solutions to exceed our customers' expectations."),new Sponsor("Contributing Partner","LIC","https://licindia.in/",{src:"/_next/static/media/lic.6ea1ecb5.webp",height:200,width:200,blurDataURL:"data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAQAgCdASoIAAgAAkA4JQBOiP/wPRN/UKgAAP75r0eb+14VdcI5h2E5vldG22B+LWSfHFG8c9qH8PlCglh/mHf3+cAzIkdvvNoDPTmW0a4AAA==",blurWidth:8,blurHeight:8},"Life Insurance Corporation, popularly known as LIC is Indian state-owned insurance group and investment company. It is India's largest insurance company as well as the largest institutional investor."),new Sponsor("Education Partner","MSIGMA GOKULAM","https://www.msigmagokulam.com/",{src:"/_next/static/media/msigma.3e6b14ab.webp",height:200,width:200,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACQAQCdASoIAAgAAkA4JZwAAsf9/OAA/vxymczqLj24J0E75UIn3Hrg+qfQblyDRtuM3jg6g8IQAA==",blurWidth:8,blurHeight:8},"Msigma Gokulam is a passionate educational company founded by Manu M Rajan, an engineer turned teacher. It's dedicated to simplifying complex engineering concepts through innovative pedagogy. Initially, a local success, it went online due to high demand, and later partnered with the Gokulam group to become Msigma Gokulam Pvt. Ltd. Today, they aim to empower engineering students nationwide and build a skilled talent pool.")];var a=n(919),l=n(6691),c=n.n(l),Sponsors_EachSponsor=e=>{let{sponsor:t,id:n,setSponsorIndex:r,setPopupOpen:s}=e;return t?(0,i.jsx)("div",{className:"group aspect-square w-[100px] cursor-pointer",onClick:()=>{r(n),s(!0)},children:(0,i.jsx)(c(),{src:t.image,alt:t.alt,className:" image-select-none aspect-square h-full w-full overflow-hidden rounded-full border-[1px] border-white object-contain transition-all duration-300 ease-in-out group-hover:scale-110",height:200,width:200})}):(0,i.jsx)(i.Fragment,{})},u=n(1396),d=n.n(u),Sponsors_SponsorPopup=e=>{let{popupOpen:t,setPopupOpen:n,sponsor:r}=e;return(0,i.jsxs)("div",{className:"sponsor_popup ".concat(t?"popupOpen":"popupClose"),children:[(0,i.jsx)("div",{className:"flex h-fit w-full justify-end",children:(0,i.jsx)("div",{className:"h-[30px] w-[30px] cursor-pointer",onClick:()=>n(!1),children:(0,i.jsx)(c(),{src:"/icons/close.svg",alt:"close",width:30,height:30})})}),(0,i.jsxs)("div",{className:"h-[fit]",children:[(0,i.jsx)("h2",{className:"mb-1 text-left text-[40px] leading-none",children:r.alt}),(0,i.jsx)("h3",{className:"mb-1 text-left text-[20px] uppercase leading-tight tracking-wide ",children:r.title}),(0,i.jsx)("p",{className:"mt-3 text-[14px] leading-tight opacity-80",children:r.description||""}),(0,i.jsx)("div",{className:"mt-6",children:(0,i.jsx)(d(),{className:"ease rounded-sm border-[1px] border-white bg-none px-8 py-1 transition-all duration-300 hover:border-red hover:bg-red",href:r.website||"",target:"_blank",children:"Visit Website"})})]}),(0,i.jsx)("span",{className:"flex h-[30px] w-full"})]})};function Sponsors(){if(0===o.length)return(0,i.jsx)(i.Fragment,{});let[e,t]=(0,r.useState)(0),[n,l]=(0,r.useState)(!1);return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)("section",{className:"mx-[4%]",children:[(0,i.jsx)(a.Z,{children:"our sponsors"}),(0,i.jsx)("div",{className:"flex select-none flex-wrap items-center justify-center gap-x-16 gap-y-6 py-8 md:px-[5%]",children:o.map((e,n)=>(0,i.jsx)(Sponsors_EachSponsor,{sponsor:e,id:n,setSponsorIndex:t,setPopupOpen:l},n))})]}),(0,i.jsx)(Sponsors_SponsorPopup,{popupOpen:n,setPopupOpen:l,sponsor:o[e]})]})}},439:function(e,t,n){"use strict";var i=n(7437);t.Z=e=>(0,i.jsx)("section",{className:"h-fit w-full pb-[75px] pt-[75px] lg:px-[150px]",id:null==e?void 0:e.section,children:e.children})},919:function(e,t,n){"use strict";var i=n(7437);t.Z=e=>(0,i.jsx)("h1",{className:"ml-[25px] select-none text-5xl font-[200] uppercase max-sm:py-5 md:ml-[50px] md:pb-10 lg:ml-0 lg:pb-10 lg:text-[60px]",children:null==e?void 0:e.children})},9357:function(e,t,n){"use strict";n.d(t,{Z:function(){return RedText}});var i=n(7437);function RedText(e){return(0,i.jsx)("span",{className:"text-redText",children:e.children})}},1406:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/github.106bdb0c.svg",height:512,width:512,blurWidth:0,blurHeight:0}},5535:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/instagram.ff29e9ea.svg",height:850,width:850,blurWidth:0,blurHeight:0}},2757:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/linkedin.437d8748.svg",height:512,width:512,blurWidth:0,blurHeight:0}},6608:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/youtube.328e5dd5.svg",height:50,width:50,blurWidth:0,blurHeight:0}},8960:function(e){!function(){var t={229:function(e){var t,n,i,r=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var s=[],o=!1,a=-1;function cleanUpNextTick(){o&&i&&(o=!1,i.length?s=i.concat(s):a=-1,s.length&&drainQueue())}function drainQueue(){if(!o){var e=runTimeout(cleanUpNextTick);o=!0;for(var t=s.length;t;){for(i=s,s=[];++a<t;)i&&i[a].run();a=-1,t=s.length}i=null,o=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new Item(e,t)),1!==s.length||o||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=noop,r.addListener=noop,r.once=noop,r.off=noop,r.removeListener=noop,r.removeAllListeners=noop,r.emit=noop,r.prependListener=noop,r.prependOnceListener=noop,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}},s=!0;try{t[e](r,r.exports,__nccwpck_require__),s=!1}finally{s&&delete n[e]}return r.exports}__nccwpck_require__.ab="//";var i=__nccwpck_require__(229);e.exports=i}()},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(2265),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var i,s={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(679)},1396:function(e,t,n){e.exports=n(8326)}},function(e){e.O(0,[375,971,472,744],function(){return e(e.s=4127)}),_N_E=e.O()}]);
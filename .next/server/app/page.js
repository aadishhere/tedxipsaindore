(()=>{var e={};e.id=931,e.ids=[931],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9272:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>h,pages:()=>d,routeModule:()=>p,tree:()=>c});var a=s(7096),r=s(6132),n=s(7284),i=s.n(n),l=s(2564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7602)),"D:\\React Projects\\TEDxIPSA\\tedxipsaindore\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1955)),"D:\\React Projects\\TEDxIPSA\\tedxipsaindore\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,7376)),"D:\\React Projects\\TEDxIPSA\\tedxipsaindore\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\React Projects\\TEDxIPSA\\tedxipsaindore\\src\\app\\page.js"],h="/page",x={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},435:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6686,23)),Promise.resolve().then(s.t.bind(s,614,23)),Promise.resolve().then(s.bind(s,1743)),Promise.resolve().then(s.bind(s,2233)),Promise.resolve().then(s.bind(s,2761)),Promise.resolve().then(s.bind(s,7466)),Promise.resolve().then(s.bind(s,961)),Promise.resolve().then(s.bind(s,525)),Promise.resolve().then(s.bind(s,7194)),Promise.resolve().then(s.bind(s,7266))},961:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>ContactUs});var a=s(784),r=s(6748),n=s(3614),i=s(5699),l=s(9885);let utility_Loader=()=>a.jsx("div",{role:"flex w-full justify-center",children:(0,a.jsxs)("svg",{"aria-hidden":"true",class:"mr-2 inline h-6 w-6 animate-spin fill-black text-white",viewBox:"0 0 100 101",fill:"none",children:[a.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),a.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})});function ContactUs(){let[e,t]=(0,l.useState)(!1),handleSubmit=async e=>{if(e&&e.target&&e.target.elements){e.preventDefault();try{t(!0);let s=e.target.elements.name.value,a=e.target.elements.email.value,r=e.target.elements.message.value,n=await i.ZP.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID||"",process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID||"",{name:s,message:r,email:a},process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY||"");200!==n.status&&console.log(n)}catch(e){console.log(e)}finally{t(!1),e.target.reset()}}};return(0,a.jsxs)(r.Z,{section:"contact",children:[a.jsx(n.Z,{children:"Contact"}),a.jsx("div",{className:"w-full",children:(0,a.jsxs)("div",{className:"flex flex-col items-center text-center",children:[a.jsx("div",{className:"w-[85%] pt-[15px] text-center text-[18px] font-light leading-tight md:w-[40%] md:text-[20px]",children:"Feel free to contact us if you have any questions, comments or concerns!"}),(0,a.jsxs)("form",{className:"mt-[25px] w-full",onSubmit:handleSubmit,children:[(0,a.jsxs)("div",{className:"mb-[12.5px] px-[15%] text-[16px] leading-tight opacity-50",children:["Enter your ",a.jsx("label",{htmlFor:"name",children:"name, "}),a.jsx("label",{htmlFor:"email",children:"email and "}),a.jsx("label",{htmlFor:"message",children:"message below:"})]}),(0,a.jsxs)("div",{children:[a.jsx("div",{className:"mb-[25px]",children:a.jsx("input",{placeholder:"Name",type:"text",id:"name",name:"name",className:"h-[45px] w-[82%] rounded-t-[5px] border-b-2 border-red bg-deepGrey pl-[10px] text-[18px] placeholder:font-light focus:outline-none md:w-[50%]",required:!0,autoComplete:"name"})}),a.jsx("div",{className:"mb-[25px]",children:a.jsx("input",{placeholder:"Email",type:"text",id:"email",name:"email",className:"h-[45px] w-[82%] rounded-t-[5px] border-b-2  border-red bg-deepGrey pl-[10px] text-[18px] placeholder:font-light focus:outline-none md:w-[50%]",required:!0,autoComplete:"email"})}),a.jsx("textarea",{placeholder:"Your message...",type:"text",id:"message",name:"message",className:"mb-[25px] h-[220px] w-[82%] resize-none rounded-t-[5px] border-b-2 border-red bg-deepGrey pl-[10px] pt-[10px] text-[18px] placeholder:font-light  focus:outline-none   md:w-[50%] lg:mb-0",required:!0,autoComplete:"off"})]}),a.jsx("button",{type:"submit",className:"w-[185px] rounded-[3px] bg-red py-2 font-semibold outline-none md:mt-[25px]",children:e?a.jsx(utility_Loader,{}):"SEND MESSAGE"})]})]})})]})}},525:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>LandingPage});var a=s(784),r=s(6748);function Graphics({pos:e}){let t={transform:`translateX(${e.x/3}px)`,transition:"transform 0.3s ease"};return(0,a.jsxs)("div",{className:"relative h-[320px] w-full overflow-hidden rounded-xl md:w-screen lg:w-full",children:[a.jsx("div",{className:"absolute left-0 top-0 flex h-full w-screen bg-swirls_home bg-cover ",style:{...t}}),a.jsx("div",{className:"absolute bottom-3 left-0 lg:left-3",children:(0,a.jsxs)("div",{className:"theme_text flex flex-col justify-end pl-[40px] uppercase",children:[a.jsx("div",{className:"select-none text-[30px] font-bold leading-[85%] lg:text-[30px]",children:"S"}),(0,a.jsxs)("div",{className:"flex select-none flex-col text-[95px] font-bold leading-[85%] md:flex-row md:text-[100px] lg:text-[160px]",children:[a.jsx("div",{children:"EE"}),a.jsx("div",{children:"K"})]})]})})]})}var n=s(1440),i=s.n(n),l=s(3882);function Details(){return(0,a.jsxs)("article",{className:"mb-24 flex w-full -translate-y-[50px] flex-col items-center justify-center gap-24 text-center md:translate-y-0 lg:mb-32 lg:mt-[75px] lg:flex-row lg:gap-0 ",children:[(0,a.jsxs)("div",{className:"flex-1 text-[60px] font-extralight leading-[90%] lg:text-left",children:[a.jsx("div",{children:"TEDx"}),a.jsx("div",{children:"IPSA Indore"})]}),(0,a.jsxs)("div",{className:"text-shape flex-1 select-none text-center font-extralight leading-none",children:[a.jsx("div",{className:"text-[80px]",children:"02"}),a.jsx("div",{className:"text-[30px]",children:"MARCH '24"})]}),(0,a.jsxs)("div",{className:"flex-1 text-[30px] font-extralight leading-none lg:text-right",children:[a.jsx("div",{children:"See"}),a.jsx("div",{children:"the"}),a.jsx("div",{children:"talks"}),a.jsx("div",{children:a.jsx(l.Z,{children:a.jsx(i(),{href:"/talks",className:"underline",children:"HERE"})})})]})]})}var o=s(9885);let debounce=(e,t)=>{let s;return function(...a){clearTimeout(s),s=setTimeout(()=>e.apply(this,a),t)}};function LandingPage(){let[e,t]=(0,o.useState)({x:0}),s=debounce(e=>{let s=(0-e.clientX)/10+0;t({x:s})},10);return a.jsx(r.Z,{section:"home",children:(0,a.jsxs)("div",{className:"flex h-auto w-full flex-col content-center items-center",onMouseMove:s,children:[a.jsx(Details,{}),a.jsx(Graphics,{pos:e})]})})}},7266:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Speakers_Speaker});var a=s(784),r=s(2451),n=s.n(r),i=s(9885);function LeftArrow(){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",width:"40",height:"40",viewBox:"0 0 65 65",fill:"none",className:"group border-none outline-none focus:outline-none",children:[a.jsx("circle",{strokeWidth:"1.5px",cx:"32.5",cy:"32.5",r:"32",stroke:"white",className:"transition-[stroke] group-hover:stroke-[#DA0400]"}),a.jsx("circle",{cx:"32.5",cy:"32.5",fill:"#DA0400",r:"32",className:"origin-center scale-0 transition-transform group-hover:scale-100"}),a.jsx("path",{strokeWidth:"1.5px",d:"M18.4697 32.4697C18.1768 32.7626 18.1768 33.2374 18.4697 33.5303L23.2426 38.3033C23.5355 38.5962 24.0104 38.5962 24.3033 38.3033C24.5962 38.0104 24.5962 37.5355 24.3033 37.2426L20.0607 33L24.3033 28.7574C24.5962 28.4645 24.5962 27.9896 24.3033 27.6967C24.0104 27.4038 23.5355 27.4038 23.2426 27.6967L18.4697 32.4697ZM47 32.25L19 32.25L19 33.75L47 33.75L47 32.25Z",fill:"white"})]})}function RightArrow(){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",width:"40",height:"40",viewBox:"0 0 65 65",fill:"none",className:"group border-none outline-none focus:outline-none",children:[a.jsx("circle",{strokeWidth:"1.5px",cx:"32.5",cy:"32.5",r:"32",stroke:"white",className:"transition-[stroke] group-hover:stroke-[#DA0400]"}),a.jsx("circle",{cx:"32.5",cy:"32.5",fill:"#DA0400",r:"32",className:"origin-center scale-0 transition-transform group-hover:scale-100"}),a.jsx("path",{className:"group-hover:stroke-white",strokeWidth:"1.5px",d:"M47.5303 33.5303C47.8232 33.2374 47.8232 32.7626 47.5303 32.4697L42.7574 27.6967C42.4645 27.4038 41.9896 27.4038 41.6967 27.6967C41.4038 27.9896 41.4038 28.4645 41.6967 28.7574L45.9393 33L41.6967 37.2426C41.4038 37.5355 41.4038 38.0104 41.6967 38.3033C41.9896 38.5962 42.4645 38.5962 42.7574 38.3033L47.5303 33.5303ZM19 33.75L47 33.75L47 32.25L19 32.25L19 33.75Z",fill:"white"})]})}function hrScrollIntoView(e,t){let s=t.getBoundingClientRect(),a=e.getBoundingClientRect();e.scrollTo({left:e.scrollLeft+s.left-a.left,behavior:"smooth"})}function SplitText({text:e,func:t=e=>.6+.1*e}){return e.split(" ").map((e,s)=>a.jsx("span",{style:{transitionDelay:`${t(s)}s`},children:e},s))}let Speaker=class Speaker{constructor(e,t,s){this.name=e,this.description=t,this.image=s}};let l=[new Speaker("Adv. Navaneeth","Navaneeth Pavithran: Empowering Masses through Law. Navaneeth Pavithran, a beacon of inspiration, is a dynamic social media influencer and passionate justice advocate. With a unique vision, he's making legal knowledge accessible, reshaping our perception of law. Navaneeth's journey is unconventional. Trained as a lawyer, he saw law's limitations in reaching everyday people. To bridge this gap, he harnessed digital media's potential. Through one-minute videos and Instagram posts, he passionately simplifies complex legal jargon for everyone. His motto is simple yet profound: bring law to the common man. Legal literacy, he believes, empowers and uplifts individuals and communities. Discover the man, his mission, the stories fueling his passion, and his groundbreaking impact.",{src:"/_next/static/media/adv_navaneeth_p.3f1dd2c4.webp",height:500,width:500,blurDataURL:"data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAABcBPbtlNtZCQdOKCGmpo69sjJyQRUSGDwkX54yUREBFhxaQMEQizG+YraWKeoTLSKDfD2QwgfwuUSIoFBCCFSAABWUDggOgAAALABAJ0BKggACAACQDglpAACx/AsIEAA/vXbTnTQqKE4/H0JI/amz3cmMAcRm9rdKIlbjkbc9+OgAAA=",blurWidth:8,blurHeight:8}),new Speaker("Siddique Kappan","In the ever-evolving landscape of journalism, where the quest for truth often navigates through the labyrinth of paradoxes, one name stands out as a beacon of integrity and unwavering commitment – Siddique Kappan. A master storyteller, a guardian of the Fourth Estate, and a voice for the voiceless, Siddique's journey through the realm of journalism has been nothing short of extraordinary. Picture this: A journalist who doesn't merely report the news, but delves deep into the crux of stories, uncovering hidden layers of complexity that boggle the mind. Siddique's words have a way of unraveling paradoxes that surround us, exposing the heart of the matter with a rare blend of compassion and diligence.",{src:"/_next/static/media/siddique_kappan.78d8a325.webp",height:500,width:500,blurDataURL:"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEAAAAABYFJr25P3P7/85e9xBNgVcLTAUoJkOJAUmAH23usLERETAIALkHGvEdXtEGHJAShBukY+WHLf9z1K9SZdj9hsVlA4IEAAAADwAQCdASoIAAgAAkA4JaQAAxU/bvrSEoAA/rf9Z1sDW9mI7nKVVe+cf9idelH9PYDb4yyidDEa7BRbCs4PAAAA",blurWidth:8,blurHeight:8}),new Speaker("Adhila Nasarin","Adhila Nasarin, a fearless 23-year-old from Aluva, embodies the unwavering power of love and determination. Her courageous journey defies all odds, driven by a profound desire to reunite with her beloved. Adhila's story mirrors the challenges that many LGBTQ+ individuals confront in their pursuit of acceptance and the freedom to love openly. Her efforts, involving interactions with the police and court, underscore the ongoing struggles of the LGBTQ+ community in their search for love and happiness. Adhila's resilience shines as a beacon of hope, showcasing the enduring strength of the human spirit amid adversity.",{src:"/_next/static/media/adhila_noora.fdb5f923.webp",height:500,width:500,blurDataURL:"data:image/webp;base64,UklGRqgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEAAAAABYBPZtpP3TXxykhErSqRARYUHPKACAbjABzX8F0VExAQAuMaB3vEwFtyMFVt1If7nWFcBEcPtM9QzRC/i90wAVlA4IEIAAACwAQCdASoIAAgAAkA4JaQAApzX3EWAAP6KNP+XX5YRbuo1B9fz34Zzo4N9A1Mu9F11kTdeKgncYuNUc5KTR97wAAA=",blurWidth:8,blurHeight:8}),new Speaker("Anoop Ambika","Anoop P Ambika is the CEO of Kerala Startup Mission. With over 26 years of rich industry experience, Anoop's proficiency spans domains including international sales and marketing, policy making, AI/ML, Life Sciences, and entrepreneurship. Prior to becoming the CEO of KSUM, Mr. Anoop was the CEO of the biotech firm Genpro Research. Mr. Anoop has co-founded several technology start-ups and also represents Kerala Knowledge Economy Mission in the Kerala State Planning Board. He has served as the patron of Natana, the arts and cultural forum for IT companies in Kerala, highlighting his commitment to fostering creativity and artistic expression. As the key person at Kerala Startup Mission, Anoop is responsible for leading the development and execution of a decision sciences product and services strategy using AI and advanced analytics.",{src:"/_next/static/media/anoop_ambika.7df02c35.webp",height:500,width:500,blurDataURL:"data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAACrcscAAAAABv//zUAAAATav//ZQUAAfL/////kwAa///////HAF3///////wplv///////2RLw+r//+HKMgBWUDggOgAAANABAJ0BKggACAACQDglpAADFmJDbxWgAP77kJQtT9OlH3C/SOP9KiJuFQmO9C+hccBx0ly0ueY9AAA=",blurWidth:8,blurHeight:8}),new Speaker("Anaswara Ramesh","Anaswara Ramesh, a remarkable teenager from Kochi, Kerala, has left an indelible mark in record books and garnered prestigious awards for her outstanding achievements. Her journey exemplifies a fearless pursuit of knowledge and innovation. Anaswara's academic commitment, acknowledged with the CCRT Scholarship, and her technological aptitude, showcased by her WhiteHat Jr Scholarship, showcase her diverse talents. She serves as an inspiration, showcasing that determination and a passion for change can dismantle barriers and create a substantial impact.",{src:"/_next/static/media/anaswara_ramesh.c6092234.webp",height:500,width:500,blurDataURL:"data:image/webp;base64,UklGRp4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABYBTbdpObUH00D2jImm3fMQhCQHWCDCSAglQTERGAWnKAQpsx1NrMgce0gOw+8zagjDHmhi3spH9YAQBWUDggPAAAALABAJ0BKggACAACQDglpAACx/fPTYAA/u0gCE1HG6e1QOGy+4weKrC/qI/gBKQKtg42sC/ZZhWKZAAAAA==",blurWidth:8,blurHeight:8}),new Speaker("Priyesh Gopalakrishnan","With a career spanning 25 years, Priyesh is an accomplished IT leader in the industry specifically in driving Large Scale Program Management, Portfolio Management, Account Management, Digital Transformation, Thought Leadership, Financial and Operations Management, and IT budgeting. Presently, he is the Delivery Director at Cognizant. He has consistently pushed the boundaries of what's possible in the realm of technology. Mr. Priyesh’s contributions extend far beyond the boardroom. He has a keen interest in Psychology and is a certified Life Coach, Agile Coach, Personal Transformation Coach, NLP Master Practitioner, Enneagram Expert and Transactional Analysis Expert. Get ready to be enlightened by our enthusiastic speaker’s journey at TEDxGECRIT.",{src:"/_next/static/media/priyesh_gopalakrishnan.43c941f8.webp",height:500,width:500,blurDataURL:"data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD8AAAABYFJte5XvTE1PLcBqzM+OELTg0AJLFwqgOXTAoW7/NURETAAQEmw5aDID0W4a0WnyQ4vBRvcYEWYioqtXclcAVlA4IDwAAADwAQCdASoIAAgAAkA4JaQAAv3Pfu7pcAAA/uoBwHyiS+79KH6Q9Y2+0IR1ue4qMPS+3p8dWwMqAqNgAAA=",blurWidth:8,blurHeight:8})];s(4182);let o={src:"/_next/static/media/speaker-card-bg.e1aac192.webp",height:832,width:640,blurDataURL:"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoGAAgAAkA4JagCdAD0eeIAAP76aLQcwPh6E4XCC99aMoRBTEgo7aqM1pePYWP1EdJL97/HVHmoT94HjzyIAA==",blurWidth:6,blurHeight:8};var c=s(3614);function Speakers_Speaker(){let e=(0,i.useRef)(0),t=(0,i.useRef)(null),s=(0,i.useRef)(null),r=(0,i.useRef)(null),d=(0,i.useRef)(null),h=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let a=null,n=s.current;function doScrollEvent(){clearTimeout(a),a=setTimeout(()=>{[].slice.call(n.children).forEach(function(s,a){let r=s.getElementsByClassName("sub-card-cont")[0];30>Math.abs(s.getBoundingClientRect().left-n.getBoundingClientRect().left)&&(e.current=a,r.style.transform="scale(1)",r.style.transitionDelay="0s",function(e,t){let s=t.getBoundingClientRect(),a=e.getBoundingClientRect();e.scrollTo({top:e.scrollTop+s.top-a.top,behavior:"smooth"})}(t.current,t.current.children[a]))}),[].slice.call(n.children).forEach(function(s,a){let r=s.getElementsByClassName("sub-card-cont")[0],n=t.current.children[a].classList,i=s.classList;if(a!==e.current){var o,c,d,h;let t=a>e.current?-((a-(o=e.current))*.20000000000000007)/(l.length-o)+.9:-((a-(c=e.current))*.20000000000000007)/(0-c)+.9,s=a>e.current?(a-(d=e.current))*.4/(l.length-d)+.1:(a-(h=e.current))*.4/(0-h)+.1;r.style.transitionDelay=s+"s",r.style.transform=`scale(${t})`,n.remove("active"),i.remove("active")}else n.add("active"),i.add("active")})},100)}n.addEventListener("scroll",doScrollEvent),doScrollEvent(),r.current.addEventListener("mouseover",()=>{h.current=!0}),r.current.addEventListener("mouseleave",()=>{h.current=!1})},[]),(0,a.jsxs)("section",{className:"my-8 w-full overflow-x-hidden px-20 pl-[150px] pr-0 pt-[80px] max-md:p-10 max-sm:p-0 lg:pr-0",id:"speakers",children:[a.jsx(c.Z,{children:"Speakers"}),(0,a.jsxs)("div",{className:"flex h-[600px] w-full flex-[0_0_auto] max-md:h-[auto] max-md:flex-col-reverse",ref:r,children:[(0,a.jsxs)("div",{className:"relative h-[100%] w-[35%] max-lg:w-[40%] max-md:mt-10 max-md:h-[600px] max-md:w-[100%] max-sm:mt-6 max-sm:h-[600px] max-sm:px-5",children:[a.jsx("div",{className:"absolute z-20 h-full w-full"}),a.jsx("div",{className:"scroll-snap-y scroll-snap-start hide-scrollbar details-container flex h-full w-full flex-col overflow-hidden ",ref:t,children:l.map((e,t)=>(0,a.jsxs)("div",{className:"flex min-h-full max-w-[100%] flex-grow flex-col justify-center max-md:justify-start",children:[a.jsx("h2",{className:"font-poppins flex flex-col text-5xl font-extrabold uppercase leading-[100%] max-sm:text-4xl max-sm:font-medium",children:a.jsx(SplitText,{text:e.name})}),a.jsx("br",{}),a.jsx("div",{className:"flex items-center opacity-95",children:a.jsx("p",{className:"font-poppins font-light leading-[137.5%] max-sm:leading-[130%]",children:e.description})})]},t+50))})]}),(0,a.jsxs)("div",{className:"flex max-h-full w-[65%] flex-col justify-end gap-10 pl-5 max-lg:w-[60%] max-md:w-[100%] max-md:pl-0 max-sm:gap-6",children:[a.jsx("div",{className:"scroll-snap-x scroll-snap-start hide-scrollbar last-scroll-padd flex w-full items-end overflow-y-hidden overflow-x-scroll",ref:s,children:l.map((e,t)=>a.jsx("div",{onClick:()=>{hrScrollIntoView(s.current,s.current.children[t])},className:"cards-container relative flex aspect-[0.75] w-[380px] flex-[0_0_auto] select-none items-end justify-center overflow-visible p-5 max-sm:w-[250px]",children:(0,a.jsxs)("div",{className:"sub-card-cont relative flex h-full w-full origin-bottom justify-center",children:[a.jsx("div",{className:"card-bg-container absolute left-0 top-0 h-full w-full overflow-hidden rounded-[15px]",children:a.jsx(n(),{src:o,className:"h-full w-full object-cover object-center",alt:"Cards background"})}),a.jsx(n(),{src:e.image,className:"absolute bottom-0 min-w-[140%] select-none",alt:e.name,loading:"eager"})]})},t))}),(0,a.jsxs)("div",{className:"flex items-center gap-8 pl-[20px] ",children:[a.jsx("button",{onClick:()=>{Date.now()-d.current>400&&(e.current=0==e.current?l.length-1:e.current-1,hrScrollIntoView(s.current,s.current.children[e.current]),d.current=Date.now())},"aria-label":"Scroll left button",children:a.jsx(LeftArrow,{})}),a.jsx("button",{onClick:()=>{Date.now()-d.current>400&&(e.current=e.current==l.length-1?0:e.current+1,hrScrollIntoView(s.current,s.current.children[e.current]),d.current=Date.now())},"aria-label":"Scroll right button",children:a.jsx(RightArrow,{})}),a.jsx("span",{className:"h-[0.5px] w-[60%] bg-white max-sm:w-[50%]"})]})]})]})]})}},6748:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(784);let __WEBPACK_DEFAULT_EXPORT__=e=>a.jsx("section",{className:"h-fit w-full pb-[75px] pt-[75px] lg:px-[150px]",id:e?.section,children:e.children})},3614:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(784);let __WEBPACK_DEFAULT_EXPORT__=e=>a.jsx("h1",{className:"ml-[25px] select-none text-5xl font-[200] uppercase max-sm:py-5 md:ml-[50px] md:pb-10 lg:ml-0 lg:pb-10 lg:text-[60px]",children:e?.children})},7602:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Home});var a=s(4656),r=s(1786),n=s(5153);let i=(0,n.createProxy)(String.raw`D:\React Projects\TEDxIPSA\tedxipsaindore\src\components\LandingPage.js`),{__esModule:l,$$typeof:o}=i,c=i.default,d=(0,n.createProxy)(String.raw`D:\React Projects\TEDxIPSA\tedxipsaindore\src\components\Speakers.js`),{__esModule:h,$$typeof:x}=d,p=d.default;var m=s(8323),u=s(3986);let Highlights_VideoPlayer=({link:e})=>a.jsx("iframe",{width:"780",height:"480",loading:"lazy",cache:"true",className:"z-2 absolute left-[50%] h-[187px] w-[350px] -translate-x-1/2 md:h-[416px] md:w-[750px] lg:h-[480px] lg:w-[900px] lg:rounded-[5px] ",src:e,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0});var g=s(1371);function Highlights(){let e=g.ML;return e&&""!==e?(0,a.jsxs)(m.Z,{section:"highlights",children:[a.jsx(u.Z,{children:"Highlights"}),a.jsx("div",{className:"",children:a.jsx("div",{className:"mt-[15px] flex w-full flex-col",children:(0,a.jsxs)("div",{className:"relative h-[230px] w-full md:h-[520px]",children:[a.jsx("div",{className:"absolute left-[50%] mt-[110px] h-[93px] w-[370px] -translate-x-[50%]  bg-red md:mt-[220px] md:h-[208px] md:w-[770px] lg:h-[300px] lg:w-[1000px] lg:rounded-[5px]"}),a.jsx(Highlights_VideoPlayer,{link:e})]})})})]}):a.jsx(a.Fragment,{})}var A=s(4353),f=s.n(A);function MeetUs(){return a.jsx(m.Z,{section:"meetus",children:(0,a.jsxs)("div",{className:"flex w-full flex-col items-center justify-center text-center",children:[a.jsx("quote",{className:"mb-[15px] w-[89%] text-[19px] font-light leading-tight md:w-[75%] md:text-[24px]",children:"This initiative would not have been possible without the generous support of our sponsors and team members. ❤️"}),a.jsx("button",{className:"w-[185px] rounded-[3px] bg-red font-semibold",children:a.jsx(f(),{href:"/meet-us",className:"flex h-full w-full justify-center py-2 ",children:"MEET THEM"})})]})})}let b=(0,n.createProxy)(String.raw`D:\React Projects\TEDxIPSA\tedxipsaindore\src\components\ContactUs.js`),{__esModule:w,$$typeof:v}=b,j=b.default;var y=s(7130);function RedText(e){return a.jsx("span",{className:"text-redText",children:e.children})}let components_AboutTheme=()=>a.jsx(m.Z,{section:"about_theme",children:a.jsx("article",{className:"mb-8 flex w-full items-center justify-center pt-2 text-center md:px-[5%]",children:(0,a.jsxs)("p",{className:"para block px-2 text-left md:px-0 md:text-center",children:["In a world of complexities, contradictions, and mysteries, TEDxGECRIT presents ",a.jsx(RedText,{children:'"Unraveling Paradoxes."'})," Through thought-provoking talks and engaging discussions, we invite you to embrace the beauty of paradoxes that shape our lives, explore their profound depths, and unlock the hidden wisdom they hold.",a.jsx("br",{}),a.jsx("br",{})," Let's spark profound discussions and connect with fellow seekers, as we uncover the power of"," ",a.jsx(RedText,{children:'"Unraveling Paradoxes"'})," to inspire changes, trigger minds, and create a world where paradoxes are not problems, but gateways to profound understanding."]})})}),About_Description=e=>a.jsx("div",{className:"px-[20px]",children:e?.children}),About_AboutHeading=e=>{let t=60;return e?.id==="1"&&(t+=10),e?.id==="2"&&(t+=20),e?.id==="3"&&(t+=130),a.jsx("h1",{className:"highlight relative text-[28px] font-medium",style:{width:`${t}px`},children:e.children})},About_AboutText=e=>a.jsx("p",{className:"para lg:mt-2",children:e.children}),About_ReadMore=e=>a.jsx("div",{className:"flex cursor-pointer text-redText",children:(0,a.jsxs)(f(),{href:e?.link,target:"_blank",children:["Read More",">"]})}),components_AboutUs=()=>(0,a.jsxs)(m.Z,{section:"about",children:[a.jsx(u.Z,{children:"About Us"}),(0,a.jsxs)("div",{className:"flex flex-col gap-8 md:flex-row",children:[(0,a.jsxs)(About_Description,{children:[a.jsx(About_AboutHeading,{id:"1",children:"TED"}),a.jsx(About_AboutText,{children:'In the world of TED, human ingenuity and a dynamic platform bring together a collective of ideas that transcend borders. Like a master artist painting a canvas, TED reveals the beauty of knowledge, offering talks that span diverse fields, giving life to groundbreaking concepts in technology, arts, sciences, and beyond. Join this global collective, where ideas are born, and passions collide, envisioning a world of "ideas worth spreading."'}),a.jsx(About_ReadMore,{link:"https://www.ted.com/"})]}),(0,a.jsxs)(About_Description,{children:[a.jsx(About_AboutHeading,{id:"2",children:"TEDx"}),a.jsx(About_AboutText,{children:'TEDx is a program of locally organized events that aims to replicate the Ted experience. The "x" in tedx stands for independently organized Ted events. These self-organized events are a combination of TedTalks videos and live speakers, sparking deep discussions and connections in smaller groups. These events ignites the flame of inspiration, inviting people together to share transformative experiences and foster connections through the power of shared wisdom.'}),a.jsx(About_ReadMore,{link:"https://www.ted.com/about/programs-initiatives/tedx-program"})]}),(0,a.jsxs)(About_Description,{children:[a.jsx(About_AboutHeading,{id:"3",children:"TEDx GEC RIT"}),a.jsx(About_AboutText,{children:'TEDxGECRIT is an independently organised TED event. TEDxGECRIT strives to create a platform for diverse voices to share their stories, ideas ,insights and perspectives. Paradoxes are the keys that unlock doors to new perspectives. At our event we embark on a captivating journey of "Unraveling Paradoxes". Our aim is to bring together bright and intellectual minds to give talks that will transform your understanding of contradictions and lead you on a path of self discovery.'})]})]})]}),GetTicketsButton=()=>a.jsx(f(),{href:g.Om,className:"flex h-full w-full justify-center p-2 lg:py-1",target:"_blank",children:"Tickets sold out"}),components_Tickets=()=>(0,a.jsxs)(m.Z,{section:"tickets",children:[a.jsx(u.Z,{children:"TIcket"}),a.jsx("div",{className:"flex w-full flex-col items-center",children:a.jsx("div",{className:"relative h-[706px] w-[360px] overflow-hidden bg-tm bg-contain bg-center lg:h-[400px]  lg:w-[1200px] lg:bg-td",children:a.jsx("button",{disabled:!0,className:"pointer-events-none absolute bottom-[50px] right-1/2 w-[165px] translate-x-1/2 cursor-not-allowed select-none rounded-[3px] bg-grey font-semibold text-white  lg:bottom-[70px] lg:right-[125px] lg:translate-x-0 ",children:a.jsx(GetTicketsButton,{})})})})]}),SpeakerCards_SpecialPerformance=e=>(0,a.jsxs)("div",{className:"h-fit w-full ",children:[(0,a.jsxs)(u.Z,{children:["Special Performance #",e.id]}),a.jsx("div",{className:"space-y-4 px-6 md:px-0",children:a.jsx("article",{className:"leading-tight md:w-[90%]",children:e.children})})]}),components_Performer=()=>(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)("div",{className:"flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6",children:[a.jsx("div",{className:"h-[200px] w-full bg-ayush bg-cover bg-custom md:w-[300px] lg:bg-cover lg:bg-left"}),(0,a.jsxs)(SpeakerCards_SpecialPerformance,{id:"1",children:["Prepare to be captivated as our mentalist"," ",a.jsx(RedText,{children:"Ayush Krishna"})," takes the stage, demonstrating his uncanny ability to read minds, predict outcomes, and influence thoughts. He will lead you into a world where the impossible becomes possible.",a.jsx("p",{className:"mt-2 leading-tight",children:"Get ready to have your mind blown! See you at TEDxGECRIT."})]})]}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6",children:[a.jsx("div",{className:"h-[200px] w-full bg-sabareesh bg-cover bg-custom md:w-[300px] lg:bg-cover lg:bg-left"}),(0,a.jsxs)(SpeakerCards_SpecialPerformance,{id:"2",children:[a.jsx(RedText,{children:"Sabareesh Narayanan"})," better known in the limelight as ",a.jsx("span",{className:"italic",children:"'standupsabari'"})," is one of the popular stand up comedian from Kerala,who is also a well rounded advertising consultant,freelance filmmaker and entrepreneur.With his unparalleled energy and witty observations he captivate the audience and take them into a world of non-stop giggles and rib tickling experience.",a.jsx("p",{className:"mt-2 leading-tight",children:"Don't miss your chance to experience Sabareesh Narayanan's comedic brilliance live on stage at TEDxGECRIT."})]})]})]});function Home(){return(0,a.jsxs)("main",{children:[a.jsx(r.ZP,{}),a.jsx(c,{}),a.jsx(components_AboutTheme,{}),a.jsx(p,{}),a.jsx(components_Performer,{}),a.jsx(components_Tickets,{}),a.jsx(components_AboutUs,{}),a.jsx(Highlights,{}),a.jsx(MeetUs,{}),a.jsx(j,{}),a.jsx(y.Z,{})]})}},3986:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(4656);let __WEBPACK_DEFAULT_EXPORT__=e=>a.jsx("h1",{className:"ml-[25px] select-none text-5xl font-[200] uppercase max-sm:py-5 md:ml-[50px] md:pb-10 lg:ml-0 lg:pb-10 lg:text-[60px]",children:e?.children})},4182:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[812,425,699,361,778],()=>__webpack_exec__(9272));module.exports=s})();
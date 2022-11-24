import{u as f,o as s,c as l,a as r,w as p,b as d,v as n,d as t,t as u,e as i,f as g,g as b,h as y,L as k}from"./main.93b46b8a.js";const x={class:"container w-6/12 mx-auto mt-10"},_=["onSubmit"],h={class:"mb-6"},w=r("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Name",-1),v={key:0,className:"text-red-600"},N={class:"mb-6"},V=r("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Email",-1),C={key:0,className:"text-red-600"},U={class:"mb-6"},$=r("label",{for:"age",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Age",-1),S={key:0,className:"text-red-600"},B={class:"mb-6"},A=r("label",{for:"city",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"City",-1),D={key:0,className:"text-red-600"},E=r("button",{type:"submit",class:"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Submit",-1),L={name:"form",setup(m){const e=f({name:"",email:"",age:"",city:""}),c=()=>{e.post("user/store")};return(T,o)=>(s(),l("div",null,[r("div",x,[r("form",{onSubmit:p(c,["prevent"])},[r("div",h,[w,d(r("input",{type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=a=>t(e).name=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Ahmed"},null,512),[[n,t(e).name]]),t(e).errors.name?(s(),l("span",v,u(t(e).errors.name),1)):i("",!0)]),r("div",N,[V,d(r("input",{type:"text",id:"email","onUpdate:modelValue":o[1]||(o[1]=a=>t(e).email=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@flowbite.com"},null,512),[[n,t(e).email]]),t(e).errors.email?(s(),l("span",C,u(t(e).errors.email),1)):i("",!0)]),r("div",U,[$,d(r("input",{type:"text",id:"age","onUpdate:modelValue":o[2]||(o[2]=a=>t(e).age=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"18"},null,512),[[n,t(e).age]]),t(e).errors.age?(s(),l("span",S,u(t(e).errors.age),1)):i("",!0)]),r("div",B,[A,d(r("input",{type:"text",id:"city","onUpdate:modelValue":o[3]||(o[3]=a=>t(e).city=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Riyadh"},null,512),[[n,t(e).city]]),t(e).errors.city?(s(),l("span",D,u(t(e).errors.city),1)):i("",!0)]),E],40,_)])]))}},M=r("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/back.png"},null,-1),F=r("span",{class:"sr-only"},"Icon description",-1),I=g({name:"back",setup(m){return(e,c)=>(s(),l("div",null,[b(t(k),{href:"home",class:"fixed left-[85rem] top-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:y(()=>[M,F]),_:1})]))}}),R=r("h1",{class:"text-center text-3xl mt-20 font-extrabold dark:text-white"}," Create New User ",-1),q=g({name:"create",setup(m){return(e,c)=>(s(),l("div",null,[b(I),R,b(L)]))}});export{q as default};

import{A as e,B as t,C as n,D as r,K as i,P as a,Q as o,S as ee,T as s,W as c,ct as l,h as u,i as d,it as f,j as p,k as m,m as h,rt as g,st as _,w as v,x as te}from"./K2odYGWg.js";import"./ZsEnWiqm.js";var y=[{id:5,value:5},{id:10,value:10},{id:15,value:15},{id:30,value:30},{id:50,value:50},{id:100,value:100}],b=r(`<option> </option>`),x=r(`<button></button>`),S=r(`<div>...</div>`),C=r(`<button> </button>`),ne=r(`<button> </button>`),re=r(`<div>...</div>`),w=r(`<button> </button>`),T=r(`<div class="flex items-center justify-between flex-wrap gap-4"><div class="text-sm text-gray-700 dark:text-gray-300 font-medium"><span class="font-bold"> </span> a <span class="font-bold"> </span> de <span class="font-bold"> </span> resultados</div> <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"><span>Filas:</span> <select class="
                bg-white dark:bg-slate-900
                border-gray-300 dark:border-gray-600
                rounded-md px-3 py-1.5 text-sm
                focus:outline-none focus:ring-1 focus:ring-green-700 focus:border-green-700
                "></select></div> <div><button>‹ <!></button> <!> <!> <!> <button> </button> <!> <!> <!> <button><!>›</button></div></div>`),E=r(`<p class="text-center">Sin datos</p>`),D=r(`<div><!></div>`);function O(e,r){f(r,!0);let O=d(r,`rows`,19,()=>[]),k=d(r,`pageSize`,15,30),A=d(r,`paginaActual`,15,1),j=d(r,`onChangePageSize`,3,()=>{}),M=d(r,`rounded`,3,`rounded-b-xl`),N=d(r,`esCelu`,3,!1),ie=o(()=>(A()-1)*k()+1),ae=o(()=>Math.min(A()*k(),O().length)),P=o(()=>A()-1),F=o(()=>A()+1),I=o(()=>a(P)-1>1),L=o(()=>r.totalPaginas-a(F)>1);var R=D(),z=c(R),B=e=>{var o=T(),d=c(o),f=c(d),g=c(f,!0);l(f);var E=i(f,2),D=c(E,!0);l(E);var M=i(E,2),R=c(M,!0);l(M),_(),l(d);var z=i(d,2),B=i(c(z),2);te(B,21,()=>y,ee,(e,n)=>{var r=b(),i=c(r,!0);l(r);var o={};t(()=>{v(i,a(n).value),o!==(o=a(n).id)&&(r.value=(r.__value=a(n).id)??``)}),s(e,r)}),l(B),l(z);var V=i(z,2),H=c(V),U=i(c(H)),W=e=>{s(e,m(`Anterior`))};n(U,e=>{N()||e(W)}),l(H);var G=i(H,2),K=e=>{var t=x();u(t,1,`
                    w-6 h-8 flex items-center
                    justify-center text-sm font-semibold 
                    rounded-md shadow-sm
                `),t.textContent=`1`,p(`click`,t,()=>A(1)),s(e,t)};n(G,e=>{A()!=1&&e(K)});var q=i(G,2),oe=e=>{var t=S();u(t,1,`
                    w-6 h-8 flex items-center
                    justify-center text-sm font-semibold 
                    
                `),s(e,t)};n(q,e=>{a(I)&&e(oe)});var J=i(q,2),se=e=>{var n=C();u(n,1,`
                    w-6 h-8 flex items-center
                    justify-center text-sm font-semibold 
                    rounded-md shadow-sm
                `);var r=c(n,!0);l(n),t(()=>v(r,a(P))),p(`click`,n,()=>A(a(P))),s(e,n)};n(J,e=>{a(P)>1&&e(se)});var Y=i(J,2);u(Y,1,`
                    w-6 h-8 flex items-center
                    justify-center text-sm font-semibold 
                    rounded-md shadow-sm
                    text-white bg-red-300 dark:bg-red-900
                `);var ce=c(Y,!0);l(Y);var X=i(Y,2),le=e=>{var n=ne();u(n,1,`
                    w-6 h-8 flex items-center
                    justify-center text-sm font-semibold 
                    rounded-md shadow-sm
                `);var r=c(n,!0);l(n),t(()=>v(r,a(F))),p(`click`,n,()=>A(a(F))),s(e,n)};n(X,e=>{a(F)<r.totalPaginas&&e(le)});var Z=i(X,2),ue=e=>{var t=re();u(t,1,`
                    w-6 h-8 flex items-center
                    justify-center text-sm font-semibold 
                    
                `),s(e,t)};n(Z,e=>{a(L)&&e(ue)});var Q=i(Z,2),de=e=>{var n=w();u(n,1,`
                    w-6 h-8 flex items-center
                    justify-center text-sm font-semibold 
                    rounded-md shadow-sm
                `);var i=c(n,!0);l(n),t(()=>v(i,r.totalPaginas)),p(`click`,n,()=>A(r.totalPaginas)),s(e,n)};n(Q,e=>{A()!=r.totalPaginas&&e(de)});var $=i(Q,2),fe=c($),pe=e=>{s(e,m(`Siguiente`))};n(fe,e=>{N()||e(pe)}),_(),l($),l(V),l(o),t(()=>{v(g,a(ie)),v(D,a(ae)),v(R,O().length),u(V,1,`flex ${N()?`items-end`:`items-center`}   space-x-1`),H.disabled=A()===1,u(H,1,`
                    px-3 py-1.5 text-sm font-medium 
                    text-gray-700 dark:text-gray-300 
                    bg-white dark:bg-gray-800 border 
                    border-gray-300 dark:border-gray-600 
                    hover:bg-gray-50 dark:hover:bg-gray-700 
                    rounded-md transition-colors

                    ${A()===1?`opacity-50 cursor-not-allowed`:``}
                `),v(ce,A()),$.disabled=A()===r.totalPaginas,u($,1,`
                    px-3 py-1.5 text-sm font-medium 
                    text-gray-700 dark:text-gray-300 
                    bg-white dark:bg-gray-800 border 
                    border-gray-300 dark:border-gray-600 
                    hover:bg-gray-50 dark:hover:bg-gray-700 
                    rounded-md transition-colors
                    ${A()===r.totalPaginas?`opacity-50 cursor-not-allowed`:``}
                `)}),p(`change`,B,function(...e){j()?.apply(this,e)}),h(B,k),p(`click`,H,()=>A(A()-1)),p(`click`,$,()=>A(A()+1)),s(e,o)},V=e=>{s(e,E())};n(z,e=>{O().length>0?e(B):e(V,-1)}),l(R),t(()=>u(R,1,`${M()} bg-white dark:bg-slate-900 p-4 shadow-sm`)),s(e,R),g()}e([`change`,`click`]);export{O as t};
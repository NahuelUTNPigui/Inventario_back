import{A as e,B as t,C as n,D as r,G as i,K as a,P as o,Q as s,S as c,T as l,W as u,X as d,Z as f,ct as p,d as m,h,i as g,it as _,j as v,m as ee,p as te,rt as y,s as b,st as x,u as S,v as C,w,x as T}from"./K2odYGWg.js";import"./ZsEnWiqm.js";import{i as E}from"./Cqw2pDMP.js";import{n as D}from"./DdXQea8f.js";import{t as O}from"./Bv8qADfv.js";import{t as k}from"./Iq6uXaYU.js";import{n as ne,r as re,t as ie}from"./CBJbliRg.js";import{i as ae,s as oe}from"./CaAz_aXy.js";import{t as A}from"./BTAYBAKv.js";import{t as se}from"./-5epi4rN.js";var j=r(`<option> </option>`),M=r(`<div class="flex flex-col"><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Cliente</span></label> <select class="
                                bg-white dark:bg-slate-900
                                border
                                border-gray-300 dark:border-gray-600
                                rounded-md px-3 py-1.5 text-sm
                                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700
                            "></select></div>`),N=r(`<option> </option>`),P=r(`<div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 w-full mt-2 mb-1"><div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Fecha desde ingreso</span></label> <input id="fechadesde" type="date"/></div> <div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Fecha hasta ingreso</span></label> <input id="fechadesde" type="date"/></div> <div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Fecha desde vencimiento</span></label> <input id="fechadesde" type="date"/></div> <div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Fecha hasta vencimiento</span></label> <input id="fechadesde" type="date"/></div> <!> <div class="flex flex-col"><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Estado</span></label> <select class="
                                bg-white dark:bg-slate-900
                                border
                                border-gray-300 dark:border-gray-600
                                rounded-md px-3 py-1.5 text-sm
                                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700
                            "></select></div> <div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Código</span></label> <label class="input-group"><input id="nombre" type="text"/></label></div> <div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Remito</span></label> <label class="input-group"><input id="nombre" type="text"/></label></div> <div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Lote</span></label> <label class="input-group"><input id="nombre" type="text"/></label></div></div></div>`),F=r(`<div><div><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 mb-2 border-b border-gray-300 dark:border-gray-800"><div><h1>Stock</h1></div></div> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-1 md:p-2 bg-transparent rounded-lg"><div><input type="text" placeholder="Buscar producto ..."/> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"></path></svg></div> <div class="flex flex-wrap gap-2"><button><!> Nuevo</button> <button><!> Filtros</button></div></div> <!></div></div>`);function I(e,r){_(r,!0);let i=g(r,`buscar`,15,``),s=g(r,`cliente`,15,``),te=g(r,`codigo`,15,``),k=g(r,`estado`,15,``),ne=g(r,`fechadesde`,15,``),re=g(r,`fechahasta`,15,``),ie=g(r,`fechadesdevenc`,15,``),ae=g(r,`fechahastavenc`,15,``),oe=g(r,`remito`,15,``),se=g(r,`lote`,15,``),I=g(r,`clientes`,19,()=>[]),ce=g(r,`estados`,19,()=>[]),L=g(r,`filterUpdate`,3,()=>{}),R=g(r,`nuevo`,3,()=>{}),z=g(r,`encliente`,3,!1),B=f(null);function V(){o(B).focus()}let H=f(!1);var U={setFocus:V},W=F(),G=u(W);h(G,1,`
            rounded-xl p-1 shadow-2xl mb-1
            dark:bg-slate-900 bg-white
            px-6
        `);var K=u(G),q=u(K);h(q,1,`
                    bg-transparent
                    py-2
                `),h(u(q),1,`
                        text-3xl font-semibold 
                        dark:text-white text-gray-900
                `),p(q),p(K);var J=a(K,2),Y=u(J);h(Y,1,`
                  flex items-center flex-1
                  shadow-2xl
                  rounded-full p-3
                
                  bg-white dark:bg-gray-900
                  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]
                  dark:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.1)]
                `);var X=u(Y);m(X),h(X,1,`
                    shadow-2xl
                    dark:placeholder-gray-500 
                    dark:text-gray-100
                    placeholder-gray-600 text-gray-800
                    
                    w-full bg-transparent focus:outline-none
                    border border-transparent
                    
                `),x(2),p(Y);var Z=a(Y,2),Q=u(Z);h(Q,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        bg-white  border-gray-300  hover:bg-gray-300 dark:bg-transparent 
                        dark:hover:bg-gray-600 dark:border-gray-600 dark:text-white
                    `),O(u(Q),{size:`size-4`}),x(),p(Q),b(Q,e=>d(B,e),()=>o(B));var $=a(Q,2);A(u($),{size:`size-4`}),x(),p($),p(Z),p(J);var le=a(J,2),ue=e=>{var r=P(),i=u(r),d=u(i),f=a(u(d),2);m(f),p(d);var g=a(d,2),_=a(u(g),2);m(_),p(g);var y=a(g,2),b=a(u(y),2);m(b),p(y);var x=a(y,2),O=a(u(x),2);m(O),p(x);var A=a(x,2),F=e=>{var n=M(),r=a(u(n),2);T(r,21,I,c,(e,n)=>{var r=j(),i=u(r,!0);p(r);var a={};t(()=>{w(i,o(n).nombre),a!==(a=o(n).id)&&(r.value=(r.__value=o(n).id)??``)}),l(e,r)}),p(r),p(n),v(`change`,r,function(...e){L()?.apply(this,e)}),ee(r,s),l(e,n)};n(A,e=>{z()||e(F)});var R=a(A,2),B=a(u(R),2);T(B,21,ce,c,(e,n)=>{var r=N(),i=u(r,!0);p(r);var a={};t(()=>{w(i,o(n).nombre),a!==(a=o(n).id)&&(r.value=(r.__value=o(n).id)??``)}),l(e,r)}),p(B),p(R);var V=a(R,2),H=a(u(V),2),U=u(H);m(U),p(H),p(V);var W=a(V,2),G=a(u(W),2),K=u(G);m(K),p(G),p(W);var q=a(W,2),J=a(u(q),2),Y=u(J);m(Y),p(J),p(q),p(i),p(r),t(()=>{h(f,1,`
                                input input-bordered w-full
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 
                                focus:ring-gray-500 
                                focus:border-gray-500
                                ${D.bgdark2} 
                            `),h(_,1,`
                                input input-bordered w-full
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 
                                focus:ring-gray-500 
                                focus:border-gray-500
                                ${D.bgdark2} 
                            `),h(b,1,`
                                input input-bordered w-full
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 
                                focus:ring-gray-500 
                                focus:border-gray-500
                                ${D.bgdark2} 
                            `),h(O,1,`
                                input input-bordered w-full
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 
                                focus:ring-gray-500 
                                focus:border-gray-500
                                ${D.bgdark2} 
                            `),h(U,1,`input input-bordered w-full ${D.bgdark}`),h(K,1,`input input-bordered w-full ${D.bgdark}`),h(Y,1,`input input-bordered w-full ${D.bgdark}`)}),v(`change`,f,function(...e){L()?.apply(this,e)}),S(f,ne),v(`change`,_,function(...e){L()?.apply(this,e)}),S(_,re),v(`change`,b,function(...e){L()?.apply(this,e)}),S(b,ie),v(`change`,O,function(...e){L()?.apply(this,e)}),S(O,ae),v(`change`,B,function(...e){L()?.apply(this,e)}),ee(B,k),v(`input`,U,function(...e){L()?.apply(this,e)}),S(U,te),v(`input`,K,function(...e){L()?.apply(this,e)}),S(K,oe),v(`input`,Y,function(...e){L()?.apply(this,e)}),S(Y,se),C(3,r,()=>E),l(e,r)};return n(le,e=>{o(H)&&e(ue)}),p(G),p(W),t(()=>{h(W,1,`container mx-auto py-1 px-4 max-w-7xl w-full ${z()?``:`xl:w-3/4`}`),h($,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        border-gray-300 dark:border-gray-600
                        ${o(H)?`
                                    bg-red-800 hover:bg-red-900 text-white
                                `:`
                                    bg-white    hover:bg-gray-300 dark:bg-transparent 
                                    dark:hover:bg-gray-600  dark:text-white
                                `}
                        
                    `)}),v(`input`,X,function(...e){L()?.apply(this,e)}),S(X,i),v(`click`,Q,function(...e){R()?.apply(this,e)}),v(`click`,$,()=>d(H,!o(H))),l(e,W),y(U)}e([`input`,`click`,`change`]);var ce=r(`<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td><button class="hover:cursor-pointer hover:scale-105"><!></button> <button class="hover:cursor-pointer hover:scale-105"><!></button> <button class="hover:cursor-pointer hover:scale-105"><!></button></td></tr>`),L=r(`<div class="max-h-[600px] overflow-y-auto custom-scrollbar"><table class="table table-lg w-full bg-white dark:bg-slate-900 rounded-none"><thead><tr><th><div class="flex flex-row justify-between uppercase">Código</div></th><th><div class="flex flex-row justify-between uppercase">Producto</div></th><th><div class="flex flex-row justify-between uppercase">Cantidad</div></th><th><div class="flex flex-row justify-between uppercase">Unidad</div></th><th><div class="flex flex-row justify-between uppercase">Estado</div></th><th><div class="flex flex-row justify-between uppercase">Vencimiento</div></th><th><div class="flex flex-row justify-between uppercase">Ingreso</div></th><th><div class="flex flex-row justify-between uppercase">Remito</div></th><th><div class="flex flex-row justify-between uppercase">Lote</div></th><th class="text-base mx-1 px-1 text-center uppercase">Acciones</th></tr></thead><tbody></tbody></table></div> <!>`,1);function R(e,n){_(n,!0);let r=g(n,`lotesrows`,19,()=>[]);g(n,`selecthash`,19,()=>({}));let m=g(n,`openViewModal`,3,e=>{}),ee=g(n,`openEditModal`,3,e=>{}),te=g(n,`openDelModal`,3,e=>{});g(n,`clickTodos`,3,()=>{}),g(n,`clickFila`,3,e=>{}),g(n,`todos`,11,!1);let b=g(n,`pageSize`,15,15);function S(){d(C,1)}let C=f(1),E=s(()=>o(C)-1),O=s(()=>r().slice(o(E)*b(),o(C)*b())),A=s(()=>r().length),j=s(()=>Math.ceil(o(A)/b())),M=`py-1`;var N=L(),P=i(N),F=u(P),I=u(F),R=u(I),z=u(R),B=a(z),V=a(B),H=a(V),U=a(H),W=a(U),G=a(W),K=a(G),q=a(K);x(),p(R),p(I);var J=a(I);T(J,21,()=>o(O),c,(e,n)=>{var r=ce(),i=u(r);h(i,1,`text-base mx-1 px-4 ${M}`);var s=u(i,!0);p(i);var c=a(i);h(c,1,`text-base mx-1 px-4 ${M}`);var d=u(c,!0);p(c);var f=a(c);h(f,1,`text-base mx-1 px-4 ${M}`);var g=u(f,!0);p(f);var _=a(f);h(_,1,`text-base mx-1 px-4 ${M}`);var y=u(_,!0);p(_);var b=a(_);h(b,1,`text-base mx-1 px-4 ${M}`);var x=u(b,!0);p(b);var S=a(b);h(S,1,`text-base mx-1 px-4 ${M}`);var C=u(S,!0);p(S);var T=a(S);h(T,1,`text-base mx-1 px-4 ${M}`);var E=u(T,!0);p(T);var D=a(T);h(D,1,`text-base mx-1 px-4 ${M}`);var O=u(D,!0);p(D);var k=a(D);h(k,1,`text-base mx-1 px-4 ${M}`);var A=u(k,!0);p(k);var j=a(k);h(j,1,`flex text-base  items-center justify-center gap-2 px-1 ${M}`);var N=u(j);re(u(N),{size:`size-6`}),p(N);var P=a(N,2);ie(u(P),{size:`size-6`}),p(P);var F=a(P,2);ne(u(F),{size:`size-6`}),p(F),p(j),p(r),t((e,t,r,i,a)=>{w(s,e),w(d,t),w(g,`${o(n).cantidad}`),w(y,`${o(n).expand?o(n).expand.unidad.nombre:``}`),w(x,r),w(C,i),w(E,a),w(O,`${o(n).remito}`),w(A,`${o(n).lote}`)},[()=>`${oe(o(n).codigo,30)}`,()=>`${oe(o(n).expand?o(n).expand.producto.nombre:``,30)}`,()=>`${ae(o(n).cerrado,se)}`,()=>`${o(n).fechavencimiento.length>0?new Date(o(n).fechavencimiento).toLocaleDateString():``}`,()=>`${new Date(o(n).fechaingreso).toLocaleDateString()}`]),v(`click`,N,()=>m()(o(n).id)),v(`click`,P,()=>ee()(o(n).id)),v(`click`,F,()=>te()(o(n).id)),l(e,r)}),p(J),p(F),p(P),k(a(P,2),{get rows(){return r()},get totalPaginas(){return o(j)},onChangePageSize:S,get paginaActual(){return o(C)},set paginaActual(e){d(C,e,!0)},get pageSize(){return b()},set pageSize(e){b(e)}}),t(()=>{h(I,1,`${D.tableheader}  sticky top-0 z-5 shadow-sm`),h(z,1,`
                        ${D.tableth}   
                    `),h(B,1,`
                        ${D.tableth}   
                    `),h(V,1,`
                        ${D.tableth}   
                    `),h(H,1,`
                        ${D.tableth}   
                    `),h(U,1,`
                        ${D.tableth}   
                    `),h(W,1,`
                        ${D.tableth}   
                    `),h(G,1,`
                        ${D.tableth}   
                    `),h(K,1,`
                        ${D.tableth}   
                    `),h(q,1,`
                        ${D.tableth}   
                    `)}),l(e,N),y()}e([`click`]);var z=r(`<div><div class="flex items-start justify-between gap-3 mb-3"><div class="flex items-center gap-3 flex-1 min-w-0"><label class="hidden flex items-center justify-center cursor-pointer"><input type="checkbox" class="peer sr-only"/> <span class="
                                w-5 h-5
                                flex items-center justify-center
                                rounded-full
                                border-2 border-gray-300 dark:border-gray-500
                                bg-white dark:bg-gray-800
                                transition-all duration-200 ease-in-out
                                peer-checked:bg-red-700
                                peer-checked:border-red-700
                                hover:border-red-500 dark:hover:border-red-400
                            "><svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></span></label> <div class="flex-1 min-w-0"><p class="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"><span class="font-normal">Código:</span> </p></div></div> <div class="flex items-center gap-2 shrink-0"><button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button> <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button> <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button></div></div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm"><div><span class="text-xs text-gray-500 dark:text-gray-400">Producto</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Cantidad</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Unidad</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Estado</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Vencimiento</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Ingreso</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Remito</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Lote</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div></div></div>`),B=r(`<div class="flex flex-col gap-3"></div>`);function V(e,n){_(n,!0);let r=g(n,`lotesrows`,19,()=>[]),i=g(n,`selecthash`,19,()=>({})),s=g(n,`openViewModal`,3,e=>{}),d=g(n,`openEditModal`,3,e=>{}),f=g(n,`openDelModal`,3,e=>{});g(n,`clickTodos`,3,()=>{});let ee=g(n,`clickFila`,3,e=>{});g(n,`todos`,11,!1),g(n,`pageSize`,11,15);var b=B();T(b,21,r,c,(e,n)=>{var r=z(),c=u(r),g=u(c),_=u(g),y=u(_);m(y),x(2),p(_);var b=a(_,2),S=u(b),C=a(u(S));p(S),p(b),p(g);var T=a(g,2),E=u(T);re(u(E),{size:`size-5`}),p(E);var D=a(E,2);ie(u(D),{size:`size-5`}),p(D);var O=a(D,2);ne(u(O),{size:`size-5`}),p(O),p(T),p(c);var k=a(c,2),A=u(k),j=a(u(A),2),M=u(j,!0);p(j),p(A);var N=a(A,2),P=a(u(N),2),F=u(P,!0);p(P),p(N);var I=a(N,2),ce=a(u(I),2),L=u(ce,!0);p(ce),p(I);var R=a(I,2),B=a(u(R),2),V=u(B,!0);p(B),p(R);var H=a(R,2),U=a(u(H),2),W=u(U,!0);p(U),p(H);var G=a(H,2),K=a(u(G),2),q=u(K,!0);p(K),p(G);var J=a(G,2),Y=a(u(J),2),X=u(Y,!0);p(Y),p(J);var Z=a(J,2),Q=a(u(Z),2),$=u(Q,!0);p(Q),p(Z),p(k),p(r),t((e,t,a,s)=>{h(r,1,`
                rounded-xl border p-4 transition-all
                ${i()[o(n).id]?`border-red-600 bg-red-50 dark:bg-red-950/30`:`border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900`}
            `),te(y,!!i()[o(n).id]),w(C,` ${e??``}`),w(M,o(n).expand?.producto?.nombre||`-`),w(F,o(n).cantidad??`-`),w(L,o(n).expand?.unidad?.nombre||`-`),w(V,t),w(W,a),w(q,s),w(X,o(n).remito??`-`),w($,o(n).lote??`-`)},[()=>oe(o(n).codigo,30),()=>ae(o(n).cerrado,se),()=>o(n).fechavencimiento?.length>0?new Date(o(n).fechavencimiento).toLocaleDateString():`-`,()=>o(n).fechaingreso?new Date(o(n).fechaingreso).toLocaleDateString():`-`]),v(`change`,y,()=>ee()(o(n).id)),v(`click`,E,()=>s()(o(n).id)),v(`click`,D,()=>d()(o(n).id)),v(`click`,O,()=>f()(o(n).id)),l(e,r)}),p(b),l(e,b),y()}e([`change`,`click`]);export{R as n,I as r,V as t};
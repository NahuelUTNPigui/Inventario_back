import{A as e,B as t,C as n,D as r,G as i,K as a,P as o,Q as s,S as c,T as l,W as u,X as d,Z as f,ct as p,d as m,h,i as g,it as _,j as v,m as y,rt as b,s as x,st as S,u as C,v as w,w as T,x as E}from"./K2odYGWg.js";import"./ZsEnWiqm.js";import{i as D}from"./Cqw2pDMP.js";import{n as O}from"./DdXQea8f.js";import{t as k}from"./Bv8qADfv.js";import{t as A}from"./Iq6uXaYU.js";import{n as j,r as M,t as N}from"./CBJbliRg.js";import{s as P}from"./CaAz_aXy.js";import{t as F}from"./BTAYBAKv.js";var I=r(`<option> </option>`),L=r(`<div class="flex flex-col"><label for="rp" class="label mb-0 pb-0"><span class="
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
                            "></select></div>`),R=r(`<div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 w-full mt-2 mb-1"><!> <div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Código</span></label> <label class="input-group"><input id="nombre" type="text"/></label></div></div></div>`),z=r(`<div><div><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 mb-2 border-b border-gray-300 dark:border-gray-800"><div><h1>Productos</h1></div></div> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-1 md:p-2 bg-transparent rounded-lg"><div><input type="text" placeholder="Buscar por nombre ..."/> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"></path></svg></div> <div class="flex flex-wrap gap-2"><button><!> Nuevo</button> <button><!> Filtros</button></div></div> <!></div></div>`);function B(e,r){_(r,!0);let i=f(null),s=g(r,`buscar`,15,``),A=g(r,`cliente`,15,``),j=g(r,`buscarcodigo`,15,``),M=g(r,`filterUpdate`,3,()=>{}),N=g(r,`nuevo`,3,()=>{}),P=g(r,`clientes`,19,()=>[]),B=g(r,`enclientes`,3,!1);function V(){o(i).focus()}let H=f(!1);var ee={setFocus:V},U=z(),W=u(U);h(W,1,`
            rounded-xl p-1 shadow-2xl mb-1
            dark:bg-slate-900 bg-white
            px-6
        `);var G=u(W),K=u(G);h(K,1,`
                    bg-transparent
                    py-2
                `),h(u(K),1,`
                        text-3xl font-semibold 
                        dark:text-white text-gray-900
                `),p(K),p(G);var q=a(G,2),J=u(q);h(J,1,`
                  flex items-center flex-1
                  shadow-2xl
                  rounded-full p-3
                
                  bg-white dark:bg-gray-900
                  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]
                  dark:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.1)]
                `);var Y=u(J);m(Y),h(Y,1,`
                    shadow-2xl
                    dark:placeholder-gray-500 
                    dark:text-gray-100
                    placeholder-gray-600 text-gray-800
                    
                    w-full bg-transparent focus:outline-none
                    border border-transparent
                    
                `),S(2),p(J);var X=a(J,2),Z=u(X);h(Z,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        bg-white  border-gray-300  hover:bg-gray-300 dark:bg-transparent 
                        dark:hover:bg-gray-600 dark:border-gray-600 dark:text-white
                    `),k(u(Z),{size:`size-4`}),S(),p(Z),x(Z,e=>d(i,e),()=>o(i));var Q=a(Z,2);F(u(Q),{size:`size-4`}),S(),p(Q),p(X),p(q);var $=a(q,2),te=e=>{var r=R(),i=u(r),s=u(i),d=e=>{var n=L(),r=a(u(n),2);E(r,21,P,c,(e,n)=>{var r=I(),i=u(r,!0);p(r);var a={};t(()=>{T(i,o(n).nombre),a!==(a=o(n).id)&&(r.value=(r.__value=o(n).id)??``)}),l(e,r)}),p(r),p(n),v(`change`,r,function(...e){M()?.apply(this,e)}),y(r,A),l(e,n)};n(s,e=>{B()||e(d)});var f=a(s,2),g=a(u(f),2),_=u(g);m(_),p(g),p(f),p(i),p(r),t(()=>h(_,1,`input input-bordered w-full ${O.bgdark}`)),v(`input`,_,function(...e){M()?.apply(this,e)}),C(_,j),w(3,r,()=>D),l(e,r)};return n($,e=>{o(H)&&e(te)}),p(W),p(U),t(()=>{h(U,1,`container mx-auto py-1 px-4 max-w-7xl w-full ${B()?``:`xl:w-3/4`}`),h(Q,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        border-gray-300 dark:border-gray-600
                        ${o(H)?`
                                    bg-red-800 hover:bg-red-900 text-white
                                `:`
                                    bg-white    hover:bg-gray-300 dark:bg-transparent 
                                    dark:hover:bg-gray-600  dark:text-white
                                `}
                        
                    `)}),v(`input`,Y,function(...e){M()?.apply(this,e)}),C(Y,s),v(`click`,Z,function(...e){N()?.apply(this,e)}),v(`click`,Q,()=>d(H,!o(H))),l(e,U),b(ee)}e([`input`,`click`,`change`]);var V=r(`<th><div class="flex flex-row justify-between uppercase">Cliente</div></th>`),H=r(`<td> </td>`),ee=r(`<tr><td> </td><td> </td><!><td><button class="hover:cursor-pointer hover:scale-105"><!></button> <button class="hover:cursor-pointer hover:scale-105"><!></button> <button class="hover:cursor-pointer hover:scale-105"><!></button></td></tr>`),U=r(`<div class="max-h-[600px] overflow-y-auto custom-scrollbar"><table class="table table-lg w-full bg-white dark:bg-slate-900 rounded-none"><thead><tr><th><div class="flex flex-row justify-between uppercase">Nombre</div></th><th><div class="flex flex-row justify-between uppercase">Código</div></th><!><th class="text-base mx-1 px-1 text-center uppercase">Acciones</th></tr></thead><tbody></tbody></table></div> <!>`,1);function W(e,r){_(r,!0);let m=g(r,`productosrows`,19,()=>[]);g(r,`selecthash`,19,()=>({}));let y=g(r,`openViewModal`,3,e=>{}),x=g(r,`openEditModal`,3,e=>{}),C=g(r,`openDelModal`,3,e=>{});g(r,`clickTodos`,3,()=>{}),g(r,`clickFila`,3,e=>{}),g(r,`todos`,11,!1);let w=g(r,`pageSize`,15,15),D=g(r,`concliente`,3,!0);function k(){d(F,1)}let F=f(1),I=s(()=>o(F)-1),L=s(()=>m().slice(o(I)*w(),o(F)*w())),R=s(()=>m().length),z=s(()=>Math.ceil(o(R)/w())),B=`py-1`;var W=U(),G=i(W),K=u(G),q=u(K),J=u(q),Y=u(J),X=a(Y),Z=a(X),Q=e=>{var n=V();t(()=>h(n,1,`
                        ${O.tableth}   
                    `)),l(e,n)};n(Z,e=>{D()&&e(Q)}),S(),p(J),p(q);var $=a(q);E($,21,()=>o(L),c,(e,r)=>{var i=ee(),s=u(i);h(s,1,`text-base mx-1 px-4 ${B}`);var c=u(s,!0);p(s);var d=a(s);h(d,1,`text-base mx-1 px-4 ${B}`);var f=u(d,!0);p(d);var m=a(d),g=e=>{var n=H();h(n,1,`text-base mx-1 px-4 ${B}`);var i=u(n,!0);p(n),t(()=>T(i,`${o(r).expand&&o(r).expand.cliente?o(r).expand.cliente.nombre:``}`)),l(e,n)};n(m,e=>{D()&&e(g)});var _=a(m);h(_,1,`flex text-base  items-center justify-center gap-2 px-1 ${B}`);var b=u(_);M(u(b),{size:`size-6`}),p(b);var S=a(b,2);N(u(S),{size:`size-6`}),p(S);var w=a(S,2);j(u(w),{size:`size-6`}),p(w),p(_),p(i),t(e=>{T(c,e),T(f,`${o(r).codigo}`)},[()=>`${P(o(r).nombre,30)}`]),v(`click`,b,()=>y()(o(r).id)),v(`click`,S,()=>x()(o(r).id)),v(`click`,w,()=>C()(o(r).id)),l(e,i)}),p($),p(K),p(G),A(a(G,2),{get rows(){return m()},get totalPaginas(){return o(z)},onChangePageSize:k,get paginaActual(){return o(F)},set paginaActual(e){d(F,e,!0)},get pageSize(){return w()},set pageSize(e){w(e)}}),t(()=>{h(q,1,`${O.tableheader}  sticky top-0 z-5 shadow-sm`),h(Y,1,`
                        ${O.tableth}   
                    `),h(X,1,`
                        ${O.tableth}   
                    `)}),l(e,W),b()}e([`click`]);var G=r(`<div><span class="text-xs text-gray-500 dark:text-gray-400">Cliente</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div>`),K=r(`<div class="
                rounded-xl border p-4 transition-all
                border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900
            "><div class="flex items-start justify-between gap-3 mb-3"><div class="flex items-center gap-3 flex-1 min-w-0"><div class="flex-1 min-w-0"><p class="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"><span class="font-normal">Producto:</span> </p></div></div> <div class="flex items-center gap-2 shrink-0"><button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button> <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button> <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button></div></div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm"><div><span class="text-xs text-gray-500 dark:text-gray-400">Código</span> <br/> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div> <!></div></div>`),q=r(`<div class="flex flex-col gap-3"></div>`);function J(e,r){_(r,!0);let i=g(r,`productosrows`,19,()=>[]);g(r,`selecthash`,19,()=>({}));let s=g(r,`openViewModal`,3,e=>{}),d=g(r,`openEditModal`,3,e=>{}),f=g(r,`openDelModal`,3,e=>{});g(r,`clickTodos`,3,()=>{}),g(r,`clickFila`,3,e=>{}),g(r,`todos`,11,!1),g(r,`pageSize`,11,15);let m=g(r,`concliente`,3,!0);var h=q();E(h,21,i,c,(e,r)=>{var i=K(),c=u(i),h=u(c),g=u(h),_=u(g),y=a(u(_));p(_),p(g),p(h);var b=a(h,2),x=u(b);M(u(x),{size:`size-5`}),p(x);var S=a(x,2);N(u(S),{size:`size-5`}),p(S);var C=a(S,2);j(u(C),{size:`size-5`}),p(C),p(b),p(c);var w=a(c,2),E=u(w),D=a(u(E),4),O=u(D,!0);p(D),p(E);var k=a(E,2),A=e=>{var n=G(),i=a(u(n),2),s=u(i,!0);p(i),p(n),t(()=>T(s,o(r).expand?.cliente?.nombre||`-`)),l(e,n)};n(k,e=>{m()&&e(A)}),p(w),p(i),t(e=>{T(y,` ${e??``}`),T(O,o(r).codigo??`-`)},[()=>P(o(r).nombre,30)]),v(`click`,x,()=>s()(o(r).id)),v(`click`,S,()=>d()(o(r).id)),v(`click`,C,()=>f()(o(r).id)),l(e,i)}),p(h),l(e,h),b()}e([`click`]);export{W as n,B as r,J as t};
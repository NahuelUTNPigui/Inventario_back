import{A as e,B as t,C as n,D as r,G as i,K as a,P as o,Q as s,S as c,T as l,W as u,X as d,Z as f,ct as p,d as m,ft as h,h as g,i as _,it as v,j as y,m as b,n as x,q as S,rt as C,st as w,u as T,v as E,w as D,x as O}from"../chunks/K2odYGWg.js";import{t as k}from"../chunks/DdVo43Z4.js";import"../chunks/ZsEnWiqm.js";import"../chunks/BaV_c6vi.js";import{i as A,t as j}from"../chunks/Cqw2pDMP.js";import{n as M,t as N}from"../chunks/DdXQea8f.js";import{t as P}from"../chunks/Bv8qADfv.js";import{t as F}from"../chunks/Iq6uXaYU.js";import{r as I,t as L}from"../chunks/CBJbliRg.js";import{t as R}from"../chunks/BjEJ0TkE.js";import{t as z}from"../chunks/BeUyT5PI.js";import{t as B}from"../chunks/BTAYBAKv.js";var V=r(`<div class="flex flex-wrap gap-2"><button><!> Nuevo</button> <button><!> Filtros</button></div>`),H=r(`<option> </option>`),U=r(`<option> </option>`),W=r(`<div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 w-full mt-2 mb-1"><div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Fecha desde</span></label> <input id="fechadesde" type="date"/></div> <div><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Fecha hasta</span></label> <input id="fechadesde" type="date"/></div> <div class="flex flex-col"><label for="rp" class="label mb-0 pb-0"><span class="
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
                            "></select></div> <div class="flex flex-col"><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Tipo</span></label> <select class="
                                bg-white dark:bg-slate-900
                                border
                                border-gray-300 dark:border-gray-600
                                rounded-md px-3 py-1.5 text-sm
                                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700
                            "></select></div></div></div>`),G=r(`<div class="container mx-auto py-1 px-4 max-w-7xl w-full xl:w-3/4"><div><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 mb-2 border-b border-gray-300 dark:border-gray-800"><div><h1>Movimientos</h1></div></div> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-1 md:p-2 bg-transparent rounded-lg"><div><input type="text" placeholder="Buscar producto ..."/> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"></path></svg></div> <!></div> <!></div></div>`);function K(e,r){v(r,!0);let i=_(r,`buscar`,15,``),s=_(r,`cliente`,15,``),h=_(r,`fechadesde`,15,``),x=_(r,`fechahasta`,15,``),S=_(r,`tipo`,15,``),k=_(r,`clientes`,19,()=>[]),j=_(r,`tipos`,19,()=>[]),N=_(r,`filterUpdate`,3,()=>{}),F=_(r,`nuevo`,3,()=>{}),I=_(r,`connuevo`,3,!0),L=f(!1);var R=G(),z=u(R);g(z,1,`
            rounded-xl p-1 shadow-2xl mb-1
            dark:bg-slate-900 bg-white
            px-6
        `);var K=u(z),q=u(K);g(q,1,`
                    bg-transparent
                    py-2
                `),g(u(q),1,`
                        text-3xl font-semibold 
                        dark:text-white text-gray-900
                `),p(q),p(K);var J=a(K,2),Y=u(J);g(Y,1,`
                  flex items-center flex-1
                  shadow-2xl
                  rounded-full p-3
                
                  bg-white dark:bg-gray-900
                  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]
                  dark:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.1)]
                `);var X=u(Y);m(X),g(X,1,`
                    shadow-2xl
                    dark:placeholder-gray-500 
                    dark:text-gray-100
                    placeholder-gray-600 text-gray-800
                    
                    w-full bg-transparent focus:outline-none
                    border border-transparent
                    
                `),w(2),p(Y);var Z=a(Y,2),Q=e=>{var n=V(),r=u(n);g(r,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        bg-white  border-gray-300  hover:bg-gray-300 dark:bg-transparent 
                        dark:hover:bg-gray-600 dark:border-gray-600 dark:text-white
                    `),P(u(r),{size:`size-4`}),w(),p(r);var i=a(r,2);B(u(i),{size:`size-4`}),w(),p(i),p(n),t(()=>g(i,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        border-gray-300 dark:border-gray-600
                        ${o(L)?`
                                    bg-red-800 hover:bg-red-900 text-white
                                `:`
                                    bg-white    hover:bg-gray-300 dark:bg-transparent 
                                    dark:hover:bg-gray-600  dark:text-white
                                `}
                        
                    `)),y(`click`,r,function(...e){F()?.apply(this,e)}),y(`click`,i,()=>d(L,!o(L))),l(e,n)};n(Z,e=>{I()&&e(Q)}),p(J);var $=a(J,2),ee=e=>{var n=W(),r=u(n),i=u(r),d=a(u(i),2);m(d),p(i);var f=a(i,2),_=a(u(f),2);m(_),p(f);var v=a(f,2),C=a(u(v),2);O(C,21,k,c,(e,n)=>{var r=H(),i=u(r,!0);p(r);var a={};t(()=>{D(i,o(n).nombre),a!==(a=o(n).id)&&(r.value=(r.__value=o(n).id)??``)}),l(e,r)}),p(C),p(v);var w=a(v,2),P=a(u(w),2);O(P,21,j,c,(e,n)=>{var r=U(),i=u(r,!0);p(r);var a={};t(()=>{D(i,o(n).nombre),a!==(a=o(n).id)&&(r.value=(r.__value=o(n).id)??``)}),l(e,r)}),p(P),p(w),p(r),p(n),t(()=>{g(d,1,`
                                input input-bordered w-full
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 
                                focus:ring-gray-500 
                                focus:border-gray-500
                                ${M.bgdark2} 
                            `),g(_,1,`
                                input input-bordered w-full
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 
                                focus:ring-gray-500 
                                focus:border-gray-500
                                ${M.bgdark2} 
                            `)}),y(`change`,d,function(...e){N()?.apply(this,e)}),T(d,h),y(`change`,_,function(...e){N()?.apply(this,e)}),T(_,x),y(`change`,C,function(...e){N()?.apply(this,e)}),b(C,s),y(`change`,P,function(...e){N()?.apply(this,e)}),b(P,S),E(3,n,()=>A),l(e,n)};n($,e=>{o(L)&&e(ee)}),p(z),p(R),y(`input`,X,function(...e){N()?.apply(this,e)}),T(X,i),l(e,R),C()}e([`input`,`click`,`change`]);var q=r(`<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td><button class="hover:cursor-pointer hover:scale-105"><!></button> <button class="hover:cursor-pointer hover:scale-105"><!></button></td></tr>`),J=r(`<div class="max-h-[600px] overflow-y-auto custom-scrollbar"><table class="table table-lg w-full bg-white dark:bg-slate-900 rounded-none"><thead><tr><th><div class="flex flex-row justify-between uppercase">Fecha</div></th><th><div class="flex flex-row justify-between uppercase">Producto</div></th><th><div class="flex flex-row justify-between uppercase">Cantidad</div></th><th><div class="flex flex-row justify-between uppercase">Tipo</div></th><th><div class="flex flex-row justify-between uppercase">Lote</div></th><th class="text-base mx-1 px-1 text-center uppercase">Acciones</th></tr></thead><tbody></tbody></table></div> <!>`,1);function Y(e,n){v(n,!0);let r=_(n,`movimientosrows`,19,()=>[]);_(n,`selecthash`,19,()=>({}));let m=_(n,`openViewModal`,3,e=>{}),h=_(n,`openEditModal`,3,e=>{});_(n,`openDelModal`,3,e=>{}),_(n,`clickTodos`,3,()=>{}),_(n,`clickFila`,3,e=>{}),_(n,`todos`,11,!1);let b=_(n,`pageSize`,15,15);function x(){d(S,1)}let S=f(1),T=s(()=>o(S)-1),E=s(()=>r().slice(o(T)*b(),o(S)*b())),k=s(()=>r().length),A=s(()=>Math.ceil(o(k)/b())),j=`py-1`;var N=J(),P=i(N),R=u(P),z=u(R),B=u(z),V=u(B),H=a(V),U=a(H),W=a(U),G=a(W);w(),p(B),p(z);var K=a(z);O(K,21,()=>o(E),c,(e,n)=>{var r=q(),i=u(r);g(i,1,`text-base mx-1 px-4 ${j}`);var s=u(i,!0);p(i);var c=a(i);g(c,1,`text-base mx-1 px-4 ${j}`);var d=u(c,!0);p(c);var f=a(c);g(f,1,`text-base mx-1 px-4 ${j}`);var _=u(f,!0);p(f);var v=a(f);g(v,1,`text-base mx-1 px-4 ${j}`);var b=u(v,!0);p(v);var x=a(v);g(x,1,`text-base mx-1 px-4 ${j}`);var S=u(x,!0);p(x);var C=a(x);g(C,1,`flex text-base  items-center justify-center gap-2 px-1 ${j}`);var w=u(C);I(u(w),{size:`size-6`}),p(w);var T=a(w,2);L(u(T),{size:`size-6`}),p(T),p(C),p(r),t(e=>{D(s,e),D(d,o(n).expand.producto.nombre),D(_,`${o(n).cantidad}`),D(b,`${o(n).expand.movimiento.ingreso==0?`Ingreso`:`Egreso`}`),D(S,o(n).expand.lote.codigo||``)},[()=>`${o(n).expand.movimiento?new Date(o(n).expand.movimiento.fecha).toLocaleDateString():``}`]),y(`click`,w,()=>m()(o(n).movimiento)),y(`click`,T,()=>h()(o(n).movimiento)),l(e,r)}),p(K),p(R),p(P),F(a(P,2),{get rows(){return r()},get totalPaginas(){return o(A)},onChangePageSize:x,get paginaActual(){return o(S)},set paginaActual(e){d(S,e,!0)},get pageSize(){return b()},set pageSize(e){b(e)}}),t(()=>{g(z,1,`${M.tableheader}  sticky top-0 z-5 shadow-sm`),g(V,1,`
                        ${M.tableth}   
                    `),g(H,1,`
                        ${M.tableth}   
                    `),g(U,1,`
                        ${M.tableth}   
                    `),g(W,1,`
                        ${M.tableth}   
                    `),g(G,1,`
                        ${M.tableth}   
                    `)}),l(e,N),C()}e([`click`]);var X=h(z()),Z=r(`<div class="
                rounded-xl border p-4 transition-all
                border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900
            "><div class="flex items-start justify-between gap-3 mb-3"><div class="flex items-center gap-3 flex-1 min-w-0"><div class="flex-1 min-w-0"><p class="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"><span class="font-normal">Producto:</span> </p></div></div> <div class="flex items-center gap-2 shrink-0"><button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button> <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button></div></div> <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm"><div><span class="text-xs text-gray-500 dark:text-gray-400">Fecha</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Tipo</span> <p class="font-medium"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Lote</span> <p class="font-medium"> </p></div></div></div>`),Q=r(`<div class="flex flex-col gap-3"></div>`);function $(e,n){v(n,!0);let r=_(n,`movimientosrows`,19,()=>[]);_(n,`selecthash`,19,()=>({}));let i=_(n,`openViewModal`,3,e=>{}),s=_(n,`openEditModal`,3,e=>{});_(n,`openDelModal`,3,e=>{}),_(n,`clickTodos`,3,()=>{}),_(n,`clickFila`,3,e=>{}),_(n,`todos`,11,!1),_(n,`pageSize`,11,15);var d=Q();O(d,21,r,c,(e,n)=>{var r=Z(),c=u(r),d=u(c),f=u(d),m=u(f),h=a(u(m));p(m),p(f),p(d);var g=a(d,2),_=u(g);I(u(_),{size:`size-5`}),p(_);var v=a(_,2);L(u(v),{size:`size-5`}),p(v),p(g),p(c);var b=a(c,2),x=u(b),S=a(u(x),2),C=u(S,!0);p(S),p(x);var w=a(x,2),T=a(u(w),2),E=u(T,!0);p(T),p(w);var O=a(w,2),k=a(u(O),2),A=u(k,!0);p(k),p(O),p(b),p(r),t(e=>{D(h,` ${o(n).expand.producto.nombre??``}`),D(C,e),D(E,`${o(n).expand.movimiento.ingreso==0?`Ingreso`:`Egreso`}`),D(A,o(n).expand.lote.codigo)},[()=>`${o(n).expand.movimiento?new Date(o(n).expand.movimiento.fecha).toLocaleDateString():``}`]),y(`click`,_,()=>i()(o(n).id)),y(`click`,v,()=>s()(o(n).id)),l(e,r)}),p(d),l(e,d),C()}e([`click`]);var ee=r(`<!> <div><div><!></div></div> <div><!></div>`,1);function te(e,t){v(t,!0);let n=new j(`https://inventario.servidornahuel.store`),r=f(``),s=f(S([])),c=[{id:`todos`,nombre:`Todos`},{id:`0`,nombre:`Ingreso`},{id:`1`,nombre:`Egreso`}],m=f(``),h=f(`todos`),_=f(``),y=f(``),b=f(S([])),w=f(S([])),T={id:``,codigo:``,fecha:``,observacion:``,ingreso:0,lote:``,edit:!1,cliente:``},E=f(S(T)),D=R(`detallemovimiento`,T);function O(){d(w,o(b),!0),o(r)!=``&&d(w,o(w).filter(e=>e.expand&&e.expand.producto&&e.expand.producto.nombre.toLocaleLowerCase().includes(o(r).toLocaleLowerCase())),!0),o(_)!=``&&d(w,o(w).filter(e=>new Date(e.expand.movimiento.fecha)>=new Date(o(_))),!0),o(y)!=``&&d(w,o(w).filter(e=>new Date(e.expand.movimiento.fecha)<new Date(o(y))),!0),o(m)!=``&&d(w,o(w).filter(e=>e.expand.producto.cliente==o(m)),!0),o(h)!=`todos`&&d(w,o(w).filter(e=>e.expand.movimiento.ingreso==o(h)),!0)}function A(){D.save(T),k(`/movimientos/0`)}function M(e){let t=o(b).findIndex(t=>t.movimiento==e);if(t!=-1){let e=o(b)[t].expand.movimiento;d(E,{id:e.id,codigo:e.codigo,fecha:e.fecha.length>0?e.fecha.split(` `)[0]:``,observacion:e.observacion,ingreso:e.ingreso,edit:!0},!0),D.save(o(E)),k(`/movimientos/`+e.id)}}function P(e){let t=o(b).findIndex(t=>t.movimiento==e);if(t!=-1){let e=o(b)[t].expand.movimiento;d(E,{id:e.id,codigo:e.codigo,fecha:e.fecha.length>0?e.fecha.split(` `)[0]:``,observacion:e.observacion,ingreso:e.ingreso,edit:!1},!0),D.save(o(E)),k(`/movimientos/`+e.id)}}async function F(e){try{let t=await n.collection(`detallemovimientos`).getFullList({filter:`movimiento='${e}'`});for(let e=0;e<t.length;e++){let r=t[e];await n.collection(`detallemovimientos`).delete(r.id)}await n.collection(`movimientos`).delete(e),await L(),O(),X.default.fire(`Éxito eliminar`,`Se logró eliminar el movimiento`,`success`)}catch{X.default.fire(`Error eliminar`,`No se logró eliminar el movimiento`,`error`)}}function I(e){X.default.fire({title:`Eliminar movimiento`,text:`¿Seguro que deseas eliminar el movimiento?`,icon:`warning`,showCancelButton:!0,confirmButtonText:`Si`,cancelButtonText:`No`}).then(async t=>{t.value&&await F(e)})}async function L(){d(b,(await n.collection(`detallemovimientos`).getFullList({expand:`movimiento,producto,lote`,filter:`movimiento.active = true`,sort:`-movimiento.fecha`})).map(e=>({...e})),!0)}async function z(){d(s,[],!0);let e=await n.collection(`clientes`).getFullList({sort:`nombre`});d(s,[{id:``,nombre:`Todos`}].concat(e.map(e=>({...e}))),!0)}x(async()=>{await z(),await L(),O()}),N(e,{children:(e,t)=>{var n=ee(),f=i(n);K(f,{filterUpdate:O,nuevo:A,get clientes(){return o(s)},get tipos(){return c},get buscar(){return o(r)},set buscar(e){d(r,e,!0)},get fechadesde(){return o(_)},set fechadesde(e){d(_,e,!0)},get fechahasta(){return o(y)},set fechahasta(e){d(y,e,!0)},get tipo(){return o(h)},set tipo(e){d(h,e,!0)},get cliente(){return o(m)},set cliente(e){d(m,e,!0)}});var v=a(f,2);g(v,1,`
                hidden w-full xl:w-3/4 md:grid
                mx-auto py-0 my-0 px-4 max-w-7xl  
            `);var b=u(v);g(b,1,`
                    py-0 my-0
                    overflow-hidden rounded-xl
                    border border-gray-300 dark:border-gray-700
                `),Y(u(b),{get movimientosrows(){return o(w)},openDelModal:I,openViewModal:P,openEditModal:M}),p(b),p(v);var x=a(v,2);g(x,1,`
            md:hidden
            w-full grid grid-cols-1
            mx-auto py-3 px-4 max-w-7xl
        `),$(u(x),{get movimientosrows(){return o(w)},openDelModal:I,openViewModal:P,openEditModal:M}),p(x),l(e,n)},$$slots:{default:!0}}),C()}export{te as component};
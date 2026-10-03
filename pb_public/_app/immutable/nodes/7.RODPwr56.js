import{A as e,B as t,C as n,D as r,G as i,K as a,P as o,Q as s,S as c,T as l,W as u,X as d,Z as f,ct as p,d as m,ft as h,h as g,i as _,it as v,j as y,m as b,n as x,q as S,rt as C,s as w,st as T,u as E,v as D,w as O,x as k}from"../chunks/K2odYGWg.js";import{t as A}from"../chunks/DdVo43Z4.js";import"../chunks/ZsEnWiqm.js";import"../chunks/BaV_c6vi.js";import{i as j,t as M}from"../chunks/Cqw2pDMP.js";import{n as N,t as P}from"../chunks/DdXQea8f.js";import{t as F}from"../chunks/Bv8qADfv.js";import{t as I}from"../chunks/Iq6uXaYU.js";import{n as L,r as R,t as z}from"../chunks/CBJbliRg.js";import{t as B}from"../chunks/BjEJ0TkE.js";import{t as V}from"../chunks/BeUyT5PI.js";import{t as H}from"../chunks/BTAYBAKv.js";var U=h(V()),W=r(`<option> </option>`),G=r(`<div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 w-full mt-2 mb-1"><div><label for="rp" class="label mb-0 pb-0"><span class="
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
                                ">Responsable</span></label> <select class="
                                bg-white dark:bg-slate-900
                                border
                                border-gray-300 dark:border-gray-600
                                rounded-md px-3 py-1.5 text-sm
                                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700
                            "></select></div> <div class="hidden"><label for="rp" class="label mb-0 pb-0"><span class="
                                    label-text tracking-wide
                                    text-md uppercase
                                    font-semibold dark:text-gray-400
                                    text-gray-500
                                ">Stock</span></label> <label class="input-group"><input id="nombre" type="text"/></label></div></div></div>`),ee=r(`<div><div><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 mb-2 border-b border-gray-300 dark:border-gray-800"><div><h1>Controles</h1></div></div> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-1 md:p-2 bg-transparent rounded-lg"><div><input type="text" placeholder="Buscar por producto  ..."/> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"></path></svg></div> <div class="flex flex-wrap gap-2"><button><!> Nuevo</button> <button><!> Multiples</button> <button><!> Filtros</button></div></div> <!></div></div>`);function K(e,r){v(r,!0);let i=f(null),s=_(r,`buscar`,15,``),h=_(r,`responsable`,15,``),x=_(r,`fechadesde`,15,``),S=_(r,`fechahasta`,15,``),A=_(r,`buscarcodigo`,15,``),M=_(r,`filterUpdate`,3,()=>{}),P=_(r,`nuevo`,3,()=>{}),I=_(r,`openNewMultiple`,3,()=>{}),L=_(r,`usuarios`,19,()=>[]);function R(){o(i).focus()}let z=f(!1);var B={setFocus:R},V=ee();g(V,1,`container mx-auto py-1 px-4 max-w-7xl w-full xl:w-3/4`);var U=u(V);g(U,1,`
            rounded-xl p-1 shadow-2xl mb-1
            dark:bg-slate-900 bg-white
            px-6
        `);var K=u(U),q=u(K);g(q,1,`
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
                    
                `),T(2),p(Y);var te=a(Y,2),Z=u(te);g(Z,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        bg-white  border-gray-300  hover:bg-gray-300 dark:bg-transparent 
                        dark:hover:bg-gray-600 dark:border-gray-600 dark:text-white
                    `),F(u(Z),{size:`size-4`}),T(),p(Z),w(Z,e=>d(i,e),()=>o(i));var Q=a(Z,2);g(Q,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        bg-white  border-gray-300  hover:bg-gray-300 dark:bg-transparent 
                        dark:hover:bg-gray-600 dark:border-gray-600 dark:text-white
                    `),F(u(Q),{size:`size-4`}),T(),p(Q);var $=a(Q,2);H(u($),{size:`size-4`}),T(),p($),p(te),p(J);var ne=a(J,2),re=e=>{var n=G(),r=u(n),i=u(r),s=a(u(i),2);m(s),p(i);var d=a(i,2),f=a(u(d),2);m(f),p(d);var _=a(d,2),v=a(u(_),2);k(v,21,L,c,(e,n)=>{var r=W(),i=u(r,!0);p(r);var a={};t(()=>{O(i,o(n).apellido),a!==(a=o(n).id)&&(r.value=(r.__value=o(n).id)??``)}),l(e,r)}),p(v),p(_);var C=a(_,2),w=a(u(C),2),T=u(w);m(T),p(w),p(C),p(r),p(n),t(()=>{g(s,1,`
                                input input-bordered w-full
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 
                                focus:ring-gray-500 
                                focus:border-gray-500
                                ${N.bgdark2} 
                            `),g(f,1,`
                                input input-bordered w-full
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 
                                focus:ring-gray-500 
                                focus:border-gray-500
                                ${N.bgdark2} 
                            `),g(T,1,`input input-bordered w-full ${N.bgdark}`)}),y(`change`,s,function(...e){M()?.apply(this,e)}),E(s,x),y(`change`,f,function(...e){M()?.apply(this,e)}),E(f,S),y(`change`,v,function(...e){M()?.apply(this,e)}),b(v,h),y(`input`,T,function(...e){M()?.apply(this,e)}),E(T,A),D(3,n,()=>j),l(e,n)};return n(ne,e=>{o(z)&&e(re)}),p(U),p(V),t(()=>g($,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        border-gray-300 dark:border-gray-600
                        ${o(z)?`
                                    bg-red-800 hover:bg-red-900 text-white
                                `:`
                                    bg-white    hover:bg-gray-300 dark:bg-transparent 
                                    dark:hover:bg-gray-600  dark:text-white
                                `}
                        
                    `)),y(`input`,X,function(...e){M()?.apply(this,e)}),E(X,s),y(`click`,Z,function(...e){P()?.apply(this,e)}),y(`click`,Q,function(...e){I()?.apply(this,e)}),y(`click`,$,()=>d(z,!o(z))),l(e,V),C(B)}e([`input`,`click`,`change`]);var q=r(`<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td><button class="hover:cursor-pointer hover:scale-105"><!></button> <button class="hover:cursor-pointer hover:scale-105"><!></button> <button class="hover:cursor-pointer hover:scale-105"><!></button></td></tr>`),J=r(`<div class="max-h-[600px] overflow-y-auto custom-scrollbar"><table class="table table-lg w-full bg-white dark:bg-slate-900 rounded-none"><thead><tr><th><div class="flex flex-row justify-between uppercase">Fecha</div></th><th><div class="flex flex-row justify-between uppercase">Producto</div></th><th><div class="flex flex-row justify-between uppercase">Unidad</div></th><th><div class="flex flex-row justify-between uppercase">Cantidad</div></th><th><div class="flex flex-row justify-between uppercase">Lote</div></th><th><div class="flex flex-row justify-between uppercase">Responsable</div></th><th class="text-base mx-1 px-1 text-center uppercase">Acciones</th></tr></thead><tbody></tbody></table></div> <!>`,1);function Y(e,n){v(n,!0);let r=_(n,`controlesrows`,19,()=>[]),m=_(n,`openViewModal`,3,e=>{}),h=_(n,`openEditModal`,3,e=>{}),b=_(n,`openDelModal`,3,e=>{}),x=_(n,`pageSize`,15,15);function S(){d(w,1)}let w=f(1),E=s(()=>o(w)-1),D=s(()=>r().slice(o(E)*x(),o(w)*x())),A=s(()=>r().length),j=s(()=>Math.ceil(o(A)/x())),M=`py-1`;var P=J(),F=i(P),B=u(F),V=u(B),H=u(V),U=u(H),W=a(U),G=a(W),ee=a(G),K=a(ee),Y=a(K);T(),p(H),p(V);var X=a(V);k(X,21,()=>o(D),c,(e,n)=>{var r=q(),i=u(r);g(i,1,`text-base mx-1 px-4 ${M}`);var s=u(i,!0);p(i);var c=a(i);g(c,1,`text-base mx-1 px-4 ${M}`);var d=u(c,!0);p(c);var f=a(c);g(f,1,`text-base mx-1 px-4 ${M}`);var _=u(f,!0);p(f);var v=a(f);g(v,1,`text-base mx-1 px-4 ${M}`);var x=u(v,!0);p(v);var S=a(v);g(S,1,`hidden text-base mx-1 px-4 ${M}`);var C=u(S,!0);p(S);var w=a(S);g(w,1,`text-base mx-1 px-4 ${M}`);var T=u(w,!0);p(w);var E=a(w);g(E,1,`flex text-base  items-center justify-center gap-2 px-1 ${M}`);var D=u(E);R(u(D),{size:`size-6`}),p(D);var k=a(D,2);z(u(k),{size:`size-6`}),p(k);var A=a(k,2);L(u(A),{size:`size-6`}),p(A),p(E),p(r),t(e=>{O(s,e),O(d,o(n).expand.producto.nombre||``),O(_,o(n).expand.unidad.nombre||``),O(x,`${o(n).cantidad}`),O(C,o(n).expand.lote?o(n).expand.lote.codigo:``),O(T,o(n).expand.responsable.correo)},[()=>`${new Date(o(n).fecha).toLocaleDateString()}`]),y(`click`,D,()=>m()(o(n).id)),y(`click`,k,()=>h()(o(n).id)),y(`click`,A,()=>b()(o(n).id)),l(e,r)}),p(X),p(B),p(F),I(a(F,2),{get rows(){return r()},get totalPaginas(){return o(j)},onChangePageSize:S,get paginaActual(){return o(w)},set paginaActual(e){d(w,e,!0)},get pageSize(){return x()},set pageSize(e){x(e)}}),t(()=>{g(V,1,`${N.tableheader}  sticky top-0 z-5 shadow-sm`),g(U,1,`
                        ${N.tableth}   
                    `),g(W,1,`
                        ${N.tableth}   
                    `),g(G,1,`
                        ${N.tableth}   
                    `),g(ee,1,`
                        ${N.tableth}   
                    `),g(K,1,`
                        hidden
                        ${N.tableth}   
                    `),g(Y,1,`
                        ${N.tableth}   
                    `)}),l(e,P),C()}e([`click`]);var X=r(`<div class="
                rounded-xl border p-4 transition-all
                border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900
            "><div class="flex items-start justify-between gap-3 mb-3"><div class="flex items-center gap-3 flex-1 min-w-0"><div class="flex-1 min-w-0"><p class="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"><span class="font-normal">Fecha:</span> </p></div></div> <div class="flex items-center gap-2 shrink-0"><button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button> <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button> <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button></div></div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm"><div><span class="text-xs text-gray-500 dark:text-gray-400">Producto</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Unidad</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Cantidad</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div class="hidden"><span class="text-xs text-gray-500 dark:text-gray-400">Lote</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Responsable</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"> </p></div></div></div>`),te=r(`<div class="flex flex-col gap-3"></div>`);function Z(e,n){v(n,!0);let r=_(n,`controlesrows`,19,()=>[]),i=_(n,`openViewModal`,3,e=>{}),s=_(n,`openEditModal`,3,e=>{}),d=_(n,`openDelModal`,3,e=>{});var f=te();k(f,21,r,c,(e,n)=>{var r=X(),c=u(r),f=u(c),m=u(f),h=u(m),g=a(u(h));p(h),p(m),p(f);var _=a(f,2),v=u(_);R(u(v),{size:`size-5`}),p(v);var b=a(v,2);z(u(b),{size:`size-5`}),p(b);var x=a(b,2);L(u(x),{size:`size-5`}),p(x),p(_),p(c);var S=a(c,2),C=u(S),w=a(u(C),2),T=u(w,!0);p(w),p(C);var E=a(C,2),D=a(u(E),2),k=u(D,!0);p(D),p(E);var A=a(E,2),j=a(u(A),2),M=u(j,!0);p(j),p(A);var N=a(A,2),P=a(u(N),2),F=u(P,!0);p(P),p(N);var I=a(N,2),B=a(u(I),2),V=u(B,!0);p(B),p(I),p(S),p(r),t(e=>{O(g,` ${e??``}`),O(T,o(n).expand?.producto?.nombre||`-`),O(k,o(n).expand?.unidad?.nombre||`-`),O(M,o(n).cantidad??`-`),O(F,o(n).expand?.lote?.codigo||`-`),O(V,o(n).expand?.responsable?.correo||`-`)},[()=>o(n).fecha?new Date(o(n).fecha).toLocaleDateString():`-`]),y(`click`,v,()=>i()(o(n).id)),y(`click`,b,()=>s()(o(n).id)),y(`click`,x,()=>d()(o(n).id)),l(e,r)}),p(f),l(e,f),C()}e([`click`]);var Q=r(`<!> <div><div><!></div></div> <div><!></div>`,1);function $(e,t){v(t,!0);let n=new M(`https://inventario.servidornahuel.store`),r=f(S([])),s=f(S([])),c=f(S([])),m=f(``),h=f(``),_=f(``),y=f(``),b=f(``),w={id:``,fecha:``,producto:``,unidad:``,cantidad:0,lote:``,responsable:``,cliente:``,edit:!1},T=f(S(w)),E=B(`detallecontrol`,w);function D(){E.save(o(T)),A(`/controles/0`)}function O(){A(`/controles/multiples`)}function k(e){let t=o(s).findIndex(t=>t.id==e);if(t!=-1){let e=o(s)[t];d(T,{id:e.id,fecha:e.fecha.split(` `)[0],producto:e.producto,unidad:e.unidad,cantidad:e.cantidad,lote:e.lote,responsable:e.expand.responsable.correo||``,cliente:e.expand.producto.cliente||``,edit:!0},!0),E.save(o(T)),A(`/controles/`+e.id)}}function j(e){let t=o(s).findIndex(t=>t.id==e);if(t!=-1){let e=o(s)[t];d(T,{id:e.id,fecha:e.fecha.split(` `)[0],producto:e.producto,unidad:e.unidad,cantidad:e.cantidad,lote:e.lote,responsable:e.expand.responsable.correo||``,cliente:e.expand.producto.cliente||``,edit:!1},!0),E.save(o(T)),A(`/controles/`+e.id)}}async function N(e){let t={active:!1};try{await n.collection(`controles`).update(e,t),await L(),I(),U.default.fire(`Éxito eliminar`,`Se logró eliminar el control`,`success`)}catch{U.default.fire(`Error eliminar`,`No se logró eliminar el control`,`error`)}}function F(e){U.default.fire({title:`Eliminar control`,text:`¿Seguro que deseas eliminar el control?`,icon:`warning`,showCancelButton:!0,confirmButtonText:`Si`,cancelButtonText:`No`}).then(async t=>{t.value&&(await N(e),U.default.fire(`Éxito eliminar`,`Se pudo eliminar el control con éxito`,`success`))})}function I(){d(c,o(s),!0),o(m)!=``&&d(c,o(c).filter(e=>e.expand&&e.expand.producto?e.expand.producto.nombre.toLocaleLowerCase().includes(o(m).toLocaleLowerCase()):``),!0),o(_)!=``&&d(c,o(c).filter(e=>e.responsable==o(_)),!0),o(y)!=``&&d(c,o(c).filter(e=>new Date(e.fecha)>=new Date(o(y))),!0),o(b)!=``&&d(c,o(c).filter(e=>new Date(e.fecha)<new Date(o(b))),!0)}async function L(){d(s,(await n.collection(`controles`).getFullList({filter:`active = true`,expand:`producto,responsable,unidad`,sort:`-fecha`})).map(e=>({...e})),!0)}async function R(){d(r,[],!0);let e=await n.collection(`users`).getFullList({sort:`apellido`});d(r,[{id:``,nombre:`Todos`}].concat(e.map(e=>({...e}))),!0)}x(async()=>{await L(),await R(),I()}),P(e,{children:(e,t)=>{var n=Q(),s=i(n);K(s,{filterUpdate:I,nuevo:D,openNewMultiple:O,get usuarios(){return o(r)},get buscar(){return o(m)},set buscar(e){d(m,e,!0)},get buscarcodigo(){return o(h)},set buscarcodigo(e){d(h,e,!0)},get fechadesde(){return o(y)},set fechadesde(e){d(y,e,!0)},get fechahasta(){return o(b)},set fechahasta(e){d(b,e,!0)},get responsable(){return o(_)},set responsable(e){d(_,e,!0)}});var f=a(s,2);g(f,1,`
                hidden w-full xl:w-3/4 md:grid
                mx-auto py-0 my-0 px-4 max-w-7xl  
            `);var v=u(f);g(v,1,`
                    py-0 my-0
                    overflow-hidden rounded-xl
                    border border-gray-300 dark:border-gray-700
                `),Y(u(v),{get controlesrows(){return o(c)},openDelModal:F,openViewModal:j,openEditModal:k}),p(v),p(f);var x=a(f,2);g(x,1,`
            md:hidden
            w-full grid grid-cols-1
            mx-auto py-3 px-4 max-w-7xl
        `),Z(u(x),{get controlesrows(){return o(c)},openDelModal:F,openViewModal:j,openEditModal:k}),p(x),l(e,n)},$$slots:{default:!0}}),C()}export{$ as component};
import{A as e,B as t,C as n,D as r,G as i,K as a,P as o,Q as s,S as c,T as l,W as u,X as d,Z as f,ct as p,d as m,ft as h,h as g,i as _,it as v,j as y,m as b,n as x,q as S,rt as C,st as w,u as T,w as E,x as D}from"../chunks/K2odYGWg.js";import{t as O}from"../chunks/DdVo43Z4.js";import"../chunks/ZsEnWiqm.js";import"../chunks/BaV_c6vi.js";import{t as k}from"../chunks/Cqw2pDMP.js";import{n as A,t as j}from"../chunks/DdXQea8f.js";import{t as M}from"../chunks/Bv8qADfv.js";import{t as N}from"../chunks/Iq6uXaYU.js";import{r as P}from"../chunks/CBJbliRg.js";import{a as F,n as I,s as L,t as R}from"../chunks/CaAz_aXy.js";import{t as z}from"../chunks/BjEJ0TkE.js";import{t as B}from"../chunks/BeUyT5PI.js";import"../chunks/CtL0Ipag.js";import{t as V}from"../chunks/BfTtsaEM.js";r(`<button class="text-left hover:cursor-pointer hover:-translate-y-1 duration-100"><div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-2 transition-colors duration-200"><h3> </h3> <p class="
                text-3xl font-bold 
                text-red-900 dark:text-red-400
            "> </p></div></button>`),e([`click`]);var H=h(B()),U=r(`<option> </option>`),W=r(`<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-1 md:p-2 bg-transparent rounded-lg"><div><input type="text" placeholder="Buscar stock ..."/> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"></path></svg></div></div> <div class="flex flex-wrap gap-2"><button><!> Nuevo producto</button> <button><!> Nuevo ingreso</button></div>`,1),G=r(`<div class="container mx-auto py-1 px-4 max-w-7xl w-full xl:w-3/4"><div><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 mb-2 border-b border-gray-300 dark:border-gray-800"><div><h1> </h1></div> <div class="flex flex-col gap-2"><label for="cliente" class="label mb-0 pb-0"><span class="
                            label-text tracking-wide
                            text-md uppercase
                            font-semibold dark:text-gray-400
                            text-gray-500
                        ">Cliente</span></label> <select class="
                        border
                        bg-white dark:bg-slate-900
                        border-gray-300 dark:border-gray-600
                        rounded-md px-3 py-1.5 text-sm
                        focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700
                    "><option>Elegir cliente</option><!></select></div></div> <!></div></div>`);function ee(e,r){v(r,!0);let s=_(r,`nivel`,3,0),d=_(r,`buscar`,15,``),f=_(r,`cliente`,15,``),h=_(r,`clientes`,19,()=>[]),x=_(r,`filterUpdate`,3,()=>{}),S=_(r,`seleccionarCliente`,3,()=>{}),O=_(r,`nuevoProducto`,3,()=>{}),k=_(r,`nuevoIngreso`,3,()=>{});var A=G(),j=u(A);g(j,1,`
            rounded-xl p-1 shadow-2xl mb-1
            dark:bg-slate-900 bg-white
            px-6
        `);var N=u(j),P=u(N);g(P,1,`
                    bg-transparent
                    py-2
                `);var F=u(P);g(F,1,`
                        text-3xl font-semibold 
                        dark:text-white text-gray-900
                `);var I=u(F);p(F),p(P);var L=a(P,2),R=a(u(L),2),z=u(R);z.value=z.__value=``,D(a(z),17,h,c,(e,n)=>{var r=U(),i=u(r,!0);p(r);var a={};t(()=>{E(i,o(n).nombre),a!==(a=o(n).id)&&(r.value=(r.__value=o(n).id)??``)}),l(e,r)}),p(R),p(L),p(N);var B=a(N,2),V=e=>{var t=W(),n=i(t),r=u(n);g(r,1,`
                  flex items-center flex-1
                  shadow-2xl
                  rounded-full p-3
                
                  bg-white dark:bg-gray-900
                  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]
                  dark:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.1)]
                `);var o=u(r);m(o),g(o,1,`
                    shadow-2xl
                    dark:placeholder-gray-500 
                    dark:text-gray-100
                    placeholder-gray-600 text-gray-800
                    
                    w-full bg-transparent focus:outline-none
                    border border-transparent
                    
                `),w(2),p(r),p(n);var s=a(n,2),c=u(s);g(c,1,`
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        bg-white  border-gray-300  hover:bg-gray-300 dark:bg-transparent 
                        dark:hover:bg-gray-600 dark:border-gray-600 dark:text-white
                    `),M(u(c),{size:`size-4`}),w(),p(c);var f=a(c,2);g(f,1,`
                        hidden
                        hover:cursor-pointer
                        border rounded-full px-3 py-1 text-md flex items-center gap-1
                        bg-white  border-gray-300  hover:bg-gray-300 dark:bg-transparent 
                        dark:hover:bg-gray-600 dark:border-gray-600 dark:text-white
                    `),M(u(f),{size:`size-4`}),w(),p(f),p(s),y(`input`,o,function(...e){x()?.apply(this,e)}),T(o,d),y(`click`,c,function(...e){O()?.apply(this,e)}),y(`click`,f,function(...e){k()?.apply(this,e)}),l(e,t)};n(B,e=>{f().length>0&&e(V)}),p(j),p(A),t(()=>E(I,`Stock - ${s()>0?`Operaciones`:`Depósito`}`)),y(`change`,R,function(...e){S()?.apply(this,e)}),b(R,f),l(e,A),C()}e([`change`,`input`,`click`]);var K=r(`<tr><td> </td><td> </td><td> </td><td> </td><td></td><td><button class="hover:cursor-pointer hover:scale-105"><!></button></td></tr>`),q=r(`<div class="max-h-[600px] overflow-y-auto custom-scrollbar"><table class="table table-lg w-full bg-white dark:bg-slate-900 rounded-none"><thead><tr><th><div class="flex flex-row justify-between uppercase">Producto</div></th><th><div class="flex flex-row justify-between uppercase">Cantidad</div></th><th><div class="flex flex-row justify-between uppercase">Ingreso</div></th><th><div class="flex flex-row justify-between uppercase">Vencimiento</div></th><th><div class=" flex flex-row justify-between uppercase">Destinatario</div></th><th class="text-base mx-1 px-1 text-center uppercase">Acciones</th></tr></thead><tbody></tbody></table></div> <!>`,1);function te(e,n){v(n,!0);let r=_(n,`lotesrows`,19,()=>[]),m=_(n,`openViewModal`,3,e=>{}),h=_(n,`pageSize`,15,15);function b(){d(x,1)}let x=f(1),S=s(()=>o(x)-1),T=s(()=>r().slice(o(S)*h(),o(x)*h())),O=s(()=>r().length),k=s(()=>Math.ceil(o(O)/h())),j=`py-1`;var M=q(),F=i(M),I=u(F),R=u(I),z=u(R),B=u(z),V=a(B),H=a(V),U=a(H),W=a(U);w(),p(z),p(R);var G=a(R);D(G,21,()=>o(T),c,(e,n)=>{var r=K(),i=u(r);g(i,1,`text-base mx-1 px-4 ${j}`);var s=u(i,!0);p(i);var c=a(i);g(c,1,`text-base mx-1 px-4 ${j}`);var d=u(c,!0);p(c);var f=a(c);g(f,1,`text-base mx-1 px-4 ${j}`);var h=u(f,!0);p(f);var _=a(f);g(_,1,`text-base mx-1 px-4 ${j}`);var v=u(_,!0);p(_);var b=a(_);g(b,1,`hidden text-base mx-1 px-4 ${j}`),b.textContent=`Destinatario`;var x=a(b);g(x,1,`flex text-base  items-center justify-center gap-2 px-1 ${j}`);var S=u(x);P(u(S),{size:`size-6`}),p(S),p(x),p(r),t((e,t,r)=>{E(s,e),E(d,`${o(n).cantidad}`),E(h,t),E(v,r)},[()=>`${L(o(n).expand?o(n).expand.producto.nombre:``,30)}`,()=>`${o(n).fechaingreso.length>0?new Date(o(n).fechaingreso).toLocaleDateString():``}`,()=>`${o(n).fechavencimiento.length>0?new Date(o(n).fechavencimiento).toLocaleDateString():``}`]),y(`click`,S,()=>m()(o(n).id)),l(e,r)}),p(G),p(I),p(F),N(a(F,2),{get rows(){return r()},get totalPaginas(){return o(k)},onChangePageSize:b,get paginaActual(){return o(x)},set paginaActual(e){d(x,e,!0)},get pageSize(){return h()},set pageSize(e){h(e)}}),t(()=>{g(R,1,`${A.tableheader}  sticky top-0 z-5 shadow-sm`),g(B,1,`
                        ${A.tableth}   
                    `),g(V,1,`
                        ${A.tableth}   
                    `),g(H,1,`
                        ${A.tableth}   
                    `),g(U,1,`
                        ${A.tableth}   
                    `),g(W,1,`
                    hidden
                        ${A.tableth}   
                    `)}),l(e,M),C()}e([`click`]);var J=r(`<div class="
                rounded-xl border p-4 transition-all
                border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900
            "><div class="flex items-start justify-between gap-3 mb-3"><div class="flex items-center gap-3 flex-1 min-w-0"><div class="flex-1 min-w-0"><p class="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"><span class="font-normal">Producto:</span> </p></div></div> <div class="flex items-center gap-2 shrink-0"><button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hover:cursor-pointer hover:scale-105"><!></button></div></div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm"><div><span class="text-xs text-gray-500 dark:text-gray-400">Cantidad</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Ingreso</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div><span class="text-xs text-gray-500 dark:text-gray-400">Vencimiento</span> <p class="text-gray-900 dark:text-gray-100 font-medium"> </p></div> <div class="hidden"><span class="text-xs text-gray-500 dark:text-gray-400">Destinatario</span> <p class="text-gray-900 dark:text-gray-100 font-medium truncate"></p></div></div></div>`),Y=r(`<div class="flex flex-col gap-3"></div>`);function ne(e,n){v(n,!0);let r=_(n,`lotesrows`,19,()=>[]),i=_(n,`openViewModal`,3,e=>{});var s=Y();D(s,21,r,c,(e,n)=>{var r=J(),s=u(r),c=u(s),d=u(c),f=u(d),m=a(u(f));p(f),p(d),p(c);var h=a(c,2),g=u(h);P(u(g),{size:`size-5`}),p(g),p(h),p(s);var _=a(s,2),v=u(_),b=a(u(v),2),x=u(b,!0);p(b),p(v);var S=a(v,2),C=a(u(S),2),w=u(C,!0);p(C),p(S);var T=a(S,2),D=a(u(T),2),O=u(D,!0);p(D),p(T);var k=a(T,2),A=a(u(k),2);A.textContent=`Destinatario`,p(k),p(_),p(r),t((e,t,r)=>{E(m,` ${e??``}`),E(x,o(n).cantidad??`-`),E(w,t),E(O,r)},[()=>L(o(n).expand?.producto?.nombre||``,30),()=>o(n).fechaingreso?.length>0?new Date(o(n).fechaingreso).toLocaleDateString():`-`,()=>o(n).fechavencimiento?.length>0?new Date(o(n).fechavencimiento).toLocaleDateString():`-`]),y(`click`,g,()=>i()(o(n).id)),l(e,r)}),p(s),l(e,s),C()}e([`click`]);var re=r(`<div><div><!></div></div> <div><!></div>`,1),ie=r(`<!> <!>`,1),ae=r(`<!> <dialog id="inicioProducto" class="modal"><div class="modal-box"><h3 class="text-lg font-bold">Nuevo producto</h3> <!> <div class="modal-action"><form method="dialog"><button class="hover:cursor-pointer mt-2 px-10 py-2 bg-[#A94442] text-white font-medium rounded-full shadow-sm hover:bg-red-800 transition-colors text-base">Cerrar</button> <button class="hover:cursor-pointer mt-2 px-5 py-1 md:py-2 md:px-10 bg-[#115642] text-white font-medium rounded-full shadow-sm hover:bg-green-700 transition-colors text-base">Guardar</button></form></div></div></dialog>`,1);function X(e,t){v(t,!0);let r=f(``),s=f(S([])),c=f(``),m=f(S([])),h=f(S([])),_=f(S({id:`-1`})),b=f(0),w=f(``),T=f(``),E={id:``,codigo:``,cerrado:0,producto:``,cantidad:``,unidad:``,vencimiento:``,ingreso:``,cliente:``,remito:``,lote:``,edit:!1};S(E);let D=z(`detallelote`,E),A=new k(`https://inventario.servidornahuel.store`);async function M(){if(o(w).length==``){H.default.fire(`Error nombre`,`Debe escribir algún nombre`,`error`);return}let e={active:!0,nombre:o(w),cliente:o(c),codigo:o(T)};try{await A.collection(`productos`).create(e),H.default.fire(`Éxito guardar`,`Se logró registar el producto`,`success`),P()}catch{H.default.fire(`Error guardar`,`No se logró registar el producto`,`error`)}}function N(){d(w,``),d(T,F(`prod`),!0),inicioProducto.showModal()}function P(){d(w,``),d(T,``),inicioProducto.close()}function L(){detallemovimiento={id:``,codigo:``,fecha:``,observacion:``,ingreso:0,lote:``,edit:!1},storageMovimiento.save(detallemovimiento),O(`/movimientos/0`)}async function B(){let e=new Date,t=R(e,-1),n=R(e,1);I(t),I(n),d(s,[],!0),d(s,(await A.collection(`clienteslote`).getFullList()).map(e=>({...e})),!0),d(s,o(s).sort((e,t)=>e.nombre.toLocaleLowerCase()<t.nombre.toLocaleLowerCase()?-1:1),!0),d(_,JSON.parse(localStorage.pocketbase_auth).record,!0),d(b,o(_).nivel,!0)}function U(e){let t=o(m).findIndex(t=>t.id==e);if(t!=-1){let e=o(m)[t],n={id:e.id,codigo:e.codigo,cerrado:e.cerrado,producto:e.producto,cantidad:e.cantidad,unidad:e.unidad,cliente:e.expand?e.expand.producto.cliente:``,vencimiento:e.fechavencimiento.length>0?e.fechavencimiento.split(` `)[0]:``,ingreso:e.fechaingreso.length>0?e.fechaingreso.split(` `)[0]:``,edit:!1};D.save(n),O(`/lotes/`+e.id)}}async function W(){d(m,await A.collection(`lotes`).getFullList({filter:`active = true && producto.cliente = '${o(c)}'`,expand:`producto,unidad`,sort:`-fechaingreso`}),!0),K()}async function G(){o(c)!=``&&(d(m,[],!0),await W())}function K(){d(h,o(m),!0),o(h)!=``&&d(h,o(h).filter(e=>e.expand&&e.expand.producto&&e.expand.producto.nombre.toLocaleLowerCase().includes(o(r).toLocaleLowerCase())),!0)}x(async()=>{await B()});var q=ae(),J=i(q);j(J,{children:(e,t)=>{var f=ie(),m=i(f);ee(m,{get nivel(){return o(b)},get clientes(){return o(s)},seleccionarCliente:G,filterUpdate:K,nuevoProducto:N,nuevoIngreso:L,get buscar(){return o(r)},set buscar(e){d(r,e,!0)},get cliente(){return o(c)},set cliente(e){d(c,e,!0)}});var _=a(m,2),v=e=>{var t=re(),n=i(t);g(n,1,`
                hidden w-full xl:w-3/4 md:grid
                mx-auto py-0 my-0 px-4 max-w-7xl  
            `);var r=u(n);g(r,1,`
                    py-0 my-0
                    overflow-hidden rounded-xl
                    border border-gray-300 dark:border-gray-700
                `),te(u(r),{get lotesrows(){return o(h)},openViewModal:U}),p(r),p(n);var s=a(n,2);g(s,1,`
            md:hidden
            w-full grid grid-cols-1
            mx-auto py-3 px-4 max-w-7xl
        `),ne(u(s),{TablaStock:!0,get lotesrows(){return o(h)},openViewModal:U}),p(s),l(e,t)};n(_,e=>{o(c)!=``&&e(v)}),l(e,f)},$$slots:{default:!0}});var Y=a(J,2),X=u(Y),Z=a(u(X),2);V(Z,{get cliente(){return o(c)},get clientes(){return o(s)},get nombre(){return o(w)},set nombre(e){d(w,e,!0)},get codigo(){return o(T)},set codigo(e){d(T,e,!0)}});var Q=a(Z,2),$=u(Q),oe=u($),se=a(oe,2);p($),p(Q),p(X),p(Y),y(`click`,oe,P),y(`click`,se,M),l(e,q),C()}e([`click`]);export{X as component};
import{A as e,B as t,C as n,D as r,E as i,G as a,K as o,P as s,Q as c,S as l,T as u,W as d,X as f,Z as p,b as m,ct as h,d as g,f as _,ft as v,h as y,i as b,it as x,j as S,m as C,n as w,o as T,q as E,rt as D,u as O,w as k,x as A}from"../chunks/K2odYGWg.js";import{t as j}from"../chunks/DdVo43Z4.js";import"../chunks/ZsEnWiqm.js";import{t as M}from"../chunks/BNv4mBuH.js";import"../chunks/BaV_c6vi.js";import{t as N}from"../chunks/Cqw2pDMP.js";import{n as P,t as F}from"../chunks/DdXQea8f.js";import{a as I,i as L,s as R}from"../chunks/CaAz_aXy.js";import{t as z}from"../chunks/BjEJ0TkE.js";import{t as B}from"../chunks/BeUyT5PI.js";var V=r(`<div class="container mx-auto py-1 px-4 max-w-7xl w-full xl:w-3/4"><a class="
        inline-flex items-center text-sm
        text-gray-700 hover:text-gray-900 dark:text-gray-400
        dark:hover:text-gray-200 mb-4"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Volver a productos</a> <div><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"><div><h1> </h1></div></div> <!></div></div>`);function H(e,n){x(n,!0);let r=p(0),i=p(0);c(()=>s(r)<=1100);let a=b(n,`add`,3,!1);var l=V(),g=d(l);_(g,`href`,`/productos`);var v=o(g,2);y(v,1,`
        rounded-md p-4 shadow-xl mb-4
        dark:bg-slate-900 bg-white
    `);var S=d(v),C=d(S);y(C,1,`
                        bg-transparent        
                        px-4 py-4 
                    `);var w=d(C);y(w,1,`
                                
                                flex text-left
                                text-2xl font-bold 
                                dark:text-white text-gray-900
                            `);var E=d(w,!0);h(w),h(C),h(S),m(o(S,2),()=>n.children),h(v),h(l),t(()=>k(E,a()?`Nuevo producto`:n.nombre)),T(`innerWidth`,e=>f(r,e,!0)),T(`innerHeight`,e=>f(i,e,!0)),u(e,l),D()}var U=v(B()),ee=r(`<label class="input-group"><input id="rp" type="text"/></label>`),te=r(`<label for="rp"> </label>`),ne=r(`<label class="input-group"><input id="rp" type="text"/></label>`),re=r(`<label for="rp"> </label>`),ie=r(`<option> </option>`),ae=r(`<select class="
                bg-white dark:bg-slate-900
                border
                border-gray-300 dark:border-gray-600
                rounded-md px-3 py-1.5 text-sm
                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700
                "></select>`),oe=r(`<label for="cliente"> </label>`),se=r(`<button class="hover:cursor-pointer mt-2 px-5 py-1 md:py-2 md:px-10 bg-[#115642] text-white font-medium rounded-full shadow-sm hover:bg-green-700 transition-colors text-base">Guardar</button>`),ce=r(`<button class="
                hover:cursor-pointer
                mt-2 px-5 py-1 md:py-2 md:px-10
                dark:bg-transparent
                bg-white
                text-gray-800
                dark:text-white
                font-medium
                rounded-full shadow-sm border
                border-gray-300
                hover:bg-gray-200
                dark:hover:bg-gray-800
                transition-colors
                text-base">Cancelar</button> <button class="hover:cursor-pointer mt-2 px-5 py-1 md:py-2 md:px-10 bg-[#115642] text-white font-medium rounded-full shadow-sm hover:bg-green-700 transition-colors text-base">Guardar cambios</button>`,1),W=r(`<div class="mt-6 flex space-x-3 justify-end border-t border-gray-300 dark:border-gray-800"><!></div>`),le=r(`<div class="grid grid-cols-2 gap-1 lg:gap-6 mx-1 mb-2"><div class="mb-1 lg:mb-0 col-span-2 lg:col-span-1"><label for="nombre" class="label mb-0 pb-0"><span class="
                    label-text tracking-wide
                    text-md uppercase
                    font-semibold dark:text-gray-400
                    text-gray-500
                ">Nombre</span></label> <!></div> <div class="mb-1 lg:mb-0 col-span-2 lg:col-span-1"><label for="rp" class="label mb-0 pb-0"><span class="
                    label-text tracking-wide
                    text-md uppercase
                    font-semibold dark:text-gray-400
                    text-gray-500
                ">Código</span></label> <!></div> <div class="mb-1 lg:mb-0 flex flex-col"><label for="cliente" class="label mb-0 pb-0"><span class="
                    label-text tracking-wide
                    text-md uppercase
                    font-semibold dark:text-gray-400
                    text-gray-500
                ">Cliente</span></label> <!></div></div> <!> <div><button class="hover:cursor-pointer mt-2 px-10 py-2 bg-[#A94442] text-white font-medium rounded-full shadow-sm hover:bg-red-800 transition-colors text-base">Eliminar</button> <button>Editar</button></div>`,1);function G(e,r){x(r,!0);let i=b(r,`nombre`,15,``),m=b(r,`cliente`,15,``),_=b(r,`codigo`,15,``),v=b(r,`edit`,15,!1);b(r,`id`,3,``);let T=b(r,`add`,3,!1),E=b(r,`guardar`,3,async()=>{}),j=b(r,`eliminar`,3,()=>{});b(r,`volver`,3,()=>{});let M=b(r,`clientes`,19,()=>[]),N=c(()=>T()?M().filter(e=>e.active):M()),F=p(``),I=p(``),z=p(``);function B(){f(F,i(),!0),f(I,_(),!0),f(z,m(),!0)}function V(){B(),v(!0)}function H(){i(s(F)),_(s(I)),m(s(z)),v(!1)}w(()=>{B()});var U=le(),G=a(U),K=d(G),ue=o(d(K),2),de=e=>{var n=ee(),r=d(n);g(r),h(n),t(()=>y(r,1,`input input-bordered w-full ${P.bgdark}`)),O(r,i),u(e,n)},fe=e=>{var n=te(),r=d(n,!0);h(n),t(e=>{y(n,1,`text-lg tracking-wide ${P.labelcolor} py-0 my-0 px-3`),k(r,e)},[()=>R(i())]),u(e,n)};n(ue,e=>{v()?e(de):e(fe,-1)}),h(K);var q=o(K,2),pe=o(d(q),2),me=e=>{var n=ne(),r=d(n);g(r),h(n),t(()=>y(r,1,`input input-bordered w-full ${P.bgdark}`)),O(r,_),u(e,n)},he=e=>{var n=re(),r=d(n,!0);h(n),t(()=>{y(n,1,`text-lg tracking-wide ${P.labelcolor} py-0 my-0 px-3`),k(r,_())}),u(e,n)};n(pe,e=>{v()?e(me):e(he,-1)}),h(q);var J=o(q,2),Y=o(d(J),2),ge=e=>{var n=ae();A(n,21,()=>s(N),l,(e,n)=>{var r=ie(),i=d(r,!0);h(r);var a={};t(()=>{k(i,s(n).nombre),a!==(a=s(n).id)&&(r.value=(r.__value=s(n).id)??``)}),u(e,r)}),h(n),C(n,m),u(e,n)},_e=e=>{var n=oe(),r=d(n,!0);h(n),t(e=>{y(n,1,`text-lg tracking-wide ${P.labelcolor} py-0 my-0 px-3`),k(r,e)},[()=>L(m(),M())]),u(e,n)};n(Y,e=>{v()?e(ge):e(_e,-1)}),h(J),h(G);var X=o(G,2),ve=e=>{var t=W(),r=d(t),i=e=>{var t=se();S(`click`,t,function(...e){E()?.apply(this,e)}),u(e,t)},s=e=>{var t=ce(),n=a(t),r=o(n,2);S(`click`,n,H),S(`click`,r,function(...e){E()?.apply(this,e)}),u(e,t)};n(r,e=>{T()?e(i):e(s,-1)}),h(t),u(e,t)};n(X,e=>{v()&&e(ve)});var Z=o(X,2),Q=d(Z),$=o(Q,2);y($,1,`
            hover:cursor-pointer 
            mt-2 px-5 py-1 md:py-2 md:px-10 
            bg-[#115642] text-white font-medium rounded-full shadow-sm 
            hover:bg-green-700 transition-colors text-base  
        `),h(Z),t(()=>y(Z,1,`mt-6 flex space-x-3 justify-end border-t border-gray-300 dark:border-gray-800 ${v()?`hidden`:``}`)),S(`click`,Q,function(...e){j()?.apply(this,e)}),S(`click`,$,V),u(e,U),D()}e([`click`]);function K(e,t){x(t,!0);let r=new N(`https://inventario.servidornahuel.store`),o=p(0),l=p(0);c(()=>s(o)<=1250);let d={id:``,nombre:``,codigo:``,cliente:``,edit:!1},m=p(E(d)),h=z(`detalleproducto`,d),g=p(E([])),_=p(``),v=p(``),y=p(``),b=p(``),S=p(!1),C=p(!1),O=p(!1);async function k(){f(m,h.load(),!0),f(_,s(m).id,!0),f(v,s(m).nombre,!0),f(y,s(m).codigo,!0),f(b,s(m).cliente,!0),f(S,s(m).edit,!0),M.params.slug==`0`&&(f(C,!0),f(S,!0),f(y,I(`prod`),!0));let e=await r.collection(`clientes`).getFullList({filter:`active=true`});f(O,!0),f(g,e.sort((e,t)=>e.nombre.toLocaleLowerCase()<t.nombre.toLocaleLowerCase()?-1:1),!0)}function A(){j(`/productos`)}async function P(){if(s(v).length==0){U.default.fire(`Error nombre`,`Debe escribir un nombre`,`error`);return}if(s(b).length==0){U.default.fire(`Error cliente`,`Debe seleccionar un cliente`,`error`);return}if(s(_).length>0&&!s(C))await L();else{let e={nombre:s(v),cliente:s(b),codigo:s(y),active:!0};try{await r.collection(`productos`).create(e),U.default.fire(`Éxito guardar`,`Se logró registar el producto`,`success`)}catch{U.default.fire(`Error guardar`,`No se logró registar el producto`,`error`)}finally{A()}}}async function L(){let e={nombre:s(v),codigo:s(y),cliente:s(b)};try{await r.collection(`productos`).update(s(_),e),U.default.fire(`Éxito editar`,`Se logró editar el producto`,`success`)}catch{U.default.fire(`Error edición`,`No se logró editar el producto`,`error`)}finally{A()}}async function R(){let e={active:!1};try{await r.collection(`productos`).update(s(_),e),U.default.fire(`Éxito eliminar`,`Se logró eliminar el producto`,`success`),A()}catch{U.default.fire(`Error eliminar`,`No se logró eliminar el producto`,`error`)}}function B(){U.default.fire({title:`Eliminar producto`,text:`¿Seguro que deseas eliminar el producto?`,icon:`warning`,showCancelButton:!0,confirmButtonText:`Si`,cancelButtonText:`No`}).then(async e=>{e.value&&await R(s(_))})}w(async()=>{await k()}),F(e,{children:(e,t)=>{H(e,{get add(){return s(C)},get nombre(){return s(v)},children:(e,t)=>{var r=i(),o=a(r),c=e=>{G(e,{get add(){return s(C)},get id(){return s(_)},volver:A,eliminar:B,guardar:P,get clientes(){return s(g)},get nombre(){return s(v)},set nombre(e){f(v,e,!0)},get cliente(){return s(b)},set cliente(e){f(b,e,!0)},get codigo(){return s(y)},set codigo(e){f(y,e,!0)},get edit(){return s(S)},set edit(e){f(S,e,!0)}})};n(o,e=>{s(O)&&e(c)}),u(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),T(`innerWidth`,e=>f(o,e,!0)),T(`innerHeight`,e=>f(l,e,!0)),D()}export{K as component};
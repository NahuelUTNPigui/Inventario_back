import{A as e,B as t,C as n,D as r,G as i,K as a,P as o,Q as s,S as c,T as l,W as u,X as d,Z as f,ct as p,d as m,f as h,ft as g,h as _,i as v,it as y,j as b,n as x,o as S,q as C,rt as w,st as T,u as E,w as D,x as O}from"../chunks/K2odYGWg.js";import"../chunks/ZsEnWiqm.js";import{t as k}from"../chunks/Cqw2pDMP.js";import{n as A,t as j}from"../chunks/DdXQea8f.js";import{t as M}from"../chunks/Bv8qADfv.js";import{n as N,t as P}from"../chunks/CBJbliRg.js";import{s as F}from"../chunks/CaAz_aXy.js";import{t as I}from"../chunks/BeUyT5PI.js";var L=r(`<div class="container mx-auto py-1 px-4 max-w-7xl w-full xl:w-3/4"><div><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 mb-2 border-b border-gray-300 dark:border-gray-800"><div><h1>Unidades</h1></div></div> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-1 md:p-2 bg-transparent rounded-lg"><div><input type="text" placeholder="Buscar unidad ..."/> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"></path></svg></div></div></div></div>`);function R(e,t){y(t,!0);let n=v(t,`buscar`,15,``),r=v(t,`filterUpdate`,3,()=>{});var i=L(),o=u(i);_(o,1,`
            rounded-xl p-1 shadow-2xl mb-1
            dark:bg-slate-900 bg-white
            px-6
        `);var s=u(o),c=u(s);_(c,1,`
                    bg-transparent
                    py-2
                `),_(u(c),1,`
                        text-3xl font-semibold 
                        dark:text-white text-gray-900
                `),p(c),p(s);var d=a(s,2),f=u(d);_(f,1,`
                  flex items-center flex-1
                  shadow-2xl
                  rounded-full p-3
                
                  bg-white dark:bg-gray-900
                  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]
                  dark:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.1)]
                `);var h=u(f);m(h),_(h,1,`
                    shadow-2xl
                    dark:placeholder-gray-500 
                    dark:text-gray-100
                    placeholder-gray-600 text-gray-800
                    
                    w-full bg-transparent focus:outline-none
                    border border-transparent
                    
                `),T(2),p(f),p(d),p(o),p(i),b(`input`,h,function(...e){r()?.apply(this,e)}),E(h,n),l(e,i),w()}e([`input`]);var z=r(`<tr><td> </td><td><button class="hover:cursor-pointer hover:scale-105"><!></button> <button class="hover:cursor-pointer hover:scale-105"><!></button></td></tr>`),B=r(`<div class="max-h-[600px] overflow-y-auto custom-scrollbar "><table class="table table-lg w-full bg-white dark:bg-slate-900 rounded-none"><thead><tr><th><div class="flex flex-row justify-between uppercase">Nombre</div></th><th class="text-base mx-1 px-1 text-center uppercase">Acciones</th></tr></thead><tbody></tbody></table></div>`);function V(e,n){y(n,!0);let r=v(n,`unidadesrows`,19,()=>[]);v(n,`openViewModal`,3,e=>{});let i=v(n,`openEditModal`,3,e=>{}),s=v(n,`openDelModal`,3,e=>{}),d=`py-2`;var f=B(),m=u(f),h=u(m),g=u(h),x=u(g);T(),p(g),p(h);var S=a(h);O(S,21,r,c,(e,n)=>{var r=z(),c=u(r);_(c,1,`text-base mx-1 px-4 ${d}`);var f=u(c,!0);p(c);var m=a(c);_(m,1,`flex text-base  items-center justify-center gap-2 px-1 ${d}`);var h=u(m);P(u(h),{size:`size-6`}),p(h);var g=a(h,2);N(u(g),{size:`size-6`}),p(g),p(m),p(r),t(e=>D(f,e),[()=>`${F(o(n).nombre,30)}`]),b(`click`,h,()=>i()(o(n).id)),b(`click`,g,()=>s()(o(n).id)),l(e,r)}),p(S),p(m),p(f),t(()=>{_(h,1,`${A.tableheader}  sticky top-0 z-5 shadow-sm`),_(x,1,`
                        ${A.tableth}   
                    `)}),l(e,f),w()}e([`click`]);var H=r(`<button class="hover:cursor-pointer"><!></button>`),U=r(`<button class="hover:cursor-pointer">Limpiar</button> <button class="hover:cursor-pointer"><!></button>`,1),W=r(`<div class="container mx-auto py-0 my-0 px-4 max-w-7xl w-full xl:w-3/4"><div><div class="flex flex-row py-2 w-full"><div class="flex items-center justify-center"><!></div> <div class="w-full"><label class="input-group"><input id="nombre" type="text"/></label></div></div></div></div>`);function G(e,r){y(r,!0);let c=f(0),g=f(0);s(()=>o(c)<=1100);let x=v(r,`idunidad`,3,``),C=v(r,`nombreunidad`,15),T=v(r,`nuevo`,3,()=>{}),D=v(r,`limpiar`,3,()=>{}),O=v(r,`editar`,3,e=>{}),k=v(r,`validarBotonUnidad`,3,()=>{});v(r,`edit`,3,!1);var A=W(),j=u(A);_(j,1,`
            rounded-t-xl py-0 shadow-2xl mb-0
            dark:bg-slate-900 bg-white
            px-6
            
        `);var N=u(j),F=u(N),I=u(F),L=e=>{var t=H();M(u(t),{size:`size-5`}),p(t),b(`click`,t,function(...e){T()?.apply(this,e)}),l(e,t)},R=e=>{var t=U(),n=i(t),r=a(n,2);P(u(r),{size:`size-5`}),p(r),b(`click`,n,function(...e){D()?.apply(this,e)}),b(`click`,r,function(...e){O()?.apply(this,e)}),l(e,t)};n(I,e=>{x()==``?e(L):e(R,-1)}),p(F);var z=a(F,2),B=u(z),V=u(B);m(V),_(V,1,`
                                    input input-bordered 
                                    w-full
                                    border border-gray-300 rounded-md
                                    dark:border-gray-700
                                    focus:outline-none focus:ring-2 
                                    focus:ring-red-900 
                                    focus:border-red-900
                                    bg-white  dark:bg-slate-900
                                    
                                `),p(B),p(z),p(N),p(j),p(A),t(()=>h(V,`placeholder`,x()==``?`Agregar nueva unidad`:``)),S(`innerWidth`,e=>d(c,e,!0)),S(`innerHeight`,e=>d(g,e,!0)),b(`input`,V,function(...e){k()?.apply(this,e)}),E(V,C),l(e,A),w()}e([`click`,`input`]);var K=g(I()),q=r(`<!> <!> <div><div><!></div></div>`,1);function J(e,t){y(t,!0);let n=new k(`https://inventario.servidornahuel.store`),r=f(``),s=f(C([])),c=f(C([])),m=f(``),h=f(``),g=f(!1);function v(){d(c,o(s),!0),o(r)!=``&&d(c,o(c).filter(e=>e.nombre.toLocaleLowerCase().includes(o(r).toLocaleLowerCase())),!0)}function b(){d(g,!0),d(m,``),d(h,``)}function S(e){let t=o(c).findIndex(t=>t.id==e);if(t!=-1){d(g,!0);let e=o(c)[t];d(h,e.nombre,!0),d(m,e.id,!0)}}async function T(){if(o(h).length==0){K.default.fire(`Error nombre`,`No se pueden guardar unidades sin nombre`,`info`);return}if(o(m)==``){let e={nombre:o(h),active:!0};try{await n.collection(`unidades`).create(e),K.default.fire(`Éxito guardar`,`Se logró registar la unidad`,`success`)}catch{K.default.fire(`Error guardar`,`No se logró registar la unidad`,`error`)}}else{let e=o(s).findIndex(e=>e.id==o(m));if(e!=-1){let t={nombre:o(h)},r=o(s)[e];try{await n.collection(`unidades`).update(r.id,t),K.default.fire(`Éxito editar`,`Se logró editar la unidad`,`success`)}catch{K.default.fire(`Error editar`,`No se logró editar la unidad`,`error`)}}}b(),await O(),v(),d(g,!1)}function E(e){K.default.fire({title:`Eliminar unidad`,text:`¿Seguro que deseas eliminar la unidad?`,icon:`warning`,showCancelButton:!0,confirmButtonText:`Si`,cancelButtonText:`No`}).then(async t=>{t.value&&(await D(e),K.default.fire(`Éxito eliminar`,`Se pudo eliminar la unidad con éxito`,`success`))})}async function D(e){let t=o(s).findIndex(t=>t.id==e);if(t!=-1){let e={active:!1},r=o(s)[t];try{await n.collection(`unidades`).update(r.id,e),K.default.fire(`Éxito eliminar`,`Se logró eliminar la unidad`,`success`)}catch{K.default.fire(`Error eliminar`,`No se logró eliminar la unidad`,`error`)}b(),await O(),v()}}async function O(){d(s,(await n.collection(`unidades`).getFullList({filter:`active = true`,sort:`nombre`})).map(e=>({...e})),!0)}x(async()=>{await O(),v()}),j(e,{children:(e,t)=>{var n=q(),s=i(n);R(s,{filterUpdate:v,get buscar(){return o(r)},set buscar(e){d(r,e,!0)}});var f=a(s,2);G(f,{get idunidad(){return o(m)},limpiar:b,nuevo:T,editar:T,get nombreunidad(){return o(h)},set nombreunidad(e){d(h,e,!0)}});var g=a(f,2);_(g,1,`
                w-full xl:w-3/4 md:grid
                mx-auto py-0 my-0 px-4 max-w-7xl  
            `);var y=u(g);_(y,1,`
                    py-0 my-0
                    overflow-hidden rounded-xl
                    border border-gray-300 dark:border-gray-700
                `),V(u(y),{get unidadesrows(){return o(c)},openEditModal:S,openDelModal:E}),p(y),p(g),l(e,n)},$$slots:{default:!0}}),w()}export{J as component};
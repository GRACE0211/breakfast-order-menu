import{_ as l,c as o,a,F as u,r as _,o as n,t as d,b as m,d as h}from"./index-CwJKjalH.js";const g={name:"HamburgersView",props:["cart"],emits:["add-to-cart"],data(){return{hamburgers:[]}},methods:{handleAdd(t){t.count||(t.count=0),t.count++,this.$emit("add-to-cart",t)},getCount(t){const e=this.cart.find(c=>c.id===t.id);return e?e.count:0},getImageUrl(t){return"/breakfast-order-menu/"+t}},mounted(){fetch("/breakfast-order-menu/data/data.json").then(t=>{if(!t.ok)throw new Error("Failed to load data.json");return t.json()}).then(t=>{this.sandwiches=t.filter(e=>e.type==="Sandwiches").map(e=>({...e,count:0}))}).catch(t=>{console.error("Fetch error:",t)})}},f={class:"main-view"},p={class:"product-list"},v=["src"],b={class:"product-details"},k={class:"product-title"},w={class:"product-description"},C={class:"product-price"},V=["onClick"],x={key:0};function y(t,e,c,F,i,r){return n(),o("div",f,[a("div",p,[(n(!0),o(u,null,_(i.hamburgers,s=>(n(),o("div",{key:s.id,class:"product-card"},[a("img",{src:r.getImageUrl(s.image),alt:"product",class:"product-image"},null,8,v),a("div",b,[a("div",k,d(s.title),1),a("div",w,d(s.description),1),a("div",C,"$"+d(s.price),1),a("button",{class:"add-to-cart-btn",onClick:j=>r.handleAdd(s)},[e[0]||(e[0]=m(" Add To Cart")),r.getCount(s)?(n(),o("span",x," ( "+d(r.getCount(s))+" )",1)):h("",!0)],8,V)])]))),128))])])}const B=l(g,[["render",y],["__scopeId","data-v-7501f958"]]);export{B as default};

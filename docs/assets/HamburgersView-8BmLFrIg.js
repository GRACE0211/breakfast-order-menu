import{_ as l,c as o,a,F as _,r as h,o as r,t as n,b as u,d as m}from"./index-DQrEqgy6.js";const p={name:"HamburgersView",props:["cart"],emits:["add-to-cart"],data(){return{hamburgers:[]}},methods:{handleAdd(t){t.count||(t.count=0),t.count++,this.$emit("add-to-cart",t)},getCount(t){const e=this.cart.find(d=>d.id===t.id);return e?e.count:0}},mounted(){fetch("data/data.json").then(t=>{if(!t.ok)throw new Error("Failed to load data.json");return t.json()}).then(t=>{this.sandwiches=t.filter(e=>e.type==="Sandwiches").map(e=>({...e,count:0}))}).catch(t=>{console.error("Fetch error:",t)})}},g={class:"main-view"},f={class:"product-list"},v=["src"],b={class:"product-details"},k={class:"product-title"},w={class:"product-description"},C={class:"product-price"},V=["onClick"],x={key:0};function y(t,e,d,F,i,c){return r(),o("div",g,[a("div",f,[(r(!0),o(_,null,h(i.hamburgers,s=>(r(),o("div",{key:s.id,class:"product-card"},[a("img",{src:s.image,alt:"product",class:"product-image"},null,8,v),a("div",b,[a("div",k,n(s.title),1),a("div",w,n(s.description),1),a("div",C,"$"+n(s.price),1),a("button",{class:"add-to-cart-btn",onClick:j=>c.handleAdd(s)},[e[0]||(e[0]=u(" Add To Cart")),c.getCount(s)?(r(),o("span",x," ( "+n(c.getCount(s))+" )",1)):m("",!0)],8,V)])]))),128))])])}const B=l(p,[["render",y],["__scopeId","data-v-269b9be6"]]);export{B as default};

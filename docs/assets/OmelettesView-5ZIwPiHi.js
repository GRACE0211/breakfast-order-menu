import{_ as l,c as a,a as o,F as _,r as h,o as n,t as d,b as m,d as u}from"./index-DQrEqgy6.js";const p={name:"OmelettesView",props:["cart"],emits:["add-to-cart"],data(){return{omelettes:[]}},methods:{handleAdd(t){t.count||(t.count=0),t.count++,this.$emit("add-to-cart",t)},getCount(t){const e=this.cart.find(i=>i.id===t.id);return e?e.count:0}},mounted(){fetch("data/data.json").then(t=>{if(!t.ok)throw new Error("Failed to load data.json");return t.json()}).then(t=>{this.sandwiches=t.filter(e=>e.type==="Sandwiches").map(e=>({...e,count:0}))}).catch(t=>{console.error("Fetch error:",t)})}},f={class:"main-view"},v={class:"product-list"},g=["src"],k={class:"product-details"},w={class:"product-title"},C={class:"product-description"},V={class:"product-price"},b=["onClick"],x={key:0};function y(t,e,i,F,r,c){return n(),a("div",f,[o("div",v,[(n(!0),a(_,null,h(r.omelettes,s=>(n(),a("div",{key:s.id,class:"product-card"},[o("img",{src:s.image,alt:"product",class:"product-image"},null,8,g),o("div",k,[o("div",w,d(s.title),1),o("div",C,d(s.description),1),o("div",V,"$"+d(s.price),1),o("button",{class:"add-to-cart-btn",onClick:j=>c.handleAdd(s)},[e[0]||(e[0]=m(" Add To Cart")),c.getCount(s)?(n(),a("span",x," ( "+d(c.getCount(s))+" )",1)):u("",!0)],8,b)])]))),128))])])}const B=l(p,[["render",y],["__scopeId","data-v-a89d4b03"]]);export{B as default};

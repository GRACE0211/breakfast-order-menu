import{_ as l,c as n,a,F as _,r as h,o,t as i,b as u,d as m}from"./index-DQrEqgy6.js";const p={name:"DrinksView",props:["cart"],emits:["add-to-cart"],data(){return{drinks:[]}},methods:{handleAdd(t){t.count||(t.count=0),t.count++,this.$emit("add-to-cart",t)},getCount(t){const e=this.cart.find(c=>c.id===t.id);return e?e.count:0}},mounted(){fetch("data/data.json").then(t=>{if(!t.ok)throw new Error("Failed to load data.json");return t.json()}).then(t=>{this.sandwiches=t.filter(e=>e.type==="Sandwiches").map(e=>({...e,count:0}))}).catch(t=>{console.error("Fetch error:",t)})}},f={class:"main-view"},k={class:"product-list"},v=["src"],g={class:"product-details"},w={class:"product-title"},C={class:"product-description"},V={class:"product-price"},b=["onClick"],x={key:0};function y(t,e,c,F,r,d){return o(),n("div",f,[a("div",k,[(o(!0),n(_,null,h(r.drinks,s=>(o(),n("div",{key:s.id,class:"product-card"},[a("img",{src:s.image,alt:"product",class:"product-image"},null,8,v),a("div",g,[a("div",w,i(s.title),1),a("div",C,i(s.description),1),a("div",V,"$"+i(s.price),1),a("button",{class:"add-to-cart-btn",onClick:j=>d.handleAdd(s)},[e[0]||(e[0]=u(" Add To Cart")),d.getCount(s)?(o(),n("span",x," ( "+i(d.getCount(s))+" )",1)):m("",!0)],8,b)])]))),128))])])}const B=l(p,[["render",y],["__scopeId","data-v-78be2275"]]);export{B as default};

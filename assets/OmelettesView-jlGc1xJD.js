import{_ as l,c as a,a as o,F as _,r as m,o as i,t as n,b as u,d as h}from"./index-FmOQ6aBe.js";const p={name:"OmelettesView",emits:["add-to-cart"],data(){return{omelettes:[]}},props:["cart"],methods:{handleAdd(t){t.count||(t.count=0),t.count++,this.$emit("add-to-cart",t)},getCount(t){const e=this.cart.find(c=>c.id===t.id);return e?e.count:0}},mounted(){fetch("/data/data.json").then(t=>t.json()).then(t=>{this.omelettes=t.filter(e=>e.type==="Omelettes").map(e=>({...e,count:0}))})}},f={class:"main-view"},v={class:"product-list"},g=["src"],C={class:"product-details"},k={class:"product-title"},V={class:"product-description"},$={class:"product-price"},y=["onClick"],b={key:0};function w(t,e,c,x,r,d){return i(),a("div",f,[o("div",v,[(i(!0),a(_,null,m(r.omelettes,s=>(i(),a("div",{key:s.id,class:"product-card"},[o("img",{src:s.image,alt:"product",class:"product-image"},null,8,g),o("div",C,[o("div",k,n(s.title),1),o("div",V,n(s.description),1),o("div",$,"$"+n(s.price),1),o("button",{class:"add-to-cart-btn",onClick:B=>t.$emit("add-to-cart",s)},[e[0]||(e[0]=u(" Add To Cart")),d.getCount(s)?(i(),a("span",b," ( "+n(d.getCount(s))+" )",1)):h("",!0)],8,y)])]))),128))])])}const O=l(p,[["render",w],["__scopeId","data-v-9656a519"]]);export{O as default};

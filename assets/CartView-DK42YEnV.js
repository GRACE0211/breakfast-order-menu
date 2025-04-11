import{_ as d,c as o,a as t,F as _,r as u,t as a,o as n}from"./index-FmOQ6aBe.js";const p={name:"CartView",props:["cart"],emits:["increase","decrease","remove"],computed:{totalPrice(){return this.cart.reduce((c,e)=>c+e.price*e.count,0)}}},h={class:"cart-container"},m={key:0,class:"cart-list"},v=["src"],k={class:"cart-item-info"},g={class:"cart-item-controls"},$={class:"qty-controls"},f=["onClick"],C=["onClick"],F={class:"subtotal"},b=["onClick"],y={class:"cart-total"},B={key:1,class:"cart-empty"};function V(c,e,r,w,P,l){return n(),o("div",h,[e[1]||(e[1]=t("h2",{class:"cart-title"},"🛒 購物車",-1)),r.cart.length>0?(n(),o("div",m,[(n(!0),o(_,null,u(r.cart,s=>(n(),o("div",{key:s.id,class:"cart-item"},[t("img",{src:s.image,alt:"product",class:"cart-item-image"},null,8,v),t("div",k,[t("h3",null,a(s.title),1),t("p",null,a(s.description),1),t("div",g,[t("div",$,[t("button",{onClick:i=>c.$emit("decrease",s)},"-",8,f),t("span",null,a(s.count),1),t("button",{onClick:i=>c.$emit("increase",s)},"+",8,C)]),t("span",F,"= $"+a(s.price*s.count),1),t("button",{class:"delete-btn",onClick:i=>c.$emit("remove",s)},e[0]||(e[0]=[t("img",{src:"https://img.icons8.com/?size=100&id=11767&format=png&color=FFFFFF",alt:"trash-can",class:""},null,-1)]),8,b)])])]))),128)),t("div",y,"總金額：$ "+a(l.totalPrice),1)])):(n(),o("div",B,"目前購物車是空的 😢"))])}const z=d(p,[["render",V],["__scopeId","data-v-d2396ab9"]]);export{z as default};

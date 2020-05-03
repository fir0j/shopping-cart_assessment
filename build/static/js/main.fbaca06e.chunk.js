(this["webpackJsonpshopping-cart_assessment"]=this["webpackJsonpshopping-cart_assessment"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),r=a.n(c),o=a(2),i=a(3),m=a(5),u=a(4),s=a(6),d=a(13),h=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.foodItem,a=e.handleClickToSelect,n=e.menuItemSelected,c=e.isSelected&&t.id===n.id?"card isSelected":"card";return l.a.createElement("div",null,l.a.createElement((function(){return l.a.createElement("div",{className:c,onClick:function(){return a(t)}},l.a.createElement("div",{className:"card-photo",style:{backgroundImage:"url(".concat(t.photoUrl,")")}}),l.a.createElement("h3",{className:"name"},t.name),l.a.createElement("h4",{className:"price"},"$",t.price))}),null))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClickToSelect=function(e){a.setState((function(t){return{cartItemSelected:e,isSelectedFromCart:!0}}));a.props.getCartItemSelected(e,!0)},a.state={cartItemSelected:"",isSelectedFromCart:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cartItems,a=this.state,n=a.cartItemSelected,c=a.isSelectedFromCart;return t.length>0?l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{textAlign:"center",paddingTop:"5px",fontSize:"23px"}},l.a.createElement("p",null,"Your Cart")),l.a.createElement("hr",null),t.map((function(t){return l.a.createElement("div",{key:t.id,onClick:function(){return e.handleClickToSelect(t)}},l.a.createElement("div",null,l.a.createElement(h,{foodItem:t,handleClickToSelect:e.handleClickToSelect,menuItemSelected:n,isSelected:c})))})),l.a.createElement((function(e){var t=e.total;return l.a.createElement("div",{className:"totalPrice"},l.a.createElement("h1",null,"Total Amount: $".concat(t)))}),{total:t.reduce((function(e,t){return e+Number(t.price)}),0).toFixed(2)})):l.a.createElement((function(){return l.a.createElement("div",{className:"container cartEmpty"},l.a.createElement("h2",null,"Your cart is empty"),l.a.createElement("h5",null,'Select an item and click "Add to cart"'))}),null)}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.handleAddToCart,n=t.handleRemoveFromCart;return l.a.createElement("div",{className:"buttons"},l.a.createElement((function(){return e.props.isSelectedFromMenu?l.a.createElement("div",null,l.a.createElement("button",{className:"cartButton",onClick:a},"Add to cart >>")):l.a.createElement("div",null,l.a.createElement("button",{className:"cartButton buttonPassive"},"Add to cart >>"))}),null),l.a.createElement((function(){return e.props.isSelectedFromCart?l.a.createElement("div",null,l.a.createElement("button",{className:"cartButton buttonActive",onClick:n},"<< Remove to cart")):l.a.createElement("div",null,l.a.createElement("button",{className:"cartButton buttonPassive"},"<< Remove to cart"))}),null))}}]),t}(n.Component),f=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClickToSelect=function(e){a.setState((function(t){return{menuItemSelected:e,isSelectedFromMenu:!0}}))},a.handleClickToUnselectFromMenu=function(){a.setState((function(e){return{menuItemSelected:"",isSelectedFromMenu:!1}}))},a.handleClickToUnselectFromCart=function(){a.setState((function(e){return{cartItemSelected:"",isSelectedFromCart:!1}}))},a.handleAddToCart=function(){var e=a.state,t=e.cartItems,n=e.menuItemSelected,l=!1;t.length>0&&t.forEach((function(e){e.id===n.id&&(console.log("item is:",e.id,"selected is",n.id),l=!0)})),l?alert("The item is Already in your cart"):a.setState((function(e){return{cartItems:[].concat(Object(d.a)(e.cartItems),[e.menuItemSelected])}})),a.handleClickToUnselectFromMenu()},a.handleRemoveFromCart=function(){a.state.cartItemSelected?a.setState((function(e){return{cartItems:e.cartItems.filter((function(e){return e.id!==a.state.cartItemSelected.id}))}})):alert("Please Select an Item from the cart first!"),a.handleClickToUnselectFromCart()},a.getCartItemSelected=function(e,t){a.setState({cartItemSelected:e,isSelectedFromCart:t})},a.TotalPrice=function(){var e=a.state.cartItems.reduce((function(e,t){return e+t.price}),0);a.setState({cartTotal:e})},a.state={menuItemSelected:"",cartItemSelected:"",isSelectedFromMenu:!1,isSelectedFromCart:!1,cartItems:[],MenuItems:[{photoUrl:"https://source.unsplash.com/MqT0asuoIcU/111x111",name:"pizza",price:"5.99",id:1},{photoUrl:"https://source.unsplash.com/9G_oJBKwi1c/111x111",name:"burger",price:"2.99",id:2},{photoUrl:"https://source.unsplash.com/7zfQ6sbWVyE/111x111",name:"Chicken Pasta",price:"2.99",id:3},{photoUrl:"https://source.unsplash.com/foHj73zCV3Y/111x111",name:"Grilled Sandwich",price:"2.99",id:4}]},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.MenuItems,n=t.menuItemSelected,c=t.cartItems,r=t.isSelectedFromMenu,o=t.cartTotal,i=t.isSelectedFromCart;return a.length>0?l.a.createElement("div",null,l.a.createElement("input",{type:"button",onClick:function(){return e.props.handleOrderFood("homepage")},value:"Go Back",className:"backButton"}),l.a.createElement("div",{className:"homepage overlay"},l.a.createElement((function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{textAlign:"center",fontSize:"25px"}},l.a.createElement("p",null,"Available Options")),l.a.createElement("hr",null),a.map((function(t){return l.a.createElement(h,{key:t.id,foodItem:t,handleClickToSelect:e.handleClickToSelect,menuItemSelected:n,isSelected:r})})))}),null),l.a.createElement(E,{handleAddToCart:this.handleAddToCart,handleRemoveFromCart:this.handleRemoveFromCart,isSelectedFromMenu:r,isSelectedFromCart:i}),l.a.createElement(p,{cartItems:c,handleClickToSelect:this.handleClickToSelect,getCartItemSelected:this.getCartItemSelected,cartTotal:o}))):l.a.createElement((function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container cartEmpty"},l.a.createElement("h2",null,"Food Items are comming soon...")))}),null)}}]),t}(n.Component)),S=(a(20),a(7)),v=a(8),C=function(e){return l.a.createElement("div",{className:"landingPage"},l.a.createElement((function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,"FOOD.",l.a.createElement("span",null,"LOGO")),l.a.createElement("li",null,"ABOUT"),l.a.createElement("li",null,"OUR FOOD"),l.a.createElement("li",null,"PLANS"),l.a.createElement("li",null,"CONTACT US")))}),null),l.a.createElement("div",{className:"backgroundContainer"},l.a.createElement((function(){return l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"Have no time"),l.a.createElement("br",null),l.a.createElement("h2",null,"to prepare ",l.a.createElement("span",null,"food"),"?"),l.a.createElement("br",null),l.a.createElement("p",null,"Choose one of our plans, enter delivery time"),l.a.createElement("p",null,"and enjoy delicious food without leaving your home!"),l.a.createElement("input",{type:"button",onClick:function(){return e.handleOrderFood("cartPage")},value:"Order food"}),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement(S.a,{icon:v.c})),l.a.createElement("li",null,l.a.createElement(S.a,{icon:v.a})),l.a.createElement("li",null,l.a.createElement(S.a,{icon:v.b}))))}),null),l.a.createElement("div",{style:{backgroundImage:"url('https://source.unsplash.com/MqT0asuoIcU')"},className:"bgImage"})))},b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleOrderFood=function(e){console.log("renderMe:",e),a.setState({display:e})},a.state={display:"homepage"},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.display;return l.a.createElement("div",null,"homepage"===e?l.a.createElement(C,{handleOrderFood:this.handleOrderFood}):l.a.createElement(f,{handleOrderFood:this.handleOrderFood}))}}]),t}(n.Component);r.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fbaca06e.chunk.js.map
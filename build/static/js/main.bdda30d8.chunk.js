(this["webpackJsonpshopping-cart_assessment"]=this["webpackJsonpshopping-cart_assessment"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/pizza.1a4e6340.jpeg"},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=a(8),i=a(1),m=a(2),s=a(4),u=a(3),d=a(5),h=(a(14),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.foodItem,a=e.handleClickToSelect,n=e.menuItemSelected,r=e.isSelected&&t.id===n.id?"card isSelected":"card";return c.a.createElement("div",null,c.a.createElement((function(){return c.a.createElement("div",{className:r,onClick:function(){return a(t)}},c.a.createElement("div",{className:"card-photo",style:{backgroundImage:"url(".concat(t.photoUrl,")")}}),c.a.createElement("h3",{className:"name"},t.name),c.a.createElement("h4",{className:"price"},"$",t.price))}),null))}}]),t}(n.Component)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClickToSelect=function(e){a.setState((function(t){return{cartItemSelected:e,isSelectedFromCart:!0}}));a.props.getCartItemSelected(e,!0)},a.state={cartItemSelected:"",isSelectedFromCart:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cartItems,a=this.state,n=a.cartItemSelected,r=a.isSelectedFromCart;return t.length>0?c.a.createElement("div",{className:"container"},c.a.createElement("div",{style:{textAlign:"center",paddingTop:"5px",fontSize:"23px"}},c.a.createElement("p",null,"Your Cart")),c.a.createElement("hr",null),t.map((function(t){return c.a.createElement("div",{key:t.id,onClick:function(){return e.handleClickToSelect(t)}},c.a.createElement("div",null,c.a.createElement(h,{foodItem:t,handleClickToSelect:e.handleClickToSelect,menuItemSelected:n,isSelected:r})))})),c.a.createElement((function(e){var t=e.total;return c.a.createElement("div",{className:"totalPrice"},c.a.createElement("h1",null,"Total Amount: $".concat(t)))}),{total:t.reduce((function(e,t){return e+Number(t.price)}),0).toFixed(2)})):c.a.createElement((function(){return c.a.createElement("div",{className:"container cartEmpty"},c.a.createElement("h2",null,"Your cart is empty"),c.a.createElement("h5",null,'Select an item and click "Add to cart"'))}),null)}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.handleAddToCart,n=t.handleRemoveFromCart;return c.a.createElement("div",{className:"buttons"},c.a.createElement((function(){return e.props.isSelectedFromMenu?c.a.createElement("div",null,c.a.createElement("button",{className:"cartButton",onClick:a},"Add to cart >>")):c.a.createElement("div",null,c.a.createElement("button",{className:"cartButton buttonPassive"},"Add to cart >>"))}),null),c.a.createElement((function(){return e.props.isSelectedFromCart?c.a.createElement("div",null,c.a.createElement("button",{className:"cartButton buttonActive",onClick:n},"<< Remove to cart")):c.a.createElement("div",null,c.a.createElement("button",{className:"cartButton buttonPassive"},"<< Remove to cart"))}),null))}}]),t}(n.Component),f=(a(15),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClickToSelect=function(e){a.setState((function(t){return{menuItemSelected:e,isSelectedFromMenu:!0}}))},a.handleClickToUnselectFromMenu=function(){a.setState((function(e){return{menuItemSelected:"",isSelectedFromMenu:!1}}))},a.handleClickToUnselectFromCart=function(){a.setState((function(e){return{cartItemSelected:"",isSelectedFromCart:!1}}))},a.handleAddToCart=function(){var e=a.state,t=e.cartItems,n=e.menuItemSelected,c=!1;t.length>0&&t.forEach((function(e){e.id===n.id&&(console.log("item is:",e.id,"selected is",n.id),c=!0)})),c?alert("The item is Already in your cart"):a.setState((function(e){return{cartItems:[].concat(Object(o.a)(e.cartItems),[e.menuItemSelected])}})),a.handleClickToUnselectFromMenu()},a.handleRemoveFromCart=function(){a.state.cartItemSelected?a.setState((function(e){return{cartItems:e.cartItems.filter((function(e){return e.id!==a.state.cartItemSelected.id}))}})):alert("Please Select an Item from the cart first!"),a.handleClickToUnselectFromCart()},a.getCartItemSelected=function(e,t){a.setState({cartItemSelected:e,isSelectedFromCart:t})},a.TotalPrice=function(){var e=a.state.cartItems.reduce((function(e,t){return e+t.price}),0);a.setState({cartTotal:e})},a.state={menuItemSelected:"",cartItemSelected:"",isSelectedFromMenu:!1,isSelectedFromCart:!1,cartItems:[],MenuItems:[{photoUrl:"https://source.unsplash.com/MqT0asuoIcU/111x111",name:"pizza",price:"5.99",id:1},{photoUrl:"https://source.unsplash.com/9G_oJBKwi1c/111x111",name:"burger",price:"2.99",id:2},{photoUrl:"https://source.unsplash.com/7zfQ6sbWVyE/111x111",name:"Chicken Pasta",price:"2.99",id:3},{photoUrl:"https://source.unsplash.com/foHj73zCV3Y/111x111",name:"Grilled Sandwich",price:"2.99",id:4}]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.MenuItems,n=t.menuItemSelected,r=t.cartItems,l=t.isSelectedFromMenu,o=t.cartTotal,i=t.isSelectedFromCart;return a.length>0?c.a.createElement("div",{className:"homepage overlay"},c.a.createElement((function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{style:{textAlign:"center",fontSize:"25px"}},c.a.createElement("p",null,"Available Options")),c.a.createElement("hr",null),a.map((function(t){return c.a.createElement(h,{key:t.id,foodItem:t,handleClickToSelect:e.handleClickToSelect,menuItemSelected:n,isSelected:l})})))}),null),c.a.createElement(S,{handleAddToCart:this.handleAddToCart,handleRemoveFromCart:this.handleRemoveFromCart,isSelectedFromMenu:l,isSelectedFromCart:i}),c.a.createElement(p,{cartItems:r,handleClickToSelect:this.handleClickToSelect,getCartItemSelected:this.getCartItemSelected,cartTotal:o})):c.a.createElement((function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container cartEmpty"},c.a.createElement("h2",null,"Food Items are comming soon...")))}),null)}}]),t}(n.Component));l.a.render(c.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bdda30d8.chunk.js.map
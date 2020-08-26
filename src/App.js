
// feature 1
import React,{Component} from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store';
import {Provider} from "react-redux";

import './App.css';

class  App extends Component {

constructor(){
super();

this.state={

 cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
 

}

}


// createorder
createOrder=(order)=>{
 alert(`need to save order for ${order.name}`)
}


// remove from cart

removeFromCart=(item)=>{
  console.log(`item removed ${item._id}`);

  const cartItems= this.state.cartItems.slice();
  

  this.setState({
    cartItems:cartItems.filter(x=>x._id !==item._id)
  },()=>{
    // localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
  })



  localStorage.setItem('cartItems', JSON.stringify(cartItems.filter(x=>x._id !==item._id)));
}

// add to cart
addToCart=(product)=>{
 console.log(`in cart :${product._id}`);
 let alreadyInCart=false;

 const cartItems= this.state.cartItems.slice();
 cartItems.forEach((item)=>{
   if(item._id===product._id){
     item.count++;
     alreadyInCart=true;
   }
 })

 if(!alreadyInCart){
  cartItems.push({...product, count:1})


 }

 this.setState({
   cartItems:cartItems
 })

localStorage.setItem('cartItems', JSON.stringify(cartItems));

}

// sort products fuction
// sortProducts=(e)=>{
// const sortItem = e.target.value;
// const sortRes = this.state.products.sort((a,b)=>{

//  if(sortItem===''){
//   return a.nim>b.nim ?1:-1
//  }

//  if(sortItem==='lowest'){
//   return a.price>b.price ?1:-1
//  }

//  if(sortItem==='highest'){
//   return a.price<b.price ?1:-1
//  }

// })
// this.setState({
//   sort:e.target.value,
//   products:sortRes
// })
// }


// filterProducts=(e)=>{
//  console.log(e.target.value);

//  if(e.target.value===''){
//     this.setState({
//       size:e.target.value,
//       products:data.products
//     })
//  }

//  else{
//   this.setState({
//     size:e.target.value,
//     products:data.products.filter(product=>{
//       return product.availableSizes.indexOf(e.target.value)>=0
//     })
//   })
//  }



// }






  render(){

    return (
      <Provider store={store}>
               <div className="grid-container">
        <header>
          <a href="/">React shopping cart</a>
        </header>
        <main>
         <div className="content">
           <div className="main">
           
           <Filter 
           
           />
            <Products products={this.state.products} addToCart={this.addToCart} />
           </div>

           <div className="sidebar">
             <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}
              createOrder={this.createOrder}
             
             />
           </div>
         </div>
        </main>

        <footer>
          All rights reserved
        </footer>
      </div>
      </Provider>
 

  )
  }

}

export default App;


// next 11
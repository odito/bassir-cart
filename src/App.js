
// feature 1
import React,{Component} from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';



import './App.css';

class  App extends Component {

constructor(){
super();

this.state={
 products:data.products,
 size:'',
 sort:''

}

}


// sort products fuction
sortProducts=(e)=>{
const sortItem = e.target.value;
const sortRes = this.state.products.sort((a,b)=>{

 if(sortItem===''){
  return a.nim>b.nim ?1:-1
 }

 if(sortItem==='lowest'){
  return a.price>b.price ?1:-1
 }

 if(sortItem==='highest'){
  return a.price<b.price ?1:-1
 }

})
this.setState({
  sort:e.target.value,
  products:sortRes
})
}


filterProducts=(e)=>{
 console.log(e.target.value);

 if(e.target.value===''){
    this.setState({
      size:e.target.value,
      products:data.products
    })
 }

 else{
  this.setState({
    size:e.target.value,
    products:data.products.filter(product=>{
      return product.availableSizes.indexOf(e.target.value)>=0
    })
  })
 }



}






  render(){

    return (
   
      <div className="grid-container">
        <header>
          <a href="/">React shopping cart</a>
        </header>
        <main>
         <div className="content">
           <div className="main">
           
           <Filter count={this.state.products.length} size={this.state.size}
           sort={this.state.sort} 
           filterProducts={this.filterProducts}
           sortProducts={this.sortProducts}
           
           />
            <Products products={this.state.products} />
           </div>

           <div className="sidebar">
             cart items
           </div>
         </div>
        </main>

        <footer>
          All rights reserved
        </footer>
      </div>

  )
  }

}

export default App;


// next 5
import React, { Component } from 'react';
import formatCurrency from '../util';
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/productActions';


 class Products extends Component {



componentDidMount(){
    this.props.fetchProducts();
}



    render() {
return (
    <div>
  
  {
  !this.props.products ? <div>Loading....</div>:
  
  <ul className="products">
  {this.props.products.map(product=>{
return(
<li key={product._id}>
  <div className="product">
      <a href={`#${product._id}`}>
          <img src={product.image} alt={product.title} />
          <p>
              {product.title}
          </p>
      
      </a>
      <div className="product-price">
          <div className="">
              { formatCurrency(product.price) }
          </div>
          <button className="button primary" onClick={()=>this.props.addToCart(product)}>
              Add to cart
          </button>
      </div>
  </div>
</li>
)
  })}
</ul>
  }

     
    </div>
)
    }
}

export default connect((state)=>({products:state.products.filterItems}), {fetchProducts} )(Products);
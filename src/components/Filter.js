import React, { Component } from 'react'
import { connect } from 'react-redux';
import {filterProducts} from '../actions/productActions';
import {sortProducts} from '../actions/productActions';

 class Filter extends Component {
    render(props) {

  const {filterProducts, sortProducts,size,sort}=this.props;

        return (


!this.props.filterProducts?
<div>loading...</div>:

           <div className="filter">
                <div className="filter-result">
               {this.props.filterProducts.length} Products
            </div>

            <div className="filter-sort">
                Order {" "} <select value={sort} onChange={(e)=>this.props.sortProducts(this.props.filterProducts, e.target.value)}>
                      <option value="">latest</option>
                      <option value="lowest">Lowest</option>
                      <option value="highest">Highest</option>

                      </select>
            </div>

            <div className="filter-size">
                Filter {" "}  <select value={size} onChange={(e)=>this.props.filterProducts(this.props.products, e.target.value)}>
                      <option value="">All</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>

                       </select>
            </div>
           </div>
        )
    }
}


export default connect((state=>({
    size:state.products.size,
    sort:state.products.sort,
    products:state.products.items,
    filterProducts:state.products.filteredItems
})),{
    filterProducts,
    sortProducts
})(Filter);
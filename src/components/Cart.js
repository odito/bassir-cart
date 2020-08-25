import React, { Component } from 'react';
import formatCurrency from '../util';


export default class Cart extends Component {

constructor(props){
    super(props);
 
    this.state={
        name:"",
        email:'',
        address:"",
        showCheckout:false
    }
}

handleInput=(e)=>{
    console.log(e.target.value);
this.setState({
    [e.target.name]:e.target.value
})
}

createOrder=(e)=>{
    e.preventDefault();

const order = {
    name:this.state.name,
    email:this.state.email,
    address:this.state.address,
    cartItems:this.props.cartItems,

}

this.props.createOrder(order);
}



    render(props) {
  const {cartItems}=this.props;



        return (
            <div>
               {cartItems.length===0?
               <div className="cart cart-header">
                   cart is empty
               
               </div>:
               <div className="cart cart-header">
                 
                  you have {cartItems.length} in cart 
              </div>} 

              <div>
    <div className="cart">
        <ul className="cart-items">
            {cartItems.map(item=>{
                return <li key={item._id}>
                    <div>
                        <img src={item.image} alt={item.title}/>
                    </div>
                    <div>
                        <div>
                            {item.title}
                        </div>
                        <div className="right">
                            {formatCurrency(item.price)}x {item.count} {" "}
                        <button className="button" onClick={()=>this.props.removeFromCart(item)}>remove</button>
                        </div>
                    
                    </div>
                </li>
            })}
        </ul>
    </div>
    {cartItems.length !==0 && (
        <div>
        <div className="cart">
        <div className="total">
            <div>
                Total:{" "}
            {formatCurrency(cartItems.reduce((a,c)=>a + (c.price *c.count),0)) }
            </div>
            <button onClick={()=>this.setState({showCheckout:true})} className="button primary">proceed</button>
         
        </div>
    </div>
 

    {this.state.showCheckout && (
        <div className="cart">
          <form onSubmit={this.createOrder} >
           <ul className="form-container">
               <li>
                   <label htmlFor="">Email</label>
                   <input name="email" type="email" required onChange={this.handleInput}  />
               </li>

               <li>
                   <label htmlFor="">Name</label>
                   <input name="name" type="text" required onChange={this.handleInput}  />
               </li>

               <li>
                   <label htmlFor="">Address</label>
                   <input name="address" type="text" required onChange={this.handleInput}  />
               </li>
               <button className="button primary" type="submit">checkout</button>
           </ul>
          </form>
        </div>
    )}

   </div>

    )}
  
              </div>


           


            </div>
         
        )
    }
}

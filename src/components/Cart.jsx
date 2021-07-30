import React, { useState } from 'react'
import {Slide} from 'react-awesome-reveal'
export default function Cart({cartItems,removeFromCart,createOrder}) {
    const [checkout,setCheckout] = useState(false)
    const [state,setState] = useState({
        email:"",
        name:"",
        address:""
    })


    const handleInput = (e) => {
        setState({ [e.target.name]: e.target.value })
    }

    

    return (
        
        <div>
            {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}   
            
            <div className="">
                
                <div className="cart">
                <Slide cascade={true}>
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div>
                                    <div>
                                        {item.title}

                                    </div>
                                    <div className="right">
                                        ${item.price} x {item.count}{" "} 
                                        <button className="button" onClick={() => removeFromCart(item)}>
                                            Remove
                                        </button>

                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                    </Slide>

                </div>
                {cartItems.length !== 0 && (
                    <div>
                    <div className="cart">

                    <div className="total">
                        <div>
                            Total:{" "}${cartItems.reduce((a,c) => a + c.price*c.count,0)
                            }
                        </div>
                        <button onClick={() => setCheckout(true)} className="button primary">Proceed</button>
                    </div>
                </div>
                {checkout && (
                    <Slide direction="right">
                    <div className="cart">
                        <form onSubmit={(e) => {
        e.preventDefault();
        const order = {
            name: state.name,
            email: state.email,
            address: state.address,
            cartItems: cartItems
        }
        createOrder(order)}}>
                            <ul className="form-container">
                                <li>
                                    <label>Email</label>
                                    <input name="email" type="email" required onChange={handleInput} />
                                </li>

                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text" required onChange={handleInput} />
                                </li>

                                <li>
                                    <label>Address</label>
                                    <input name="address" type="text" required onChange={handleInput} />
                                </li>

                                <li>
                                    <button type="submit" className="button primary">Checkout</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                    </Slide>
                    
                )}
                </div>
                )}
                
            </div>
            
            
        </div>
    )
}

import React, { useEffect, useState } from "react";
import data from "./data.json"
import Products from "./components/Products"
import Filter from "./components/Filter";
import Cart from "./components/Cart";
function App() {

  const initState = {
      products: data.products,
      size:"",
      sort:""
    };


    const [state,setState] = useState(initState)
    const [cartItems,setCartItems] = useState(localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [] )

  const filterProducts = (event) => {
    console.log(event.target.value)
    if(event.target.value === ""){
      setState({size:event.target.value, products:data.products})
    } else{
      setState({
        size:event.target.value,
        products: data.products.filter((product) => product.availableSizes.indexOf(event.target.value)>=0)
      })
    }
    
  }

  const sortProducts = (event) => {
    const sort = event.target.value
    //console.log(event.target.value)
    setState({
      sort:sort,
      products: state.products
      .slice()
      .sort((a,b) => 
        sort === "lowest" 
        ? ((a.price > b.price)?1:-1)
        : sort === "highest"
        ? ((a.price < b.price)?1:-1)
        : (a._id < b._id)?1:-1
      )
    })
  }
  const removeFromCart = (product) => {
    const nowCartItems = cartItems.slice()
    console.log(nowCartItems)
    
    setCartItems(nowCartItems.filter((x)=> x._id !== product._id))
    localStorage.setItem("cartItems",JSON.stringify(nowCartItems.filter((x)=> x._id !== product._id)))
    console.log(cartItems)
  }
  const addToCart = (product) => {
    const nowCartItems = cartItems.slice()
    let alreadyInCart = false
    nowCartItems.forEach((item) => {
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product,count:1})
      
    }
    setCartItems(cartItems)
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  } 
  
  const createOrder = (order) => {
    alert("jsdn" + order.name)
  }

  
    return (
      <div className="grid-container">
        <header>
        <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content"> 
            <div className="main">
              <Filter count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
              />
              <Products products={state.products}
              addToCart={addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart cartItems={cartItems}
              removeFromCart={removeFromCart}
              createOrder={createOrder}/>
            </div>
          </div>
        </main>
        <footer>
          All right is reserved.
        </footer>
        
      </div>
  
    );
  }

export default App;

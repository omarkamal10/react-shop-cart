import React, { useState } from "react";
import data from "./data.json"
import Products from "./components/Products"
import Filter from "./components/Filter";
function App() {

  const initState = {
      products: data.products,
      size:"",
      sort:""
    };
    const [state,setState] = useState(initState)
    console.log(state.products)

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
              <Products products={state.products} />
            </div>
            <div className="sidebar">
              cart
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

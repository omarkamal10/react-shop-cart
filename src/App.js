import React from "react";
import data from "./data.json"
import Products from "./components/Products"
function App() {
  const state = {
      products: data.products,
      size:"",
      sort:""
    };

    return (
      <div className="grid-container">
        <header>
        <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content"> 
            <div className="main">
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

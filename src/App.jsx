import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Products from "./components/product/Products";
import addProduct from "./actions/productAction"
function App() {
  const [productState, setProductState] = useState({
    name: '',
    price: 100
  })

  const dispatch = useDispatch()

  const createProduct = () => {
    const newProduct = {
      ...productState, 
      id: Date.now()
    }

    dispatch(addProduct(newProduct))
  }

  return (
    <div className="App">
      <input type="text" value={productState.name} onChange={(e) => setProductState({...productState, name: e.target.value})}/>
      <input type="text" value={productState.price} onChange={(e) => setProductState({...productState, price: e.target.value})}/>
      <button onClick={createProduct}>создать товар</button> 
    
      <Products/>
    </div>
  );
}

export default App;

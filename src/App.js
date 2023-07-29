import React, { useState } from 'react';
import './App.css';
import FormInput from './FormInput';
import OrderList from './OrderList';


function App() {
  const[productsList, setProductsList]= useState([]);
  const addProductHandler=(id, price, pname)=>{
  const newProduct= {id: id, price: price, name: pname};
  const updatedProduct= [...productsList, newProduct]
  setProductsList(updatedProduct)
  
  localStorage.setItem(id, JSON.stringify(updatedProduct));
  }


const deleteProductHandler=(id)=>{

    localStorage.removeItem(id);
    setProductsList(prevProducts=>{
      return prevProducts.filter(productsList=> productsList.id !==id)
    });
  
}

  return (
    <React.Fragment>
      <FormInput onSubmitProduct={addProductHandler}/>
      <OrderList products={productsList} onDeleteProduct={deleteProductHandler}/>
    </React.Fragment> 
  );
}


export default App;

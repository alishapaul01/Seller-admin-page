import React, { useState } from 'react';
import './App.css';
import FormInput from './FormInput';
import OrderList from './OrderList';


function App() {
  const[productsList, setProductsList]= useState([]);
  const[totalAmount, setTotalAmount]= useState(0);
  const addProductHandler=(id, price, pname)=>{
  const newProduct= {id: id, price: price, name: pname};
  const updatedProduct= [...productsList, newProduct]
  setProductsList(updatedProduct)
  
  localStorage.setItem(id, JSON.stringify(updatedProduct));
  }


const deleteProductHandler=(id)=>{

    localStorage.removeItem(id);
    setProductsList([]);
  
}
const totalAmountHandler=()=>{
  const totalAmount =productsList.reduce((total, productsList)=>{
    return total+ productsList.price
  },0)
  setTotalAmount(totalAmount);

}

  return (
    <React.Fragment>
      <FormInput onSubmitProduct={addProductHandler} total={totalAmountHandler}/>
      <OrderList products={productsList} onDeleteProduct={deleteProductHandler}/>
    </React.Fragment> 
  );
}


export default App;

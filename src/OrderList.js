import React from "react";

const OrderList=(props)=>{
    const deleteProduct=(id)=>{
        props.onDeleteProduct(id);
    }
   
    return ( 
    <>
    <h1>Products: </h1>
    <ul id='products'>
        {props.products.map((product) => (
            <li key={product.id}>
            Rs {product.price}-{product.name}
            <button onClick= {()=>deleteProduct(product.id)}>Delete Product</button>
            </li>
        ))} 
    </ul>
    <h2>Total Value Worth of Products: Rs {props.total} </h2>
    </>
    )
    
}
export default OrderList;
import React from "react";

const OrderList=(props)=>{
    const deleteProduct=(id)=>{
        props.onDeleteProduct(id);
    }
    let subTotal=0;
    props.products.map((product)=>{
        return (subTotal+= parseInt(product.price))
    })
   
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
    <h2>Total Value Worth of Products: Rs {subTotal} </h2>
    </>
    )
    
}
export default OrderList;
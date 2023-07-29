import React, {useState} from "react";
import Button from "./Button";

const FormInput=(props)=>{
const [enteredId, setEnteredId]= useState('');
const [enteredName, setEnteredName]= useState('');
const [enteredPrice, setEnteredPrice]= useState('');


const idChangeHandler=(event)=>{
    setEnteredId(event.target.value);
}
const priceChangeHandler=(event)=>{
    setEnteredPrice(event.target.value);
}
const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
}

const formSubmitHandler= (event)=>{
    event.preventDefault();
    props.onSubmitProduct(enteredId,enteredPrice,enteredName);
}
return(
    <React.Fragment>
    
    <form onSubmit={formSubmitHandler}>
        <label htmlFor="id"> Product ID: </label>
        <input id='id' type="number" value={enteredId}onChange={idChangeHandler}></input>
        <label htmlFor="price"> Selling Price: </label>
        <input id='price' type="number" value={enteredPrice} onChange={priceChangeHandler}></input>
        <label htmlFor="pname"> Product Name: </label>
        <input id='pname' type="text" value={enteredName} onChange={nameChangeHandler}></input>
        <Button type='submit'> Add to bill</Button>
    </form>
    </React.Fragment>
)

}

export default FormInput;
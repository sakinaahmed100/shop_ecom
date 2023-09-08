import React from 'react'
import { styled } from 'styled-components'
import Button from"./Button"
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import AmountDiv from "./AmountDiv"

export default function CartAmountToggle({amount,setIncrease,setDecrease,id,product,color}) {
  const {ADD_TO_CART}=useCartContext();
  return (
    <>
    <AmountDiv id={id} product={product} amount={amount} color={color} setIncrease={setIncrease} setDecrease={setDecrease}></AmountDiv>

    <NavLink to="/cart">
      <div className="add_to_cart" onClick={()=>ADD_TO_CART(id,product,amount,color)}>
    <Button btnText="Add to cart"></Button>
    </div>
    </NavLink>
    </>
  )
}


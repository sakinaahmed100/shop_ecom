import { createContext, useContext, useReducer } from "react";
import Swal from "sweetalert2"
import cartReducer from "../reducer/cartReducer"
import { useEffect } from "react";


//get item from local storage
const getStorageData = () => {
  let cartLocalData = localStorage.getItem("cartData")
  if (cartLocalData == []) {
    return []
  }
  else {
    return (JSON.parse(cartLocalData))
  }
}
const initialState = {
  cart: getStorageData(),
  // cart:[],
  total_item: 0,
  subTotal: 0,
  shipping: 50000,
}

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)



const ADD_TO_CART = (id, product, amount, color) => {
  
  console.log(id,product,amount,color,"add to cart");
  dispatch({ type: "add_to_cart", payload: { id, product, amount, color } })
}
//push item to local storage
useEffect(() => {
  console.log(state.cart,"update item price sae pehlay")

  dispatch({ type: "update_item_price" })
  console.log(state.cart,"update item pricek baad")

  localStorage.setItem("cartData", JSON.stringify(state.cart))

}, [state.cart])


const deleteCartItem = (id, product) => {
  console.log(id)
  dispatch({ type: "delete_item", payload: { id, product } })
}

//clear cart
const ClearCart = () => {
  dispatch({ type: "clear_cart" })

}

//AMOUT TOGGLE
const setIncrease = (item) => {
  dispatch({ type: "increase", payload: item })

}
const setDecrease = (item) => {
  dispatch({ type: "decrease", payload: item })

}


const getAddress=(e)=>{
  state.deliveryAddress= e.target.value
}

const Success=()=>{
  if(state.deliveryAddress){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your order has been placed',
      showConfirmButton: true,
      timer: 1500
    })
    dispatch({type:"ORDER_PLACED"})

    state.cart=[]
    console.log(state.cart);
  }
 
}

return (<CartContext.Provider value={{ ...state, ADD_TO_CART, deleteCartItem, ClearCart, setIncrease, setDecrease,Success,getAddress }}>{children}</CartContext.Provider>)

}


const useCartContext = () => {
  return (useContext(CartContext))
}
export { CartContextProvider, useCartContext }


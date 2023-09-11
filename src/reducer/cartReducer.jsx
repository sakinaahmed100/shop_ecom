export default function filterReducer(state, action) {

    switch (action.type) {
      
        case "add_to_cart": {
            let {id,color,amount,product}=action.payload
            console.log("yes",action.payload);

            const doubleItem = state.cart?.filter((e) => {
                console.log(id + color);
                console.log("state==>",state,"cart=>",state.cart,"e==>",e);
                return e.id === id + color
            })
            console.log(doubleItem?.length,"doubleItem?.length");

            if (doubleItem.length!== 0) {
            console.log(doubleItem?.length,"doubleItem?.length 2");
            console.log("state==>2",state,"cart=>",state.cart);

                let updatedProduct = state.cart?.map((e) => {
                    if (e.id === id + color) {

                        let newAmount = e.amount + amount
                        if (newAmount > product.stock) {
                            newAmount = product.stock
                        }
                        return {
                            ...e,
                            amount: newAmount
                        }
                    }
                    else {
                        return e

                    }
                })
                console.log(updatedProduct);
                return {
                    ...state,
                    cart: updatedProduct

                }
            }
            else {
                console.log(id,color,product,amount,"cartReducer");
                console.log(product?.[0].name);
                let cartProduct = {
                    id: id + color,
                    name: product?.[0].name,
                    amount:amount,
                    price: product?.[0].price,
                    image: product[0].images?.[0],
                    color: color,
                    stock: product.stock

                }
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        cartProduct
                    ]
                }
            }
        }

        case "update_item_price": {
            console.log(state.cart,"update item price")
            let totalAmount = state.cart?.reduce((acc, item) => acc + item.amount, 0);
            let sub_total = state.cart?.map((e) => {
                let product = e.price * e.amount

                return (product)
            })
            let subtotalAmount = sub_total?.reduce((acc, item) => acc + item, 0);

            console.log(subtotalAmount);
            return {
                ...state,
                total_item: totalAmount,
                subTotal: subtotalAmount
            }
        }

        case "increase": {
            let updatedIncProduct = state.cart?.map((e) => {
                if (e.id === action.payload.id) {
                    let increasedAmount = e.amount + 1
                    if (e.amount === action.payload.stock) {
                        increasedAmount = e.amount
                    }
                    return {
                        ...e,
                        amount: increasedAmount
                    }
                }
                else {
                    return e
                }

            })
            return {
                ...state,
                cart: updatedIncProduct
            }
        }
        case "decrease": {
            let updatedDecProduct = state.cart?.map((e) => {
                if (e.id === action.payload.id) {
                    let decreasedAmount = e.amount - 1
                    if (e.amount === 1) {
                        decreasedAmount = e.amount
                    }
                    return {
                        ...e,
                        amount: decreasedAmount
                    }
                }
                else {
                    return e
                }

            })
            return {
                ...state,
                cart: updatedDecProduct
            }

        }
        case "delete_item": {
            console.log(action.payload.id)

            const updatedItems = state.cart?.filter((item) => {
                console.log(item.id)
                console.log(action.payload.id)

                return item.id !== action.payload.id
            })
            console.log(updatedItems);
            return {
                ...state,
                cart: updatedItems
            }
        }

        case "clear_cart":
            return {
                ...state,
                cart: [],
            }

            case "ORDER_PLACED":{
                return{
                    ...state,
                    cart: [],
                    deliveryAddress:""
                }
            }

        default:
    }
    return { ...state }
}
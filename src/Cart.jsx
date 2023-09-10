import { styled } from 'styled-components'
import { useCartContext } from './context/cartContext'
import CartItem from './components/cartItem'
import Button from "./components/Button.jsx"
import { NavLink } from 'react-router-dom'
import FormatPrice from './components/FormatPrice'

export default function Cart() {

  const { cart, ClearCart, subTotal, shipping, PlaceOrder } = useCartContext()

  return (
    <Wrapper>


      {
        (cart?.length === 0) ?
          <div className='emptyDiv'>
            <h3>Your cart is empty</h3>
            <div><img src="/images/cart.jpg" alt="" /></div>
          </div>
          :
          <div className="cartDiv">
            <div className="divHeadings grid-five-col">
              <div>
                <p>ITEM(S)</p>

              </div>
              <div>
                <p>PRICE</p>

              </div>
              <div>
                <p>QUANTITY</p>

              </div>
              <div>
                <p>SUBTOTAL</p>

              </div>
              <div>
                <p className='delete'>DELETE</p>

              </div>
            </div>
            <div className="cartData">

              {cart?.map((item,i) => {
                return (<CartItem  key={i}{...item}>

                  </CartItem>)
              })}

            </div>

            <div className="buttons">
              <NavLink to="/products"><div className='continue'><Button btnText="Continue Shopping"></Button></div></NavLink>
              <div onClick={ClearCart}> <Button btnText="CLEAR CART"></Button></div>
            </div>

            <div className="total_price">
              <div>
                <p>
                  Sub-total: <b>
                    <FormatPrice price={subTotal}></FormatPrice>
                  </b>
                </p>
                <p>Shipping Fee: <b>Rs. {shipping / 100}</b></p>
                <p className='orderTotal'>Order Total: <b><FormatPrice price={subTotal + shipping}></FormatPrice></b></p>
              </div>
              <span onClick={PlaceOrder}><NavLink to="/confirmOrder"> <Button btnText="Place Order"></Button></NavLink></span>

            </div>
          </div>


      }
    </Wrapper>
  )
}
const Wrapper = styled.div`
padding: 2vh 10vw;
.emptyDiv{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
img{
  width: 30vw;
}
}
h3{
  color:${props => props.theme.colors.primary};
  text-align: center;
  

}
  .cartDiv{
    .grid-five-col{
display: grid;
grid-template-columns: repeat(5,1fr);
gap: 1rem;

div{
  color:${props => props.theme.colors.primary};
  display: flex;
  justify-content: flex-start;
}
    }
  }
  .cartData{
    border-top: .5px solid ${props => props.theme.colors.secondary};

  }
 .buttons{
  display: flex;
  justify-content: space-between;
padding-top: 5vh;
  .continue{
    button{
  background-color:${props => props.theme.colors.primary};
}
  }
  
 }
 .total_price{
  display: flex;
    justify-content: flex-end;
    margin-top: 2vh;
    align-items: flex-end;
    flex-direction: column;
gap: .5rem;
    div{
    background-color:${props => props.theme.colors.primaryLight};
    padding: 1rem;
    p{
    line-height: 1.5;

    }

  }
   

    .orderTotal{
      margin: 1vh 0vw;
      padding-top:1vh  ;
border-top: .5px solid ${props => props.theme.colors.primary} ;
    }

  }

  @media(max-width:750px){
    .delete{
      display: none;
    }

    .divHeadings{
      gap: .5rem;
    }
  }

  @media(max-width:500px){
   padding: 2vh 5vw;
   .divHeadings{
      font-size: .9rem;
    }
  }

  @media(max-width:400px){
   padding: 2vh 3vw;
   .divHeadings{
      font-size: .7rem;
    }
    .total_price{
      font-size: .8rem;
      margin-right: 3vw;

      div{
      padding: .5rem!important;

    }
    }
  }

  @media(max-width:270px){
   padding: 2vh 1vw;
   .divHeadings{
      display: none !important;
    }
    .buttons{
      font-size: .8rem;
      justify-content: center;
      gap: .2rem;
    }
    .total_price{
      font-size: .7rem;
      margin-right:10vw;

      div{
      padding: .3rem!important;

    }
    }
  }
`

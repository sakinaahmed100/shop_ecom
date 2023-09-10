import { styled } from "styled-components"
import { useCartContext } from "./context/cartContext"
import { useEffect } from "react"
import { NavLink } from 'react-router-dom'
import Button from "./components/Button"

export default function ConfirmOrder() {
    const { cart,Success,getAddress } = useCartContext()
useEffect(()=>{
    if(cart?.length===0){
        console.log("hj");
        location.pathname="/products"
    }
},[cart])

    return (
        <>
            <Wrapper>
                <h2>Your Order Summary</h2>
                <div className='formDiv'>
                    <form action="https://formspree.io/f/xwkdkark" method='POST'>
                        <input className='formInput'onChange={(e)=>getAddress(e)} type="address" name='address' placeholder='Enter address for delivery' required autoComplete='off' />
                        <div>
                            {cart?.map((item, index) => (
                                <div key={index}>
                                    <textarea
                                        className="cartTextArea"
                                        name={`details-${index}`}
                                        cols="30"
                                        rows="4"
                                        readOnly
                                        value={`Name: ${item.name}\nAmount: ${item.amount}\nPrice: ${item.price}\nColor: ${item.color}`}
                                        required
                                        autoComplete="off"
                                    ></textarea>
                                </div>
                            ))}
                        </div>
              <NavLink to="/products"><div className='continue'><Button btnText="Continue Shopping"></Button></div></NavLink>
                        <input className='btnconfirmOrder' onClick={Success} type="submit" value="Confirm Order" />
                    </form>

                    <div className="image">
                        <img src="/images/order.png" alt="" />

                    </div>
                </div>
            </Wrapper>
        </>
    )

}

const Wrapper = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5vh;
justify-content: center;
background-color: rgba(230, 238, 247, 0.699);
padding: 10vh 0;

h2{
    color: ${props => props.theme.colors.primary};
    margin-bottom: 5vh;
}
.formDiv{
    display: flex;
    align-items: center;
gap: 1rem;
padding: 0 5vw;
border-right: 3px double ${props => props.theme.colors.primary};
border-left: 3px double ${props => props.theme.colors.primary};
    
}
.image{
        width: 15vw;

        img{
            width: 100%;
            object-fit: contain;
        }
    }
.formInput{
    margin-bottom: 3vh;
    width: 30vw;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    padding: 1vh 1vw;
    border-radius: .5rem;

}
.formInput:focus{
    outline:none;

}
.cartTextArea{
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
/* background-color:  ${props => props.theme.colors.primaryLight}; */
padding: 1vh 2vw;
border-radius: 1rem;
box-shadow: inset 1px 1px 8px 1px rgba(132, 147, 149, 0.7);
    resize: none;
    color: ${props => props.theme.colors.primary};
}
.cartTextArea:focus{
    outline:none;
}
.btnconfirmOrder{
    padding: .5rem;
    background-color:  ${props => props.theme.colors.secondary};
    border:none;
    color: white;
    margin-top: 5vh;
}

@media (max-width:760px){
    .image{
        width: 30vw;
        height: 50vh;
        overflow: hidden;

        img{
            width: 100%;
            object-fit: contain;
        }
    }   
}

@media (max-width:540px){
    .cartTextArea{
width: 45vw;
    }
    .formInput{
    margin-bottom: 3vh;
    width:40vw;
    }

    .image{
        width: 35vw;
        height: 50vh;
        overflow: hidden;
    }

    .formDiv{
        border: none;
        padding: 0 1vw;
    }
}

@media (max-width:380px){
    h2{
        font-size: 1.5rem;
    }
.image{
    display: none;
}
.cartTextArea{
    width: 60vw;
}
.formInput{
    width:60vw;
    }
}

@media (max-width:270px){
    h2{
        font-size: 1rem;
    }
    .cartTextArea{
    width: 80vw;
}
.formInput{
    width:80vw;
    }
}
`
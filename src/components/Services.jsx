import { styled } from 'styled-components'
import { TbTruckDelivery } from "react-icons/tb"
import { GiReceiveMoney } from "react-icons/gi"
import { MdSecurity } from "react-icons/md"
import { RiSecurePaymentFill } from "react-icons/ri"

export default function Services() {
    return (
        <>
            <Wrapper>
                <div className="container grid-three-col">
                    <div className="service1">
                        <div>
                        <TbTruckDelivery className='icons'></TbTruckDelivery>
                        </div>
                        <h3>Super Fast and Free Delivery</h3>
                    </div>

                    <div className='service2'>
                        <div className="shipping">
                            <div>
                            <MdSecurity className='icons'></MdSecurity>
                            </div>
                            <h3>Non-contact Shippping</h3>

                        </div>

                        <div className="guarantee">
                            <div>
                            <GiReceiveMoney className='icons'></GiReceiveMoney>
                            </div>
                            <h3>Moneyback Guarantee</h3>      
                                                  
                        </div>
                    </div>
                    <div className="service3">
                        <div>
                        <RiSecurePaymentFill className='icons'></RiSecurePaymentFill>
                        </div>
                        <h3>Super Secure Payment System</h3>
                        
                    </div>
                </div>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
.container{
    width: 100%;
box-sizing: border-box;
    /* height: 20vh; */
    padding: 0 10%;
    gap: 2rem;
    margin-top: 5%;

    }

    .service1, .service3,.shipping,.guarantee{
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color:${props => props.theme.colors.primaryLight} ;
        color: ${props => props.theme.colors.primary};

        .icons{
font-size: 1.5rem;
color:  ${props => props.theme.colors.brown};
        }
    }

    .service2{
        display: grid;
        grid-template-rows: repeat(2,1fr);
        gap: 1rem;
    }
.service1,.service3,.shipping,.guarantee{
    div{
        background-color: white;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
    }
}
@media(max-width:450px){
.container{
    display:flex;
    flex-direction: column;
}
.service1,.service3,.shipping,.guarantee{
     padding: 2vh 0;
   
}
}
`
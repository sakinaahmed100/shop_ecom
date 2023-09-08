import { styled } from 'styled-components'
import AmountDiv from './AmountDiv'
import FormatPrice from './FormatPrice';
import {MdDelete} from "react-icons/md"
import { useCartContext } from '../context/cartContext';


export default function CartItem(item) {

  const {deleteCartItem,setIncrease,setDecrease}=useCartContext()
  const { id, color, name, image, price,amount,stock } = item

  console.log(color,item);
  
  return (
    <>
        <Wrapper id={id+color} className="grid-five-col">
          <div className='product'>
            <div className="itemImg">
              <img src={image} alt="" />
            </div>

            <div className="nameText">
              <p>{name}</p>
              <p className='color'>color: <span style={{ width:".8rem", height:".8rem", background:color, borderRadius:"50%" }} ></span></p>
            </div>

          </div>
          <div>
            <p><FormatPrice price={price}></FormatPrice></p>

          </div>
          <div>
            <p> <AmountDiv setIncrease={()=>setIncrease(item)} setDecrease={()=>setDecrease(item)} amount={amount}></AmountDiv>
            </p>

          </div>
          <div>
            <p><FormatPrice price={amount*price}></FormatPrice></p>

          </div>
          <div>
            <p onClick={()=>deleteCartItem(id,item)}><MdDelete className='icons'></MdDelete></p>

          </div>
        </Wrapper>

    </>
  )
}

const Wrapper = styled.div`

display: grid;
grid-template-columns: repeat(5,1fr);
gap: 1rem;
margin-top: 1.5vh;
align-items: center;
.itemImg{
  width: 7vw;
  padding-right: 5px;
  img{
    width: 100%;
    object-fit: cover;
  }
}
.nameText{
  display: flex;
  flex-direction: column;
  font-size: .8rem;

  .color{
display: flex;
align-items: center;
  }
  div{
    display: inline-block;
  }
}
.icons{
  color: red;
  font-size: 1.3rem;
}
@media(max-width:750px){
  gap: .5rem!important;
  font-size: .8rem;
    .itemImg{
      width: 10vw;
    }
    .product{
      display: flex;
      flex-direction: column;
    }
  }

  @media(max-width:400px){
  gap: .2rem!important;
  font-size: .7rem;
    .itemImg{
      width: 15vw;
    }
    .product{
      display: flex;
      flex-direction: column;
    }
  }

  @media(max-width:270px){
grid-template-columns: repeat(3,1fr) !important;
  }
  `
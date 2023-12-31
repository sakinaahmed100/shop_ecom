import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMyContext } from './context/productContext';
import { styled } from 'styled-components'
import FormatPrice from './components/FormatPrice';
import { TiTick,TiStar } from "react-icons/ti"
import CartAmountToggle from './components/CartAmounttoggle';

export default function SingleProduct() {
  const { id } = useParams();
  const [color, setColor] = useState();
  const [imageLarge, setImage] = useState();
  const [amount, setAmount] = useState(1);
  const [stockk, setStock] = useState();
console.log(imageLarge);
  const setIncrease = () => {
    if (stockk && stockk > amount) {
      setAmount(amount + 1)
    }
  }

  const setDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1)

    }
  }

  const { getSingleData, isSingleLoading, singleProductObj } = useMyContext();

  useEffect(() => {
    getSingleData(`${id}`)
    console.log(id)
  }, [])

  if (isSingleLoading) {
    return (
      <div>...loading</div>
    )
  }
  useEffect(() => {
    if (singleProductObj && Array.isArray(singleProductObj) && singleProductObj.length > 0) {
      const { images, stock, colors } = singleProductObj[0];
  
      if (images && images.length > 0) {
        setImage(images[0]);
      }
  
      setStock(stock);
  
      if (stock && stock > 0) {
        setColor(colors?.[0]);
      }
    }
  }, [singleProductObj]);
    if (Array.isArray(singleProductObj) && singleProductObj.length > 0) {
      const { id, name, company, price, colors, description, stock, stars, reviews, images } = singleProductObj[0];
      console.log(singleProductObj,id,name,price,images)

    // }
    
 
    return (
      <>
        <Wrapper>
          <div className="container grid-two-col">
            <div className="images">
              <div className="grid_four">
                {images?.map((e,i) => {
                  console.log(e);
                  return (
                    <div key={i}  className="imgs" onClick={() => setImage(e)}><img src={e} alt="" /></div>
                  )
                })}
              </div>
              <div className="main_img">
                <img src={imageLarge} alt="" />
              </div>
            </div>
            <div className="data">
              <h3 className='name'>{name}</h3>
              <p className='ratings'><span>{stars}<TiStar></TiStar></span><span>({reviews})</span></p>
              <p className="price">MRP:<s><FormatPrice price={eval(price * 1.1)}></FormatPrice></s></p>
              <p className='deal'>deal of the day: <FormatPrice price={eval(price)}></FormatPrice></p>
              <p className='description'>{description}</p>
              <p className='stock'>Available:<u><b>{stock > 0 ? "In Stock" : "Out Of Stock"}</b></u></p>
              <p className='id'> ID:{id}</p>
              <p className='brand'>Brand:{company}</p>
              <hr />
              <p>colors:
                {colors?.map((e) => {
                  console.log(e)
                  return (
                    <span key={e} className={color === e ? "active color" : "color"} onClick={() => setColor(e)} style={{ backgroundColor: e }}>{color === e ? <TiTick style={{ color: "white" }}></TiTick> : null} </span>
                  )
                })}</p>


              {/* //add to cart */}
              <CartAmountToggle id={id} product={singleProductObj} 
              // name={name}
              color={color} 
              amount={amount} 
              setIncrease={setIncrease} 
              setDecrease={setDecrease}>

              </CartAmountToggle>


            </div>
          </div>
        </Wrapper>
      </>)
  }
}

const Wrapper = styled.section`
  .container{
    padding: 4vh 15vw;
    display: grid;
    gap: 2vw;
.imgs{
  width: 9vw;
  height: 9vh;
  overflow: hidden;
}
    img{
        width: 100%;
        object-fit: cover;
      }

    .images{
      display: grid;
  grid-template-columns: .2fr .8fr;
  align-items: center;
  grid-column-gap: 1vw;
    }
    .data{
      padding: 0vh 1vw;
      color: ${props => props.theme.colors.primary};
      border:1px solid ${props => props.theme.colors.primaryLight};
      display: grid;
      justify-items: start;
      min-height: 70vh;
      padding: 0.5rem;

    }

    .grid_four{
      display: grid;
  grid-row-gap: 3vh;

     
    }
    .services{
      background-color: white;

    }
  }
  .description ,.stock{
    font-size: .8rem;
    line-height: 1.1rem;
  }
  .name{
    text-transform: capitalize;
    font-weight: bold;
  }
  .ratings, .id{
    font-size: .7rem;
    display:flex;
    align-items: center;
    text-align: center;
  }
  .price{
    font-size:.7rem;
    font-weight: bold;
  }

  .deal, .brand{
    font-size:.8rem;
    font-weight: bolder;
text-transform: capitalize;
  }
  .color{
    border-radius: 50% 50%;
    width: 1rem;
    height: 1rem;
    display: inline-block;
    margin-left: .5rem;
    opacity:.5;
  }
  .active{
    opacity: 1;
  }
  hr{
    width: 100%;
    height: 1px;
  }
`


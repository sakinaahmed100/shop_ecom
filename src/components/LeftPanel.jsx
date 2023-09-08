import { styled } from 'styled-components'
import { useFilterContext } from '../context/filterContext'
import { TiTick } from 'react-icons/ti'
import FormatPrice from './FormatPrice'
import Button from "./Button"

export default function LeftPanel() {
  const { Search, removeFilters, filters: { color, price, minPrice, maxPrice }, all_products } = useFilterContext()
  const getUniqueData = (data, type) => {
    let uniqueArray = data?.map((e) => {
      return e[type]
    })
    return uniqueArray = ["All", ...new Set(uniqueArray)]

  }

  const getUniqueCategory = getUniqueData(all_products, "category")
  const getUniqueCompany = getUniqueData(all_products, "company")
  const getUniqueColors = getUniqueData(all_products, "colors")


  let uniqueColor = getUniqueColors.flat()
  uniqueColor = [...new Set(uniqueColor)]

  return (
    <>
      <Wrapper>
        <div className='filter_search'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="text" placeholder='Search...' onChange={Search}
            // value={text}
            />
          </form>
        </div>
        <div className="category">
          <h5>Categories</h5>

          <div className="categories">
            {getUniqueCategory?.map((e, id) => {
              return (<button
                key={id}
                type='button'
                onClick={Search}
                name="category"
                value={e}>{e}</button>)
            })}
          </div>
        </div>

        <div className="companies">
          <h3 className='companyHeading'>Company:</h3>
          <form action="#">
            <select name="company"
              onClick={Search} id="">
              {getUniqueCompany?.map((e, id) => {
                return (<option
                  key={id}
                  value={e}>{e}</option>)
              })}
            </select>
          </form>
        </div>

        <div className="colors">
          <h3 className='colorsHeading'>Colors:</h3>
          {uniqueColor?.map((e, id) => {
            if (e === "All") {
              return (<button
                key={id}
                type="button"
                value={e}
                name='color'
                onClick={Search}
                className='allBtn'
              > All</button>)
            }

            return (<button
              key={id}
              type="button"
              value={e}
              name='color'
              onClick={Search}
              className={color === e ? "button active" : "button"}
              style={{ backgroundColor: e }}>
              {color === e ? <TiTick style={{ color: "white" }}></TiTick> : null}


            </button>)


          })}
        </div>

        <div className="price">
          <h3 className='priceHeading'>Price:</h3>
          <p><FormatPrice price={price}></FormatPrice></p>
          <input type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            name='price'
            onChange={Search} />
        </div>

        <div onClick={removeFilters} className="clearFilters">
          <Button btnText="REMOVE FILTERS"></Button>
        </div>

      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`

  grid-row-start: span 1;
  grid-row-end: span 3;
padding: 1rem 0rem;
display: inline-block;
height: 100%;
box-sizing: border-box;
input{
  width: 12vw;
  padding: 0.2rem .5rem;
  border-radius: 0.3rem;
  border: 0.2px solid ${props => props.theme.colors.primary} ;
 margin-right: .3rem;

  
}
input:focus{
  border: 1px solid  ${props => props.theme.colors.secondary};
outline: none;
   }

   .categories{
    display:flex;
    flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
   padding: 1rem .2rem;

    button{
 background-color: white;
    border: none;
   text-transform: capitalize;

    }
   }

   .companies{
    margin: 1vh 0vw;

    .companyHeading{
      font-weight: 300;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    
    }
    select{
        padding: .3rem;
        border-radius: 5px;
      }
   }
   option{
    text-transform: capitalize;
    padding: 1rem;

   }
   .colors{
    padding-bottom: 1rem;
    .button{
      border-radius: 50% 50%;
  border: 0.2px solid ${props => props.theme.colors.primary} ;
      width: .8rem;
      height: .8rem;
      border: none;
      margin-right: .3rem;
      opacity: .5;
    }
    .active{
      opacity: 1;
    }
   }
   .colorsHeading,.priceHeading{
    font-weight: 300;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    
   }
   .allBtn{
  border: 1px solid ${props => props.theme.colors.primary} ;
  width: 1.5rem;
border-radius: 3px;
margin-right: 0.5rem;
text-align: center;
   }

   @media(max-width:550px){
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  input{
    width: 30vw;
  }
  .categories{
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
  .category{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: underline;
  }
  .filter_search,.colors,.category,.price,.companies{
    border: 1px solid ${props => props.theme.colors.primaryLight} ;
    box-shadow: inset 2px 2px 16px 1px rgba(151, 154, 182, 0.363);
    padding: 1rem;
    border-radius: 1rem;

  }
  .clearFilters{
    width: 50vw;
  }
}
@media(max-width:550px){
  .filter_search,.colors,.category,.price,.companies{
    padding: .5rem;

  }
}
`
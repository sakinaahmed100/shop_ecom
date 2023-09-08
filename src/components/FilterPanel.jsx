import { styled } from 'styled-components'
import { BsFillGridFill, BsList } from "react-icons/bs"
import { useFilterContext } from '../context/filterContext'


export default function FilterPanel() {
    const { grid_view, setGridView, setListView,filtered_products,sort } = useFilterContext()

    return (
        <>
            <Wrapper>
                <div className="listGrid">
                    <button className={grid_view ? "active btn" : "btn"} onClick={setGridView}>
                        <BsFillGridFill className='icon'></BsFillGridFill>
                    </button>
                    <button className={!grid_view ? "active btn" : "btn"} onClick={setListView}>
                        <BsList className="icon"></BsList>
                    </button>

                </div>
                <div className="totalProducts">{filtered_products?.length} products available</div>
                <div className='useless'></div>
                <div className="filterOptions">
                    <form action="#">
                        <label htmlFor="sort">
                        </label>

                            <select name="sort" id="sort" onClick={sort}>
                                <option value="lowest">Price(low to high)</option>
                                <option value="#" disabled></option>
                                <option value="highest">Price(high to low)</option>
                                <option value="#" disabled></option>
                                <option value="a-z">(a-z)</option>
                                <option value="#" disabled></option>
                                <option value="z-a">(z-a)</option>
                            </select>
                    </form>
                </div>


            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
  grid-row-start: span 1;
  grid-row-end: span 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
.listGrid{
    display:flex;
    gap:.3rem;

}
button{
    display:grid;
    place-items:center;
}
.btn{
    border:.5px solid ${props => props.theme.colors.primary};
 background-color:${props => props.theme.colors.primaryLight} ;
 width: 1.2rem;
 height: 1.2rem;

 .icon{
    font-size: .8rem;
 }
}
.useless{
    display: none;
}
.active{
    background-color:${props => props.theme.colors.primary} ;

    .icon{
        color:${props => props.theme.colors.primaryLight} ;
        
    }

}
select{
    padding: .2rem;
}
option{
    color:${props => props.theme.colors.primary} ;

}

@media(max-width:550px){
  display: grid;
  grid-template-columns: 1fr 3fr;
.totalProducts{
    font-size: .7rem;
}
.listGrid{
    margin-right: .2vw;
}

.useless{
    display: flex;
}
}
`

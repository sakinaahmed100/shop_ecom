
import { styled } from 'styled-components'
import LeftPanel from "./components/LeftPanel"
import FilterPanel from "./components/FilterPanel"
import ProductsPanel from "./components/ProductsPanel"

export default function Products(){
    return (
      <>
        <Wrapper>
          <div className="mainProducts">
            <LeftPanel ></LeftPanel>
            <FilterPanel ></FilterPanel>
            <ProductsPanel className="grid-three-col"></ProductsPanel>
          </div>

        </Wrapper>
      </>
    )
  }

const Wrapper = styled.section`
width: 100vw;
padding: 2vh 10vw;
display:flex;
justify-content: center;
margin-bottom: 10vh;
min-height: 60vh;
.mainProducts{
display: grid;
  grid-template-columns: 15vw 3fr;
grid-template-rows: 7vh auto;
}
@media(max-width:720px){
  .mainProducts{
display: grid;
  grid-template-columns: 17vw 3fr;
  }
}

@media(max-width:550px){
  .mainProducts{
    display: flex;
    flex-direction:column;
  /* grid-template-columns: 25vw 3fr; */
  }
}

@media(max-width:350px){
  .mainProducts{
  /* grid-template-columns: 30vw 1fr; */
  }
}
`
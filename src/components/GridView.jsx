import Card from './Card'
import { styled } from 'styled-components'

export default function GridView({ filtered_products }) {
    return (
        <>
            <Wrapper className="grid-three-col">
                {filtered_products.length === 0 ?
        <div className='empty'>There are no products in this particular filter.</div> :
                (filtered_products?.map((elem, i) => {
                    return (<Card key={i} {...elem}></Card>)
                }))
}
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
  grid-row-start: span 2;
  grid-row-end: span 3;
grid-column-start: 2;
padding: 0rem .2vw;
gap: 1rem;

.empty{
    display: grid;
    width: 55vw;
    place-items: center;
}
@media (max-width:720px){
grid-template-columns: repeat(2,1fr)!important;
}

@media (max-width:600px){
grid-template-columns: repeat(1,1fr)!important;
}
@media (max-width:600px){
margin-top: 5vh;
border-top: 5px double ${props => props.theme.colors.secondary};
}
`
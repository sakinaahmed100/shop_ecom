import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import FormatPrice from './FormatPrice'

export default function ListView({ filtered_products }) {
    console.log(filtered_products)
    return (<>

        <Wrapper>
            {filtered_products?.map((e,i) => {
                const { name, price, image, description } = e
                return (
                    <div key={i} >
                        <NavLink to={`/singleproduct/${filtered_products.id}`}>

                            <div className="listViewDiv grid-col-two">
                                <div className="listImage">
                                    <img src={image} alt="" />

                                </div>
                                <div className="listText">
                                    <p>{name}</p>
                                    <p><FormatPrice price={price}></FormatPrice></p>
                                    <p className="list_description">{description.slice(0,90)}...</p>
                                    <button>SEE MORE</button>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                )

            })}

        </Wrapper>
        
    </>
    )

}

const Wrapper = styled.div`

grid-row-start: span 2;
  grid-row-end: span 3;
grid-column-start: 2;
gap: 1rem;
.listViewDiv{
padding: .5rem 1vw;
display: flex;

.listImage{
    width: 35vw;
}
img{
    width: 90%;
    object-fit: cover;
}
}
.listText{
    padding: .5rem;
 color:${props => props.theme.colors.primary} ;
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 flex-direction: column;

 button{
 background-color:${props => props.theme.colors.primary} ;
 color:${props => props.theme.colors.primaryLight} ;
 border:none;
 padding: 0.4rem;
 border-radius: 2px;


 }
}
@media(max-width:950px){
    .listImage{
    width: 50vw!important;
}

}
@media(max-width:750px){
    .listImage{
    width:35vw!important;

   
}
.listText{
   gap: .5rem;
   width: 40vw;
   padding-left: 3vw;
}
.listViewDiv{
flex-direction: column;
border-bottom: 1px solid ${props => props.theme.colors.brown};
border-top: 1px solid ${props => props.theme.colors.brown};
align-items: center;
}
}
@media(max-width:550px){
margin-top: 5vh;
.listImage{
    width:45vw!important;
}
.listText{
   width: 45vw;
}
}

@media(max-width:400px){
.listImage{
    width:60vw!important;
}
.listText{
   width: 60vw;
}
}

@media(max-width:400px){
.listImage{
    width:80vw!important;
}
.listText{
   width:80vw;
}
}
`
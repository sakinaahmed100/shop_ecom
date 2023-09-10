import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import FormatPrice from './FormatPrice'

export default function Card(elem) {
    const { id, name, price, images,category } = elem
    console.log(id,name, price, images,category);
    return (<>

        <NavLink to={`/singleproduct/${id}`}>
            <Cards>
                <div className="imgDiv">
                    <img src={images?.[0]} alt={`as`} />
                    <button>{category}</button>
                </div>
                <div className='text'>
                    <p className="name">{name}</p>
                    <p className="price"><FormatPrice price={price}></FormatPrice></p>
                </div>
            </Cards>
        </NavLink>
    </>
    )

}
const Cards = styled.div`
padding: .5rem;
width: 20vw;

.imgDiv{
    position: relative;
    width: 20vw;
    height: 20vh;  
      overflow: hidden;

    button{
        position: absolute;
        top: 1vh;
        right: .5vw;
background-color: ${props => props.theme.colors.primaryLight};
color: ${props => props.theme.colors.primary};
border-radius: 15px;
border: none;
padding: .3rem;

    }
}
img{
    width: 20vw;

}

.text{
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
color: ${props => props.theme.colors.primary};
padding: .5rem;
}

@media(max-width:950px){
.text{
    flex-direction: column;
}
}
@media(max-width:720px){
width: 30vw;
.imgDiv{
width: 30vw;

}
img{
    width: 30vw;
}

.text{
    justify-content: center;
    font-size: 1rem;
}
}
@media(max-width:600px){
width: 50vw;
display: flex;
.imgDiv{
width:35vw;

}
img{
    width: 35vw;
}
}
@media(max-width:320px){
    flex-direction: column;

    .text{
    font-size: .9rem;
}
}

@media(max-width:270px){

        width: 60vw;
display: flex;
.imgDiv{
width: 60vw;

}
img{
    width: 60vw;
}
}
`
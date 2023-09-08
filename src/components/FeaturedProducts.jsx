import { styled } from 'styled-components'
import Card from './Card'
import { useMyContext } from '../context/productContext'

export default function FeaturedProducts() {

    const {isLoading,featuredProducts}=useMyContext()
    console.log(featuredProducts)
if(isLoading){
    return <div>...loading</div>

}else{
    return (<>
        <Wrapper>
            <div className="container">
                <div className="text">
                    <p>Watch now!</p>
                    <h4>Our Feature Services</h4>

                </div>
                <div className="card">
                    {featuredProducts.map((elem)=>{
                        return (
                            <Card key={elem.id} {...elem}></Card>
                        )
                    })}
                </div>

            </div>
        </Wrapper>
    </>
    )

}
}
const Wrapper = styled.section`
background-color: ${props => props.theme.colors.primaryLight};
width: 100vw;
padding: 2vh 15vw; 
margin: 15vh 0vw 5vh 0vw;

.container{
    color: ${props => props.theme.colors.primary};

}
.text{
    padding: 1rem 0;

    h4{
        font-size: 2rem;
    }
}
.card{
    display: flex;
    justify-content: space-between;
}

@media(max-width:720px){
.card{
flex-direction: column;
}
}

`
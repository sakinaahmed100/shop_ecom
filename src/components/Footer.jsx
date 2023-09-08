import { styled } from 'styled-components'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"


export default function Footer() {
    return (
        <>
            <Wrapper>
                <div className="smallBox grid-two-col">
                    <div>
                        <p>Ready  to get started?</p>
                        <p>Talk to us</p>
                    </div>

                    <button>GET STARTED</button>
                </div>
                <footer>
                    <div className="mainFooter">
                        <div className='subMainFooter grid-four-col'>
                            <div className="first">
                                <p>Thapa Technical</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vitae enim </p>
                            </div>

                            <div className='second'>
                                <p>Subscribe to get current  updates</p>
                                <input type="email" placeholder='Your email' name="" id="" />
                                <button>SUBSCRIBE</button>
                            </div>

                            <div className='third'>
                                <p>Follow Us</p>

                                <div className='icons grid-three-col'>
                                    <div><FaDiscord></FaDiscord></div>
                                    <div><FaInstagram></FaInstagram></div>
                                    <div><FaYoutube></FaYoutube></div>

                                </div>
                            </div>

                            <div className='fourth'>
                                <p>Call Us</p>
                                <a href="tel:+923182228367">03182228367</a>
                            </div>
                        </div>

                    </div>
                    <div className="footerBottom">
                        <hr />

                        <div className='base grid-two-col'>
                            <div>
                                <p>&copy; {new Date().getFullYear()} SaveWave. All Rights reserved</p>
                            </div>
                        <div className='policy'>
                            <p>PRIVACY POLICY</p>
                            <p>Terms & conditions</p>
                        </div>
                        </div>

                    </div>
                </footer>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 2vw;
position: relative;

    .smallBox{
        width: 50vw;
        background-color: ${props => props.theme.colors.primaryLight};
padding: .5rem;
border-radius: 10px;
align-items: center;
justify-items: center;
color: ${props => props.theme.colors.primary};

p{
    margin: 5px;
}
}
button{
    padding: 5px;
   background:${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.primaryLight};
}
footer{
    background-color:${props => props.theme.colors.primary} ;
    color:${props => props.theme.colors.primaryLight} ;
    width: 100vw;
    position: relative;
    z-index: -1;
    font-size: .8rem;
    top: -4vh;
    margin-bottom: -4vh;


}
.mainFooter{
    padding: 8vh 10vw 3vh 10vw;
    position: relative;
    z-index: -1;
    font-size: .8rem;
    font-weight: lighter;
.second{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;

input{
    padding: 5px;
}
    button{
    background-color:${props => props.theme.colors.secondary} ;
    border: none;

    }
}
}
.third{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    div{
        gap: 1rem;
        font-size: 1rem;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px solid white;
        display: grid;
        place-items: center;
        justify-content: center;
    }
}
.fourth{
    p{
    margin-bottom: .5rem;

    }
    a{
        text-decoration: none;
    color:${props => props.theme.colors.primaryLight} ;

    }
}
.base{
    padding: 2vh 10vw;
    justify-content: center;
    justify-items: center;
    align-items: center;

}
@media (max-width:900px){
    .mainFooter{
    padding: 8vh 7vw 3vh 7vw;
    }
}

@media (max-width:750px){
    .mainFooter{
    padding: 8vh 5vw 3vh 5vw;
    }
    .subMainFooter{
        gap: .5rem;
    }
    .third div{
        font-size: .8rem;
        width: 1.3rem;
        height: 1.3rem;
        gap: .5rem;
    }
}

@media (max-width:550px){
    .subMainFooter{
    grid-template-columns: repeat(2,1fr);
    grid-row-gap: 1rem;
    }
    .smallBox{
        width: 75vw;
    }
    .third{
        align-items: flex-start;
        div{
            justify-content: flex-start;
            padding-left: .5vw;
        }
    }

}

@media (max-width:420px){
    .mainFooter{
        font-size: .6rem;
        input{
            width: 30vw;
        }
    }
    .smallBox{
        margin-top:5vh;
    }
    .base{
    grid-template-columns: repeat(1,1fr);

    }
    .policy{
        display: none;
    }
}
@media (max-width:350px){
    .subMainFooter{
    grid-template-columns: repeat(1,1fr);
    
    .second button{
        font-size: .6rem;
    }
    .third,.fourth{
        display: none;
    }
    }

}
`


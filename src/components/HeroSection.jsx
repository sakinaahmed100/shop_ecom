import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
export default function HeroSection({ p1, h2, p2, btn, src }) {
  return (
    <Wrapper>
      <div className="container">
        <div className="heroText">
          <p className="heroPara1">
            {p1}
          </p>
          <h2 className='heroh2'>{h2}</h2>
          <p className="heroPara2">{p2}</p>
          <NavLink to="/products">
          <button className='heroBtn'>{btn}</button>
          </NavLink>
        </div>
        <div className="heroImg">
          <img src={src} alt="" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin: 2% auto;
.container{
    box-sizing:border-box;
    width: 100vw;
    /* background-color: aqua; */
    display: grid;
    grid-template-columns:repeat(2,1fr);
    gap: 5rem;
    padding: 0 10%;
    align-items: center;
    justify-content: space-between;
}
.heroImg{
    height: 40vh;
    width: 30vw;
    /* overflow: hidden; */

    img{
        object-fit: cover;
        width: 100%;
        z-index: 999;
    }
   
}
.heroImg::after{
    content: "";
    background-color:${props => props.theme.colors.primary};
    position: relative;
    z-index: -1;
top: -40vh;
left: 6vw;
        width: 30vw;
        display: inline-block;
        height: 25vh;
        /* right: 20rem; */
}
.heroText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: flex-start;

    h2,p{
margin: 0;
    }
    p{
        color: #928f8f;
    }
    .heroBtn{
        border: none;
        background-color:${props => props.theme.colors.secondary};
        padding: .5rem 1rem;
    }
    h2{
        color:${props => props.theme.colors.primary} ;
    }
}
@media(max-width:950px){
margin-top:10vh;

.heroImg::after{
    content: "";
   
top: -20vh;

        height: 25vh;
}
}
@media(max-width:750px){
  .heroImg{
    height: 50vh;
    width: 40vw;
    padding-top: 7vh;
   
}
.heroImg::after{
   
top: -20vh;
        height: 27vh;
        width: 40vw;
}
}
@media(max-width:600px){
  .container {
    gap: 1rem;
  }
}

@media(max-width:480px){
  .heroImg::after{
   display: none;
   }
 .container{
  display: flex;
  flex-direction: column;
 }
 .heroImg{
  width: 70vw;
  height: 40vh;
 }
 .heroText{
  align-items: stretch;
 }
}
@media(max-width:300px){
  .heroImg{
  width: 70vw;
  height: 30vh;
 }
}
`
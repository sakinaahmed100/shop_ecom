import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  body {
   
min-height:100vh !important;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width: 100vw;
    overflow-x: hidden;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
.grid-three-col{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
.grid-two-col{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.grid-four-col{
  display: grid;
  grid-template-columns: repeat(4,1fr);
}
  @media (max-width:${({ theme }) => theme.media.mobile}) {

html{
  /* font-size: 50%; */
}
.listDiv{
position: absolute;
transform: translateX(12.5vw);
background-color: white;
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
top: 0;
visibility: hidden;
.navUl{
  display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
justify-content: space-around;
align-items: center;
padding: 0;
}
}
.activated{
transform: translateX(-87.6vw);
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
visibility: visible;
li{
  border:1px solid brown;
  width: 100vw;
  align-items: center;
  text-align: center;
  padding: 5% 0;
}

a{
  font-size: large;
}
}
/* .navUl{
        display: flex  !important;
        flex-direction: column;
        z-index: 999;
        position: absolute;
        left: 100%;
        height: 100vh;
    gap: 0rem !important;
    top: 0%;
    width: 100vw;
justify-content:center;
} */
/* li{
    height: 100vh;
    background-color: white;
    text-decoration: none;
}
        .activated{
            position: absolute;
            left: 0;
            top: 0;
            margin: 0;
            padding-left: 0;
        } */
      


.mobile_nav{
  display: flex!important;
  width: 3rem;
  height: 3rem;
  justify-content: center;
 align-items: center;
 position: relative;
}
.mob-nav-menu {
    display: none !important;

}

.mob-nav-close{
    display: none !important;
}

.activee{
  display: flex !important;
 font-size:2rem;
 position: absolute;
 right: 0;
 z-index: 999;
   
}
  }
`;
export default GlobalStyle
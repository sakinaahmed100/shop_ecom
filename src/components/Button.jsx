import React from 'react'
import { styled } from 'styled-components'

export default function Button({btnText}) {
  return (
    <>
    <Btn>{btnText}</Btn>
    </>
  )
}
const Btn=styled.button`
    padding: .5rem 1rem ;
   background:${props => props.theme.colors.secondary};
   color: ${props => props.theme.colors.primaryLight};
   border: none;
   text-transform: capitalize;

&:hover{
   background:${props => props.theme.colors.brown};
   color: white;

}

@media(max-width:270px){
font-size: .8rem;
padding: .3rem .5rem ;
width: 40vw;

}
`

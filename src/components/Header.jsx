import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import Nav from "./Nav"
export default function Header() {
  return (
   <>
   <MainHeader>
    <NavLink to="/">
<img src="/images/logo.png" alt="Mylogo" />
    </NavLink>

    <Nav></Nav>
   </MainHeader>
   </>
  )
}
const MainHeader= styled.header`
    padding: 0 2.5rem;
    height:13vh;
    display: flex;
    background: ${props => props.theme.colors.primaryLight};
    align-items: center;
justify-content: space-between !important;
margin-bottom: 3vh;
    img{
        height: 3rem;
        object-fit: cover;
      
    }
`
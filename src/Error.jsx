import React from 'react'
import Button from './components/Button'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Error() {
  return (
    <>
      <Err>
        <h2>404</h2>
        <p>UH OH! YOU'RE LOST</p>
        <p>This page you are looking for does not exist.How you got here is a mystery..Click the button below to go to home page</p>
        <NavLink to="/home"><Button btnText="HOME"></Button></NavLink>
        </Err>
    </>
  )
}
const Err = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: .7rem;
width: 100vw;
color: ${props => props.theme.colors.primary};

h2{
font-size:4rem;

}
`
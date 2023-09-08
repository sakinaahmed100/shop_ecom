import { styled } from 'styled-components'
import { BsPlusCircleFill } from "react-icons/bs"
import { AiFillMinusCircle } from "react-icons/ai"

export default function AmountDiv({ setDecrease, setIncrease,amount }) {
    return (
        <>
            <AmountBox>
                <div><AiFillMinusCircle className='icon' onClick={setDecrease}></AiFillMinusCircle></div>
                <div>{amount}</div>
                <div><BsPlusCircleFill className='icon' onClick={setIncrease}></BsPlusCircleFill></div>
            </AmountBox>
        </>
    )

}

const AmountBox = styled.div`
display: flex;
gap: .5rem;

.icon{
   color:${props => props.theme.colors.secondary};

}
`
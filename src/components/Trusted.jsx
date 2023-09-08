import React from 'react'
import { styled } from 'styled-components'
import { BiLogoBaidu, BiLogoDigg, BiLogoYelp } from "react-icons/bi"
import { IoLogoPolymer, IoLogoSlack } from "react-icons/io"


export default function Trusted() {
  return (
    <>
      <Wrapper>
        <div className="trusted">
          <h4>Trusted by 1000+ companies</h4>

          <div>
            <div>
              <BiLogoBaidu></BiLogoBaidu>
              <p>Baidu</p>
            </div>

            <div>
              <BiLogoDigg></BiLogoDigg>
              <p>digg</p>
            </div>

            <div>
              <BiLogoYelp></BiLogoYelp>
              <p>Yelp</p>
            </div>

            <div>
              <IoLogoPolymer></IoLogoPolymer>
              <p>Polymer</p>
            </div>

            <div>
              <IoLogoSlack></IoLogoSlack>
              <p>Slack</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
margin-top: 5%;
width: 100vw;
.trusted{
  background-color:${props => props.theme.colors.primaryLight} ;
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
align-items: center;

h4{
  margin-bottom:4vh;
}
  div{
    display: grid;
    grid-template-columns: repeat(5,1fr);
gap: 1rem;

    div{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media(max-width:550px){
  .trusted div{
    grid-template-columns: repeat(3,1fr);

  }
}

@media(max-width:320px){
  .trusted div{
    grid-template-columns: repeat(2,1fr);

  }
}
`
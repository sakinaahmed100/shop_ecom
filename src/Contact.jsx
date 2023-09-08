import { styled } from 'styled-components'




export default function Contact() {

  return (
    <>


      <Wrapper>
        {/* <h2>Feel Free  To Contact  Us{names}</h2> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.75047990776!2d67.0899986!3d24.9256776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f60a0781265%3A0x2befaba123014ab1!2sSaylani%20Mass%20IT%20Training%20(SMIT)!5e0!3m2!1sen!2s!4v1689170533734!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className='formDiv'>
          <form action="https://formspree.io/f/xwkdkark" method='POST'>
            <input type="text" name='username' placeholder='Enter your Name..' required autoComplete='off' />
            <input type="email" name='email' placeholder='Enter your email address' required autoComplete='off' />
            <textarea name="details" cols="30" rows="4" placeholder='Write yourmessage..' required autoComplete='off'></textarea>
            <input className='btn' type="submit" value="SEND" />
          </form>
        </div>
      </Wrapper>

    </>
  )
}
const Wrapper = styled.section`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
color: ${props => props.theme.colors.primary};
  
iframe{
    width: 100vw;
    height: 40vh;
  }
.formDiv{
display: flex;
align-items: center;
/* justify-content: center; */
border-radius: 5px;
margin-top: 2%;
}
form{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,textarea{
      padding: 0.5rem;
    }

.btn{
  background: ${props => props.theme.colors.secondary};
  border: none;
  cursor: pointer;
}    
   }

   @media(max-width:350px){
    form{
      input,textarea{
        width: 80vw;
      }
    }
   }
`
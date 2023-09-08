import { NavLink } from 'react-router-dom'
import { styled, css } from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenu, CgCloseO } from 'react-icons/cg';
import { useCartContext } from '../context/cartContext';
import { useState } from 'react';

export default function Nav() {
  const [navIcon, setnavIcon] = useState(true);
  const{total_item}=useCartContext();
  return (
    <>
      <Navbar>
        <div className="navDiv" >
          <div className={navIcon? "listDiv":"listDiv activated"}>
            <ul className="navUl">
              <li>
                <NavLink className=".navList" to="/" onClick={()=>setnavIcon(true)}>Home</NavLink>
              </li>

              <li>
                <NavLink className=".navList" to="/about" onClick={()=>setnavIcon(true)}>About</NavLink>
              </li>

              <li>
                <NavLink className=".navList" to="/products" onClick={()=>setnavIcon(true)}>Products</NavLink>
              </li>

              <li>
                <NavLink className=".navList" to="/contact" onClick={()=>setnavIcon(true)}>Contact</NavLink>
              </li>


              <li>
                <NavLink className=".navList" to="/cart" onClick={()=>setnavIcon(true)}><FiShoppingCart /></NavLink>
                <span className='cart-_total'>{total_item}</span>
              </li>


            </ul>
          </div>
          <div className="mobile_nav">
            <CgMenu className={navIcon ? "mob-nav-menu activee" : "mob-nav-menu"} onClick={() => setnavIcon(false)}></CgMenu>
            <CgCloseO className={navIcon ? "mob-nav-close" : "mob-nav-close activee"} onClick={() => setnavIcon(true)} ></CgCloseO>
          </div>



        </div>
      </Navbar>
    </>
  )
}
const Navbar = styled.nav`
.navDiv{
  display: flex;
}
.mobile_nav{
  display: none;
}
.mob-nav-menu{
  display: none;
}
.mob-nav-close{
  display: none;
}
  .navUl{
    display: flex;
    text-decoration: none;
    gap: .5rem;
list-style: none;
text-decoration: none;

    li a{
      color: ${props => props.theme.colors.secondary};
text-decoration: none;
    }
    .cart-_total{
      background: ${props => props.theme.colors.brown};
      color: ${props => props.theme.colors.primaryLight};
      border-radius:50% 50%;
      position: absolute;
      top: 20px;
      right: 27px;
      text-align: center;
      width: 1.1rem;
      height: 1.1rem;
      font-size: .9rem;
      padding: auto;
    }
    /* ${props => props.theme.media.mobile && css`
    @media(max-width: 768px){
      .navDiv{
        background-color: orangered;
      }
      .mobile_nav{
        display: inline-block ;
  z-index: 999;
  height: 2rem;
      }
.mob-nav-menu{
  display: inline;
}
.navUL ,.navList{
  display: none;
}
    } */
    /* `} */
   
  }

`
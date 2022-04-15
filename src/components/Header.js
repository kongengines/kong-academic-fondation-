import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectModes } from '../features/Mode/modeSlice';
import { useSelector } from 'react-redux';
import ForwardSharpIcon from '@mui/icons-material/ForwardSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const modes = useSelector(selectModes)
  console.log(modes);
  return (
    <Container>
        <a>
          <img src="images/logo-kong-academic-fondation.png" alt=""/>
        </a>
        <Menu>
          {modes && modes.map((mode, index)=>(
            <a href="#">{mode}</a>
          ))}
        </Menu>
        <RightMenu>  
          <GoCampus/>        
          <a href="#">Campus</a>
          {/* <a href="#">Mon compte</a> */}
          <CampusForward/>
          <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWapper>
              <CustomClose onClick={()=>setBurgerStatus(false)}/>
          </CloseWapper>          
            <li><a href="">FullStack JavaScript Certified</a></li>
            <li><a href="">FullStack Python Certified</a></li>
            <li><a href="">Fullstack C# Developer</a></li>
            <li><a href="">3D Game Developer Certified</a></li>
            <li><a href="">Junior Ingeneer Hollidays Class</a></li>
            <li><a href="">Graphic Designer Certified</a></li>  
            <li><a href="">Fourniture de logiciels</a></li>           
        </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`


const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    
    @media (max-width: 768px) {
      display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    
    a {
      font-weight: 600;
      text-transform: uppercase;
    }
`
const CustomMenu = styled(MenuIcon)`    
    cursor: pointer;
`
 
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;  
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      
    a {
      font-weight: 600;
      color: black;
      }
    }
`

const CustomClose = styled(CloseIcon)`
    background: black;
    border-radius: 25%;  
    margin-top: 35px;
    cursor: pointer;
    
`

const CloseWapper = styled.div`
      display: flex;
      justify-content: flex-end;

`

const CampusForward = styled(ForwardSharpIcon)`      
    margin-right: 10px;
    animation: animateRight infinite 1.5s;
`

const GoCampus = styled(SchoolSharpIcon)`
    margin-right: 5px;
`
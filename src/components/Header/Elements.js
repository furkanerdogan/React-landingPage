import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${({scrollNav})=>(scrollNav?'white':'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 100;
  -webkit-box-shadow: ${({scrollNav})=>(scrollNav?'10px 10px 22px -15px rgba(0, 0, 0, 0.75)':'none')};


  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    font-size: 12px;
  }
`;

export const NavbarContainer = styled.div`
  text-align: center;
position: relative;
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  .active{
    
  }
 
`;
export const NavLogo = styled(LinkR)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinksP = styled.p`

  
  
`;
export const NavLinks = styled(LinkR)`
  color: ${({scrollNav})=>(scrollNav?'black':'white')};

  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
 
  &:hover{
    ${NavLinksP} {  
      transition: all 0.2s ease-in-out;
   margin-top:0.1px;
    }
  }
  
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;



export const NavBtnLink = styled.a`
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  background-color: ${({scrollNav})=>(scrollNav?'darkorange':'#211A1A')};
  color: white;

  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: orange;
    color: white;
  }
`;

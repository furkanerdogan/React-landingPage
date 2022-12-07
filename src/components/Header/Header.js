import React, { useState, useEffect } from "react";
import HamburgerMenu from "../../assests/images/menu.png";


import {
  
  MobileIcon,
  Nav,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavLinksP,
  NavbarContainer,
} from "./Elements";
export default function Header({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  // scrollToTop: function() {
  //     scroll.scrollToTop();
  //   },
  const changeNav = () => {
    if (window.scrollY >= 160) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const toggleHome = () => {
    // scroll.scrollToTop();
    scrollToRef();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to="/">
            {window.scrollY >= 160 ? (
              <p style={{ width: 120 }} >Logo here</p>
            ) : (
              <p style={{ width: 120,color:"red" }} >Logo here</p>
            )}
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <span
              style={{ border: "none", outline: "none", cursor: "pointer" }}
              onClick={toggle}
            >
              <img src={HamburgerMenu}  height={25} />
            </span>
          </MobileIcon>

          <NavMenu>
            <NavItem >
              <NavLinks
                scrollNav={scrollNav}
                to="/"
                style={({ isActive }) =>
                isActive
                  ? {
                      color: '#fff',
                      background: '#7600dc',
                    }
                  : { color: '#545e6f', background: '#f0f0f0' }
              }
            >                
                  <NavLinksP>
                Home Page
                </NavLinksP>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="/aboutUs"
                style={({ isActive }) =>
                isActive
                  ? {
                      color: '#fff',
                      background: '#7600dc',
                    }
                  : { color: '#545e6f', background: '#f0f0f0' }
              }
            >                
                <NavLinksP>
                About us
                </NavLinksP>
              </NavLinks>
            </NavItem>                  
          <NavBtn>
            <NavBtnLink
                scrollNav={scrollNav}
               target="_blank" 
              href="#"    
            >
              Contact Us
            </NavBtnLink>
          </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

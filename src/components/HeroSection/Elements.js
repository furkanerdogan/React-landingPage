import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const HeroContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
  box-sizing: border-box;
  position: relative;
  z-index: 1;



`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  
  opacity: 0.7;
`;
export const HeroContent = styled.div`
  overflow: hidden;
  align-items: left;
  z-index: 3;
  padding: 50px;
  display: flex;
  width: 900px;
  border-radius: 6px;
  flex-direction: column;
  position: absolute;
  /* top: calc(50% - 90px); */
  height: 200px;
  left: 20%; 
  @media screen and (max-width: 768px) {
    width: 500px;

  }
`;
export const HeroTitleMain = styled.p`
box-sizing: border-box;
  margin:0px;
  margin-bottom: 15px;
  padding: 0px;
  color: white;
  font-weight: bold;
  font-size: 48px;

  font-family: "Helvetica", "Catamaran", "Arial", "sans-serif";
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    font-size: 20px;
  }
`;
export const HeroTitleSecond = styled.p`
  margin-block: 10px;
  color: darkorange;
  font-weight: bold;
  font-size: 26px;
  font-family: "Helvetica", "Catamaran", "Arial", "sans-serif";
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    font-size: 17px;
  }
`;
export const HeroInputBox = styled.div`
  background: #fff;
  height: 30px;
  border-radius: 40px;
  padding: 10px;
  width: 80%;
`;

export const HeroInput = styled.input`
  padding: 0 6px;
  border: none;
  background: none;
  outline: none;
  width: calc(100% - 42px);
  float: left;
  color: #333;
  font-size: 16px;
  line-height: 30px;

  /* margin-bottom: 30px; */
`;

export const NavBtn = styled(LinkS)`
  color: white;
  float: right;
  width: 30px;
  height: 30px; 
  border-radius: 50%;
  background: #662059;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;


export const HeroBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;



export const HeroBtnLink = styled.a`
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  background-color: #211A1A;
  color: white;
font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: transparent;
    color: white;
  }
`;

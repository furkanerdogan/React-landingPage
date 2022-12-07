import styled from "styled-components";

export const HeroContent = styled.div`
position: absolute;
  overflow: hidden;
  box-shadow: 0px 2px 8px 0px var(--clr-gray-light);
  padding: 10px 10px 20px 20px;
  text-align: center;
  border-radius: 6px;
  z-index: 3;
  padding-top: 40px;
  max-width: 1200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
export const Content = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-indent: 40px;
  color: white;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;


export const AboutUsTitle = styled.p`
  margin: 0px;
  padding-inline: 10px;
margin-bottom: 5px;
  border-radius: 50px;
  color: #951A81;
  font-weight: 520;
  font-size: 50px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    background-color: white;

  }
`;

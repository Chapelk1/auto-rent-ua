import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';



export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 100px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    ${prop => `url(${prop.backgroundImage})`};
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

export const ContainerSecond = styled.section`
  width: '1200px';
  margin: 0 auto;
  padding: 100px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  height: '100%';
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  padding: 12px 0px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;

`;

export const Navigate = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Link = styled(NavLink)`
  padding: 14px 44px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: var(--secondary-bg-color);
  transition: background-color 250ms linear;
  :hover {
    color: white;
    background-color: var(--primary-color-btn);
  }

  &.active {
    color: white;

    background-color: var(--primary-color-btn);
  }
`;
import styled from "@emotion/styled";
import {  NavLink } from 'react-router-dom';
export const Section = styled.section`
    width: 100vw;
    height: 100vh;
`
export const Header = styled.header`
  width: 100%;
  padding: 12px 0px;
  background-color: transparent;
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
  

  :hover {
    color: white;
    background-color: var(--primary-color-btn);
    
  }

  &.active {
    color: white;
    background-color: var(--secondary-color-btn);
    
  }
`;
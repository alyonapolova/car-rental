import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 12px 12px;
  background-color: #3470ff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Тень хедера */
  border-bottom: 1px solid #e0e0e0;
`;

export const NavStyled = styled.nav`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 25px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: white;

  &:hover {
    color: #0b44cd;
  }
  &:focus {
    color: #0b44cd;
  }
  &:active {
    color: #0b44cd;
  }
`;

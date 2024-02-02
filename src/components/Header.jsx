import { HeaderStyled, NavLinkStyled, NavStyled } from './styles/Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </NavStyled>
    </HeaderStyled>
  );
};

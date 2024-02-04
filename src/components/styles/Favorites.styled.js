import { styled } from 'styled-components';

export const FavoritesUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

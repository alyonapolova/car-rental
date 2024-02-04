import { styled } from 'styled-components';

export const FavoritesUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 24px;



    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
    @media screen and (max-width: 1375px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const BtnAddress = styled.button`
  font-size: 14px;
  color: white;
  background-color: #3470ff;
  border: none;
  width: inherit;
  border-radius: 12px;
  padding: 5px 15px;

  &:hover {
    background-color: #0b44cd;
  }
  &:focus {
    background-color: #0b44cd;
  }
`;

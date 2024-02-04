import { styled } from 'styled-components';

export const CatalogUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1375px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CatalogDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoadMoreBtn = styled.button`
  cursor: pointer;
  color: #3470ff;
  background-color: transparent;
  font-size: 20px;
  border: none;
  margin-top: 80px;

  &:hover {
    color: #0b44cd;
  }
  &:focus {
    color: #0b44cd;
  }
`;

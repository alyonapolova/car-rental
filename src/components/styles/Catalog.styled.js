import { styled } from 'styled-components';

export const CatalogUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;
  justify-content: space-between;
`;

export const CatalogDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
